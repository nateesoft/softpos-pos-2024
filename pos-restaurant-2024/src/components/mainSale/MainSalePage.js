import React, { useState } from "react";
import { Box, Modal, TextField } from "@mui/material";

import LeftMenu from './LeftMenu'
import ProductMenu from './ProductMenu'
import OrderItem from './OrderItem'

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

const ProductCard = ({ name, url, closeModal }) => {
  return (
    <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px" }}>
      <div align="center" style={{padding: "10px"}}>
        <table width="100%">
          <tr>
            <td colSpan={2} align="left" style={{ fontWeight: "bold" }}>
              {name}
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <img src={url} alt="" style={{ borderRadius: "10px", width: 250 }} /><br />
            </td>
          </tr>
        </table>
      </div>
      <div align="center" style={{padding: "10px"}}>
        <table width="100%">
          <tr>
            <td align="left"><u>ราคา 100 บาท</u></td>
            <td align="right" style={{color: "green", fontSize: "12px", fontWeight: "bold"}}>อาหารหลัก*</td>
          </tr>
        </table>
      </div>
      <div style={{ padding: "10px" }}>
        <TextField
          id="outlined-number"
          label="จำนวนเอาหาร"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        <div>รายละเอียดเพิ่มเติม</div>
        <div>
          <TextField fullWidth label="เผ็ดน้อย, เผ็ดกลาง, ไม่เผ็ด..." id="fullWidth" multiline={true} rows={5} />
        </div>
      </div>
      <div align="center">
        <button
          style={{
            backgroundColor: "#b4f0a5",
            padding: "10px", color: "black",
            borderRadius: "10px", border: "0px"
          }} onClick={closeModal}>Add to Dish</button>
      </div>
    </div>
  )
}

function MainSalePage() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <table width="100%">
        <tr>
          <td valign="top">
            <LeftMenu />
          </td>
          <td>
            <ProductMenu openModal={() => setOpen(true)} />
          </td>
          <td valign="top">
            <OrderItem />
          </td>
        </tr>
      </table>
      <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...modalStyle, width: 450 }}>
          <ProductCard name="Test Product 01" url="images/product/food01.png" closeModal={()=>setOpen(false)} />
        </Box>
      </Modal>
    </div>
  )
}

export default MainSalePage;