const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const connectDb = async () => {
  if (db) return db;

  try {
    const uri = `mongodb+srv://babu345:X5V3ixoERDKAXoDQ@cluster0.e5lcf.mongodb.net/TestDB?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("TestDB");
    return db;
  } catch (e) {}
};

export default connectDb;
