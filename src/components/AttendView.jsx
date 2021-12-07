import React, { useState, useEffect } from 'react';
import { Grid, Checkbox, Box, FormControlLabel, FormGroup } from '@mui/material'
import Selector from './Selector.jsx';

const AttendView = ({ currentEnroll }) => {
  const [present, setPresent] = useState([]);
  const [start, setStart] = useState('');

  const updateStudentDateAndTime = (student) => {
    student.time = Math.ceil((new Date() - start) / 600);
    student.date = start.toDateString();
    return student
  }
  useEffect(() => {
    setStart(new Date())
  }, [])
  const attendSwitches = currentEnroll.map(student => {
    return (
      <FormControlLabel key={student.id}
        control={<Checkbox
          name={student.first_name}
          value={student.last_name}
          id={`student.id`}
          onChange={(e) => {
            // TODO REFACTOR for Readability
            let checkIns = present
            if (checkIns.length) {
              var isFound = false;
              for (var i = 0; i < checkIns.length; i++) {
                if (checkIns[i].id === student.id) {
                  checkIns.splice(i);
                  isFound = true;
                  setPresent([...checkIns])
                }
              } if (!isFound) {
                setPresent([...present, updateStudentDateAndTime(student)])
              }
            } else {
              setPresent([...present, updateStudentDateAndTime(student)])
            }
          }} />}
        label={`${student.first_name} ${student.last_name}`} />
    )
  })
  return (
    <>
      <Selector />
      <Grid container>
        <Grid item>
          <div id='attendView'>
            <FormGroup >
              {attendSwitches}
            </FormGroup>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default AttendView;