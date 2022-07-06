const express = require("express");

const { Spot, Booking, Review, Image } = require('../../db/models');

const router = express.Router();


router.get('/', async (req, res) => {
  const spots = await Spot.findAll();
  return res.json({spots});
});


router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  const userSpot = Spot.findOne({
    where: {
      userId: userId
    }
  });

  return res.json({userSpot})
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const spot = Spot.findByPk(id);

  if (!spot) {
    res.status(404);
    return res.json({message: "Spot couldn't be found"});
  };

  return res.json({spot});
});


router.post('/', async (req, res) => {
  const { userId, address, city, state, country, lat, lng, name, description, price } = req.body;

  const newSpot = Spot.create({
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
