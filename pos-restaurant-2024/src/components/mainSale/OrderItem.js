import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, url }) => {
    return (
        <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px", marginBottom: "10px" }}>
            <table width="100%">
                <tr>
                    <td rowSpan={2}>
                        <img src={url} alt="" style={{ borderRadius: "10px", width: "100px" }} /><br />
                    </td>
                    <td align="left" style={{ fontWeight: "bold" }}>
                        {name}
                    </td>
                </tr>
                <tr>
                    <td align="left" style={{color: "green", fontWeight: "bold"}}>100.00 x 2</td>
                    <td align="right" style={{color: "green", fontWeight: "bold"}}>200.00</td>
                </tr>
            </table>
        </div>
    )
}
const TotalBill = () => {
    return (
        <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px", marginBottom: "10px" }}>
            <table width="100%">
                <tr>
                    <td align="left" style={{ color: "gray" }}>
                        Sub Total
                    </td>
                    <td align="right" style={{ color: "gray" }}>
                        600.00
                    </td>
                </tr>
                <tr>
                    <td align="left" style={{color: "gray"}}>Vat</td>
                    <td align="right" style={{ color: "gray" }}>7%</td>
                </tr>
                <tr>
                    <td colSpan={2}><hr /></td>
                </tr>
                <tr>
                    <td align="left" style={{fontWeight: "bold"}}>Total Amount</td>
                    <td align="right" style={{color: "green", fontWeight: "bold"}}>642.00</td>
                </tr>
            </table>
        </div>
    )
}

const OrderItem = () => {
    const navigate = useNavigate();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    navigate("/payment");
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Dine In" value="1" />
            <Tab label="Take Away" value="2" />
            <Tab label="Delivery" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <ProductCard name="Test Product 01" url="images/product/food01.png" />
            <ProductCard name="Test Product 07" url="images/product/food02.png" />
            <ProductCard name="Test Product 05" url="images/product/food05.png" />
            <TotalBill />
            <div align="center">
                <button style={{height: "45px", width: "75px", marginRight: "10px", backgroundColor: "snow", border: "1px solid #eee", borderRadius: "10px"}}>Cash</button>
                <button style={{height: "45px", width: "125px", marginRight: "10px", backgroundColor: "snow", border: "1px solid #eee", borderRadius: "10px"}}>Credit/Debit Card</button>
                <button style={{height: "45px", width: "75px", backgroundColor: "snow", border: "1px solid #eee", borderRadius: "10px"}}>QR Code</button>
            </div>
            <div style={{marginTop: "30px"}} align="center">
                <button style={{backgroundColor: "green", padding: "10px", width: "150px", borderRadius: "10px", color: "white", fontWeight: "bold"}} onClick={handleClick}>Process Order</button>
            </div>
        </TabPanel>
        <TabPanel value="2">Take Away</TabPanel>
        <TabPanel value="3">Delivery</TabPanel>
      </TabContext>
    </Box>
  );
}

export default OrderItem
