const adminModel = require("../models/admin")
const express = require("express")
const router = express.Router()


// Get all Admins
router.get("/admins", async (req, res) => {
    let admins = await adminModel.find().lean()
    res.send(admins)
})

// Update Admin
router.get("/admins/:id", async (req, res) => {
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
router.get("/admins/:id", async (req,res) => {
    await adminModel.deleteOne({ _id: req.params.id })
    res.send({ success: "admin removed"})
})

// Create Admin
router.post("/admins", async (req, res) => {
    let admin = await eventsModal.create(req.body)
    res.send(admin)
})


// router.post("/postAdmin", upload.any(), (req, res) => {
//     let admin = new adminModel(req.body)

//     req.files.map(e => {
//         switch (e.fieldname) {
//             case "image":
//                 post.image = e.fieldname
//                 break;
//         }
//     })
//     post.save()
//     res.send(admin)
// })




// Get One Admin

router.get("/admins/:id", async (req, res) => {
    const admin = await adminModel.findOne(req.params.id)
    res.send(admin)
})


module.exports = router