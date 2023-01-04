var express = require("express");
var router = express.Router();
const Ad = require("../models/Ad");

// CRUD

// GET /create
//  Header to explain how to proceed
router.get("/", function (req, res, next) {
  res.send("You can add new ads to database through e.g POSTMAN");
});

// POST Create new ads (through e.g Postman)
router.post("/", async (req, res, next) => {
  try {
    const adData = req.body;
    const ad = new Ad(adData);

    // To save in DB
    const savedAd = await ad.save();

    res.json({ result: savedAd });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
