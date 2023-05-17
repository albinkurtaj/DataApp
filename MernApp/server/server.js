////////////////////gjetja e stringut te lidhje per siguri ruhet ne config.env///////////////////////
require("dotenv").config({ path: "./config.env" });
const Db = process.env.ATLAS_URI;
const PORT = process.env.PORT;

const express = require("express");
const mime = require("mime");

const bodyParser = require("body-parser");

/////////////////////////////database connection////////////////////////////////
const { MongoClient, cursor } = require("mongodb");
const uri = Db;
const client = new MongoClient(uri);
const database = client.db("test");
/////////////////////////////database connection////////////////////////////////

const cors = require("cors");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

function getDb() {
  return database;
}

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post("/input", (req, res) => {
  const { name, food, calories, tags } = req.body;
  // TODO: Insert form data into MongoDB or another database
  var collection2 = database.collection("foodMenu");
  collection2.insertOne(
    { name: name, food: food, calories: calories, tags: tags },
    function (err, res) {}
  );

  res.send("Form submitted successfully");
  res.end();
});

server.post("/delRow", async (req, res) => {
  const { name } = req.body;
  // console.log(name);
  var collection = database.collection("foodMenu");

  //db.posts.deleteOne({ title: "Post Title 5" })

  collection.deleteOne({ name: name }, function (err, result) {});
  res.end();
});

server.get("/table", async (req, res) => {
  var collection = database.collection("foodMenu");
  const cursor = await collection.find({});
  var ar1 = [];
  var ar2 = [];
  var ar3 = [];
  var ar4 = [];
  var c = 0;
  await cursor.forEach((element) => {
    c++;
    ar1.push(element.name);
    ar2.push(element.food);
    ar3.push(element.calories);
    ar4.push(element.tags);
  });
  res.json({ name: ar1, food: ar2, calories: ar3, tags: ar4, count: c });
  res.end();
});

server.listen(PORT, function () {
  // var collection = database.collection("rc");
  console.log(`server is running on port ${PORT}`);
});
