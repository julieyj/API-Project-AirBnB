const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Booking, Spot } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Invalid email"),
  check("firstName")
    .exists({ checkFalsy: true })
    .isLength({ max: 30 })
    .withMessage("First Name is required"),
  check("lastName")
    .exists({ checkFalsy: true })
    .isLength({ max: 30 })
    .withMessage("Last Name is required"),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more"),
  handleValidationErrors,
];

// Sign up
router.post('/', validateSignup, async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  const emailCheck = await User.findOne({ where: { email: req.body.email } });

  if (emailCheck) {
    const err = new Error("User already exists");
    err.status = 403;
    err.title = "User already exists";
    err.errors = ["User with that email already exists"];
    return next(err);

  } else {
    const user = await User.signup({ email, password, firstName, lastName });
    await setTokenCookie(res, user);
    return res.json({ user });
  }
});


// Get all users
router.get('/', async (req, res) => {
  const allUsers = await User.findAll({
    attributes: [ 'id', 'firstName', 'lastName' ]
  })
  return res.json({ allUsers });
});

// Delete user
router.delete('/:id', async (req, res, next) => {
  const deleteUser = await User.findOne({
    where: {
      id: req.params.id
    }
  });

  if (!deleteUser) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["User couldn't be found"];
    next(err);
  }

  await deleteUser.destroy();

  return res.json({ message: "Successfully deleted"});
});

// Get all current user's bookings
router.get('/:id/bookings', requireAuth, async (req, res) => {
  const userBookings = await Booking.findAll({
    where: {
      userId: req.params.id
    },
    include: [
      {
        model: Spot,
        attributes: ['id', 'userId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price', 'previewImage']
      }
    ],
    attributes: [ 'id', 'spotId', 'userId', 'startDate', 'endDate' ],
  });
  return res.json({ userBookings });
});


module.exports = router;
