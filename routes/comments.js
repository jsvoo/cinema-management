const commentModal = require("../models/comment")


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
