import React from "react"
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
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const OrderItem = ({ tableNo, orderList, tableFile, tableFileDb }) => {
  console.log("OrderItem:", tableFileDb.TIem)
  const { EmpDiscAmt, FastDiscAmt, TrainDiscAmt, MemDiscAmt, SubDiscAmt,
    DiscBath, ProDiscAmt, SpaDiscAmt, CuponDiscAmt, ItemDiscAmt
  } = tableFileDb
  const discountAmount = EmpDiscAmt + FastDiscAmt + TrainDiscAmt + MemDiscAmt + SubDiscAmt + 
  DiscBath + ProDiscAmt + SpaDiscAmt + CuponDiscAmt + ItemDiscAmt

  console.log("Discount Amount:", discountAmount)

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
              {orderList &&
                orderList.map((order) => (
                  <TableRow key={order.R_Index}>
                    <TableCell sx={{ whiteSpace: "nowrap" }}>
                      {order.R_PName}
                    </TableCell>
                    <TableCell align="right">{order.R_Quan}</TableCell>
                    <TableCell align="right">
                      {NumFormat(order.R_Price)}
                    </TableCell>
                    <TableCell align="right">
                      {NumFormat(order.R_Total)}
                    </TableCell>
                    <TableCell align="right">{order.R_ETD}</TableCell>
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
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Total Amt</Typography>
          <Typography>{NumFormat(tableFile.subTotalAmount)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Discount</Typography>
          <Typography>{NumFormat(discountAmount)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Service</Typography>
          <Typography>{NumFormat(tableFile.serviceAmount)}</Typography>
        </Grid2>
        <Divider />
        {/* <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>VAT (7%)</Typography>
          <Typography>{NumFormat(tableFile.vatAmount)}</Typography>
        </Grid2> */}
        {/* <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>มูลค่าสินค้า/บริการ</Typography>
          <Typography>{NumFormat(tableFile.productAndService)}</Typography>
        </Grid2> */}
        <Divider />
        <Grid2 display="flex" justifyContent="space-between">
          <Typography variant="h5">Amount Due</Typography>
          <Typography variant="h5">
            {NumFormat(tableFile.netTotalAmount)}
          </Typography>
        </Grid2>
        <Divider />
        <Grid2 display="flex" justifyContent="center">
          <Typography sx={{ fontSize: "10px" }}>
            {tableFile.printRecpMessage}
          </Typography>
        </Grid2>
      </Box>
    </Paper>
  )
}

export default OrderItem
