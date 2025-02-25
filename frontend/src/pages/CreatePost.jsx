import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ClearIcon from "@mui/icons-material/Clear";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await axios.post("http://localhost:5000/api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Post saved:", response.data);

      // Reset form after successful submission
      setTitle("");
      setContent("");
      setImages([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Error saving post", error);
    }
  };

  // Handle multiple image uploads
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
    setImagePreviews([...imagePreviews, ...files.map((file) => URL.createObjectURL(file))]);
  };

  // Remove selected image
  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(updatedImages);
    setImagePreviews(updatedPreviews);
  };

  // Reset form
  const handleCancel = () => {
    setTitle("");
    setContent("");
    setImages([]);
    setImagePreviews([]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 3 }}>
          ✍️ Create a New Post
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Post Title */}
          <TextField
            required
            fullWidth
            label="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ backgroundColor: "white", borderRadius: 2 }}
          />

          {/* Rich Text Editor */}
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            style={{ height: "200px", marginBottom: "20px", backgroundColor: "white", borderRadius: "8px" }}
          />

          {/* Image Upload & Preview */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <IconButton component="label">
              <input type="file" multiple hidden onChange={handleImageChange} />
              <AddPhotoAlternateIcon fontSize="large" color="primary" />
            </IconButton>

            {imagePreviews.map((preview, index) => (
              <Box key={index} sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={preview}
                  alt="Preview"
                  width="100"
                  height="100"
                  style={{ borderRadius: 8, objectFit: "cover" }}
                />
                <IconButton
                  size="small"
                  sx={{ position: "absolute", top: 0, right: 0, backgroundColor: "rgba(255,255,255,0.8)" }}
                  onClick={() => removeImage(index)}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button type="submit" variant="contained" color="primary" sx={{ textTransform: "none", fontWeight: "bold" }}>
              Submit 🚀
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCancel}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Cancel ❌
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default CreatePost;
