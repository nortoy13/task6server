const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  from: {
    type: String,
    required: true,
  },
  recipiant: {
    type: String,
    required: true,
  },
  message: {
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
