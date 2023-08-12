const catchAsyncError = require("../middlewares/catchAsyncError");
const GangImage = require("../models/gangModel");
const ErrorHandler = require("../utils/errorHandler");

exports.GangImagesUpload = catchAsyncError(async (req, res, next) => {
  let image;

  let BASE_URL = process.env.BACKEND_URL;

  if (process.env.NODE_ENV === "production") {
    BASE_URL = `${req.protocol}://${req.get("host")}`;
  }

  if (req.file) {
    image = `${BASE_URL}/uploads/gang/${req.file.originalname}`;
  }
  const { index } = req.body;

  const gang_image = await GangImage.create({ image, index });

  res.status(200).json({
    success: true,
    image,
    gang_image,
  });
});

// Get Gang Images - api/v1/gang/images

exports.getAllGangImages = catchAsyncError(async (req, res, next) => {
  const images = await GangImage.find();

  res.status(200).json({
    success: true,
    images,
  });
});

// Get Single Image - /api/v1/

exports.getGangImage = async (req, res, next) => {
  const image = await GangImage.findById(req.params.id).populate(
    "comments.user",
    "name email avatar"
  );

  if (!image) {
    return next(new ErrorHandler(400, "Gang Image not found"));
  }
  res.status(201).json({
    success: true,
    image,
  });
};

exports.deleteGangImage = async (req, res, next) => {
  const gangImage = await GangImage.findById(req.params.id);

  if (!gangImage) {
    return next(new ErrorHandler(400, "Gang Image not found"));
  }

  await GangImage.deleteOne({ _id: req.params.id });

  res.status(201).json({
    success: true,
    message: "Gang Image deleted successfully",
  });
};

// Create Comment - api/v1/gang/comment/create

exports.createGangComment = catchAsyncError(async (req, res, next) => {
  const { gangImageId, content } = req.body;

  const comment = {
    user: req.user.id,
    content,
  };

  const gangImage = await GangImage.findById(gangImageId);

  if (comment) {
    gangImage.comments.push(comment);
  }

  gangImage.numOfComments = gangImage.comments.length;

  await gangImage.save({ validateBeforeSave: false });

  res.status(201).json({
    success: true,
    gangImage,
  });
});

// Get Comments - api/v1/gang/comment/?id

exports.getComments = catchAsyncError(async (req, res, next) => {
  const gangImage = await GangImage.findById(req.query.id).populate(
    "comments.user",
    "name avatar"
  );

  res.status(200).json({
    success: true,
    comments: gangImage.comments.reverse(),
  });
});

// Delete Comment - /api/v1/gang/comment/?id

exports.deleteComment = catchAsyncError(async (req, res, next) => {
  const gangImage = await GangImage.findById(req.query.gangCommentId);

  // filtering the reviews which does not match the deleting review id
  const comments = gangImage.comments.filter((comment) => {
    return comment._id.toString() !== req.query.id.toString();
  });

  // number of reviews
  const numOfComments = comments.length;

  //saving the document
  await GangImage.findByIdAndUpdate(req.query.gangCommentId, {
    comments,
    numOfComments,
  });
  res.status(200).json({
    success: true,
    message: "Comment deleted",
  });
});
