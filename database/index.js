const mongoose = require("mongoose");

const initializeMongoose = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeMongoose };
