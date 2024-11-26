import React, { Component } from 'react'
import { Box, Divider, Paper, Typography } from '@mui/material'
import Moment from 'react-moment'

import QrCodeGenerator from './QRCodePayment'

export default class ReceiptToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const poshwsetup = this.props.poshwsetup
    console.log('poshwsetup:', poshwsetup)
    let headers = [poshwsetup.Heading1, poshwsetup.Heading2, poshwsetup.Heading3, poshwsetup.Heading4]
    headers = headers.filter(h => h !== "")
    let footers = [poshwsetup.Footting1, poshwsetup.Footting2]
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
          <div>Receipt No: {this.props.billId}</div>
          <div>Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} /></div>
          <div>Customer: {this.props.customerCount}</div>
          <div>Cashier: {this.props.userLogin} Employ: {this.props.empCode}</div>
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
            <Typography>3,800.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>อาหาร (Food)</Typography>
            <Typography>3,800.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>เครื่องดื่ม (Drink)</Typography>
            <Typography>0.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>สินค้าอื่นๆ (Other)</Typography>
            <Typography>0.00</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between">
            <Typography>ค่าบริการ 10%</Typography>
            <Typography>380.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Net Total</Typography>
            <Typography>4,180.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Vat 7%</Typography>
            <Typography>234.46.00</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between">
            <Typography>Visa Visa</Typography>
            <Typography>credit_card_number | approve_code</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>CR-Charge 3% (125.40) 4,305.40</Typography>
          </Box>
        </Paper>
        <Divider />
        <div align="center">
          <QrCodeGenerator mobileNumber="0864108403" amount={1} />
        </div>
        <div align="center">
          <span>แสกน qr code เพื่อชำระเงิน</span>
        </div>
        <Divider />
        {footers && footers.map((footer) => 
          <div align="center">{footer}</div>
        )}
      </Paper>
    )
  }
}