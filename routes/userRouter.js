const router = require('express').Router();
require("dotenv").config();

const auth = require('../middleware/auth');
const registerUser = require('../services/registerUser');

router.post("/register",async(req,res)=>{
   registerUser(req,res);
});

router.post("/login",auth,async(req,res)=>{
    try {
        res.send({message:"Logged In Successfully !!!"})
    } catch (error) {
        res.send({message:"Internal Server Error !!!"})
        console.log(error);
    }
})


module.exports = router;

