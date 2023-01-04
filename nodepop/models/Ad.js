const mongoose = require("mongoose");

// Ads schema
var adSchema = mongoose.Schema({
  name: String,
  sale: Boolean,
  price: Number,
  photo: String,
  tags: [String],
});

// List method
adSchema.statics.lista = function (filter, skip, limit, sort) {
  const query = Ad.find(filter);
  query.skip(skip);
  query.limit(limit);
  query.sort(sort);
  return query.exec();
};

// Create the model
const Ad = mongoose.model("Ad", adSchema);

// Export the model
module.exports = Ad;
