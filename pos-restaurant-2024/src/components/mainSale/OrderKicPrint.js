import React, { Component } from 'react'
import { Paper } from '@mui/material'

export default class OrderKicPrint extends Component {
  render() {
    return (
      <Paper elevation={3} sx={{ padding: "10px" }}>
        <div align="center">*** Kitchen ***</div>
        <div>Receipt No: #00000001</div>
        <div>Table No: 101</div>
        <div>Date: 11/11/2024 12:51:03</div>
        <hr />
        <div>Dine in</div>
        <hr />
        <table width="100%">
          <tr>
            <td align="left">1</td>
            <td align="left">X</td>
            <td align="right">Food 01</td>
          </tr>
          <tr>
            <td align="left">2</td>
            <td align="left">X</td>
            <td align="right">Food 02</td>
          </tr>
          <tr>
            <td align="left"></td>
            <td align="left"></td>
            <td align="right">Description 1</td>
          </tr>
          <tr>
            <td align="left"></td>
            <td align="left"></td>
            <td align="right">Option 1</td>
          </tr>
        </table>
        <hr />
      </Paper>
    )
  }
}