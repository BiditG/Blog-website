import React from "react";
import { Container, Grid, Typography, Link, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {/* Left Section */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="h6" fontWeight="bold">My Blog</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Sharing insights on web development, tech trends, and more.
            </Typography>
          </Grid>

          {/* Middle Section - Links */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
            <Link href="/" color="inherit" underline="hover" sx={{ display: "block", mt: 1 }}>
              Home
            </Link>
            <Link href="/about" color="inherit" underline="hover" sx={{ display: "block", mt: 1 }}>
              About
            </Link>
            <Link href="/contact" color="inherit" underline="hover" sx={{ display: "block", mt: 1 }}>
              Contact
            </Link>
          </Grid>

          {/* Right Section - Social Media */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "right" }}>
            <Typography variant="h6" fontWeight="bold">Follow Us</Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton href="https://facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Text */}
        <Typography variant="body2" textAlign="center" sx={{ mt: 3, opacity: 0.8 }}>
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
