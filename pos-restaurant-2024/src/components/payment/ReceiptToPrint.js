import React, { Component } from 'react'
import { Paper } from '@mui/material'

export default class ReceiptToPrint extends Component {
  render() {
    return (
      <Paper elevation={3} sx={{ padding: "10px" }} ref={this.props.innerRef}>
        <div align="center" style={{ fontSize: "22px", fontWeight: "bold", padding: "10px" }}>*** ใบเสร็จรับเงิน ***</div>
        <div align="center">Table: 101</div>
        <div align="center">
          <img src="images/payment/bill_logo.png" alt="" />
        </div>
        <div align="center">
          <b>Softpos Restuarant</b>
        </div>
        <br />
        <div>Receipt No: #00000001</div>
        <div>Date: 11/11/2024 12:51:03</div>
        <div>Table No: 101</div>
        <hr />
        <table width="100%">
          <tr>
            <th align="left">Qty</th>
            <th align="left">Description</th>
            <th align="right">Amount</th>
          </tr>
          <tr>
            <td style={{ width: "50px" }}>1</td>
            <td>Food 01</td>
            <td align="right">100</td>
          </tr>
          <tr>
            <td style={{ width: "50px" }}>1</td>
            <td>Food 02</td>
            <td align="right">50</td>
          </tr>
          <tr>
            <td style={{ width: "50px" }}>2</td>
            <td>Food 03</td>
            <td align="right">80</td>
          </tr>
        </table>
        <hr />
        <table width="100%">
          <tr>
            <td style={{ width: "50px" }}></td>
            <td>Sub total</td>
            <td align="right">100</td>
          </tr>
          <tr>
            <td></td>
            <td>Vat</td>
            <td align="right">50</td>
          </tr>
        </table>
        <hr />
        <table width="100%">
          <tr>
            <td colSpan={2}>Total</td>
            <td align="right">100</td>
          </tr>
          <tr>
            <td colSpan={2}>Vat</td>
            <td align="right">50</td>
          </tr>
        </table>
        <hr />
        <div align="center">
          <img src="images/payment/qrcode.png" width={100} alt="" />
        </div>
        <div align="center">
          <span>แสกน qr code เพื่อชำระเงิน</span>
        </div>
      </Paper>
    )
  }
}