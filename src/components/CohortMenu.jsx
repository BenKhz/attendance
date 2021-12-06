import React, { useState, useEffect } from 'react';
import { Button, Container, Box, Select, Typography, MenuItem, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SentimentNeutralOutlined } from '@mui/icons-material';

const CohortMenu = ({ selectObj, updateSelect, setEnroll, campuses, cohorts }) => {

  useEffect(() => {
    if(selectObj.campus && selectObj.cohort) {
      axios.get('/enroll', {params: selectObj})
      .then(res => { setEnroll(res.data)})
      .catch(err => { console.error(err)})
    }
  }, [selectObj])

  return (
    <Container>
      <Box sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <Typography className="blur-out-expand"> Please select data for campus </Typography>
          <InputLabel id="campusSelect">Campus</InputLabel>
          <Select
            labelId="campusSelect"
            id="campusSelectControl"
            onChange={(e) => { updateSelect({ ...selectObj, 'campus': e.target.value }) }}
            label="campusSelectDrop"
            value={selectObj.campus || ''}
            sx={{ minWidth: '120px' }} >
              {campuses.map(campus => <MenuItem value={campus.id} key={campus.id}>{campus.campus}</MenuItem>)}
          </Select>

      </Box>
      <Box sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <Typography className="blur-out-expand"> and Cohort </Typography>
          <Select
            // labelId="cohortSelect"
            id="cohortSelectControl"
            onChange={(e) => { updateSelect({ ...selectObj, 'cohort': e.target.value }) }}
            label="cohortSelectDrop"
            value={selectObj.cohort || ''}
            sx={{ minWidth: '120px' }}
          >
            {cohorts.map(cohort => <MenuItem value={cohort.id} key={cohort.id}>{cohort.cohort}</MenuItem>)}
          </Select>

      </Box>
      <Box sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <Link to='/attendView'>
          <Button onClick={() => { console.log('Attendance View Button Clicked!') }}> Continue! </Button>
        </Link>
      </Box>
    </Container>

  )
}

export default CohortMenu;