import React, { useState, useEffect } from 'react';
import { Button, Container, Box, Select, Typography, MenuItem, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SentimentNeutralOutlined } from '@mui/icons-material';

const CohortMenu = ({ selectObj, updateSelect, setEnroll }) => {

  useEffect(() => { console.log("Axios request should query cohorts and campuses") }, [])
  useEffect(() => {
    if(selectObj.campus && selectObj.cohort) {
      console.log(" Use Select Obj to fire axios and use setEnroll on response.")
    }
    setEnroll(["Enroll data dummy 1", "Enroll data dummy 2"])
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
            sx={{ minWidth: '120px' }}
          >
            <MenuItem value="">
              <em>Campus</em>
            </MenuItem>
            <MenuItem value={"hrlax"}>HR-LAX</MenuItem>
            <MenuItem value={"hrden"}>HR-DEN</MenuItem>
            <MenuItem value={"hrsf"}>HR-SF</MenuItem>
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
            <MenuItem value="">
              <em>Cohort</em>
            </MenuItem>
            <MenuItem value={"47/48"}>47 and 48</MenuItem>
            <MenuItem value={"46/47"}>46 and 47</MenuItem>
            <MenuItem value={"45/46"}>45 and 46</MenuItem>
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