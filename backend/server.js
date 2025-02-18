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


// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// ✅ Properly Configured CORS Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://sunrise-event.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers
  })
);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ✅ API Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/events", eventRoutes); // Booking API

app.get("/", (req, res) => {
  res.send("🎉 Server is Running!");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running`);
});

module.exports = app;
