var express = require("express");
var router = express.Router();
const Ad = require("../models/Ad");

// CRUD

// GET /ads
// Return ad list
router.get("/", async (req, res, next) => {
  try {
    //filters
    const tags = req.query.tags;
    const sale = req.query.sale;
    const price = req.query.price;

    // filters by price
    const name = req.query.name;
    const maxPrice = req.query.maxPrice;
    const minPrice = req.query.minPrice;

    // page options
    const skip = req.query.skip; //ads?skip=1
    const limit = req.query.limit; //ads?limit=2

    //sorting
    const sort = req.query.sort; //ads?sort=name

    const filter = {};

    if (tags) {
      filter.tags = tags; //ads?tags=motor
    }

    // sale=true: WTS, sale=false: WTB 
    if (sale) {
      filter.sale = sale; //ads?sale=true 
    }

    // case insensitive way to search either by full name or just initial characters
    if (name) {
      filter.name = new RegExp("^" + name, "i"); //ads?name=biC
    }

    //to filter by exact price
    if (price) {
      filter.price = price; //ads?price=50
    }

    //to filter by price range, maxima or minima
    if (maxPrice && minPrice) {
      filter.price = { $gte: minPrice, $lte: maxPrice }; //ads?minPrice=10&&maxPrice=230
    } else if (maxPrice) {
      filter.price = { $lte: maxPrice }; //ads?maxPrice=220
    } else if (minPrice) {
      filter.price = { $gte: minPrice }; //ads?minPrice=50
    }

    const ads = await Ad.lista(filter, skip, limit, sort);
    res.json({ results: ads });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
