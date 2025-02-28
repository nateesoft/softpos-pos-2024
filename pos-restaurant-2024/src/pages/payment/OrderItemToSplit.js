import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import {
  Box,
  Button,
  Divider,
  Grid2,
  TableContainer,
  Typography
} from "@mui/material"

const NumFormat = (data) => {
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const OrderItem = ({ tableNo, orderList, tableFile }) => {
  console.log("OrderItem")
  return (
    <Paper elevation={3} sx={{ padding: "10px", margin: "10px" }}>
      <Box
        sx={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#123456"
        }}
      >
        <Button
          variant="text"
          sx={{ fontWeight: "bold", fontSize: "18px", color: "white" }}
        >
          Table No: {tableNo}
        </Button>
      </Box>
      <TableContainer
        sx={{ width: "420px", height: "300px", overflow: "auto" }}
      >
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
      <Divider />
      <Box padding={2}>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>Sub-TOTAL</Typography>
          <Typography>{NumFormat(tableFile.subTotalAmount)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>ค่าบริการ (10%)</Typography>
          <Typography>{NumFormat(tableFile.serviceAmount)}</Typography>
        </Grid2>
        <Divider />
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>VAT (7%)</Typography>
          <Typography>{NumFormat(tableFile.vatAmount)}</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "14px" }}>มูลค่าสินค้า/บริการ</Typography>
          <Typography>{NumFormat(tableFile.productAndService)}</Typography>
        </Grid2>
        <Divider />
        <Grid2 display="flex" justifyContent="space-between">
          <Typography variant="h5">Net-TOTAL</Typography>
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
