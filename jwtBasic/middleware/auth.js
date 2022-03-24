
const jsonwebtoken = require('jsonwebtoken');

module.exports = function(req,res,next){
    try {
        const token = req.header("yogesh")    
        jsonwebtoken.verify(token,"abcdehhfrhjhfvejrvvfkjb");
        res.status(200).send({message:"User verified  !!!"});
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Some Error Occured !!!"}) 
    }
}