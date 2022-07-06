const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Spot, Review, User, sequelize } = require('../../db/models');

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSpot = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Street address is required."),
  check("city")
    .exists({ checkFalsy: true })
    .withMessage("City is required."),
  check("state")
    .exists({ checkFalsy: true })
    .withMessage("State is required."),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("Country is required."),
  check("lat")
    .exists({ checkFalsy: true })
    .isNumeric()
    .custom((value, {req}) => value >= -90 && value <= 90)
    .withMessage("Latitude is not valid."),
  check("lng")
    .exists({ checkFalsy: true })
    .isNumeric()
    .custom((value, {req}) => value >= -180 && value <= 180)
    .withMessage("Longitude is not valid."),
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ max: 50 })
    .withMessage("Name must be less than 50 characters."),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Description is required."),
  check("price")
    .exists({ checkFalsy: true })
    .isNumeric()
    .withMessage("Price per day is required."),
  handleValidationErrors,
]


router.get('/', async (req, res) => {
  const spots = await Spot.findAll();
  return res.json({spots});
});


router.get(
  '/users/:userId',
  requireAuth,
  async (req, res) => {
    const { userId } = req.params;

    const userSpot = Spot.findOne({
      where: {
        userId: userId
      }
    });

    return res.json({userSpot})
  }
);


router.get('/:id', async (req, res) => {
  const { id } = req.params.id;

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
    res.status(404);
    return res.json({message: "Spot couldn't be found"});
  };

  return res.json({spot});
});


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


router.put('/:id', async (req, res) => {
  const { id, userId, address, city, state, country, lat, lng, name, description, price } = req.body;

  const updateSpot = await Spot.findByPk(req.params.id);

  if (!updateSpot) {
    res.status(404);
    return res.json({message: "Spot couldn't be found"})
  };

  updateSpot.update({
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

  return res.json({updateSpot});
});


router.delete('/:id', async (req,res) => {
  const { id } = req.params;

  await Spot.destroy({
    where: {
      id: id
    }
  });

  return res.json({message: "Successfully deleted"});
});



module.exports = router;


// {
//     "userId": 4,
//     "address": "123 ABC Street",
//     "city": "Defghijklmnop",
//     "state": "Qrstuvw",
//     "country": "XYZ",
//     "lat": "34.049988576041805",
//     "lng": "-118.25312306454447",
//     "name": "ABC Test Spot",
//     "description": "Test spot for post route.",
//     "price": 1.99
//   }
