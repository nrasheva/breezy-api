const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  location: { required: true, type: String },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = { Location };
