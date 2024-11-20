import React, { Component } from 'react'
import { Divider, Paper } from '@mui/material'
import Moment from 'react-moment'

import QrCodeGenerator from './QRCodePayment'

export default class ReceiptToPrint extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Paper elevation={0} sx={{ padding: "10px" }} ref={this.props.innerRef}>
        <div align="center" style={{ fontSize: "22px", fontWeight: "bold" }}>*** ใบเสร็จรับเงิน ***</div>
        <Paper elevation={0} sx={{ padding: "10px" }}>
          <div align="center">
            <b>ร้าน POS Restuarant</b>
          </div>
          <div align="center">Table: {this.props.tableNo}</div>
        </Paper>
        <div align="center">
          <img src="/images/payment/com_logo.jpg" width={128} alt="" />
        </div>
        <Paper elevation={0} sx={{ padding: "10px" }}>
          <div>Receipt No: #00000001</div>
          <div>Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} /></div>
          <div>จำนวนลูกค้า: 2 ท่าน</div>
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
            {this.props.orderList && this.props.orderList.map((item) => (
              <tr>
                <td style={{ width: "50px" }}>{item.R_ETD}</td>
                <td>{item.R_PName}</td>
                <td align="right">{item.R_Quan}</td>
                <td align="right">{item.R_Price}</td>
              </tr>
            ))}
          </table>
        </Paper>
        <Divider />
        <Paper elevation={0} sx={{ padding: "10px" }}>
          <table width="100%">
            <tr>
              <td colSpan={2}>Sub-Total</td>
              <td align="right">100</td>
            </tr>
            <tr>
              <td colSpan={2}>Total</td>
              <td align="right">100</td>
            </tr>
            <tr>
              <td colSpan={2}>Vat</td>
              <td align="right">50</td>
            </tr>
          </table>
        </Paper>
        <Divider />
        <div align="center">
          <QrCodeGenerator mobileNumber="0864108403" amount={this.props.amount || 1} />
        </div>
        <div align="center">
          <span>แสกน qr code เพื่อชำระเงิน</span>
        </div>
      </Paper>
    )
  }
}