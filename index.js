
const express = require("express");
const mongoose = require("mongoose");
const priceRoute = require("./controller/priceRoute.js");
const serviceRoute = require("./controller/serviceRoute.js");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();



mongoose.set("strictQuery",true); //Depercation Warning //To supress the warning
mongoose.connect("mongodb+srv://shreyashjoshi2021:12345@cluster0.ivgazft.mongodb.net/");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/priceRoute",priceRoute);
app.use("/serviceRoute",serviceRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000")


});