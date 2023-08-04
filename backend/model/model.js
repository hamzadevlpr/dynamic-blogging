const mongoose = require('mongoose');

// Database Schema
const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
});

// Database Model
const userModel = new mongoose.model('users', userSchema);

module.exports = userModel;