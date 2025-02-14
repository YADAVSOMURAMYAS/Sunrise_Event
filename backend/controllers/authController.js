const userModel=require('../models/userModel');

const bcrypt = require('bcryptjs');
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
        maxAge: 1000*60*60*7*24
    })
    //Sending Welcome email when user create account for the first time
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
        maxAge: 1000*60*60*7*24
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
 const sendVerifyOtp=async(req,res)=>{
    try{
        const {userId}=req.body;
        const user=await userModel.findById(userId);
        
        if(user.isAccountVerified){
            return res.status(400).json({success:false,message:'Account already verified'});
        }
        const otp=String(Math.floor(100000+Math.random()*900000));
        user.verifyOtp=otp;
        user.OtpExpireAt=Date.now()+24*60*60*1000;
        await user.save();
        const mailOptions = {
            from: process.env.SENDER_EMAIL || "varad.jadhav21@gmail.com",
            to: user.email,
            subject: 'Account Verification OTP',
            text: `Your OTP for account verification is ${otp}. This OTP will expire in 24 hours. Verify your account using this OTP. Thank you!`
        };
        await transporter.sendMail(mailOptions);
return res.status(200).json({ success: true, message: 'OTP sent successfully' });
    } catch(err){
        return res.status(500).json({success:false, message: err.message});
    }
}
 const verifyEmail=async(req,res)=>{
    const {userId,otp}=req.body;
    if(!userId || !otp){
        return res.status(400).json({success:false,message:'Missing details'});
    }
    try {
        const user=await userModel.findById(userId);
        if(!user){
            return res.status(400).json({success:false,message:'User not found'});
        }
        if(user.verifyOtp ==='' ||user.verifyOtp!==otp){
            return res.status(400).json({success:false,message:'Invalid OTP'});
        }
        if(user.OtpExpireAt<Date.now()){
            return res.status(400).json({success:false,message:'OTP expired'});
        }
        user.isAccountVerified=true;
        user.verifyOtp='';
        user.OtpExpireAt=0;
        await user.save();
        return res.json({success:true,message:'Account verified successfully'});
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }

}
 const isAuthenticated=async(req,res)=>{
    try{
       
        return res.json({success:true,message:'Authentication successful'});
    } catch(err){
        return res.json({success:false,message:err.message});
    }
}
 const sendResetOtp=async(req,res)=>{ 
    const {email}=req.body;
    if(!email){
        return res.status(400).json({success:false,message:'Email is required'});
    }
    try {
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:'User not found'});
        }
        const otp=String(Math.floor(100000+Math.random()*900000));
        user.resetOtp=otp;
        user.resetOtpExpireAt=Date.now()+15*60*1000;
        await user.save();
        const mailOptions = {
            from: process.env.SENDER_EMAIL || "varad.jadhav21@gmail.com",
            to: user.email,
            subject: 'Password reset OTP',
            text: `Your OTP for account password reset is ${otp}.
            This OTP will expire in 15 minutes. Reset your password using this OTP. Thank you!`
        };
        await transporter.sendMail(mailOptions);
        return res.json({success: true,message: 'OTP sent to your email address'});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }}

    //Reset User Password
 const resetPassword=async(req,res)=>{
        const {email,otp,newPassword}=req.body;
        if(!email || !otp || !newPassword){
        return res.status(400).json({success:false,message:'Email,OTP or Password are required'});
        }
        try {
            const user=await userModel.findOne({email});
            if(!user){
                return res.status(400).json({success:false,message:'User not found'});
            }
            if(user.resetOtp ==='' || user.resetOtp!==otp){
                return res.status(400).json({success:false,message:'Invalid OTP'});
            }
            if(user.resetOtpExpireAt<Date.now()){
                return res.status(400).json({success:false,message:'OTP expired'});
            }
            const hashedPassword=await bcrypt.hash(newPassword,10);
            user.password=hashedPassword;
            user.resetOtp='';
            user.resetOtpExpireAt=0;
            await user.save();
            return res.json({success: true,message: 'Password reset successfully'});
            
        } catch (error) {
            return res.status(500).json({success:false,message:error.message});
            
        }
    }

module.exports ={
    register,
    login,
    logout,
    sendVerifyOtp,
    verifyEmail,
    isAuthenticated,
    sendResetOtp,
    resetPassword,
    
 
}