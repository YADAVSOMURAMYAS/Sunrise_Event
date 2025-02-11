
const express = require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const app = express();
const connectDB = require('./models/db.js');
const authRouter = require('./routes/authRoutes.js');
const userRouter = require('./routes/userRoutes.js');
require('dotenv').config();
const PORT=process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173']
app.use(cors({origin:allowedOrigins ,credentials: true}));
connectDB();
app.use(cors({
    origin: "https://deploy-mern-ai-ira.vercel.app",
    methods: ["POST", "GET"],
    credentials: true
}));

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.get('/', (req, res)=>{
    res.send('Hello World!');
});