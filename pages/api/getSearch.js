import connectToDatabase from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await connectToDatabase(
    "mongodb+srv://samkcode:iyjscjKRc69wgQcG@cluster0.2xbvge1.mongodb.net/?retryWrites=true&w=majority"
  );

  const collection = client.db().collection("searches");
  //   console.log(req.query.uid, "body");
  const { uid } = req.query;
  const query = { uid: uid };
  // console.log(query);
  //   const query = { uid: uid }; // Use the UID as the query parameter to check if the user already exists
  try {
    const existingUser = await collection.find(query).toArray();
    // console.log(existingUser, "hello ");
    // console.log(uid, "uid");

    if (existingUser) {
      res
        .status(200)
        .json({ message: "user have searches history", existingUser });
    } else {
      res.status(200).json({ message: "User have not searches history" });
    }
  } catch (error) {
    console.error(error, "error get searches api");
    res.status(500).json({ message: "Error inserting user data" });
  } finally {
    client.close();
  }
}
