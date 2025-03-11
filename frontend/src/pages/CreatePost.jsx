import React, { useState } from "react";
import {
  Container, TextField, Button, Typography, Box, Paper, IconButton, ToggleButton, ToggleButtonGroup
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ClearIcon from "@mui/icons-material/Clear";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [format, setFormat] = useState([]);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

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

      console.log("✅ Post saved:", response.data);
      setTitle("");
      setContent("");
      setImages([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("❌ Error saving post", error);
    }
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
    setImagePreviews([...imagePreviews, ...files.map((file) => URL.createObjectURL(file))]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  const applyFormatting = (style) => {
    let newText = content;
    if (style === "bold") newText = `<b>${content}</b>`;
    if (style === "italic") newText = `<i>${content}</i>`;
    if (style === "underline") newText = `<u>${content}</u>`;
    setContent(newText);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 3 }}>
          ✍️ Create a New Post
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField required fullWidth label="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <ToggleButtonGroup
            value={format}
            onChange={(e, newFormat) => {
              setFormat(newFormat);
              applyFormatting(newFormat);
            }}
            aria-label="text formatting"
            sx={{ mb: 2 }}
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <TextField required fullWidth multiline minRows={4} maxRows={10} label="Post Content" value={content} onChange={(e) => setContent(e.target.value)} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <IconButton component="label">
              <input type="file" multiple hidden onChange={handleImageChange} />
              <AddPhotoAlternateIcon fontSize="large" color="primary" />
            </IconButton>

            {imagePreviews.map((preview, index) => (
              <Box key={index} sx={{ position: "relative", display: "inline-block" }}>
                <img src={preview} alt="Preview" width="100" height="100" style={{ borderRadius: 8, objectFit: "cover" }} />
                <IconButton size="small" sx={{ position: "absolute", top: 0, right: 0 }} onClick={() => removeImage(index)}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button type="submit" variant="contained" color="primary">Submit 🚀</Button>
            <Button variant="outlined" color="secondary" onClick={() => { setTitle(""); setContent(""); setImages([]); setImagePreviews([]); }}>Cancel ❌</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default CreatePost;
