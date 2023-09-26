const mongoose = require('mongoose')


const contactTemplate = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('contact_table', contactTemplate)