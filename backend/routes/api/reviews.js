const express = require("express");

const { Review } = require("../../db/models");

const router = express.Router();


router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const userReviews = await Review.findAll({
    where: {
      userId: userId
    }
  });
  return res.json({ userReviews });
});


router.get('/spot/:spotId', async (req, res) => {
  const { spotId } = req.params;
  const spotReviews = await spotId.findAll({
    where: {
      spotId: spotId
    }
  });

  if (!spotReviews) {
    res.status(404);
    return res.json({ message: "Spot couldn't be found"});
  };

  return res.json({ spotReviews });
});


router.post('/spot/:spotId', async (req, res) => {
  const { userId, spotId, review, stars } = req.body;
  const newSpotReview = await Review.create({
    userId,
    spotId,
    review,
    stars
  });

  if (!newSpotReview) {
    res.status(404);
    return res.json({ message: "Spot couldn't be found"});
  };

  return res.json({ newSpotReview });
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const editReview = await Review.findByPk(id);

  const { userId, spotId, review, stars } = req.body;

  if (!editReview) {
    res.status(404);
    return res.json({message: "Review couldn't be found"})
  };

  editReview.update({
    userId,
    spotId,
    review,
    stars
  });

  return res.json({ editReview });
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteReview = await Review.findByPk(id);

  if (!deleteReview) {
    res.status(404);
    return res.json({message: "Review couldn't be found"});
  } else {
    await Review.destroy({
      where: { id: id }
    });
  };
  return res.json({message: "Successfully deleted"});
});


module.exports = router;
