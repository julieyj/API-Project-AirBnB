const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Review, User, Spot, Image } = require("../../db/models");

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
    .custom((value, {req}) => value <= 5 && value >= 1)
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
    return next(err);
  }
  return next();
};

// Get all reviews of current user
router.get('/user/:userId', requireAuth, async (req, res) => {
  const userReviews = await Review.findAll({
    where: {
      userId: req.params.userId
    },
    include: [
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      },
      {
        model: Spot,
        attributes: ['id', 'userId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
      }
    ],
    attributes: [ 'id', 'userId', 'spotId', 'review', 'stars', 'createdAt', 'updatedAt']
  });
  return res.json({ userReviews });
});


// Get all reviews by spot id
router.get('/spot/:spotId', async (req, res, next) => {
  const spotReviews = await spotId.findAll({
    where: {
      spotId: req.params.spotId
    },
    include: [
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      }
    ]
  });

  if (!spotReviews) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found"];
    return next(err);
  };

  return res.json({ spotReviews });
});


// Create a rewview for a spot based on spot id
router.post('/spot/:spotId', requireAuth, validateReview, async (req, res, next) => {
  const { review, stars } = req.body;

  const userReviewCheck = await Review.findOne({
    where: {
      userId: req.user.id,
      spotId: req.params.spotId
    }
  });

  if (userReviewCheck) {
    const err = new Error("Review already exists");
    err.status = 400;
    err.title = "Review already exists";
    err.errors = ["User already has a review for this spot"];
    return next(err);
  }

  const newSpotReview = await Review.create({
    review,
    stars
  });

  if (!newSpotReview) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found"];
    return next(err);
  };

  return res.json({ newSpotReview });
});


// Edit a review
router.put('/:id', requireAuth, reviewUserAuth, validateReview, async (req, res, next) => {
  const editReview = await Review.findByPk(req.params.id);

  const { review, stars } = req.body;

  if (!editReview) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Review couldn't be found"];
    return next(err);
  };

  await editReview.update({
    review,
    stars
  });

  return res.json({ editReview });
});


// Delete a review
router.delete('/:id', requireAuth, reviewUserAuth, async (req, res, next) => {
  const deleteReview = await Review.findOne({
    where: {
      id: req.params.id
    }
  });

  if (!deleteReview) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Review couldn't be found"];
    return next(err);
  };

  await deleteReview.destory();

  return res.json({message: "Successfully deleted"});
});


// Add an image to review based on review id
router.post('/:id/images', requireAuth, reviewUserAuth, async (req, res, next) => {
  const { url } = req.body;

  const reviewImage = await Image.create({
    reviewId: req.params.id,
    imageableType: "Review",
    url: url
  });

  if (!reviewImage) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Review couldn't be found"];
    return next(err);
  };

  return res.json({ reviewImage });
});


module.exports = router;
