const mongoose = require("mongoose");

const mongoose_delete = require("mongoose-delete");
const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: Number,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);
CustomerSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Customers = mongoose.model("Customers", CustomerSchema);

module.exports = Customers;
