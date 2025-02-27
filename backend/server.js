const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/postRoutes"); // Ensure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON body

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("✅ MongoDB Connected!"));
mongoose.connection.on("error", (err) => console.log("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/posts", postRoutes);  // Ensure this line is present

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
