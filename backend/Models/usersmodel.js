const mongoose = require("mongoose");

const userscheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exits"],
  },
  password: {
    type: String,
    required: true,
  },
});

const usermodel = mongoose.model("users", userscheme);

module.exports = usermodel;
