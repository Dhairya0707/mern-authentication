const mongoose = require("mongoose");
require("dotenv").config();

const lnk = process.env.MONGO_URL;
const connection = mongoose
  .connect(
    "mongodb://dhairyadarji025:wbGOBKAgKTnzliU8@cluster0-shard-00-00.abcde.mongodb.net:27017,cluster0-shard-00-01.abcde.mongodb.net:27017,cluster0-shard-00-02.abcde.mongodb.net:27017/?ssl=true&replicaSet=atlas-aoldge-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connection done buddy !!");
  });

module.exports = connection;
