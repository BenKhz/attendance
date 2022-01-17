import React, { useEffect, useState } from 'react';
import { TableRow, TableCell, Chip } from '@mui/material';
import {useTheme} from '@mui/material/styles'

function AttendanceRow({student, dispatch}) {
  const theme = useTheme();
  return (
    <TableRow
      key={student.user_name}
      style={{transition: 'all 400ms', backgroundColor: student.present ? theme.palette.success.light : theme.palette.background.paper}}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      {console.log("rendering Row")}
      <TableCell component="th" scope="row">
        {student.user_name}
      </TableCell>
      <TableCell
        align="center">{<Chip label="Present" variant="filled" onClick={() => {
          dispatch({type: "MANUAL_PRESENT_TOGGLE", payload: student})
        }} />}</TableCell>
    </TableRow>
  );
}

export default AttendanceRow