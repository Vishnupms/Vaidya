const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    department:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
})

const Doctor = mongoose.model('Doctor',doctorSchema)

module.exports = Doctor