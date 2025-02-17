import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

// Dummy blog data map
const blogData = {
  1: {
    id: 1,
    title: 'Mastering the Art of Writing',
    image: 'https://source.unsplash.com/random/800x400?writing',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tellus quis eros semper, a eleifend metus pulvinar. Phasellus a augue vel ex interdum ullamcorper.',
    username: 'John Doe',
    date: '2023-10-01',
  },
  2: {
    id: 2,
    title: 'The Future of Tech',
    image: 'https://source.unsplash.com/random/800x400?tech',
    content:
      'Suspendisse dictum, magna at volutpat ullamcorper, nunc nisi posuere lacus, non aliquam nibh nunc sed odio. Nulla a lorem sed odio tincidunt mollis.',
    username: 'Jane Smith',
    date: '2023-10-02',
  },
  3: {
    id: 3,
    title: 'Travel and Adventure',
    image: 'https://source.unsplash.com/random/800x400?travel',
    content:
      'Curabitur quis orci bibendum, elementum nibh eget, fermentum elit. Praesent et convallis urna, a lacinia lorem.',
    username: 'Alice Johnson',
    date: '2023-10-03',
  },
};

function SinglePost() {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog || {
    title: 'Blog Post Not Found',
    image: 'https://source.unsplash.com/random/800x400?404',
    content: 'The blog post you are looking for does not exist.',
    username: 'Unknown',
    date: 'N/A',
  };

  const handleNavigation = (direction) => {
    const newId = parseInt(blog.id) + direction;
    if (blogData[newId]) {
      navigate(`/post/${newId}`);
    }
  };

  // 🔹 Comments State
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // 🔹 Handle Comment Submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setComments([...comments, { text: comment, date: new Date() }]);
    setComment('');
  };

  return (
    <Container sx={{ py: 6 }}>
      <Card>
        {/* Blog Image */}
        <CardMedia
          component="img"
          image={blog.image}
          alt={blog.title}
          sx={{ height: 400 }}
        />
        <CardContent>
          {/* Blog Title */}
          <Typography variant="h4" component="h1" gutterBottom>
            ✍️ {blog.title}
          </Typography>

          {/* Blog Content */}
          <Typography variant="body1" lineHeight={1.8} sx={{ mb: 2 }}>
            {blog.content}
          </Typography>

          {/* Author Info */}
          <Typography variant="caption" color="text.secondary">
            👤 Posted by {blog.username} on 📅 {new Date(blog.date).toLocaleDateString()}
          </Typography>
        </CardContent>

        {/* Navigation Buttons */}
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" onClick={() => navigate(-1)}>
            🔙 Back
          </Button>
          <Box>
            <Button
              variant="outlined"
              onClick={() => handleNavigation(-1)}
              disabled={!blogData[parseInt(blog.id) - 1]}
              sx={{ mr: 1 }}
            >
              ⬅️ Previous
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleNavigation(1)}
              disabled={!blogData[parseInt(blog.id) + 1]}
            >
              Next ➡️
            </Button>
          </Box>
        </Box>
      </Card>

      {/* 📝 Comments Section */}
      <Box sx={{ mt: 4, p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          💬 Comments ({comments.length})
        </Typography>
        
        {/* Comment Input */}
        <form onSubmit={handleCommentSubmit} style={{ display: 'flex', gap: '10px' }}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Post
          </Button>
        </form>

        {/* Comment List */}
        <List sx={{ mt: 2 }}>
          {comments.map((c, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText primary={c.text} secondary={c.date.toLocaleString()} />
              </ListItem>
              {index < comments.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default SinglePost;
