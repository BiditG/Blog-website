import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, IconButton, Box, Chip } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CommentsSection from './CommentSection'; 

function PostCard({ blog }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blog.likes || 0);

  const handleLikeToggle = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  const handleReadMore = () => {
    navigate(`/post/${blog.id}`, { state: { blog } });
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: 6,
        },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: 280 },
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* Blog Image */}
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', md: '40%' },
          height: { xs: 200, md: '100%' },
          objectFit: 'cover',
          backgroundColor: '#f0f0f0',
          transition: 'all 0.3s',
          '&:hover': {
            filter: 'brightness(1.05)',
          },
        }}
        image={blog.image || 'https://via.placeholder.com/800x600?text=No+Image'}
        alt={blog.title}
      />

      {/* Blog Content */}
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
              sx={{ mb: 1, fontWeight: 'bold' }}
            />
          )}

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {blog.excerpt}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            👤 {blog.username} | 📅 {new Date(blog.date).toLocaleDateString()}
          </Typography>
        </CardContent>

        {/* Actions */}
        <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
          <Button
            size="small"
            onClick={handleReadMore}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#1976d2',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Read More 📖
          </Button>

          {/* Like Button with Count */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleLikeToggle} sx={{ color: liked ? 'red' : 'gray', transition: '0.3s' }}>
              {liked ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {likeCount}
            </Typography>
          </Box>
        </CardActions>
      </Box>


    </Card>
  );
}

export default PostCard;

