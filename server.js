//Import dependencies
require("dotenv").config()//load env variabled
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const SodaRouter = require("./controllers/soda")//import router

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
 app.use("/static",express.static("public"))
 app.use("/soda", SodaRouter)
 
//Routes and routers//

app.get("/", (req, res)=> {
    res.send("Server is running")
})



 //////////////////////
 //server listener//
 //////////////////////
 const PORT = process.env.PORT
 app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))