const mongoose = require("mongoose");
require("dotenv").config();

const lnk = process.env.MONGO_URL;
const connection = mongoose
  .connect(
    "mongodb+srv://dhairyadarji025:lnzeRA0trvlW7haE@auth-demo.q3ksx.mongodb.net/?retryWrites=true&w=majority&appName=auth-demo"
  )
  .then(() => {
    console.log("connection done buddy !!");
  });

module.exports = connection;
