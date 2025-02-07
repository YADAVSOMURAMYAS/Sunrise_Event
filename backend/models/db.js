require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL; // Ensure this is correctly defined
const connectDB= async ()=>{
if (!MONGO_URL) {
    console.error("MONGO_URL is not defined!");
    process.exit(1); // Exit process if the MongoDB URL is missing
}

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB:", err));
}
module.exports = connectDB;