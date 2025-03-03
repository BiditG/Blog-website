const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from MongoDB
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
