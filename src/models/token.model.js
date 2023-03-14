const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        red: 'user'
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 15
    }
})

module.exports = mongoose.model("Token", tokenSchema)