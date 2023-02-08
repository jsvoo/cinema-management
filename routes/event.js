const express = require("express")
const router = express.Router()

const eventsModel = require("../models/event")

// Get all Events
router.get("/", async (req,res) => {
    let events = await eventsModel.find().lean()
    res.send(events)
})

// Update Event
router.get("/", async (req,res) => {
    let body = JSON.parse(JSON.stringify(req.body));
    let { id } = body
    await eventsModal.updateOne({_id: id}, body)
    .then(async () => {
        let newEvent = await eventsModel.findOne({ _id: id})
        res.send({ success: true, data: newEvent})
    }).catch((err) => {
        res.send(err)
    })
})

// Delete Event
router.get("/:id", async (req,res) => {
    await eventsModel.deleteOne({ _id: req.params.id })
    res.send({ success: "event removed"})
})

// Create Event
router.post("/", async (req, res) => {
    console.log(req.body)
    let event = await eventsModel.create(req.body)
    res.send(event)
    // req.send("Seeing")

})

// Get One Event
router.get("/events/:id", async (req,res) => {
    const event = await eventsModel.findOne(req.params.id)
    res.send(event)
})



module.exports = router