import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useTheme } from '@mui/material/styles'

import AttendanceRow from './AttendanceRow.jsx';

export default function AttendanceView(props) {
  const theme = useTheme()
  const students = props.students.filter(each => each.cohort === props.cohort)
  return (
    <TableContainer sx={{width:'50%'}} >
      <Table sx={{ minWidth: 200 }} size="small" aria-label="attendance table">
        <TableHead style={{background: theme.palette.primary.light}}>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="center">Attended</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => <AttendanceRow student={student} dispatch={props.dispatch}/>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
