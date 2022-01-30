import React, {useContext} from 'react';
import { Stack } from '@mui/material'
import { StoreContext } from '../App.jsx'
import AttendanceTable from './AttendanceTable.jsx'

function AttendanceView(props) {
  const {store, dispatch} = useContext(StoreContext);
  return (
    <Stack direction="row" spacing={1} >
      <AttendanceTable students={store.enrolled} cohort={49} dispatch={dispatch} />
      <AttendanceTable students={store.enrolled} cohort={48} dispatch={dispatch} />
    </Stack>
  );
}

export default AttendanceView;