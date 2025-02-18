const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js"); // Event API

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // origin: process.env.FRONTEND_URL,
    origin:"http://localhost:5174",
    credentials: true,
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/events", eventRoutes); // Booking API

app.get("/", (req, res) => {
  res.send("🎉 Server is Running!");
});

// Start Server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 
