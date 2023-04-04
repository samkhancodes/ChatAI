import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const Type_writer = ({ displayText, isLoading, speakText }) => {
  const typewriterRef = useRef(null);
  useEffect(() => {
    speakText();
  }, [displayText]);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        delay: 55,
      });

      typewriter.pauseFor(10).typeString(displayText).start();

      return () => {
        typewriter.stop();
      };
    }
  }, [displayText]);

  return (
    <div
      className={"text "}
      ref={typewriterRef}
      readOnly
      style={{ opacity: isLoading ? 0.3 : 1 }}
    ></div>
  );
};

export default Type_writer;
