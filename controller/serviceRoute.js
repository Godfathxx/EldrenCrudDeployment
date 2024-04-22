
const express = require('express');
const serviceSchema = require('../model/serviceSchema.js');
const { mongo, default: mongoose } = require('mongoose');
const app = express();
const serviceRoute = express.Router();


serviceRoute.post("/create-service",(req,res)=>{
    serviceSchema.create(req.body,(err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})
serviceRoute.get("/",(req,res)=>{
    serviceSchema.find((err,data)=>{

        if(err)
            return err
        else
            res.json(data);
    })


})
serviceRoute.route("/update-service/:id")
.get((req,res)=>{
    serviceSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err
        else
            res.json(data);       
})
}).put((req,res)=>{
    serviceSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})
serviceRoute.delete("/delete-service/:id",(req,res)=>{
    serviceSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

module.exports = serviceRoute;