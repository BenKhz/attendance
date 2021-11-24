import React, {useState, useEffect} from 'react';
import {Button, Container, Box, Select, Typography, MenuItem, InputLabel} from '@mui/material';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { SentimentNeutralOutlined } from '@mui/icons-material';

const CohortMenu = ({selectObj, updateSelect, setEnroll}) => {

  useEffect(()=>{console.log("Axios request should query cohorts and campuses")}, [])
  useEffect(()=>{
    console.log("Axios query to populate / use setEnroll")
    setEnroll("Enrollment set useEffect, fired!")}, [selectObj])

  return(
  <Container>
    <Typography>I would like to interact with student data for
      <Select
          labelId="campusSelect"
          id="campusSelectControl"
          onChange={(e) => {updateSelect({...selectObj, 'campus': e.target.value})}}
          label="campusSelectDrop"
          value={""}
          sx={{minWidth: '120'}}
        >
          <MenuItem value="">
            <em>Campus</em>
          </MenuItem>
          <MenuItem value={"hrlax"}>HR-LAX</MenuItem>
          <MenuItem value={"hrden"}>HR-DEN</MenuItem>
          <MenuItem value={"hrsf"}>HR-SF</MenuItem>
      </Select>
      campus, and cohort
      <Select
          labelId="cohortSelect"
          id="cohortSelectControl"
          onChange={(e) => {updateSelect({...selectObj, 'cohort': e.target.value})}}
          label="cohortSelectDrop"
          value={""}
          sx={{minWidth: '120'}}
        >
          <MenuItem value="">
            <em>Cohort</em>
          </MenuItem>
          <MenuItem value={"47/48"}>47 and 48</MenuItem>
          <MenuItem value={"46/47"}>46 and 47</MenuItem>
          <MenuItem value={"45/46"}>45 and 46</MenuItem>
      </Select>
    </Typography>
    <Link to='/attendView'>
      <Button onClick={()=>{ console.log('Attendance View Button Clicked!')}}> Attendance View </Button>
    </Link>
    <Link to='/enrollView'>
      <Button onClick={()=>{ console.log('EnrollView Button Clicked!')}}> Enrollment View </Button>
    </Link>
  </Container>

  )
}

export default CohortMenu;