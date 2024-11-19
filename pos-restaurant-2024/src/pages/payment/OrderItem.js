import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(items) {
  return items.map(({ R_Price }) => R_Price).reduce((sum, i) => sum + i, 0);
}


const OrderItem = ({ tableNo, orderList }) => {
  const invoiceSubtotal = subtotal(orderList);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <Paper elevation={3} sx={{padding: "10px", margin: "10px"}}>
      <Box sx={{ padding: "10px", borderRadius: "5px" }}>
        <Button variant='text' sx={{fontWeight: "bold", fontSize: "18px"}}>Table No: {tableNo}</Button>
      </Box>
      <Table sx={{ minWidth: 300 }} aria-label="spanning table">
        <TableBody>
          {orderList && orderList.map((order) => (
            <TableRow key={order.R_Index}>
              <TableCell>{order.R_PName}</TableCell>
              <TableCell align="right">{order.R_Quan}</TableCell>
              <TableCell align="right">{order.R_Unit}</TableCell>
              <TableCell align="right">{ccyFormat(order.R_Price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Vat</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default OrderItem