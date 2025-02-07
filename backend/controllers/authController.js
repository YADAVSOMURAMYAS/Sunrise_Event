const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();
const transporter = require('../config/nodemailer.js');
const  register=async(req,res)=>{
    const {
        name,
        email,
        password
    }=req.body;
    if(!name || !email|| !password){
        return res.status(400).json({message: 'All fields are required'});
    }
    try{
        const existingUser= await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({message: 'User already exists'});
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const user=new User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();
        const token=jwt.sign({
            id:user._id
        },process.env.JWT_SECRET,
        {expiresIn:'7d'})
    
    res.cookie('token',token,{
        httpOnly: true,
        secure: process.env.NODE_ENV==='production'?true:false,
        sameSite: process.env.NODE_ENV==='production'?'none':'strict',
        maxAge: 1000*60*60*7
    })
    const mailOptions = {
        from: process.env.SENDER_EMAIL || "varad.jadhav21@gmail.com",
        to: req.body.email,
        subject: 'Welcome to Sunrise Event',
        text: `Welcome to Sunrise Event! Thank you for celebrating with Us!`
    };
    await transporter.sendMail(mailOptions);
    return res.json({success: true});
}
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

const login=async(req,res)=>{
    const {
        email,
        password
    }=req.body;
    if(!email|| !password){
        return res.status(400).json({message: 'All fields are required'});
    }
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({message: 'Invalid credentials'});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message: 'Invalid credentials'});
        }
        const token=jwt.sign({
            id:user._id
        },process.env.JWT_SECRET,
        {expiresIn:'7d'})
    
    res.cookie('token',token,{
        httpOnly: true,
        secure: process.env.NODE_ENV==='production'?true:false,
        sameSite: process.env.NODE_ENV==='production'?'none':'strict',
        maxAge: 1000*60*60*7
    })
    return res.json({success:true});
    }
    catch(err){
        return res.status(400).json({success:false});
}
}
const logout=async(req,res)=>{
    try{
        res.clearCookie('token',{ httpOnly: true,
            secure: process.env.NODE_ENV==='production'?true:false,
            sameSite: process.env.NODE_ENV==='production'?'none':'strict',
            });
        return res.json({success:true,message:'Logged Out successfully'});
    }
        catch(err){
            return res.status(500).json({success:false});
        }
    }
module.exports ={
    register,
    login,
    logout
 
};