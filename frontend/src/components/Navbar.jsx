import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  InputBase,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// Styled container for the search field
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
  },
}));

// Wrapper for the search icon inside the input
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Styled InputBase
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  // Updated navigation items to include "Create Post"
  const navItems = [
    { title: 'AI', path: '/ai' },
    { title: 'Hardware', path: '/hardware' },
    { title: 'Software', path: '/software' },
    { title: 'Apps', path: '/apps' },
    { title: 'Code', path: '/code' },
    { title: 'Create Post', path: '/create-post' },
  ];

  // Drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TechWire
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} component={Link} to={item.path}>
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
          {/* Mobile and Medium screen menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'block', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              mr: 4,
            }}
          >
            <Box
              component="img"
              src="...\public\HD-wallpaper-cool-pikachu-black-glasses-cartoon-animation-thumbnail.jpg"
              alt="TechWire"
              sx={{ height: 40, mr: 1 }}
            />
            TechWire
          </Typography>

          {/* Navigation Items */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
                component={Link}
                to={item.path}
                sx={{
                  color: 'text.primary',
                  mx: 1,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Subscribe and Sign In buttons */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button color="primary" sx={{ mr: 2 }}>
              Subscribe
            </Button>
            <Button>Sign In</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile and Medium Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;
