import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Alert } from '@mui/material';
import PostCard from '../components/PostCard';

function CategoryPage() {
  const { category } = useParams();
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Dummy blog data (replace with real API calls later)
  const blogs = [
    { id: 1, title: 'AI in the Future', excerpt: 'AI is evolving rapidly...', image: 'https://source.unsplash.com/800x600?ai', category: 'AI', username: 'John Doe', date: '2024-01-15' },
    { id: 2, title: 'Best Software Tools', excerpt: 'Software that will boost productivity...', image: 'https://source.unsplash.com/800x600?software', category: 'Software', username: 'Jane Doe', date: '2024-01-15' },
    { id: 3, title: 'Understanding Hardware', excerpt: 'Dive deep into processors, RAM, and more...', image: 'https://source.unsplash.com/800x600?hardware', category: 'Hardware', username: 'Alice Doe', date: '2024-01-15' },
    { id: 4, title: 'Code Like a Pro', excerpt: 'Master coding best practices...', image: 'https://source.unsplash.com/800x600?code', category: 'Code', username: 'Bob Doe', date: '2024-01-15' },
  ];

  // Filter blogs based on category
  useEffect(() => {
    const filtered = blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
    setFilteredBlogs(filtered);
  }, [category]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
        🏷️ {category} Articles
      </Typography>

      {/* Show Alert if No Blogs Found */}
      {filteredBlogs.length === 0 ? (
        <Alert severity="warning" sx={{ textAlign: 'center', py: 2 }}>
          No articles found in the **{category}** category. Check back later!
        </Alert>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {filteredBlogs.map(blog => (
            <Grid item xs={12} sm={8} md={6} lg={5} key={blog.id}>
              <PostCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default CategoryPage;
