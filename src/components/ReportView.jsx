import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useTheme } from '@mui/material/styles'

// import AttendanceRow from './AttendanceRow.jsx';

export default function AttendanceTable(props) {
  const theme = useTheme()

  return (
    <TableContainer sx={{width:'90%', position:'relative', left:'5%'}} >
      <Table sx={{ minWidth: 200 }} size="small" aria-label="attendance table">
        <TableHead style={{background: theme.palette.primary.light}}>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Zoom Verified</TableCell>
            <TableCell>Time Joined</TableCell>
            <TableCell align="center">Attended</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {students.map((student, idx) => <AttendanceRow key={idx} student={student} dispatch={props.dispatch}/>)} */}
        </TableBody>
      </Table>
    </TableContainer>
  )
};