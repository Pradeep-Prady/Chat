const mongoose = require("mongoose");

const reviewModel = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Please enter a message"],
  },

  name: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  avatar: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: "true",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

let model = mongoose.model("Review", reviewModel);

module.exports = model;
