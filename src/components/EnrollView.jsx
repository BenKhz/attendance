import React from 'react';
import { Button, Grid, Typography, TextField } from '@mui/material'
import axios from 'axios';
import Selector from './Selector.jsx';
import EnrollTable from './EnrollTable.jsx'

const EnrollView = ({ currentEnroll, selectObj }) => {
  const {campus, cohort} = selectObj;
  const addStudent = () => {
    var first = document.getElementById('first_name');
    var last = document.getElementById('last_name');
    var payload = {
      campus_id: campus,
      cohort_id: cohort,
      first_name: first.value,
      last_name: last.value,
    }
    first.value = '';
    last.value = '';
    axios.post('/enroll', payload)
    .then(res => console.log("Response from server: ", res.data))
  }
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
              id="last_name"
            />
            <TextField
              margin="normal"
              required
              name="first_name"
              label="First Name"
              id="first_name"
            />
            <Button onClick={addStudent}> Submit! </Button>
          </Grid>
        </Grid>
        <Grid item >
          <EnrollTable rows={currentEnroll} campus_id={campus} cohort_id={cohort} />
        </Grid>
      </Grid>
    </>
  )
}

export default EnrollView;