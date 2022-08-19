const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Spot, Review, User, Image, sequelize } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
// const { where } = require("sequelize/types");

const { Op } = require("sequelize");

const router = express.Router();

const validateSpot = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Street address is required"),
  check("city").exists({ checkFalsy: true }).withMessage("City is required"),
  check("state").exists({ checkFalsy: true }).withMessage("State is required"),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("Country is required"),
  check("lat")
    .exists({ checkFalsy: true })
    .isNumeric()
    .custom((value, { req }) => value >= -90 && value <= 90)
    .withMessage("Latitude is not valid"),
  check("lng")
    .exists({ checkFalsy: true })
    .isNumeric()
    .custom((value, { req }) => value >= -180 && value <= 180)
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

// Query parameter validation
const validateQuery = [
  check("page")
    // .exists({ checkFalsy: true })
    .custom((value, { req }) => value >= 0 && value <= 10)
    .withMessage(
      "Page must be greater than or equal to 0, and less than or equal to 10"
    ),
  check("size")
    // .exists({ checkFalsy: true })
    .custom((value, { req }) => value >= 0 && value <= 20)
    .withMessage(
      "Size must be greater than or equal to 0, and less than or equal to 20"
    ),
  check("maxLat")
    // .exists({ checkFalsy: true })
    .custom((value, { req }) => value <= 90)
    .withMessage("Maxiumum latitude is invalid"),
  check("minLat")
    // .exists({ checkFalsy: true })
    .custom((value, { req }) => value >= -90)
    .withMessage("Minimum latitude is invalid"),
  check("maxLng")
    // .exists({ checkFalsy: true })
    .custom((value, { req }) => value <= 180)
    .withMessage("Maximum longitude is invalid"),
  check("minLng")
    // .exists({ checkFalsy: true })
    .custom((value, { req }) => value >= -180)
    .withMessage("Minimum longitude is invalid"),
  check("minPrice")
    // .exists({ checkFalsy: true })
    .custom((value, { req }) => value >= 0)
    .withMessage("Minimum price must be greater than 0"),
  check("maxPrice")
    // .exists({ checkFalsy: true })
    .custom((value, { req }) => value >= 0)
    .withMessage("Maximum price must be greater than 0"),
  handleValidationErrors,
];

// User authorization
const spotUserAuth = async (req, res, next) => {
  const spot = await Spot.findOne({ where: { id: req.params.id } });
  if (req.user.id !== spot.userId) {
    const err = new Error("Unauthorized");
    err.title = "Unauthorized";
    err.message = ["Unauthorized"];
    err.status = 401;
    next(err);
  }
  next();
};

// // Get all spots
// router.get('/', async (req, res) => {
//   const spots = await Spot.findAll();
//   return res.json({ Spots: spots });
// });

// Get all spots with query filters
router.get("/", async (req, res) => {
  let { page, size } = req.query;

  page = page === undefined ? 0 : parseInt(page);
  size = size === undefined ? 20 : parseInt(size);

  const pagination = {};
  if (page >= 1 && page <= 10 && size >= 0 && size <= 20) {
    pagination.limit = size;
    pagination.offset = size * (page - 1);
  }

  const where = {};
  const { minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

  if (minLat) {
    where.lat = { [Op.gte]: minLat };
  }

  if (maxLat) {
    where.lat = { [Op.lte]: maxLat };
  }

  if (minLng) {
    where.lng = { [Op.gte]: minLng };
  }

  if (maxLng) {
    where.lng = { [Op.lte]: maxLng };
  }

  if (minPrice) {
    where.price = { [Op.gte]: minPrice };
  }

  if (maxPrice) {
    where.price = { [Op.lte]: maxPrice };
  }

  const spots = await Spot.findAll({
    where,
    order: [["id"]],
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
      "description",
      "price",
      "createdAt",
      "updatedAt",
      "previewImage",
    ],
    ...pagination,
  });
  return res.json(spots);
});

// Get all spots owned by current user
router.get("/users/:userId", requireAuth, async (req, res) => {
  const userSpots = await Spot.findAll({
    where: {
      userId: req.params.userId,
    },
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
      "description",
      "price",
      "createdAt",
      "updatedAt",
      "previewImage",
    ],
  });

  return res.json(userSpots);
});

// Get details of a spot from an id
router.get("/:id", async (req, res, next) => {
  const spot = await Spot.findOne({ where: { id: req.params.id } });

  if (!spot) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.message = ["Spot couldn't be found"];
    next(err);
  }

  const user = await User.findOne({
    where: {
      id: spot.userId,
    },
    attributes: ["id", "firstName", "lastName"],
  });

  const imageArray = await Image.findAll({
    where: {
      spotId: req.params.id,
    },
    attributes: ["url"],
  });

  const spotReviews = await Review.findAll({
    where: {
      spotId: req.params.id,
    },
    attributes: [
      [sequelize.fn("COUNT", sequelize.col("review")), "numReviews"],
      [sequelize.fn("AVG", sequelize.col("stars")), "avgStarRating"],
    ],
  });

  const result = {
    id: spot.id,
    userId: spot.userId,
    address: spot.address,
    city: spot.city,
    state: spot.state,
    country: spot.country,
    lat: spot.lat,
    lng: spot.lng,
    name: spot.name,
    description: spot.description,
    price: spot.price,
    createdAt: spot.createdAt,
    updatedAt: spot.updatedAt,
    previewImage: spot.previewImage,
    numReviews: spotReviews[0].dataValues.numReviews,
    avgStarRating: spotReviews[0].dataValues.avgStarRating,
    images: imageArray,
    Owners: user,
  };

  return res.json(result);
});

// Create a spot
router.post("/", requireAuth, validateSpot, async (req, res) => {
  const {
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
    previewImage,
  } = req.body;

  const newSpot = await Spot.create({
    userId: req.user.id,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
    previewImage,
  });

  return res.json(newSpot);
});

// Edit a spot
router.put(
  "/:id",
  requireAuth,
  spotUserAuth,
  validateSpot,
  async (req, res, next) => {
    const {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage,
    } = req.body;

    const updateSpot = await Spot.findByPk(req.params.id);

    if (!updateSpot) {
      const err = new Error("Not found");
      err.status = 404;
      err.title = "Not found";
      err.errors = ["Spot couldn't be found"];
      next(err);
    }

    await updateSpot.update({
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage,
    });

    return res.json(updateSpot);
  }
);

// Delete a spot
router.delete("/:id", requireAuth, spotUserAuth, async (req, res, next) => {
  const deleteSpot = await Spot.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!deleteSpot) {
    const err = new Error("Not found.");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found."];
    next(err);
  }

  await deleteSpot.destroy();

  return res.json({ message: "Successfully deleted" });
});

// Add an image to spot based on spot id
router.post(
  "/:id/images",
  requireAuth,
  spotUserAuth,
  async (req, res, next) => {
    const { url } = req.body;

    const spotImage = await Image.create({
      spotId: req.params.id,
      imageableType: "Spot",
      url: url,
    });

    if (!spotImage) {
      const err = new Error("Not found.");
      err.status = 404;
      err.title = "Not found";
      err.errors = ["Spot couldn't be found."];
      next(err);
    }

    const result = await Image.findAll({
      where: {
        id: spotImage.id,
      },
      attributes: ["id", "spotId", "imageableType", "url"],
    });

    return res.json(result);
  }
);

module.exports = router;
