const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  phone: Number,
  email: String,
  image: String,
  description: String,
});
const Customers = mongoose.model("Customers", CustomerSchema);

module.exports = Customers;
