import React, {useState} from 'react';
import {Button, Grid, Switch, Box} from '@mui/material'
import Selector from './Selector.jsx';

const AttendView = ({currentEnroll, setEnroll}) => {
  const [present, setPresent] = useState([]);
  const attendSwitches = currentEnroll.map(student => {
    return (
      <Box sx={{display:'flex', flexDirection:'row', alignItems:"center"}} key={student.id}>
        <div>
          {`${student.first_name} ${student.last_name}`}
        </div>
        <Switch />
      </Box>
    )
  })
  return (
    <>
    <Selector />
    <Grid container>
      <Grid item>
        <div id='attendView'>
          {attendSwitches}
        </div>
      </Grid>
    </Grid>
    </>
  )
}

export default AttendView;