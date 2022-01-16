import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { useTheme } from '@mui/material/styles'

import AttendanceRow from './AttendanceRow.jsx';

export default function AttendanceView(props) {
  const theme = useTheme()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead style={{background: theme.palette.primary.light}}>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="center">Cohort</TableCell>
            <TableCell align="center">Attended</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students.map((student) => <AttendanceRow student={student} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
