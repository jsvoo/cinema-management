const express = require("express")
const router = express.Router()

const eventsModel = require("../models/event")

// Get all Events
router.get("/", async (req, res) => {
    let events = await eventsModel.find().lean()
    res.send(events)
})

// Update Event
router.put("/:id", async (req, res) => {
    await eventsModel.updateOne({ _id: req.params.id }, req.body)
    .then(async () => {
        const event = await eventsModel.findOne({ _id: req.params.id })
        res.send(event)
    })
    
})




// Delete Event
router.delete("/:id", async (req, res) => {
    await eventsModel.deleteOne({ _id: req.params.id })
    res.send({ success: "event removed" })
})

// Create Event
router.post("/", async (req, res) => {
    console.log(req.body)
    let event = await eventsModel.create(req.body)
    res.send(event)
    // req.send("Seeing")

})

// Get One Event
router.get("/:id", async (req, res) => {
    const event = await eventsModel.findOne({ _id: req.params.id })
    res.send(event)
})



module.exports = router