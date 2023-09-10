const mongoose = require("./connection")

//SODA SCHEMA//-definition or shape of soda schema
const sodaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: String,
    readyToEat: Boolean
}, {timestamps: true})

// Soda model - interface with database for sodas

const Soda = mongoose.model("Soda", sodaSchema)

//export soda model
module.exports = Soda