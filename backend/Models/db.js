const mongoose = require("mongoose");
require("dotenv").config();

const lnk = process.env.MONGO_URL;
const connection = mongoose
  .connect(
    "mongodb://dhairyadarji025:<wbGOBKAgKTnzliU8>@<hostname>/?ssl=true&replicaSet=atlas-aoldge-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connection done buddy !!");
  });

module.exports = connection;
