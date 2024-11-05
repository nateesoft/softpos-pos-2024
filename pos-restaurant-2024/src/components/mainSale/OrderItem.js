import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import NoFoodIcon from '@mui/icons-material/NoFood';

const ProductCard = ({ name, url }) => {
  return (
    <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px", marginBottom: "10px", boxShadow: "2px 2px #eee" }}>
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
          <td align="left" style={{ color: "green", fontWeight: "bold" }}>100.00 x 2</td>
          <td align="right" style={{ color: "green", fontWeight: "bold" }}>200.00</td>
        </tr>
      </table>
    </div>
  )
}
const TotalBill = () => {
  return (
    <div style={{ padding: "5px", border: "2px solid #eee", borderRadius: "10px", marginBottom: "10px", margin: "20px" }}>
      <table width="100%">
        <tr>
          <td align="left" style={{ fontWeight: "bold" }}>
            <Box sx={{marginLeft: "10px", fontWeight: "bold", fontSize: "16px"}}>
              Total Amount
            </Box>
          </td>
          <td align="right" style={{ color: "green", fontWeight: "bold", fontSize: "48px" }}>
            <Box sx={{marginRight: "10px"}}>
              642.00
            </Box>
          </td>
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

  const backFloorPlan = () => {
    navigate("/floorplan");
  }

  return (
    <Box sx={{ width: '400px', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Dine In" value="1" />
            <Tab label="Take Away" value="2" />
            <Tab label="Delivery" value="3" />
          </TabList>
        </Box>
        <Box textAlign="center" sx={{ marginTop: "10px" }}>
          <Typography variant='h5'>รายการอาหารที่สั่ง</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant='p'>โต๊ะ (R-3)</Typography>
        </Box>
        <TabPanel value="1" sx={{ height: "500px", overflow: "auto" }}>
          <ProductCard name="ไข่พะโล้หมูสามชั้น" url="images/product/food01.png" />
          <ProductCard name="หมูปลาร้าปั้นก้อน" url="images/product/food02.png" />
          <ProductCard name="ตำเส้นพวงแคปหมู" url="images/product/food05.png" />
        </TabPanel>
        <TabPanel value="2" sx={{ height: "500px", overflow: "auto" }}>
          <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
            <Box><NoFoodIcon /></Box>
            <Typography variant='p'>ไม่พบรายการอาหาร take away</Typography>
          </Box>
        </TabPanel>
        <TabPanel value="3" sx={{ height: "500px", overflow: "auto" }}>
          <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
            <Box><NoFoodIcon /></Box>
            <Typography variant='p'>ไม่พบรายการอาหาร delevery</Typography>
          </Box>
        </TabPanel>
      </TabContext>
      <TotalBill />
      <div style={{ margin: "20px" }} align="right">
        <Button variant='contained' color='primary' onClick={backFloorPlan} sx={{ marginRight: "10px", width: "150px" }}>Back</Button>
        <Button variant='contained' color='success' onClick={handleClick} sx={{ width: "150px" }}>Payment</Button>
      </div>
    </Box>
  );
}

export default OrderItem
