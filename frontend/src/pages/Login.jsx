import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

function Login() {
  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Login
      </Typography>
      <Box component="form" sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ mb: 2 }}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="text"
          sx={{ textTransform: 'none' }}
        >
          Forgot Password?
        </Button>
      </Box>
    </Container>
  );
}

export default Login;