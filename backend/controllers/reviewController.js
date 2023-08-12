const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../models/userModel");
const Review = require("../models/reviewModel");

const ErrorHandler = require("../utils/errorHandler");

exports.getReviews = catchAsyncError(async (req, res, next) => {
  const original = await Review.find().populate("user", "name avatar");

  const reviews = original.filter((review) => review.status === "true");

  reviews.reverse();

  res.status(200).json({
    success: true,
    reviews,
  });
});

exports.getReview = catchAsyncError(async (req, res, next) => {
  const review = await Review.findById(req.params.id).populate("user", "name avatar");


  if (!review) {
    return next(new ErrorHandler("Review not found", 404));
  }

  res.status(200).json({
    success: true,
    review,
  });
});

exports.createReview = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;

  // const user = req.user;
  // req.body.name = user.name;
  // req.body.avatar = user.avatar;

  const review = await Review.create(req.body);

  res.status(200).json({
    success: true,
    review,
  });
});

exports.updateReview = catchAsyncError(async (req, res, next) => {
  let review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).json({
      success: false,
      message: "Review not found",
    });
  }

  review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    review,
  });
});

// Delete review - /api/v1/review/:id

exports.deleteReview = async (req, res, next) => {
  let review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).json({
      success: false,
      message: "review not found",
    });
  }
  // //await product.remove();

  await Review.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    message: "Review deleted",
  });
};

exports.getAdminReviews = catchAsyncError(async (req, res, next) => {
  const category = req.query.category;

  let reviews;

  const allReviews = await Review.find().populate("user", "name avatar");

  if (category) {
    if (category === "all") {
      reviews = await Review.find().populate("user", "name avatar");
    }
    if (category === "visible") {
      reviews = allReviews.filter((review) => review.status === "true");
    }
    if (category === "nonvisible") {
      reviews = allReviews.filter((review) => review.status === "false");
    }
  }
  //  else {
  //   reviews = await Review.find().populate("user", "name avatar");
  // }

  reviewsCount = reviews?.length;

  res.status(200).json({
    success: true,
    reviewsCount,
    reviews,
  });
});
