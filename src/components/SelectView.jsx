import React from "react";
import {Box, Select, InputLabel, MenuItem, FormControl } from '@mui/material';

export default function () {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
    }}>
    <Box
      width="50%"
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        margin: '10px',
        backgroundColor: 'background.paper',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7]}}}>
      <FormControl width='50%'>
      <InputLabel id="cohortSelect1">Cohort</InputLabel>
          <Select
            labelId="cohortSelect1" mb={10}>
            <MenuItem > Placehold 1</MenuItem>
            <MenuItem > Placehold 1</MenuItem>
            <MenuItem > Placehold 1</MenuItem>
          </Select>
        </FormControl>
      <FormControl width='50%' >
        <InputLabel id="cohortSelect2">Cohort 2</InputLabel>
          <Select
            labelId="cohortSelect2"
            >
            <MenuItem > Placehold 1</MenuItem>
            <MenuItem > Placehold 1</MenuItem>
            <MenuItem > Placehold 1</MenuItem>
          </Select>
      </FormControl>
      <FormControl width='50%' >
        <InputLabel id="campusSelect">Campus</InputLabel>
          <Select
            labelId="campusSelect"
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