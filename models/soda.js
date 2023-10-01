// const mongoose = require("./connection")

//SODA SCHEMA//-definition or shape of soda schema
// const sodaSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     color: String,
//     readyToEat: Boolean
// }, {timestamps: true})

// // Soda model - interface with database for sodas

// const Soda = mongoose.model("Soda", sodaSchema)

const Soda = {
    data: [
        {name: "Orange soda", color: "Orange", readyToEat: false},
        {name: "Root Beer", color: "Brown", readyToEat: false},
    ],
    getAll: function(){
        // console.log(this.data)
        return this.data
    },
    getOne: function(index){
        // console.log(this.data[index])
        return this.data[index]
    },
    create: function(newSoda){
        this.data.push(newSoda)
    },
    update: function(index, updates){
        this.data[index]= updates
    }
}

//export soda model
module.exports = Soda