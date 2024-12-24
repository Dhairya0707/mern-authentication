const router = require("express").Router();
const usermodel = require("../Models/usersmodel");
const {
  signupvalidation,
  loginvalidation,
} = require("../Middleware/Authvalidation");
const { signup, login } = require("../Controller/Authcontroller");

router.post("/login", loginvalidation, login);

router.post("/signup", signupvalidation, signup);

module.exports = router;
