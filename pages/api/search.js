// import connectToDatabase from "../lib/mongodb";
import connectToDatabase from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await connectToDatabase(
    "mongodb+srv://samkcode:iyjscjKRc69wgQcG@cluster0.2xbvge1.mongodb.net/?retryWrites=true&w=majority"
  );

  const collection = client.db().collection("searches");
  const { transcript, displayText, uid } = req.body;
  const data = {
    transcript: transcript,
    displayText: displayText,
    uid: uid,
  };

  try {
    const result = await collection.insertOne(data);
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error, "error api");
    res.status(500).json({ message: "Error inserting data" });
  } finally {
    client.close();
  }
}
