import React, {useState,useEffect, useContext} from "react";
import axios from 'axios';
import { StoreContext } from "../App.jsx";
import {Box, Select, InputLabel, MenuItem, FormControl, Button } from '@mui/material';

export default function () {
  const { store, dispatch } = useContext(StoreContext);
  const [campuses, setCampuses] = useState([]);
  const [cohorts , setCohorts] = useState([])

  const updateStore = (e) => {
    if(e.target.name === "campus") {
      dispatch({type:"UPDATE_CAMPUS", payload:e.target.value})
    } else if (e.target.name === 'one') {
      dispatch({type:"UPDATE_COHORT_ONE", payload:e.target.value})
    } else if (e.target.name === 'two') {
      dispatch({type:"UPDATE_COHORT_TWO", payload:e.target.value})
    }
  }

  useEffect(() => {
    axios.get('/campuses').then(res => {setCampuses(res.data)} )
  }, [])

  useEffect(() => {
    const obj = {};
    axios.get('/cohorts').then(res => { setCohorts(res.data)} )
  }, [store.campus])

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center'
    }}>
    <Box
      sx={{
        width:"50%",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        padding:'2%',
        margin: '10px',
        backgroundColor: 'background.paper',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7]}}}>
        <FormControl fullWidth sx={{marginBottom:'10px'}}>
        <InputLabel id="campusSelect">Campus</InputLabel>
          <Select
            labelId="campusSelect"
            name="campus"
            onChange={(e) => {updateStore(e)}}
            value={store.campus || ''}
            >
            {campuses.map((each) => {
            return <MenuItem value={each.id} key={each.id}> {each.campus} </MenuItem>})}
          </Select>
      </FormControl>
      <FormControl fullWidth sx={{marginBottom:'10px'}}>
      <InputLabel id="cohortOneSelect">First Cohort</InputLabel>
          <Select
            name="one"
            labelId="cohortOneSelect"
            onChange={(e) => {updateStore(e)}}
            value={store.cohortOne || ''}
            >
            {cohorts.map((each) => {
            return <MenuItem value={each.id} key={each.id}> {each.cohort} </MenuItem>})}
          </Select>
      </FormControl>
      <FormControl fullWidth sx={{marginBottom:'10px'}}>
      <InputLabel id="cohortTwoSelect">Second Cohort</InputLabel>
          <Select
            name="two"
            labelId="cohortTwoSelect"
            onChange={(e) => {updateStore(e)}}
            value={store.cohortTwo || ''}
            >
            {cohorts.map((each) => {
            return <MenuItem value={each.id} key={each.id}> {each.cohort} </MenuItem>})}
          </Select>
      </FormControl>
      </Box>
      <Button onClick={() => {dispatch({type:"CHANGE_VIEW", payload:"attendance"})}}>Take Attendance!</Button>
      </div>
  )
}