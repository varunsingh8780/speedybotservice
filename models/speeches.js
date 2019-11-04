const mongoose = require('mongoose')

const speechSchema = new mongoose.Schema({
    intent: {
        type: String,
        required: true
    },
    speechTemplate: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now
    },
})

module.exports = mongoose.model('Speeches', speechSchema)