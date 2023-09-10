//Import dependencies
require("dotenv").config()//load env variabled
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")



////////////////////
//DATABASE CONNECTION

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//establish connection
mongoose.connect(DATABASE_URL, CONFIG)

//mongodb event listeners
mongoose.connection
    .on("open", ()=> console.log("Connected to Mongoose"))
    .on("close", ()=> console.log("DIsconnected from Mongoose"))
    .on("error", (error)=> console.log(error))                    


 /////////////////////
 //OUR MODELS//
 ///////////////////
 const {Schema, model} = mongoose   

 const fruitSchema = new Schema ({
    name: String,
    color: String,
    readyToEat: Boolean
 })

 //make fruit model
 const Fruit = model("Fruit", fruitSchema)


 ////////////////////////////
 //CREATE our express application object//
 //////////////////////////////
 const app = express()

 ////////////
 //register middleware
 ////////////
 app.use(morgan("tiny"))//logging
 app.use(methodOverride("_method"))
 app.use(express.urlencoded({extended: true}))
 app.use(express.static("public"))

 //////////////////////////////
 //Routes///
 /////////////////////
 app.get("/", (req, res)=>{
    res.send("your server is now running...better catch it!")
 })

 ////seed route
 app.get("/fruits/seed", (req, res)=>{

    const startFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false },
    ]

    // Fruit.deleteMany({},(err, data)=>{

        Fruit.create(startFruits, (err, data)=> {
            res.json(data);
        })
    // })
 })


 //////////////////////
 //server listener//
 //////////////////////
 const PORT = process.env.PORT
 app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))