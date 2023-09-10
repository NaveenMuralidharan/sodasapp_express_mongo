const express = require("express")
const { append } = require("express/lib/response")
const Soda = require("../models/soda")

//create the router
const router = express.Router()


//routes


//SEED route
router.get("/seed", async(req, res)=>{
    await Soda.removeAllListeners({})
    const sodas = await Soda.create([
        {name: "Orange", color: "Orange", readyToEat: true},
        {name: "Cola", color: "black", readyToEat: true},
        {name: "Beer", color: "brown", readyToEat: true}
    ])
    res.json(sodas)
})

//export router
module.exports = router