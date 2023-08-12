const mongoose = require("mongoose");

const chatModel = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  images: [
    {
      image: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

let model = mongoose.model("Chat", chatModel);

module.exports = model;
