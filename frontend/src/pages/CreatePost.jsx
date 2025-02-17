import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
  Input,
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, content, image });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setImagePreview(null);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h4" component="h1" align="center" fontWeight="bold" sx={{ mb: 3 }}>
          ✍️ Create a New Post
        </Typography>

        {/* Form Box */}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Post Title */}
          <TextField
            required
            fullWidth
            label="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
            }}
          />

          {/* Post Content with Expandable Height */}
          <TextField
            required
            fullWidth
            multiline
            minRows={4}
            maxRows={10}
            label="Post Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
            }}
          />

          {/* Image Upload & Preview */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <IconButton component="label">
              <input type="file" hidden onChange={handleImageChange} />
              <AddPhotoAlternateIcon fontSize="large" color="primary" />
            </IconButton>

            {imagePreview && (
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <img src={imagePreview} alt="Preview" width="100" height="100" style={{ borderRadius: 8, objectFit: 'cover' }} />
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                  }}
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </Box>
            )}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button type="submit" variant="contained" color="primary" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
              Submit 🚀
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCancel}
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
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
