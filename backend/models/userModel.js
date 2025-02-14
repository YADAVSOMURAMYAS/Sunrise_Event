const mongoose = require('mongoose');
const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verifyOtp:{
        type: String,
        default: ''
    },
    OtpExpireAt:{
        type: Number,
        default: 0
    },
    isAccountVerified:{
        type: Boolean,
        default: false
    },
    resetOtp:{
        type: String,
        default: ''
    },
    resetOtpExpireAt:{
        type: Number,
        default: 0
    },
    role: { type: String, enum: ["user", "admin"], default: "user" }
    
});

const userModel=mongoose.model.user || mongoose.model('user',userSchema);

module.exports=userModel;