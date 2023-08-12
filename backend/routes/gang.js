const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  GangImagesUpload,
  getAllGangImages,
  createGangComment,
  getComments,
  getGangImage,
  deleteGangImage,
} = require("../controllers/gangController");
const {
  authorizeRoles,
  isAuthenticatedUser,
} = require("../middlewares/authenticate");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/gang"));
    },

    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.route("/gang/images").get(isAuthenticatedUser, getAllGangImages);
router.route("/gang/image/:id").get(isAuthenticatedUser, getGangImage);

router
  .route("/gang/comment/create")
  .put(isAuthenticatedUser, createGangComment);

router.route("/gang/comments").get(isAuthenticatedUser, getComments);

// router.route("/gang/comment/create").post(isAuthenticatedUser, createGangComment);

router
  .route("/admin/gang/upload")
  .post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    upload.single("image"),
    GangImagesUpload
  );

router
  .route("/admin/gang/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteGangImage);

module.exports = router;
