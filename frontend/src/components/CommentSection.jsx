import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Avatar,
  Paper,
  Fade
} from '@mui/material';
import { Send } from '@mui/icons-material';

function CommentsSection() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    // Add comment to the list with a timestamp
    setComments([...comments, { text: comment, date: new Date() }]);
    setComment('');
  };

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 3,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
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
          sx={{
            backgroundColor: 'white',
            borderRadius: '8px',
            '& fieldset': { border: 'none' },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ minWidth: '100px', textTransform: 'none' }}
          endIcon={<Send />}
        >
          Post
        </Button>
      </form>

      {/* No comments message */}
      {comments.length === 0 && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
          No comments yet. Be the first to share your thoughts!
        </Typography>
      )}

      {/* Comment List */}
      <List sx={{ mt: 2 }}>
        {comments.map((c, index) => (
          <Fade in={true} key={index} timeout={500}>
            <ListItem sx={{ alignItems: 'flex-start', p: 1 }}>
              <Avatar sx={{ bgcolor: '#1976d2', mr: 2 }}>
                {c.text.charAt(0).toUpperCase()}
              </Avatar>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
                    {c.text}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {c.date.toLocaleString()}
                  </Typography>
                }
              />
            </ListItem>
          </Fade>
        ))}
      </List>

      {/* Divider for UI Separation */}
      {comments.length > 0 && <Divider sx={{ mt: 2 }} />}
    </Paper>
  );
}

export default CommentsSection;
