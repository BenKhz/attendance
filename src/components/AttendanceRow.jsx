import React, { useEffect, useState } from 'react';
import { TableRow, TableCell, Chip } from '@mui/material';
import {useTheme} from '@mui/material/styles'

function AttendanceRow({student}) {
  const [present, setPresent] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    if(student.present) {
      setPresent(true)
    }
  })
  return (
    <TableRow
      key={student.user_name}
      style={{transition: 'all 400ms', backgroundColor: present ? theme.palette.success.light : ""}}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {student.user_name}
      </TableCell>
      <TableCell align="center">{student.cohort}</TableCell>
      <TableCell
        align="center">{<Chip label="Present" variant="filled" onClick={() => { setPresent(p => !p) }} />}</TableCell>
    </TableRow>
  );
}

export default AttendanceRow