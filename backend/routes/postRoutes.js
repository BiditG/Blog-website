const express = require("express");
const multer = require("multer");
const Post = require("../models/Post");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });


router.post("/", upload.array("images", 5), async (req, res) => {
  try {
    const { title, content } = req.body;
    const imagePaths = req.files.map(file => `/uploads/${file.filename}`); 

    const newPost = new Post({ title, content, images: imagePaths });
    await newPost.save();

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Fetch All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;

