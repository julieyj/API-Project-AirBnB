const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Image, Spot, Booking } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

// User authorization
const imageUserAuth = async (req, res, next) => {
  const image = await Booking.findOne({ where: { id: req.params.id } });
  if (image.reviewId) {
    const reviewImage = await Review.findOne({ where: { id: image.reviewId } });
    if (req.user.id !== reviewImage.userId) {
      const err = new Error("Unauthorized");
      err.title = "Unauthorized";
      err.errors = ["Unauthorized"];
      err.status = 401;
      return next(err);
    }
  } else if (image.spotId) {
    const spotImage = await Spot.findOne({ where: { id: image.spotId } });
    if (req.user.id !== spotImage.userId) {
      const err = new Error("Unauthorized");
      err.title = "Unauthorized";
      err.errors = ["Unauthorized"];
      err.status = 401;
      return next(err);
    }
  }
  return next();
};

// Delete an image
router.delete('/:id', requireAuth, imageUserAuth, async (req, res, next) => {
  const deleteImage = await Image.findOne({
    where: {
      id: req.params.id
    }
  });

  if (!deleteImage) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Image couldn't be found"];
    return next(err);
  };

  await deleteImage.destroy();

  return res.json({ message: "Successfully deleted" });
});

module.exports = router;
