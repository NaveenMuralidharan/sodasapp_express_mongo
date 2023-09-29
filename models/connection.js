require("dotenv").config()//load env variables
const mongoose = require("mongoose")



////////////////////
//DATABASE CONNECTION

const DATABASE_URL = process.env.DATABASE_URL
// const CONFIG = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

//establish connection
mongoose.connect(DATABASE_URL)

//mongodb event listeners
mongoose.connection
    .on("open", ()=> console.log("Connected to Mongoose"))
    .on("close", ()=> console.log("DIsconnected from Mongoose"))
    .on("error", (error)=> console.log(error))                    

module.exports = mongoose