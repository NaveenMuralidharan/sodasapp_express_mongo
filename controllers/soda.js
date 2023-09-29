//Dependencies//

const express = require("express")
// const { append } = require("express/lib/response")
const Soda = require("../models/soda")

//create the router
const router = express.Router()



//Register routes
//------------------------
//INdex route
//------------------
router.get("/", (req, res)=> {
    // res.render("soda/index.ejs"), {
    //     sodas: Soda.getAll()
    // }
   res.render("soda/index.ejs", {
    sodas: Soda.getAll()
   }) 
})
//-------

//----------------
//NEW ROUTE - get new soda form
//---------------
router.get("/new",(req, res)=>{
    
    res.render("soda/new.ejs")
})

//-------------------------
//Create route
//-------------------------
router.post("/", (req, res)=>{
    
    req.body.readyToEat = req.body.readyToEat ? true : false
    Soda.create(req.body)
    res.redirect("/soda")
})


//----------------
//SHOW ROUTE
//-----------------
router.get("/:id", (req, res)=>{

    res.render("soda/show.ejs", {
        soda: Soda.getOne(req.params.id)
    })

})



// //SEED route
// router.get("/seed", async(req, res)=>{
//     await Soda.removeAllListeners({})
//     const sodas = await Soda.create([
//         {name: "Orange", color: "Orange", readyToEat: true},
//         {name: "Cola", color: "black", readyToEat: true},
//         {name: "Beer", color: "brown", readyToEat: true}
//     ])
//     res.json(sodas)
// })

//export router
module.exports = router