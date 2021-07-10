
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://test_user:${process.env.MONGO_PASSWORD}@cluster0.5qczl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");

  console.log(collection)
  client.close();
});
