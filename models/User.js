const mongoose = require('mongoose');

//Creating schema using mongoose.schema
const {Schema} = mongoose

const userSchema = new Schema({
    name : {type : String, required : true},
    age : {type : Number, required : true},
    village : {type : String, required : true},
    status : {type : String, required : true},
    techniques : [{type : String, required : true}]
})

const Ninja = mongoose.model('Ninja', userSchema);
module.exports = Ninja;