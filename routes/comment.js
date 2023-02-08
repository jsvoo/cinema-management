const commentModel = require("../models/comment")
const express = require("express")
const router = express.Router()




// Create Comment
router.post("/", async (req, res) => {
    console.log(req.body)
    let event = await commentModel.create(req.body)
    res.send(event) 
    console.log(req.body)
    // req.send(req.body)

    // res.send("seeing")  
})


// Get all Comments
router.get("/", async (req, res) => {
    let comments = await commentModel.find().lean()
    res.send(comments)
}) 

// Update Comment
router.put("/:id", async (req,res) => {
   await commentModel.updateOne({_id:req.params.id}, req.body)
   .then( async ()=>{
    const comment = await commentModel.findOne({_id: req.params.id})
    res.send(comment) 
   })
   
    // let body = JSON.parse(JSON.stringify(req.body));
    // let { id } = body
    // await commentModel.updateOne({_id: id}, body)
    // .then(async () => {
    //     let newComent = await commentModel.findOne({ _id: id})
    //     res.send({ success: true, data: newComent})
    // }).catch((err) => {
    //     res.send(err)
    // })
})

// Delete Comment
router.delete("/:id", async (req, res) => {
    await commentModel.deleteOne({ _id: req.params.id })
    res.send({ success: "comment removed"})
})


// Get One Commnet
router.get("/:id", async (req, res) => {
    const comment = await commentModel.findOne({_id: req.params.id})
    res.send(comment)
})



module.exports = router