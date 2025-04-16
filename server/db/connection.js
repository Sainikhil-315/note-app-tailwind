const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = async () => {
  await mongoose.connect(process.env.mongo_URI);
  console.log("Connected to MongoDB");
}

module.exports = mongoDB;