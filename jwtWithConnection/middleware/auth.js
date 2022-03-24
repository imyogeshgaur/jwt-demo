const jsonwebtoken = require('jsonwebtoken');
require("dotenv").config();
module.exports = function(req,res,next){
        try {
            const token = req.header("jwt");
            jsonwebtoken.verify(token,process.env.secret);
            next();
        } catch (error) {
            res.status(500).send({message:"Internal Server Error !!!"})
        }
}