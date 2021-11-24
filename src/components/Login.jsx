import React, {useState} from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Box,
  Typography,
  Container,
  Switch } from '@mui/material'
import {Navigate} from 'react-router-dom';

export default function Login({isLoggedIn, setLoggedIn}) {

  const [isSignup, setSignup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoggedIn(prev => !prev);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  if(isLoggedIn){
    return <Navigate to='/'/>
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} validate sx={{ mt: 1 }}>
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
            <Container >
            <FormControlLabel
              control={<Switch onChange={() => {setSignup(prev => !prev)}}/>}
              label="New User?"
            />
            </Container>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isSignup ? "Sign Up" : "Login"}
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

