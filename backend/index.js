const express = require("express");
const app = express();
const db = require("./Models/db");
const usermodel = require("./Models/usersmodel");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

// const bodyparser = require("body-parser");
const authrouter = require("./Routes/AuthRouters");
const productroute = require("./Routes/ProductRouters");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use(bodyparser());

app.use("/auth", authrouter);
app.use("/", productroute);

app.get("/test", (req, res) => {
  res.send("this is for testing check !");
});

app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
