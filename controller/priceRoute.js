
const express = require('express');
const priceSchema = require('../model/priceSchema.js');
const { mongo, default: mongoose } = require('mongoose');
const app = express();
const priceRoute = express.Router();


priceRoute.post("/create-price",(req,res)=>{
    priceSchema.create(req.body,(err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})
priceRoute.get("/",(req,res)=>{
    priceSchema.find((err,data)=>{

        if(err)
            return err
        else
            res.json(data);
    })


})
priceRoute.route("/update-price/:id")
.get((req,res)=>{
    priceSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err
        else
            res.json(data);       
})
}).put((req,res)=>{
    priceSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})
priceRoute.delete("/delete-price/:id",(req,res)=>{
    priceSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

module.exports = priceRoute;