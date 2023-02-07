const eventsModal = require("../models/event")

// Get all Events
router.get("/events", async (res,req) => {
    let events = await eventsModal.find().lean()
    res.send(events)
})

// Update Event
router.get("/updateEvent/:id", async (res,req) => {
    let body = JSON.parse(JSON.stringify(req.body));
    let { id } = body
    await eventsModal.updateOne({_id: id}, body)
    .then(async () => {
        let newEvent = await eventsModal.findOne({ _id: id})
        res.send({ success: true, data: newEvent})
    }).catch((err) => {
        res.send(err)
    })
})

// Delete Event
router.get("/removeEvent/:id", async (req,res) => {
    await eventsModal.deleteOne({ _id: req.params.id })
    res.send({ success: "event removed"})
})

// Create Event
router.post("/postEvent", async (res,req) => {
    let event = await eventsModal.create(req.body)
    res.send(event)
})

// Get One Event
router.get("/events/:id", async (res,req) => {
    const event = await eventsModal.findOne(req.params.id)
    res.send(event)
})
