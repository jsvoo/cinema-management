const seatsModel = require('../models/seat')

const express = require("express")
const router = express.Router()

// Get all Seats
router.get("/", async (req,res) => {
    let seats = await seatsModel.find().lean()
    res.send(seats)
})

// Update Seats

router.put("/:id", async (req,res) => {
    await seatsModel.updateOne({_id:req.params.id}, req.body)
    .then( async ()=>{
     const seat = await seatsModel.findOne({_id: req.params.id})
     res.send(seat) 
    })
})


// Delete Seats
router.delete("/:id", async (req,res) => {
    await seatsModel.deleteOne({ _id: req.params.id })
    res.send({ success: "seat removed"})
})

// Create Seat
router.post("/", async (req,res) => {
    let event = await seatsModel.create(req.body)
    res.send(event)
    console.log(req.body);
})

// Get One Event
router.get("/:id", async (req,res) => {
    const seat = await seatsModel.findOne({_id: req.params.id})
    res.send(seat)
})

module.exports = router