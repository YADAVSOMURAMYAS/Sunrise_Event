const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { eventType, eventDate, location, guestCount, budgetRange, fullName, email, phone, preferredContact, services, termsAccepted } = req.body;

    // 🔹 Validate required fields
    if (!eventType || !eventDate || !location || !guestCount || !budgetRange || !fullName || !email || !phone || !termsAccepted) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // 🔹 Save to database
    const newEvent = new Event(req.body);
    await newEvent.save();

    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
