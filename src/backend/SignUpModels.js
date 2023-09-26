const mongoose = require('mongoose')


const signupTemplate = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    UserReward: {
        type: Number,
        default: 0
    }
});



module.exports = mongoose.model('signup_table', signupTemplate)