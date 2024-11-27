import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Grid2, TableContainer, Typography } from '@mui/material';

function ccyFormat(num) {
  return `${Math.round(num).toFixed(2)}`;
}

function subtotal(items) {
  return items.map(({ R_Price }) => R_Price).reduce((sum, i) => sum + i, 0);
}

const OrderItem = ({ tableNo, orderList }) => {
  const invoiceSubtotal = subtotal(orderList);
  const R_NetTotal = invoiceSubtotal;

  return (
    <Paper elevation={3} sx={{padding: "10px", margin: "10px"}}>
      <Box sx={{ padding: "10px", borderRadius: "5px", backgroundColor: "#123456" }}>
        <Button variant='text' sx={{fontWeight: "bold", fontSize: "18px", color: "white"}}>Table No: {tableNo}</Button>
      </Box>
      <TableContainer sx={{width: "300px", overflow: "auto"}}>
        <Table aria-label="spanning table">
          <TableBody>
            {orderList && orderList.map((order) => (
              <TableRow key={order.R_Index}>
                <TableCell>{order.R_Index}</TableCell>
                <TableCell sx={{whiteSpace: "nowrap"}}>{order.R_PName}</TableCell>
                <TableCell align="right">{order.R_Quan}</TableCell>
                <TableCell align="right">{ccyFormat(order.R_Price)}</TableCell>
                <TableCell align="right">{ccyFormat(order.R_Total)}</TableCell>
                <TableCell align="right">{order.R_ETD}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box padding={2}>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{fontSize: "14px"}}>SUBTOTAL</Typography>
          <Typography>{ccyFormat(invoiceSubtotal-(R_NetTotal*7/107))}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{fontSize: "14px"}}>VAT</Typography>
          <Typography sx={{fontSize: "14px"}}>7%</Typography>
          <Typography>{ccyFormat(R_NetTotal*7/107)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{fontSize: "14px"}}>TOTAL</Typography>
          <Typography>{ccyFormat(R_NetTotal)}</Typography>
        </Grid2>
      </Box>
    </Paper>
  );
}

export default OrderItem