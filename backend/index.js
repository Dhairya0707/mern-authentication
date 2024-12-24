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

const corsOptions = {
  origin: "https://your-frontend-domain.vercel.app", // Replace with your Vercel frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use(bodyparser());

app.use("/auth", authrouter);
app.use("/", productroute);

app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
