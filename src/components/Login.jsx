import React, {useState} from 'react';
// import {Button} from '@mui/material'

// const Login = ({setLoggedIn}) => {
//   return (
//       <div id="login">
//         You're on the Login Page!
//           <Button onClick={()=>{ setLoggedIn(true)}}> Click Me! </Button>
//         Build Login Splash Page here! How do we do it?
//         Lets use passport.js to define our auth strategies!
//       </div>
//     )
// }

// export default Login;

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Navigate} from 'react-router-dom';

const theme = createTheme();

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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            <Container justifyContent="center">
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
    </ThemeProvider>
  );
}

