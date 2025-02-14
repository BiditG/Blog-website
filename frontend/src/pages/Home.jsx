import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  InputAdornment,
  Grid,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  // Dummy blog data with category for demonstration
  const blogs = [
    {
      id: 1,
      title: 'Mastering the Art of Writing',
      excerpt: 'Explore the secrets behind compelling storytelling and content creation.',
      image: 'https://source.unsplash.com/random/800x600?blog,writing',
      category: 'Code',
    },
    {
      id: 2,
      title: 'The Future of Tech',
      excerpt: 'Dive into up-to-date trends and insights shaping the technology world.',
      image: 'https://source.unsplash.com/random/800x600?blog,tech',
      category: 'AI',
    },
    {
      id: 3,
      title: 'Travel and Adventure',
      excerpt: 'Discover breathtaking experiences and hidden gems across the globe.',
      image: 'https://source.unsplash.com/random/800x600?blog,travel',
      category: 'Travel',
    },
    {
      id: 4,
      title: 'Design for the Modern Era',
      excerpt: 'How contemporary design is influencing our daily lives and workspaces.',
      image: 'https://source.unsplash.com/random/800x600?blog,design',
      category: 'Design',
    },
    {
      id: 5,
      title: 'Health and Wellness',
      excerpt: 'Everything you need to know about maintaining a balanced and healthy lifestyle.',
      image: 'https://source.unsplash.com/random/800x600?blog,health',
      category: 'Health',
    },
  ];

  const categories = ['All', 'Code', 'AI', 'Travel', 'Design', 'Health'];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <Container sx={{ py: 4 }}>
      {/* Search Section */}
      <Box
        component="form"
        onSubmit={handleSearchSubmit}
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: '100%', sm: '60%', md: '50%' } }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
          Search
        </Button>
      </Box>

      {/* Category Filter Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Filter by Category
        </Typography>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          displayEmpty
          sx={{ minWidth: 200 }}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Blog Cards Section */}
      <Grid container spacing={4}>
        {filteredBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <PostCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;