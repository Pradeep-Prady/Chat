const express = require("express");
const path = require("path");

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authenticate");
const {
  createReview,
  getReviews,
  deleteReview,
  getReview,
  getAdminReviews,
  updateReview,
} = require("../controllers/reviewController");

const router = express.Router();

router.route("/review/create").post(isAuthenticatedUser, createReview);
router.route("/reviews").get(isAuthenticatedUser, getReviews);

// router.route("/chats/:id").get(isAuthenticatedUser, getChat);

router
  .route("/admin/review/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getReview);

router
  .route("/admin/review/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateReview);

router
  .route("/admin/review/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);

router
  .route("/admin/reviews")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminReviews);

module.exports = router;
