import React from 'react';
import {Link} from 'react-router-dom'
import {Button, Grid, Typography, Container} from '@mui/material'
import {TextField} from '@mui/material'
import Selector from './Selector.jsx';
import EnrollTable from './EnrollTable.jsx'

const EnrollView = ({currentEnroll, selectObj}) => {
  const [campus, cohort] = Object.keys(selectObj);
  const enrolledList = currentEnroll.map(student => <div>{student.first_name} {student.last_name}</div>)
  return (
    <>
    <Selector />
    <Container>
      <Typography >{cohort}</Typography>
      <Typography >{campus}</Typography>
    </Container>
    <Grid container size={12} >
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
      <EnrollTable rows={currentEnroll} />
      </Grid>
    </Grid>
    </>
  )
}

export default EnrollView;