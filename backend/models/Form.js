const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true }, // Ensure email is unique
    phone: String,
    paymentStatus: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);
