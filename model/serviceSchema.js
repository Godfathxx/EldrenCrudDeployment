
const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
    "Name":{type:String},
    "ID":{type:String},
    "Phone":{type:String},
    "EmailID":{type:String},
    "Service":{type:String},

    },{
        collection: "service"    
    
    })
    module.exports = mongoose.model("serviceSchema",serviceSchema);