import React from "react";

const myStyle = {
    listStyleType: "none",
    padding: 10,
    margin: 10
}

const detail = {
    backgroundColor: "snow",
    padding: "10px",
    margin: "5px",
    borderRadius: "25px",
    textAlign: "left",
    fontWeight: "bold"
}

function LeftMenu() {
  return (
    <ul style={myStyle}>
        <li style={detail}>Menu</li>
        <li style={detail}>Table Services</li>
        <li style={detail}>Reservation</li>
        <li style={detail}>Delivery</li>
        <li style={detail}>Accounting</li>
        <li style={detail}>Settings</li>
    </ul>
  );
}

export default LeftMenu;