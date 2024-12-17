const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    email: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", user);
