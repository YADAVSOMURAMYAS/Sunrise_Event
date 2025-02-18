const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventType: { type: String, required: true },
  eventDate: { type: String, required: true },
  location: { type: String },
  guestCount: { type: Number },
  budgetRange: { type: String },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  preferredContact: { type: String, default: "email" },
  services: { type: [String] },
  termsAccepted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Event", EventSchema);
