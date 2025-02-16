import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Input } from '@mui/material';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ title, content, image });
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Create a New Post
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Post Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
          id="content"
          label="Post Content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Input
          type="file"
          onChange={handleImageChange}
          sx={{ mt: 2, mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setTitle('');
              setContent('');
              setImage(null);
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default CreatePost;