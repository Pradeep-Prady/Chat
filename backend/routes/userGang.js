const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  authorizeRoles,
  isAuthenticatedUser,
} = require("../middlewares/authenticate");
const {
  UserGangImagesUpload,
  getAllUserGangImages,
  getUserGangImage,
} = require("../controllers/userGangImageController");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/usergang"));
    },

    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router
  .route("/gang/upload")
  .post(isAuthenticatedUser, upload.single("image"), UserGangImagesUpload);

router
  .route("/admin/usergang/images")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUserGangImages);

router
  .route("/admin/usergang/image/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getUserGangImage);

module.exports = router;
