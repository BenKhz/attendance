import React, {useEffect, useContext} from "react";
import axios from 'axios';
import { StoreContext } from "../App.jsx";
import {Box, Select, InputLabel, MenuItem, FormControl } from '@mui/material';

export default function () {
  const { store, dispatch } = useContext(StoreContext);

  const updateCampus = (e) => {
    dispatch({type:"UPDATE_CAMPUS", payload:e.target.value})
  }

  useEffect(() => {
    axios.get('/campus', (req, res) => {
      console.log(res.data)
    })
  }, [])

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
            onChange={(e) => {updateCampus(e)}}
            value={store.campus}
            >
            <MenuItem value={"HRLAX"}> Los Angeles </MenuItem>
            <MenuItem value={"HRSF"}> San Francisco</MenuItem>
            <MenuItem value={"HRDEN"}> Denver </MenuItem>
          </Select>
      </FormControl>
      <FormControl fullWidth sx={{marginBottom:'10px'}}>
      <InputLabel id="cohortSelect1">Cohort</InputLabel>
          <Select
            labelId="cohortSelect1" mb={10} >
            <MenuItem value={1} > Cohort </MenuItem>
            <MenuItem value={2} > Placehold 1</MenuItem>
            <MenuItem value={3}> Placehold 1</MenuItem>
          </Select>
        </FormControl>
      <FormControl fullWidth sx={{marginBottom:'10px'}} >
        <InputLabel id="cohortSelect2">Cohort 2</InputLabel>
          <Select
            labelId="cohortSelect2"
            >
            <MenuItem > Placehold 1</MenuItem>
            <MenuItem > Placehold 1</MenuItem>
            <MenuItem > Placehold 1</MenuItem>
          </Select>
      </FormControl>
      </Box>
      </div>
  )
}