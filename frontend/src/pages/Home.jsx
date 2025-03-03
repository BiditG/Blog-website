import React, { useState, useEffect } from 'react';
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
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import axios from 'axios';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogs, setBlogs] = useState([]); // State for posts
  const navigate = useNavigate();

  const categories = ['All', 'Code', 'AI', 'Travel'];

  // Fetch posts from MongoDB
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

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
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: '#333',
          fontSize: '48px',
        }}
      >
        Think. Write. Inspire 📝
      </Typography>

      {/* Search Bar */}
      <Box component="form" onSubmit={handleSearchSubmit} sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <TextField
          variant="outlined"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" sx={{ color: '#1976d2' }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: '100%', sm: '60%', md: '50%' }, borderRadius: 3 }}
        />
      </Box>

      {/* Category Filter */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>Filter by Category</Typography>
        <Select value={selectedCategory} onChange={handleCategoryChange} sx={{ minWidth: 200, borderRadius: 3 }}>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Blog Posts */}
      <Grid container spacing={4} justifyContent="center">
        {filteredBlogs.map((blog) => (
          <Grid item xs={12} key={blog._id}>
            <PostCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;

