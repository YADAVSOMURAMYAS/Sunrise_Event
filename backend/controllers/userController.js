const userModel=require('../models/userModel.js');
const getUserData=async (req,res)=>{
    try{
        const {userId}=req.body;
        const user=await userModel.findById(userId);
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        res.json({success: true, userData: {
            name: user.name,
            isAccountVerified: user.isAccountVerified,
        }});
        
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
}
module.exports =getUserData;