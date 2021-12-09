import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material'

export default function EnrollTable({ rows }) {
  const [selected, setSelected] = useState([]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Selected</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                <Checkbox id={row.id.toString()} onChange={(e) => {
                  var isIncludedIndex = selected.indexOf(row);
                  if (isIncludedIndex !== -1) {
                    var newArray = selected;
                    newArray.splice(isIncludedIndex, 1);
                    setSelected(newArray);
                  } else {
                    setSelected([...selected, row])
                  }
                }} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}