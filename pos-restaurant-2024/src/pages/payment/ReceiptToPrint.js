import React, { Component } from 'react'
import { Box, Divider, Paper, Typography } from '@mui/material'
import Moment from 'react-moment'
import axios from 'axios'

import QrCodeGenerator from './QRCodePayment'

export default class ReceiptToPrint extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   axios.get(`/api/billno/${this.props.billNo}`)
  //     .then(res => {
  //       const billInfo = res.data.data;
  //       console.log('ReceiptToPrint:', billInfo)
  //       this.setState({ billInfo });
  //     })
  // }

  render() {
    const billInfo = this.props.billInfo
    const {
      B_Refno, B_Cust, B_Cashier, B_MacNo, B_NetFood, B_NetProduct, 
      B_Total, B_Vat, B_ServiceAmt, B_NetTotal, B_NetDrink,
      B_CrCode1, B_CrBank, B_CardNo1, B_AppCode1, B_CrCharge1, B_CrChargeAmt1, B_CrAmt1
    } = billInfo
    console.log('billInfo:', billInfo)
    const poshwsetup = this.props.poshwsetup
    console.log('poshwsetup:', poshwsetup)
    let headers = [poshwsetup.Heading1, poshwsetup.Heading2, poshwsetup.Heading3, poshwsetup.Heading4]
    headers = headers.filter(h => h !== "")
    let footers = [poshwsetup.Footting1, poshwsetup.Footting2, poshwsetup.Footting3]
    let orderList = this.props.orderList
    orderList = orderList.filter(o => o.R_Price > 0)
    console.log(this.props)
    return (
      <Paper elevation={0} sx={{ padding: "5px" }} ref={this.props.innerRef}>
        <div align="center" style={{ fontSize: "18px", fontWeight: "bold" }}>*** ใบเสร็จรับเงิน ***</div>
        <Paper elevation={0} sx={{ padding: "10px" }}>
          {headers && headers.map((header) => <div align="center">
            {header}
          </div>)}
          <div align="center">Table: {this.props.tableNo}</div>
        </Paper>
        <div align="center">
          <img src="/images/payment/com_logo.jpg" width={128} alt="" />
        </div>
        <Paper elevation={0} sx={{ padding: "10px" }}>
          <div>Receipt No: {B_Refno}</div>
          <div>Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} /></div>
          <div>Customer: {B_Cust}</div>
          <div>Cashier: {B_Cashier} Employ: {this.props.empCode} Mac:{B_MacNo}</div>
        </Paper>
        <Divider />
        <Paper elevation={0} sx={{ padding: "10px" }}>
          <table width="100%">
            <tr>
              <th align="left"></th>
              <th align="left">Description</th>
              <th align="left"></th>
              <th align="right">Amount</th>
            </tr>
            {orderList && orderList.map((item) => (
              <tr>
                <td>{item.R_ETD}</td>
                <td>{item.R_PName}</td>
                <td align="right">X {item.R_Quan}</td>
                <td align="right">{item.R_Price}</td>
              </tr>
            ))}
          </table>
        </Paper>
        <Divider />
        <Paper elevation={0} sx={{ padding: "10px" }}>
          <Box display="flex" justifyContent="space-between">
            <Typography>Sub-Total</Typography>
            <Typography>{B_Total}</Typography>
          </Box>
          <Box padding={2}>
            <Box display="flex" justifyContent="space-between">
              <Typography>อาหาร (Food)</Typography>
              <Typography>{B_NetFood}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>เครื่องดื่ม (Drink)</Typography>
              <Typography>{B_NetDrink}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>สินค้าอื่นๆ (Other)</Typography>
              <Typography>{B_NetProduct}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between">
            <Typography>ค่าบริการ 10%</Typography>
            <Typography>{B_ServiceAmt}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Vat 7%</Typography>
            <Typography>{B_Vat}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Net Total</Typography>
            <Typography>{B_NetTotal}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between">
            <Typography>{B_CrCode1} {B_CrBank}</Typography>
            <Typography>{B_CardNo1} | {B_AppCode1}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>CR-Charge {B_CrCharge1}% ({B_CrChargeAmt1}) {B_CrAmt1}</Typography>
          </Box>
        </Paper>
        <Divider sx={{marginTop: "10px"}} />
        {footers && footers.map((footer) => 
          <div align="center">{footer}</div>
        )}
      </Paper>
    )
  }
}