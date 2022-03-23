const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const User = require("../models/User")

const registerUser = async(req,res)=>{
    try {
        const {nameOfUser,emailOfUser,password} = req.body;
        const passwordOfUser = await bcrypt.hash(password,12);
        const newUser = new User({nameOfUser,emailOfUser,passwordOfUser});
        const token = jsonwebtoken.sign(newUser.nameOfUser,process.env.secret);
        res.cookie("jwt",token)
        await newUser.save();
        res.status(200).send({message:"User Saved SucessFully !!!!"});
}
 catch (error) {
        res.status(400).send({message:"Internal Server Error !!!"});
        console.log(error);
    }
}

module.exports = registerUser;