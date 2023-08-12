const mongoose = require("mongoose");

const userGangImageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
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

let schema = mongoose.model("UserGangImage", userGangImageSchema);

module.exports = schema;
