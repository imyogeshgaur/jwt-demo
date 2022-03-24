const jsonwebtoken = require('jsonwebtoken');
const express = require('express');
const auth = require('./middleware/auth');
const app = express();

const generateToken = (req,res)=>{
    payload={
        id:1,
    }
    try {
        const token = jsonwebtoken.sign(payload,"abcdehhfrhjhfvejrvvfkjb")
        res.cookie("jwt",token);
        res.status(201).send({message:"Token Generated Sucessfully !!!"})
    } catch (error) {
        console.log(error); 
        res.status(500).send({message:"Error Occured !!!"})
    }
}

app.get("/register",(req,res)=>{
    generateToken(req,res);
    
})

app.post("/login",auth,(req,res)=>{})



app.listen(5000,"localhost");
