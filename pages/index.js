import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Typewriter from "../components/Type_writer";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { app } from "../lib/Firebase";

export default function Home() {
  const [user, setUser] = useState(null);
  const [userHistory, setUserHistory] = useState([]);
  const [transcript, setTranscript] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [error, setError] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const API_URL = "/api/generate";
  const POST_URL = "/api/search";
  const UserpostUrl = "/api/user";
  if (user !== null) {
    var { uid, photoURL } = user;
    console.log(photoURL);
  }

  const auth = getAuth(app);

  // Add a listener for the authentication state change
  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
        if (userAuth) {
          setUser(userAuth);
          const requestData = {
            photoURL: userAuth.photoURL,
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          };
          const query = { uid: requestData.uid };
          const uid = query.uid;
          const response = await axios.post(UserpostUrl, requestData, query);
          const responseData = response.data;
          // console.log("User data added:", responseData);

          if (uid !== undefined) {
            const search = await axios.get(`/api/getSearch/?uid=${uid}`);
            setUserHistory(search.data.existingUser);
          }
        } else {
          setUser(null);
        }
      });

      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.error("Error occurred while fetching user data:", error);
    }
  }, [auth, UserpostUrl, uid]);
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    if (displayText !== "") {
      postData();
    }
  }, [displayText]);

  const postData = async () => {
    try {
      if (user !== null) {
        const requestData = {
          transcript,
          displayText,
          uid,
        };
        console.log("Request Data:", requestData, displayText);

        const response = await axios.post(POST_URL, requestData);
        const responseData = response.data;
        console.log("Response Data:", responseData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getResponsefromChatGpt = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(API_URL, { sentence: transcript });
      await setDisplayText(response.data.result);
      setIsLoading(false);
    } catch (error) {
      console.error(error, "chatgpt response error");
      setIsLoading(false);
    }
  }, [transcript, setDisplayText]);

  const startListening = useCallback(() => {
    if (!isListening && recognition) {
      setIsListening(true);
      recognition.start();
    }
    recognition.onend = () => {
      setIsListening(false);
    };
  }, [recognition, isListening]);

  const speakText = useCallback(() => {
    if (displayText && !isSpeaking) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(displayText);
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    }
  }, [displayText, isSpeaking]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const recognition = new window.webkitSpeechRecognition();
      recognition.interimResults = true;
      setRecognition(recognition);
      // setRecognition(new window.webkitSpeechRecognition());
    }
  }, []);

  useEffect(() => {
    if (recognition) {
      recognition.onresult = async (event) => {
        const speechToText = await event.results[0][0].transcript;
        console.log(speechToText, "speech");
        await setTranscript(speechToText);
      };

      recognition.onerror = () => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      };

      recognition.onend = () => {
        setIsListening(false);
        getResponsefromChatGpt();
      };
    }
  }, [recognition, getResponsefromChatGpt, setTranscript]);
  const responseBoxRef = useRef(null);
  useEffect(() => {
    if (responseBoxRef.current) {
      responseBoxRef.current.scrollTop = responseBoxRef.current.scrollHeight;
    }
  }, [userHistory, displayText, isLoading]);

  return (
    <>
      {user ? (
        <div className={"UIdesign"}>
          <div className="logoContainer">
            <img
              src="/logo.png"
              height={"40px"}
              width={"40px"}
              style={{ marginTop: "10px", borderRadius: "50%" }}
            />
            <div className="voice_button_container">
              <button onClick={handleLogout} className="logOutButton">
                LogOut
              </button>
            </div>
          </div>

          <div className="responseBox" ref={responseBoxRef}>
            {userHistory &&
              userHistory.map((curElm) => {
                return (
                  <div key={curElm._id} style={{ padding: "5px" }}>
                    <p className="trans_para">{curElm.transcript} </p>
                    <div className="alignment">
                      <p className="display_para">BOT : {curElm.displayText}</p>
                    </div>
                  </div>
                );
              })}
            <Typewriter
              displayText={displayText}
              isLoading={isLoading}
              speakText={speakText}
            />
          </div>
          {isLoading && <div className="loader"></div>}
          {error && (
            <p style={{ color: "red" }}>
              There was an error with speech recognition. Please check your
              microphone and try again.
            </p>
          )}
          <div className={"embed-submit-field"}>
            <input
              type="text"
              placeholder="Write something"
              value={transcript}
              onChange={(e) => {
                setTranscript(e.target.value);
              }}
            />
            <button type="submit" onClick={getResponsefromChatGpt}>
              Send
            </button>
          </div>
          <div className="listening-buttons">
            <button
              className={`glow-on-hover`}
              onClick={startListening}
              disabled={isListening}
            >
              {isListening !== true ? "Click to voice search" : "...listening"}
            </button>
          </div>
        </div>
      ) : (
        <div className="loginPage">
          <h1>Login with Your Google Account</h1>
          <button onClick={handleLogin}>Sign In With Google</button>
        </div>
      )}
    </>
  );
}
