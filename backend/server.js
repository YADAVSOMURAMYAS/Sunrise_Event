
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
app.use(cors({credentials: true}));
connectDB();
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.get('/', (req, res)=>{
    res.send('Hello World!');
});