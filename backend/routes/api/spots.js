const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Spot, Review, User, Image } = require('../../db/models');

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSpot = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Street address is required"),
  check("city")
    .exists({ checkFalsy: true })
    .withMessage("City is required"),
  check("state")
    .exists({ checkFalsy: true })
    .withMessage("State is required"),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("Country is required"),
  check("lat")
    .exists({ checkFalsy: true })
    .isNumeric()
    .custom((value, {req}) => value >= -90 && value <= 90)
    .withMessage("Latitude is not valid"),
  check("lng")
    .exists({ checkFalsy: true })
    .isNumeric()
    .custom((value, {req}) => value >= -180 && value <= 180)
    .withMessage("Longitude is not valid"),
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ max: 50 })
    .withMessage("Name must be less than 50 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Description is required"),
  check("price")
    .exists({ checkFalsy: true })
    .isNumeric()
    .withMessage("Price per day is required"),
  handleValidationErrors,
];

// User authorization
const spotUserAuth = async (req, res, next) => {
  const spot = await Spot.findOne({ where: { id: req.params.id } });
  if (req.user.id !== spot.userId) {
    const err = new Error("Unauthorized");
    err.title = "Unauthorized";
    err.errors = ["Unauthorized"];
    err.status = 401;
    return next(err);
  }
  return next();
};


// Get all spots
router.get('/', async (req, res) => {
  const spots = await Spot.findAll();
  return res.json({spots});
});


// Get all spots owned by current user
router.get('/users/:userId', requireAuth, async (req, res) => {
  const userSpot = Spot.findOne({
    where: {
      userId: req.params.userId,
    },
  });

  return res.json({ userSpot });
});


// Get details of a spot from an id
router.get('/:id', async (req, res, next) => {
  const spot = await Spot.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Review,
        attributes: [],
      },
    ],
    attributes: [ 'userId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'description', 'price', [sequelize.fn("COUNT", sequelize.col("review")), "numReviews"],[sequelize.fn("AVG", sequelize.col("stars")), "avgStarRating"]],
  });

  if (!spot) {
    const err = new Error('Not found');
    err.status = 404;
    err.title = 'Not found';
    err.errors = ["Spot couldn't be found"];
    return next(err);
  };

  return res.json({spot});
});


// Create a spot
router.post('/', requireAuth, validateSpot, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;

  const newSpot = Spot.create({
    userId: req.user.id,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  });

  return res.json({newSpot});
});


// Edit a spot
router.put('/:id', requireAuth, spotUserAuth, validateSpot, async (req, res, next) => {
  const { id, userId, address, city, state, country, lat, lng, name, description, price } = req.body;

  const updateSpot = await Spot.findByPk(req.params.id);

  if (!updateSpot) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found"];
    return next(err);
  };

  await updateSpot.update({
    id,
    userId,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  });

  return res.json({ updateSpot });
});


// Delete a spot
router.delete('/:id', requireAuth, spotUserAuth, async (req,res, next) => {
  const deleteSpot = await Spot.findOne({
    where: {
      id: req.params.id
    }
  });

  if (!deleteSpot) {
    const err = new Error("Not found.");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found."];
    return next(err);
  };

  await deleteSpot.destory();

  return res.json({ message: "Successfully deleted" });
});


// Add an image to spot based on spot id
router.post('/:id/images', requireAuth, spotUserAuth, async (req, res, next) => {
  const { url } = req.body;

  const spotImage = await Image.create({
    spotId: req.params.id,
    imageableType: "Spot",
    url: url
  });

  if (!spotImage) {
    const err = new Error("Not found.");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found."];
    return next(err);
  };

  return res.json({ spotImage });
});


module.exports = router;
