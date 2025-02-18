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

// ✅ Allowed Frontend URLs for CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://sunrise-event.vercel.app",
  "https://sunrise-event-517y.vercel.app",
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
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle Preflight (OPTIONS) Requests
app.options("*", cors());

// ✅ Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

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

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("🎉 Server is Running!");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
