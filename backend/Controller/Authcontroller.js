const usermodel = require("../Models/usersmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await usermodel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "user already exits",
        sucess: false,
      });
    }
    const usermod = new usermodel({ username, email, password });
    usermod.password = await bcrypt.hash(password, 10);
    await usermod.save();
    res.status(201).json({
      message: "signup done !",
      sucess: true,
    });
  } catch (error) {
    res.status(500).json({
      message: `internal  error : ${error.message}`,
      sucess: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await usermodel.findOne({ email });

    const msg = "auth failed , email or pass is wrong !";
    if (!user) {
      return res.status(403).json({
        message: msg,
        sucess: false,
      });
    }
    ispass = await bcrypt.compare(password, user.password);
    if (!ispass) {
      return res.status(403).json({
        message: msg,
        sucess: false,
      });
    }

    const token = jwt.sign({ email: user.email, _id: user._id }, "xyzdemo", {
      expiresIn: "24h",
    });

    res.status(200).json({
      message: "login done !",
      sucess: true,
      jwttoke: token,
      email,
      name: user.username,
    });
  } catch (error) {
    res.status(500).json({
      message: `internal  error : ${error.message}`,
      sucess: false,
    });
  }
};

module.exports = { signup, login };
