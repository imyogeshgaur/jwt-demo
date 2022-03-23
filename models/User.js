const mongoose = require('mongoose');

const userSchemea = mongoose.Schema({
    nameOfUser:String,
    emailOfUser:String,
    passwordOfUser:String
});

module.exports = User = mongoose.model("User",userSchemea);