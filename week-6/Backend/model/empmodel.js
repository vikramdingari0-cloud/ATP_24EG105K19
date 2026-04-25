const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  designation: String,
  companyName: String
});

module.exports = mongoose.model("Employee", empSchema);