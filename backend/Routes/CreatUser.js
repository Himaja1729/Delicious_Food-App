const express = require('express')
const router = express.Router()
const User = require('../models/User')
router.post("/CreatUser",async(req,res)=>{
    try{
       await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location,
            date: new Date()
        })
    res.json({success:true});
    }
    catch(error)
    {
        console.log(error)
        res.json({success:false});

    }
})
module.exports = router;