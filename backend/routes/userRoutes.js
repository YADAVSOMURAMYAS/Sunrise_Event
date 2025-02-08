const express = require('express')
const userAuth=require('../middlewares/userAuth.js')
const getUserData=require('../controllers/userController.js');
const userRouter=express.Router();
userRouter.get('/data',userAuth,getUserData);
module.exports=userRouter;