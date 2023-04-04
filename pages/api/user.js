import connectToDatabase from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await connectToDatabase(
    "mongodb+srv://samkcode:iyjscjKRc69wgQcG@cluster0.2xbvge1.mongodb.net/?retryWrites=true&w=majority"
  );

  const collection = client.db().collection("user");
  const { photoURL, email, uid, displayName } = req.body;
  const query = { uid: uid }; // Use the UID as the query parameter to check if the user already exists
  try {
    const existingUser = await collection.findOne(query);

    if (existingUser) {
      res.status(200).json({ message: "User already exists" });
    } else {
      const data = {
        photoURL: photoURL,
        email: email,
        uid: uid,
        displayName: displayName,
      };

      const result = await collection.insertOne(data);
      res.status(200).json({ message: "User Data inserted successfully" });
    }
  } catch (error) {
    console.error(error, "error api");
    res.status(500).json({ message: "Error inserting user data" });
  } finally {
    client.close();
  }
}
