import React from "react";
import Button from '@mui/material/Button'

const myStyle = {
  listStyleType: "none",
  padding: 10,
  margin: 10
}

const detail = {
  margin: "10px",
  fontWeight: "bold",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "1px 2px orange",
  cursor: "pointer"
}

function LeftMenu() {
  return (
    <ul style={myStyle}>
      <li style={detail}>
        <Button variant="contained" color="warning" sx={{fontWeight: "bold"}} fullWidth>Menu</Button>
      </li>
      <li style={detail}>
        <Button variant="contained" sx={{backgroundColor: "#fae5d3", color: "black"}} fullWidth>Table Services</Button>
      </li>
      <li style={detail}>
        <Button variant="contained" sx={{backgroundColor: "#fae5d3", color: "black"}} fullWidth>Reservation</Button>
      </li>
      <li style={detail}>
        <Button variant="contained" sx={{backgroundColor: "#fae5d3", color: "black"}} fullWidth>Delivery</Button>
      </li>
      <li style={detail}>
        <Button variant="contained" sx={{backgroundColor: "#fae5d3", color: "black"}} fullWidth>Accounting</Button>
      </li>
      <li style={detail}>
        <Button variant="contained" sx={{backgroundColor: "#fae5d3", color: "black"}} fullWidth>Settings</Button>
      </li>
    </ul>
  );
}

export default LeftMenu;