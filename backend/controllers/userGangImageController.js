const catchAsyncError = require("../middlewares/catchAsyncError");
const UserGangImage = require("../models/userGangModel");
const ErrorHandler = require("../utils/errorHandler");

exports.UserGangImagesUpload = catchAsyncError(async (req, res, next) => {
  let image;

  let BASE_URL = process.env.BACKEND_URL;

  if (process.env.NODE_ENV === "production") {
    BASE_URL = `${req.protocol}://${req.get("host")}`;
  }

  if (req.file) {
    image = `${BASE_URL}/uploads/gang/${req.file.originalname}`;
  }

  const user = req.user._id;
 
  const gang_image = await UserGangImage.create({ image,user });
 
  res.status(200).json({
    success: true,
    gang_image,
   
  });
});

// Get Gang Images - api/v1/gang/images

exports.getAllUserGangImages = catchAsyncError(async (req, res, next) => {
  const images = await UserGangImage.find().populate("user", "name email");

  res.status(200).json({
    success: true,
    images,
  });
});

// Get Single Image - /api/v1/

exports.getUserGangImage = async (req, res, next) => {
  const gangImage = await UserGangImage.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!gangImage) {
    return next(new ErrorHandler(400, "Gang Image not found"));
  }
  res.status(201).json({
    success: true,
    gangImage,
  });
};
