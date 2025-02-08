const express = require('express');
const {
    register,
    login,
    logout,
    verifyEmail,
    isAuthenticated
}= require('../controllers/authController.js');
const { userAuth } = require('../middlewares/userAuth.js');
const authRouter = express.Router();
authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/send-verify-otp',userAuth,sendVerifyOtp);
authRouter.post('is-auth',userAuth,isAuthenticated);

module.exports = authRouter;