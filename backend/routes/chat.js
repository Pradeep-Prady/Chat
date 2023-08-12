const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  createChat,
  getChats,
  getChat,
} = require("../controllers/chatController");

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authenticate");

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/chats"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router
  .route("/chats/create")
  .post(isAuthenticatedUser, upload.array("images"), createChat);
router.route("/chats").get(isAuthenticatedUser, getChats);
router.route("/chats/:id").get(isAuthenticatedUser, getChat);

module.exports = router;
