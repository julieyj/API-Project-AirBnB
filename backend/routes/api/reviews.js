const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Review, User, Spot, Image, sequelize } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateReview = [
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),
  check("stars")
    .exists({ checkFalsy: true })
    .isNumeric()
    .custom((value, { req }) => value <= 5 && value >= 1)
    .withMessage("Stars must be an integer from 1 to 5"),
  handleValidationErrors,
];

// User authorization
const reviewUserAuth = async (req, res, next) => {
  const review = await Review.findOne({ where: { id: req.params.id } });
  if (req.user.id !== review.userId) {
    const err = new Error("Unauthorized");
    err.title = "Unauthorized";
    err.errors = ["Unauthorized"];
    err.status = 401;
    next(err);
  }
  next();
};

// Get all reviews of current user
router.get("/users/:userId", requireAuth, async (req, res) => {
  const userReviews = await Review.findAll({
    where: {
      userId: req.params.userId,
    },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Spot,
        attributes: [
          "id",
          "userId",
          "address",
          "city",
          "state",
          "country",
          "lat",
          "lng",
          "name",
          "price",
        ],
      },
      {
        model: Image,
        attributes: ["url"],
      },
    ],
  });
  return res.json({ userReviews });
});

// Get all reviews by spot id
router.get("/spots/:spotId", async (req, res, next) => {
  const spotReviews = await Review.findAll({
    where: {
      spotId: req.params.spotId,
    },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Image,
        attributes: ["url"],
      },
    ],
  });

  if (!spotReviews) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found"];
    next(err);
  }

  return res.json({ spotReviews });
});

// Create a review for a spot based on spot id
router.post(
  "/spots/:spotId",
  requireAuth,
  validateReview,
  async (req, res, next) => {
    const { review, stars } = req.body;

    const userReviewCheck = await Review.findOne({
      where: {
        userId: req.user.id,
        spotId: req.params.spotId,
      },
    });

    if (userReviewCheck) {
      const err = new Error("Review already exists");
      err.status = 400;
      err.title = "Review already exists";
      err.errors = ["User already has a review for this spot"];
      next(err);
    }

    const newSpotReview = await Review.create({
      userId: req.user.id,
      spotId: req.params.spotId,
      review,
      stars,
    });

    if (!newSpotReview) {
      const err = new Error("Not found");
      err.status = 404;
      err.title = "Not found";
      err.errors = ["Spot couldn't be found"];
      next(err);
    }

    const result = {
      id: newSpotReview.id,
      userId: req.user.id,
      spotId: req.params.spotId,
      review: newSpotReview.review,
      stars: newSpotReview.stars,
      createdAt: newSpotReview.createdAt,
      updatedAt: newSpotReview.updatedAt,
    };

    return res.json(result);
  }
);

// Edit a review
router.put(
  "/:id",
  requireAuth,
  reviewUserAuth,
  validateReview,
  async (req, res, next) => {
    const { review, stars } = req.body;

    const editReview = await Review.findByPk(req.params.id);

    if (!editReview) {
      const err = new Error("Not found");
      err.status = 404;
      err.title = "Not found";
      err.errors = ["Review couldn't be found"];
      next(err);
    }

    await editReview.update({
      review,
      stars,
    });

    return res.json({ editReview });
  }
);

// Delete a review
router.delete("/:id", requireAuth, reviewUserAuth, async (req, res, next) => {
  const deleteReview = await Review.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!deleteReview) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Review couldn't be found"];
    next(err);
  }

  await deleteReview.destroy();

  return res.json({ message: "Successfully deleted" });
});

// Add an image to review based on review id
router.post("/:id/images", requireAuth, reviewUserAuth, async (req, res, next) => {
  const { url } = req.body;

  const imageMaxCount = await Image.findAll({
    where: {
      reviewId: req.params.id,
      imageableType: 'Review'
    }
  });

  if (imageMaxCount.length >= 10) {
    const err = new Error("Validation error");
    err.status = 400;
    err.title = "Validation error";
    err.errors = ["Maximum number of images for this resource was reached"];
    next(err);
  }

  const reviewImage = await Image.create({
    reviewId: req.params.id,
    imageableType: "Review",
    url: url,
  });

  if (!reviewImage) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Review couldn't be found"];
    next(err);
  }

  return res.json({ reviewImage });
});

// Get all reviews
router.get("/", async (req, res) => {
  const allReviews = await Review.findAll();
  return res.json({ allReviews });
});

module.exports = router;
