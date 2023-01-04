var express = require("express");
var router = express.Router();
const Ad = require("../models/Ad");

// GET /tags
//To show a json of the tags used in the ad list
router.get("/", async (req, res, next) => {
  try {
    let ads = await Ad.lista();

    // Mapping through the ad list to find the tags
    const tagsArray = ads.flatMap((x) => x.tags);

    //Filtering them as a "set" to avoid repetitions
    res.json({ results: [...new Set(tagsArray)] });
  
  } catch (err) {
    next(err);
  }
});

module.exports = router;
