const mongoose = require("mongoose");
require("dotenv").config();

const lnk = process.env.MONGO_URL;
const connection = mongoose.connect(lnk).then(() => {
  console.log("connection done buddy !!");
});

module.exports = connection;
