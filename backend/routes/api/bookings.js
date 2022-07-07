const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Booking, Spot } = require("../../db/models");

// const { check } = require("express-validator");
// const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();


// Get all bookings for a spot based on spot id
router.get('/spots/:spotId', requireAuth, async (req, res, next) => {
  const spotBookings = await Booking.findByPk(req.params.id);

  if (!spotBookings) {
    const err = new Error("Not found.");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found."];
    return next(err);
  };

  if (req.user.id === Spot.userId) {
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
    const err = new Error("Not found.");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Spot couldn't be found."];
    return next(err);
  }

  const newBooking = Booking.create({
    spotId: req.params.spotId,
    userId: req.user.id,
    startDate: startDate,
    endDate: endDate
  });

  return res.json({ newBooking });
});


// Edit a booking
router.put('/:id', requireAuth, async (req, res, next) => {
  const { startDate, endDate } = req.body;

  const editBooking = await Booking.findByPk(req.params.id);

  if (!editBooking) {
    const err = new Error("Not found.");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Booking couldn't be found."];
    return next(err);
  };

  await editBooking.update({
    startDate,
    endDate
  });

  return res.json({ editBooking });
});


// Delete a booking
router.delete('/:id', requireAuth, async (req, res) => {
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
    return next(err);
  };

  await deleteBooking.destroy();

  return res.json({ message: "Successfully deleted" });
});


module.exports = router;
