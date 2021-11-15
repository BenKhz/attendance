import React from 'react';
import {Button} from '@mui/material'

const Login = () => {
  return (
      <div id="login">
        You're on the Login Page!
          <Button onClick={()=>{ console.log('Clicked!')}}> Click Me! </Button>
        Build Login Splash Page here! How do we do it?
        Lets use passport.js to define our auth strategies!
      </div>
    )
}

export default Login;