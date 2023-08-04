const express = require('express');
const mongoose = require('mongoose');
const postModel = require('../model/post')

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const posts = await postModel.find({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});
router.get('/getPost/:id', async (req, res) => {
    try {
        const id = req.params.id;
        postModel.findById({ _id: id })
            .then((pst => res.json(pst)))
            .catch(err => console.log(res.json(err)))
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});
module.exports = router;
