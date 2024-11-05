import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

const rows = [
  createRow('Cash', "", "$200.00"),
  createRow('Credit Card', "1234", "$56.99"),
  createRow('Total', "", "$678.99"),
  createRow('Due', "", "$567.88"),
];

const PaymentMethod = () => {
  return (
    <TableContainer component={Paper} sx={{padding: "10px", marginTop: "10px"}}>
        <h3>Payment Method</h3>
      <Table sx={{ minWidth: 300 }} aria-label="spanning table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PaymentMethod