const express = require('express');
const {
    register,
    login,
    logout,
    verifyEmail,
    isAuthenticated,
    sendVerifyOtp,
    sendResetOtp,
    resetPassword
}= require('../controllers/authController.js');
<<<<<<< HEAD
const userAuth=require('../middlewares/userAuth.js');
=======
const  userAuth  = require('../middlewares/userAuth.js');
>>>>>>> 07e5373cf9e04f1985c5730096ddcadc79ddc11b

const authRouter = express.Router();
authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/send-verify-otp',userAuth,sendVerifyOtp);
authRouter.post('/verify-account',userAuth,verifyEmail)
authRouter.post('is-auth',userAuth,isAuthenticated);
authRouter.post('/send-reset-otp',sendResetOtp);
authRouter.post('/reset-password',resetPassword);

module.exports = authRouter;