const seatsModal = require('../models/seat')

// Get all Seats
router.get("/seats", async (res,req) => {
    let seats = await seatsModal.find().lean()
    res.send(seats)
})

// Update Seats
router.get("/seats", async (res,req) => {
    let body = JSON.parse(JSON.stringify(req.body));
    let { id } = body
    await seatsModal.updateOne({_id: id}, body)
    .then(async () => {
        let newSeat = await seatsModal.findOne({ _id: id})
        res.send({ success: true, data: newSeat})
    }).catch((err) => {
        res.send(err)
    })
})

// Delete Seats
router.get("/seats/:id", async (req,res) => {
    await seatsModal.deleteOne({ _id: req.params.id })
    res.send({ success: "seat removed"})
})

// Create Seat
router.post("/seats", async (res,req) => {
    let event = await eventsModal.create(req.body)
    res.send(event)
})

// Get One Event
router.get("/seats/:id", async (res,req) => {
    const seat = await seatsModal.findOne(req.params.id)
    res.send(seat)
})

module.exports = router