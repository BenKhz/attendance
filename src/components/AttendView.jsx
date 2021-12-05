import React, {useState} from 'react';
import {Button, Grid, Switch} from '@mui/material'
import Selector from './Selector.jsx';

const AttendView = ({currentEnroll, setEnroll}) => {
  const [present, setPresent] = useState([]);
  const attendSwitches = currentEnroll.map(each => {
    return (
      <>
      <div>
        {each}
      </div>
      <Switch />
      </>
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