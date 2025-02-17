import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';
import PostCard from '../components/PostCard';

function CategoryPage() {
  const { category } = useParams();

  // Dummy data for demonstration; replace with actual data fetching logic
  const blogs = [
    {
      id: 1,
      title: 'Mastering the Art of Writing',
      excerpt: 'Explore the secrets behind compelling storytelling and content creation.',
      image: 'https://source.unsplash.com/random/800x600?blog,writing',
      category: 'Code',
      username: 'John Doe',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'The Future of Tech',
      excerpt: 'Dive into up-to-date trends and insights shaping the technology world.',
      image: 'https://source.unsplash.com/random/800x600?blog,tech',
      category: 'AI',
      username: 'John Doe',
      date: '2024-01-15',
    },
    {
      id: 3,
      title: 'Travel and Adventure',
      excerpt: 'Discover breathtaking experiences and hidden gems across the globe.',
      image: 'https://source.unsplash.com/random/800x600?blog,travel',
      category: 'Travel',
      username: 'John Doe',
      date: '2024-01-15',
    },
    {
      id: 4,
      title: 'Design for the Modern Era',
      excerpt: 'How contemporary design is influencing our daily lives and workspaces.',
      image: 'https://source.unsplash.com/random/800x600?blog,design',
      category: 'Design',
      username: 'John Doe',
      date: '2024-01-15',
    },
    {
      id: 5,
      title: 'Health and Wellness',
      excerpt: 'Everything you need to know about maintaining a balanced and healthy lifestyle.',
      image: 'https://source.unsplash.com/random/800x600?blog,health',
      category: 'Health',
      username: 'John Doe',
      date: '2024-01-15',
    },
  ];

  const filteredBlogs = blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
        {category} Articles
      </Typography>
      <Grid container spacing={4}>
        {filteredBlogs.map(blog => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <PostCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CategoryPage;
