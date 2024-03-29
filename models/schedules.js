const mongoose = require("mongoose")
const schema = mongoose.Schema
const msg = "Field is required"
const schedulesSchema = new schema({
    movie_id: {
        type: String,
        required: [true, msg]
    }, 

    theater_id: {
        type: String,
        required: [true, msg]
    },

    cinema_id: {
        type: String,
        required: [true, msg]
    },

    vendorId: {
        type: String,
        required: [true, msg]
    }, 


    // combine date, days, time, and amount to a one-variable object
    //such as 
    //schedule:[{day:"", time:"", amount:""}, {day:"", time:"", amount:""}]


    date: {
        type: Array,
        required: [true, msg]
    },
    days: {
        type: Array,
        required: [true, msg]
    },
    times: {
        type: Array,
        required: [true, msg]
    },


    amount: {
        type: Number,
        required: [true, msg]
    },


    is_active: {
        type: Boolean,
        required: [true, msg]
    }
}) 

const schedules_model = mongoose.model("schedules", schedulesSchema)
module.exports =schedules_model;