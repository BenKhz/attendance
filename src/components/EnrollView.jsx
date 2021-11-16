import React from 'react';
import {Link} from 'react-router-dom'
import {Button, Grid} from '@mui/material'
import {TextField} from '@mui/material'
import Selector from './Selector.jsx';

const EnrollView = () => {
  return (
    <>
    <Selector />
    <Grid container size={12} justifyContent="center" alignItems="center" >
      <Grid item alignItems="center">
      <TextField
              margin="normal"
              required
              name="last_name"
              label="Last Name"
              id="password"
            />
      <TextField
        margin="normal"
        required
        name="first_name"
        label="First Name"
        id="first_name"
      />
      <Button onClick={()=>{ console.log('Submit new Name!')}}> Submit! </Button>
      </Grid>
    <Grid item>
      <Link to='/attendView'>
          <Button onClick={()=>{ console.log('Clicked!')}}> Click Me! </Button>
      </Link>
    </Grid>
    </Grid>
    </>
  )
}

export default EnrollView;