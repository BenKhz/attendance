import React from 'react';
import { Button, Grid, Typography, TextField } from '@mui/material'
import Selector from './Selector.jsx';
import EnrollTable from './EnrollTable.jsx'

const EnrollView = ({ currentEnroll, selectObj }) => {
  const [campus, cohort] = Object.values(selectObj);
  return (
    <>
      <Selector />
      <Grid container direction="row" justifyContent="space-around" alignItems="center" >
        <Grid item>
          <Typography>Cohort: {cohort}</Typography>
          <Typography>Campus: {campus}</Typography>
        </Grid>
        <Grid item >
          <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2} >
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
            <Button onClick={() => { console.log('Submit new Name!') }}> Submit! </Button>
          </Grid>
        </Grid>
        <Grid item >
          <EnrollTable rows={currentEnroll} />
        </Grid>
      </Grid>
    </>
  )
}

export default EnrollView;