const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("firstName")
    .exists({ checkFalsy: true })
    .isLength({ max: 30 })
    .withMessage("The maximum character length is 30."),
  check("lastName")
    .exists({ checkFalsy: true })
    .isLength({ max: 30 })
    .withMessage("The maximum character length is 30."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const user = await User.signup({ email, password, firstName, lastName });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  }
);




module.exports = router;
