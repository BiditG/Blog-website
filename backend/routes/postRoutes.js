const express = require("express");
const Post = require("../models/Post"); // Ensure this path is correct

const router = express.Router(); // ✅ Create Express Router

// Create a New Post (POST /api/posts)
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router; // ✅ Ensure we export ONLY the router
