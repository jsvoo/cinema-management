const seatsModal = require('../models/seats')
const adminModel = require("../models/admin")
const commentModal = require("../models/comments")
const eventsModal = require("../models/events")


// Get all Admins
router.get("/admins", async (res,req) => {
    let admins = await adminModel.find().lean()
    res.send(admins)
})

// Update Admin
router.get("/updateAdmins/:id", async (res,req) => {
    let body = JSON.parse(JSON.stringify(req.body));
    let { id } = body
    await adminModel.updateOne({_id: id}, body)
    .then(async () => {
        let newAdmin = await adminModel.findOne({ _id: id})
        res.send({ success: true, data: newAdmin})
    }).catch((err) => {
        res.send(err)
    })
})

// Delete Admin
router.get("/removeAdmin/:id", async (req,res) => {
    await adminModel.deleteOne({ _id: req.params.id })
    res.send({ success: "admin removed"})
})

// Create Admin
router.post("/postAdmin", upload.any(), (res,req) => {
    let admin = new adminModel(req.body)

    req.files.map(e => {
        switch (e.fieldname) {
            case "image":
                post.image = e.fieldname
                break;
        }
    })
    post.save()
    res.send(admin)
})

// Get One Admin
router.get("/admin/:id", async (res,req) => {
    const admin = await adminModel.findOne(req.params.id)
    res.send(admin)
})






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




// Get all Comments
router.get("/comments", async (res,req) => {
    let events = await commentModal.find().lean()
    res.send(events)
})

// Update Comment
router.get("/updateComment/:id", async (res,req) => {
    let body = JSON.parse(JSON.stringify(req.body));
    let { id } = body
    await commentModal.updateOne({_id: id}, body)
    .then(async () => {
        let newComent = await commentModal.findOne({ _id: id})
        res.send({ success: true, data: newComent})
    }).catch((err) => {
        res.send(err)
    })
})

// Delete Comment
router.get("/removeComment/:id", async (req,res) => {
    await commentModal.deleteOne({ _id: req.params.id })
    res.send({ success: "comment removed"})
})

// Create Comment
router.post("/postComment", async (res,req) => {
    let event = await commentModal.create(req.body)
    res.send(event)
})

// Get One Commnet
router.get("/comments/:id", async (res,req) => {
    const comment = await commentModal.findOne(req.params.id)
    res.send(comment)
})



// Get all Seats
router.get("/seats", async (res,req) => {
    let seats = await seatsModal.find().lean()
    res.send(seats)
})

// Update Seats
router.get("/updateSeats/:id", async (res,req) => {
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
router.get("/removeSeat/:id", async (req,res) => {
    await seatsModal.deleteOne({ _id: req.params.id })
    res.send({ success: "seat removed"})
})

// Create Seat
router.post("/postEvent", async (res,req) => {
    let event = await eventsModal.create(req.body)
    res.send(event)
})

// Get One Event
router.get("/seat/:id", async (res,req) => {
    const seat = await seatsModal.findOne(req.params.id)
    res.send(seat)
})