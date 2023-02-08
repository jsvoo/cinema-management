const commentModel = require("../models/comment")
const express = require("express")
const router = express.Router()




// Create Comment
router.post("/", async (req, res) => {
    console.log(req.body)
    let event = await commentModel.create(req.body)
    res.send(event) 
    // console.log(req.body)
    // req.send(req.body)

    // res.send("seeing")  
})


// Get all Comments
router.get("/", async (res,req) => {
    let events = await commentModel.find().lean()
    res.send(events)
}) 

// Update Comment
router.get("/comments", async (res,req) => {
    let body = JSON.parse(JSON.stringify(req.body));
    let { id } = body
    await commentModel.updateOne({_id: id}, body)
    .then(async () => {
        let newComent = await commentModel.findOne({ _id: id})
        res.send({ success: true, data: newComent})
    }).catch((err) => {
        res.send(err)
    })
})

// Delete Comment
router.get("/comments/:id", async (req,res) => {
    await commentModel.deleteOne({ _id: req.params.id })
    res.send({ success: "comment removed"})
})


// Get One Commnet
router.get("/comments/:id", async (res,req) => {
    const comment = await commentModel.findOne(req.params.id)
    res.send(comment)
})



module.exports = router