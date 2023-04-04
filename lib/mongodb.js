import { MongoClient } from "mongodb";
export default async function connectToDatabase(url) {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}
