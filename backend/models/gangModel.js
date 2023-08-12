const mongoose = require("mongoose");

const gangImageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      content: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  numOfComments: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

let schema = mongoose.model("GangImage", gangImageSchema);

module.exports = schema;
