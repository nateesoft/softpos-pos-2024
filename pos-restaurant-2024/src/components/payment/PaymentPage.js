import React, { useState } from "react";
import Grid from '@mui/material/Grid2'

import Order from './Order'
import PaymentMethod from './PaymentMethod'
import PaymentForm from './PaymentForm'
import { Box, Modal, Paper } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  border: "1px solid #eee",
  boxShadow: 24
}

function PaymentPage() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Order />
          <PaymentMethod />
        </Grid>
        <Grid size={6}>
          <PaymentForm open={()=>setOpen(true)} close={()=>setOpen(false)} />
        </Grid>
      </Grid>
      <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...modalStyle, width: 450 }}>
          <Paper elevation={3} sx={{padding: "10px"}}>
            <div align="center" style={{fontSize: "22px", fontWeight: "bold", padding: "10px"}}>*** ใบเสร็จรับเงิน ***</div>
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
                <td style={{width: "50px"}}>1</td>
                <td>Food 01</td>
                <td align="right">100</td>
              </tr>
              <tr>
                <td style={{width: "50px"}}>1</td>
                <td>Food 02</td>
                <td align="right">50</td>
              </tr>
              <tr>
                <td style={{width: "50px"}}>2</td>
                <td>Food 03</td>
                <td align="right">80</td>
              </tr>
            </table>
            <hr />
            <table width="100%">
              <tr>
                <td style={{width: "50px"}}></td>
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
        </Box>
      </Modal>
    </>
  );
}

export default PaymentPage;