const express = require("express");

const { requireAuth } = require("../../utils/auth");
const { Image } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();


// Delete an image
router.delete('/:id', requireAuth, async (req, res, next) => {
  const deleteImage = await Image.findOne({
    where: {
      id: req.params.id
    }
  });

  if (!deleteImage) {
    const err = new Error("Not found.");
    err.status = 404;
    err.title = "Not found";
    err.errors = ["Image couldn't be found."];
    return next(err);
  };

  await deleteImage.destroy();

  return res.json({ message: "Successfully deleted" });
});

module.exports = router;
