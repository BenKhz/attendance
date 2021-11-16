import React from 'react';
import {Link} from 'react-router-dom'
import {Button, Grid} from '@mui/material'
import Selector from './Selector.jsx';

const AttendView = () => {
  return (
    <>
    <Selector />
    <Grid container justifyContent="center">
      <Grid item>
        <div id='attendView'> This is the Attendance view
          <Link to='/enrollView'>
              <Button onClick={()=>{ console.log('Clicked!')}}> Click Me! </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
    </>
  )
}

export default AttendView;