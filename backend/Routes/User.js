const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../model/model')
const postModel = require('../model/post')

const router = express.Router();


router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'Email already registered' });
        }

        const newUser = new userModel({
            name,
            email,
            password,
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(404).json({ message: 'Invalid email or password' });
        }

        // Password is valid, login successful
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/create', async (req, res) => {
    const { title, desc, content } = req.body;

    try {
        const newPost = new postModel({
            title,
            desc,
            content,
        });

        const savedPost = await newPost.save();

        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
