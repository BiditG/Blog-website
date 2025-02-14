import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

// Dummy blog data map
const blogData = {
  1: {
    id: 1,
    title: 'Mastering the Art of Writing',
    image: 'https://source.unsplash.com/random/800x400?writing',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tellus quis eros semper, a eleifend metus pulvinar. Phasellus a augue vel ex interdum ullamcorper. Praesent at dui quis quam aliquet tempor. Etiam euismod feugiat lacus, in vulputate risus condimentum at.',
  },
  2: {
    id: 2,
    title: 'The Future of Tech',
    image: 'https://source.unsplash.com/random/800x400?tech',
    content:
      'Suspendisse dictum, magna at volutpat ullamcorper, nunc nisi posuere lacus, non aliquam nibh nunc sed odio. Nulla a lorem sed odio tincidunt mollis. Fusce pellentesque, nulla sit amet pellentesque porta, felis nisi ullamcorper erat, non scelerisque dolor ante non eros.',
  },
  3: {
    id: 3,
    title: 'Travel and Adventure',
    image: 'https://source.unsplash.com/random/800x400?travel',
    content:
      'Curabitur quis orci bibendum, elementum nibh eget, fermentum elit. Praesent et convallis urna, a lacinia lorem. Vivamus vestibulum, justo a laoreet venenatis, libero dolor laoreet nunc, vitae facilisis ante ipsum vel erat.',
  },
};

function SinglePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData[id] || {
    title: 'Blog Post Not Found',
    image: 'https://source.unsplash.com/random/800x400?404',
    content: 'The blog post you are looking for does not exist.',
  };

  const handleNavigation = (direction) => {
    const newId = parseInt(id) + direction;
    if (blogData[newId]) {
      navigate(`/post/${newId}`);
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Card>
        <CardMedia
          component="img"
          image={blog.image}
          alt={blog.title}
          sx={{ height: 400 }}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="body1" lineHeight={1.8}>
            {blog.content}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Box>
            <Button
              variant="outlined"
              onClick={() => handleNavigation(-1)}
              disabled={!blogData[parseInt(id) - 1]}
              sx={{ mr: 1 }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleNavigation(1)}
              disabled={!blogData[parseInt(id) + 1]}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}

export default SinglePost;