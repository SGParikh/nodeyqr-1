const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        minlength:[2,'Minimum length 2 required']
    }
    // lastName:{
    //     type:String,
    //     minlength:[2,'Minimum length 2 required']
    // },
    // email:{
    //     type:String,
    //     required:true,
    //     minlength:[3,"minimum length 3 required"],
    //     match:"^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
    // },
    // about:{
    //     type:String
    // },
    // dateofbirth:{
    //     type:Date,
    //     required:true
    // }
})

module.exports=mongoose.model('users', userSchema);