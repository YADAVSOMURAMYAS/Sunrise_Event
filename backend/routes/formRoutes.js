const express = require("express");
const router = express.Router();
const Form = require("../models/form");


// Submit form
router.post("/submit", async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;

    const existingForm = await Form.findOne({ email });
    if (existingForm) {
      return res.status(400).json({ message: "A form with this email already exists." });
    }

    const newForm = new Form({ firstName, lastName, email, phone, paymentStatus: true });
    await newForm.save();

    res.status(201).json({ message: "Form submitted successfully!", form: newForm });
  } catch (error) {
    console.error("Form Submission Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all form submissions
router.get("/submissions", async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
