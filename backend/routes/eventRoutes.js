const express = require("express");
const router = express.Router();
const Event = require("../models/Event"); // Ensure you have the Event model

// ✅ POST: Create a New Event Booking
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
    res.status(201).json({ message: "Event saved successfully", event: newEvent });
  } catch (error) {
    console.error("Error saving event:", error);
    res.status(500).json({ message: "Server error while saving event" });
  }
});

// ✅ GET: Fetch All Booked Events (For Admin Panel)
router.get("/", async (req, res) => {
  try {
    res.send("Event API is working!");
    const events = await Event.find().sort({ eventDate: -1 }); // Sort by latest events
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Server error while fetching events" });
  }
});

// ✅ GET: Fetch a Single Event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ message: "Server error while fetching event" });
  }
});

// ✅ DELETE: Delete an Event by ID (For Admin Panel)
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Server error while deleting event" });
  }
});

module.exports = router;
