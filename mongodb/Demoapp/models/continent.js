const mongoose = require('mongoose');

const continentSchema = new mongoose.Schema({
        _id:mongoose.Schema.Types.ObjectId,
        continentName:{
            type:String,
            required:true
        }
    })

module.exports=mongoose.model('continents', continentSchema);