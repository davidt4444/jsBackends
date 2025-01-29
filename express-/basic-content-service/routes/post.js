const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Example route to get all post
router.get('/', async (req, res) => {
    try {
        const newPost = await Post.findAll();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Example route to get a post
router.get('/:id', async (req, res) => {
    try {
        const newPost = await Post.findAll(
            {where:{id:req.params.id}}
        );
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Example route to create a new post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Example route to update a post
router.put('/:id', async (req, res) => {
    try {
        const newPost = await Post.update(req.body,
            {where:{id:req.params.id}}
         );
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Example route to delete a post
router.delete('/:id', async (req, res) => {
    try {
        const newPost = await Post.destroy(
            {where:{id:req.params.id}}
         );
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Add more routes for CRUD operations as needed
module.exports = router;
