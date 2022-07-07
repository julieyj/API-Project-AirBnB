const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Booking, Spot, User } = require("../../db/models");

// const { check } = require("express-validator");
// const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

// User authorization
const bookingUserAuth = async (req, res, next) => {
  const booking = await Booking.findByPk(req.params.id);
  if (req.user.id !== booking.userId) {
    const err = new Error("Unauthorized");
    err.title = "Unauthorized";
    err.errors = ["Unauthorized"];
    err.status = 401;
    next(err);
  }
  next();
};

// User authorization
const bookingUserDeleteAuth = async (req, res, next) => {
  const booking = await Booking.findOne({ where: { id: req.params.id } });
  const spot = await Spot.findOne({ where: { id: req.params.id } });
  if ((req.user.id !== booking.userId) && (req.user.id !== spot.userId)) {
    const err = new Error("Unauthorized");
    err.title = "Unauthorized";
    err.errors = ["Unauthorized"];
    err.status = 401;
    next(err);
  }
  next();
};

// Get all bookings for a spot based on spot id
router.get('/spots/:spotId', requireAuth, async (req, res, next) => {
  const spotBookings = await Booking.findByPk(req.params.spotId);

  if (!spotBookings) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found"];
    next(err);
  };

  if (req.user.id === spotBookings.userId) {
    const privateBookings = await Booking.findAll({
      where: {
        spotId: req.params.spotId
      },
      include: [
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName']
        }
      ],
      attributes: ['id', 'spotId', 'userId', 'startDate', 'endDate', 'createdAt', 'updatedAt']
    });

    return res.json({ privateBookings });

  } else {
    const publicBookings = await Booking.findAll({
      where: {
        spotId: req.params.spotId
      },
      attributes: ['spotId', 'startDate', 'endDate']
    });

    return res.json({ publicBookings });
  };
});


// Create booking from spot based on spot id
router.post('/spots/:spotId', requireAuth, async (req, res, next) => {
  const { startDate, endDate } = req.body;

  const spot = await Spot.findByPk(req.params.spotId);

  if (!spot) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found"];
    next(err);
  }

  if (spot.userId === req.user.id) {
    const err = new Error("Booking already exists");
    err.title = "Booking already exists";
    err.errors = ["User already has a booking for this spot"];
    err.status = 400;
    next(err);
  }

  const newBooking = await Booking.create({
    spotId: req.params.spotId,
    userId: req.user.id,
    startDate: startDate,
    endDate: endDate
  });

  const result = {
    id: newBooking.id,
    spotId: newBooking.spotId,
    userId: req.user.id,
    startDate: newBooking.startDate,
    endDate: newBooking.endDate,
    createdAt: newBooking.createdAt,
    updatedAt: newBooking.updatedAt
  }

  return res.json(result);
});


// Edit a booking
router.put('/:id', requireAuth, bookingUserAuth, async (req, res, next) => {
  const { startDate, endDate } = req.body;

  const editBooking = await Booking.findByPk(req.params.id);

  if (!editBooking) {
    const err = new Error("Not found");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Booking couldn't be found"];
    next(err);
  };

  await editBooking.update({
    startDate,
    endDate
  });

  return res.json({ editBooking });
});


// Delete a booking
router.delete('/:id', requireAuth, bookingUserDeleteAuth, async (req, res, next) => {
  const deleteBooking = await Booking.findOne({
    where: {
      id: req.params.id
    }
  });

  if (!deleteBooking) {
    const err = new Error("Not found.");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Booking couldn't be found."];
    next(err);
  };

  await deleteBooking.destroy();

  return res.json({ message: "Successfully deleted" });
});

// Get all bookings
router.get('/', async (req,res) => {
  const allBookings = await Booking.findAll();
  return res.json( { allBookings } );
});



module.exports = router;
