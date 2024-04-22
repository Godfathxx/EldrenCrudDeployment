
const mongoose = require("mongoose");
const priceSchema = new mongoose.Schema({
    "Name":{type:String},
    "ID":{type:String},
    "Phone":{type:String},
    "EmailID":{type:String},
    "Plan":{type:String},

    },{
        collection: "price"    
    
    })
    module.exports = mongoose.model("priceSchema",priceSchema);