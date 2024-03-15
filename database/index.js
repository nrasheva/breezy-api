const mongoose = require('mongoose');

const initializeMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeMongoose };