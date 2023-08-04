const mongoose = require('mongoose');

// Database Schema
const postSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    desc: {
        type: String,
    },
    content: {
        required: true,
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now, // Set the default value to the current date/time
    },
});

// Database Model
const postModel = new mongoose.model('posts', postSchema);

module.exports = postModel;