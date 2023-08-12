const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authenticate");

const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  changePassword,
  getUserProfile,
  updateProfile,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/authController");

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/user"));
    },

    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

// User Routes
router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").post(resetPassword);
router.route("/password/change").put(isAuthenticatedUser, changePassword);
router.route("/myprofile").get(isAuthenticatedUser, getUserProfile);
router
  .route("/update")
  .put(isAuthenticatedUser, upload.single("avatar"), updateProfile);

// Admin Routes

router
  .route("/admin/register")
  .post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    upload.single("avatar"),
    registerUser
  );
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
