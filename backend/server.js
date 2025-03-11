const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const postRoutes = require("./routes/postRoutes"); // Ensure this path is correct

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Parses JSON body

// ✅ Connect to MongoDB (Fixing localhost issue)
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/blogDB";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Routes
app.use("/api/posts", postRoutes);

// ✅ Serve Static Files (For Image Uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
