const express = require("express");
const router = express.Router();
const Event = require("../models/Event"); // Ensure you have the Event model

// POST route for submitting event data
router.post("/", async (req, res) => {
  try {
    const {
      eventType,
      eventDate,
      location,
      guestCount,
      budgetRange,
      fullName,
      email,
      phone,
      preferredContact,
      services,
      termsAccepted,
    } = req.body;

    // Validate required fields
    if (!eventType || !eventDate || !fullName || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create new event document
    const newEvent = new Event({
      eventType,
      eventDate,
      location,
      guestCount,
      budgetRange,
      fullName,
      email,
      phone,
      preferredContact,
      services,
      termsAccepted,
    });

    await newEvent.save();
    res.status(201).json({ message: "Event saved successfully" });
  } catch (error) {
    console.error("Error saving event:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
