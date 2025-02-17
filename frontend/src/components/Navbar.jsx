import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Toggle mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Open/Close Account Menu
  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  // Navigation Categories
  const navItems = [
    { title: 'AI', path: '/category/ai' },
    { title: 'Hardware', path: '/category/hardware' },
    { title: 'Software', path: '/category/software' },
    { title: 'Apps', path: '/category/apps' },
    { title: 'Code', path: '/category/code' },
    { title: 'Create Post', path: '/create-post' },
  ];

  // Mobile Drawer Menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TechWire
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} button component={Link} to={item.path}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'block', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
          BiditBlogs
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button key={item.title} component={Link} to={item.path} sx={{ color: 'text.primary', mx: 1 }}>
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Accounts Dropdown Menu */}
          <Box>
            <IconButton
              color="inherit"
              onClick={handleAccountMenuOpen}
              sx={{ ml: 2 }}
            >
              <AccountCircleIcon fontSize="large" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleAccountMenuClose}
              keepMounted
            >
              <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
              <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
              <MenuItem onClick={() => navigate('/register')}>Register</MenuItem>
              <MenuItem onClick={() => navigate('/logout')}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;
