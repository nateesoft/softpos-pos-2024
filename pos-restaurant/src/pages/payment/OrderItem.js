import React, { useEffect } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import {
  Box,
  Divider,
  Grid2,
  TableContainer,
  Typography
} from "@mui/material"

const NumFormat = (data) => {
  if(!data) {
    return "0.00"
  }
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const OrderItem = ({ tableNo, orderList, tableFile, tableFileDb, initLoad }) => {
  const { EmpDiscAmt = 0, FastDiscAmt = 0, TrainDiscAmt = 0, MemDiscAmt = 0, SubDiscAmt = 0,
    DiscBath = 0, ProDiscAmt = 0, SpaDiscAmt = 0, CuponDiscAmt = 0, ItemDiscAmt = 0
  } = tableFileDb
  const discountAmount = EmpDiscAmt + FastDiscAmt + TrainDiscAmt + MemDiscAmt + SubDiscAmt + 
  DiscBath + ProDiscAmt + SpaDiscAmt + CuponDiscAmt + ItemDiscAmt

  return (
    <Paper elevation={3} sx={{ padding: "10px", margin: "10px" }}>
      <Box
        sx={{
          padding: "10px",
          borderRadius: "5px",
          background: "radial-gradient(circle, salmon, #005)"
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "18px", color: "white" }}
        >
          Table No: {tableNo}
        </Typography>
      </Box>
      <Grid2>
        <TableContainer sx={{ overflow: "auto", height: "368px" }}>
          <Table aria-label="spanning table">
            <TableBody>
              {orderList && orderList.filter(item => (item.R_Void !='V' && item.R_LinkIndex === '')).map((order, index) => (
                  <TableRow key={order.R_Index} sx={{background: order.R_Void==="V" ? "red": "snow"}}>
                    <TableCell align="center">{index+1}</TableCell>
                    <TableCell align="center">{order.R_Void}</TableCell>
                    <TableCell align="center">{order.R_ETD}</TableCell>
                    <TableCell sx={{ whiteSpace: "nowrap" }}>
                      {order.R_PName}
                    </TableCell>
                    <TableCell align="right">{order.R_Quan}</TableCell>
                    <TableCell align="right">
                      {NumFormat(order.R_Price)}
                    </TableCell>
                    <TableCell align="right" sx={{color: (order.R_DiscBath*-1)<0?"red":"black"}}>
                      {NumFormat(order.R_DiscBath*-1)}
                    </TableCell>
                    <TableCell align="right" sx={{whiteSpace: "nowrap"}}>
                      {order.R_PrType}
                    </TableCell>
                    <TableCell align="right">
                      {NumFormat(order.R_Total)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid2>
      <Divider />
      <Box padding={2} sx={{background: "lightpink", color: "black"}}>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Item</Typography>
          <Typography>{tableFileDb.TItem||0}</Typography>
        </Grid2>
        <Divider sx={{background: "black"}} />
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Sub Total</Typography>
          <Typography>{NumFormat(tableFile.productNoneVat)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Service Charge ({tableFile.service}%)</Typography>
          <Typography>{NumFormat(tableFile.serviceAmount)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Before VAT</Typography>
          <Typography>{NumFormat(tableFile.subTotalAmount)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Discount</Typography>
          <Typography>{NumFormat(tableFile.discountAmount)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>VAT ({tableFile.vat}%)</Typography>
          <Typography>{NumFormat(tableFile.vatAmount)}</Typography>
        </Grid2>
        <Divider sx={{background: "black"}} />
        <Grid2 display="flex" justifyContent="space-between">
          <Typography variant="h5">Grand Total</Typography>
          <Typography variant="h5">
            {NumFormat(tableFile.netTotalAmount)}
          </Typography>
        </Grid2>
        <Divider sx={{background: "black"}} />
        <Grid2 display="flex" justifyContent="center">
          <Typography sx={{ fontSize: "10px" }}>
            {tableFile.printRecpMessage}
          </Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="center">
          <Typography sx={{fontSize: 10}}>
            Service Type = ({tableFile.serviceType}) Vat Type = ({tableFile.vatType})
          </Typography>
        </Grid2>
      </Box>
    </Paper>
  )
}

export default OrderItem
