import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PostCard({ blog }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        },
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={blog.image}
        alt={blog.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography gutterBottom variant="h4" component="div">
          {blog.title}
        </Typography>
        {blog.category && (
          <Chip
            label={blog.category}
            variant="outlined"
            size="medium"
            sx={{ mb: 2 }}
          />
        )}
        <Typography variant="body1" color="text.secondary">
          {blog.excerpt}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', p: 3 }}>
        <Button size="large" onClick={() => navigate(`/post/${blog.id}`)}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;