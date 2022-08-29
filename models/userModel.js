const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: Number,
        unique: true
    },
    password: {
        required: true,
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('User', userSchema)