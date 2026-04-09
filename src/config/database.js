const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.DB_CONNECTION_SECRET);
  try {
    await mongoose.connect(process.env.DB_CONNECTION_SECRET);
  } catch (err) {
    console.error("MongoDB Error:", err.message);
  }
};

module.exports = connectDB;