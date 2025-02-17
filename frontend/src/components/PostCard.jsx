import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, IconButton, Box, Chip } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function PostCard({ blog }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  const handleReadMore = () => {
    navigate(`/post/${blog.id}`, { state: { blog } });
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 1,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 4,
        },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: 280 },
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', md: '40%' },
          height: { xs: 200, md: '100%' },
          objectFit: 'cover',
          filter: 'brightness(0.9)',
          transition: 'filter 0.3s',
          '&:hover': {
            filter: 'brightness(1)',
          },
        }}
        image={blog.image}
        alt={blog.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            ✍️ {blog.title}
          </Typography>
          {blog.category && (
            <Chip
              label={`🏷️ ${blog.category}`}
              variant="outlined"
              size="small"
              sx={{ mb: 1 }}
            />
          )}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {blog.excerpt}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            👤 Posted by {blog.username} on 📅 {new Date(blog.date).toLocaleDateString()}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
          <Button
            size="small"
            onClick={handleReadMore}
            sx={{ textTransform: 'none' }}
          >
            Read More 📖
          </Button>
          <IconButton onClick={handleLikeToggle} color={liked ? 'error' : 'default'}>
            {liked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}

export default PostCard;