import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

function CommentsSection() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setComments([...comments, { text: comment, date: new Date() }]);
    setComment('');
  };

  return (
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
  );
}

export default CommentsSection;
