import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from "react-router-dom";
import NoFoodIcon from '@mui/icons-material/NoFood';
import { Alert, Box, Button, ButtonGroup, Modal, TextField, Typography, Paper, ToggleButtonGroup, ToggleButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios'
import ArrowBack from '@mui/icons-material/ArrowBack'
import MoneyIcon from '@mui/icons-material/Money'
import PrintIcon from '@mui/icons-material/Print'

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

const ProductCard = ({ product, openModal }) => {
  return (
    <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px", marginBottom: "10px", boxShadow: "2px 2px #eee" }} onClick={openModal}>
      <table width="100%">
        <tr>
          <td rowSpan={2}>
            <img src={product.url} alt="" style={{ borderRadius: "10px", width: "100px" }} /><br />
          </td>
          <td align="left" style={{ fontWeight: "bold" }}>
            {product.name}
          </td>
        </tr>
        <tr>
          <td align="left" style={{ color: "green", fontWeight: "bold" }}>{product.price} x {product.qty}</td>
          <td align="right" style={{ color: "green", fontWeight: "bold" }}>{product.totalAmount}</td>
        </tr>
      </table>
    </div>
  )
}
const ProductDetailCard = ({ product, closeModal, initLoadOrder, initLoadMenu }) => {
  const [count, setCount] = useState(product.qty)
  const [orderType, setOrderType] = useState('dineIn');

  const handleChange = (event, oType) => {
    setOrderType(oType);
  };

  const handleConfirm = () => {
    if (count === 0) {
      // delete item
      axios.delete(`/api/product_order/${product.id}`)
        .then((response) => {
          if (response.data.code === 200) {
            // update product qty
            axios.patch(`/api/product/${product.id}`, { id: product.id, qty: count })
              .then((response2) => {
                if (response2.data.code === 200) {
                  initLoadMenu()
                  initLoadOrder()
                  closeModal()
                }
              })
          }
        })

    } else {
      // update item
      product.qty = count
      axios.patch(`/api/product_order/${product.id}`, { ...product })
        .then((response) => {
          if (response.data.code === 200) {
            // update product qty
            axios.patch(`/api/product/${product.id}`, { id: product.id, qty: count })
              .then((response2) => {
                if (response2.data.code === 200) {
                  initLoadMenu()
                  initLoadOrder()
                  closeModal()
                }
              })
          }
        })
    }
  }

  return (
    <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px" }}>
      <div align="center" style={{ padding: "10px" }}>
        <Box sx={{ padding: "10px" }}>
          <Typography variant="h5">{product.name}</Typography>
        </Box>
        <table width="100%">
          <tr>
            <td colSpan={2} align="center">
              <img src={product.url} width={150} alt="" style={{ borderRadius: "10px", boxShadow: "2px 3px #ccc" }} /><br />
            </td>
          </tr>
        </table>
      </div>
      <Alert severity="success" sx={{ width: "100%" }}>
        <Box>
          <Typography variant='span'>เวลาสั่ง: 06/11/2024 10.10.000</Typography>
        </Box>
        <Box>
          <Typography variant='span'>สถานะส่งครัว: ยังไม่ได้ส่ง</Typography>
        </Box>
      </Alert>
      <div align="center" style={{ padding: "10px" }}>
        <table width="100%">
          <tr>
            <td align="left"><u>ราคา {product.price} บาท</u></td>
            <td align="right" style={{ color: "green", fontSize: "12px", fontWeight: "bold" }}>อาหารหลัก*</td>
          </tr>
        </table>
      </div>
      <Box display="flex" justifyContent="space-between" sx={{ margin: "10px" }}>
        <TextField
          id="outlined-number"
          label="จำนวนเอาหาร"
          type="number"
          value={count}
          onChange={evt => setCount(evt.target.value)}
          sx={{ marginRight: "10px" }}
          slotProps={{
            htmlInput: {
              textAlign: "right"
            },
            inputLabel: {
              shrink: true,
            }
          }}
        />
        <ButtonGroup variant="outlined">
          <Button
            variant="contained"
            color="error"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            color="success"
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </Box>
      <Box style={{ padding: "10px" }}>
        <Box sx={{marginBottom: "10px"}}>
          <Typography variant='p'>รายละเอียดเพิ่มเติม</Typography>
        </Box>
        <div>
          <TextField fullWidth label="เผ็ดน้อย, เผ็ดกลาง, ไม่เผ็ด..." id="fullWidth" multiline={true} rows={2} />
        </div>
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Box sx={{marginBottom: "10px"}}>
          <Typography variant='p'>ประเภทอาหาร</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <ToggleButtonGroup
            color="primary"
            value={orderType}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="dineIn">Dine In</ToggleButton>
            <ToggleButton value="takeAway">Take Away</ToggleButton>
            <ToggleButton value="delivery">Delivery</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {count === 0 && <Alert severity="error" sx={{ width: "100%" }}>
        <Box>
          <Typography variant='span'>คุณต้องการลบรายการอาหารนี้หรือไม่ !!!</Typography>
        </Box>
      </Alert>}
      <div align="center" style={{ marginTop: "20px" }}>
        <Button variant="contained" color="error" onClick={closeModal} sx={{ marginRight: "10px" }}>
          CANCEL
        </Button>
        <Button variant="contained" color="success" onClick={handleConfirm}>
          CONFIRM
        </Button>
      </div>
    </div>
  )
}
const TotalBill = ({ orderList }) => {
  let totalBill = 0
  for (let i = 0; i < orderList.length; i++) {
    totalBill = totalBill + parseInt(orderList[i].totalAmount)
  }
  return (
    <div style={{ padding: "5px", border: "2px solid #eee", borderRadius: "10px", marginBottom: "10px", margin: "20px" }}>
      <table width="100%">
        <tr>
          <td align="left" style={{ fontWeight: "bold" }}>
            <Box sx={{ marginLeft: "10px", fontWeight: "bold", fontSize: "16px" }}>
              Total Amount
            </Box>
          </td>
          <td align="right" style={{ color: "green", fontWeight: "bold", fontSize: "36px" }}>
            <Box sx={{ marginRight: "10px" }}>
              {totalBill.toFixed(2)}
            </Box>
          </td>
        </tr>
      </table>
    </div>
  )
}

const OrderItem = ({ OrderList, initLoadMenu, initLoadOrder }) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1');
  const [open, setOpen] = useState(false)
  const [productInfo, setProductInfo] = useState({})
  const [showKicPrint, setShowKicPrint] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    navigate("/payment");
  }

  const backFloorPlan = () => {
    navigate("/floorplan");
  }

  const handleOpenMenu = (product) => {
    setProductInfo(product)
    setOpen(true)
  }

  function handlePrint() {
    setShowKicPrint(false)
  }

  return (
    <Box sx={{ width: '400px', typography: 'body1', marginTop: "8vh" }}>
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
        <TabPanel value="1" sx={{ height: "400px", overflow: "auto" }}>
          {
            OrderList && OrderList.map(product => {
              return <ProductCard product={product} openModal={() => handleOpenMenu(product)} />
            })
          }
          {OrderList.length === 0 && <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
            <Box><NoFoodIcon /></Box>
            <Typography variant='p'>ไม่พบรายการอาหารที่สั่ง Dine In</Typography>
          </Box>}
        </TabPanel>
        <TabPanel value="2" sx={{ height: "400px", overflow: "auto" }}>
          <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
            <Box><NoFoodIcon /></Box>
            <Typography variant='p'>ไม่พบรายการอาหาร take away</Typography>
          </Box>
        </TabPanel>
        <TabPanel value="3" sx={{ height: "400px", overflow: "auto" }}>
          <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
            <Box><NoFoodIcon /></Box>
            <Typography variant='p'>ไม่พบรายการอาหาร delevery</Typography>
          </Box>
        </TabPanel>
      </TabContext>
      <Box display="flex" justifyContent="center" sx={{ margin: "5px" }}>
        <Button variant="outlined" startIcon={<PrintIcon />} onClick={() => setShowKicPrint(true)}>Print to Kic</Button>
      </Box>
      <TotalBill orderList={OrderList} />
      <div style={{ margin: "20px" }} align="right">
        <Button variant='contained' color='primary' onClick={backFloorPlan} sx={{ marginRight: "10px", width: "150px" }} startIcon={<ArrowBack />}>ย้อนกลับ</Button>
        <Button variant='contained' color='success' onClick={handleClick} sx={{ width: "150px" }} endIcon={<MoneyIcon />}>รับชำระ</Button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...modalStyle, width: 450 }}>
          <ProductDetailCard product={productInfo} closeModal={() => setOpen(false)} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} />
        </Box>
      </Modal>

      <Modal open={showKicPrint} onClose={() => setShowKicPrint(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...modalStyle, width: 450 }} id="paperPrint">
          <Paper elevation={3} sx={{ padding: "10px" }}>
            <div align="center">*** รายการส่งครัว ***</div>
            <div>Table No: 101</div>
            <div>Date: 11/11/2024 12:51:03</div>
            <hr />
            <div>Dine in</div>
            <hr />

            <table width="100%">
              {
                OrderList && OrderList.map(product => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>x</td>
                      <td>{product.qty}</td>
                    </tr>
                  )
                })
              }
            </table>
            <hr />
            <Box display="flex" justifyContent="center">
              <Button variant='outlined' startIcon={<PrintIcon />} onClick={handlePrint}>Print</Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </Box>
  );
}

export default OrderItem
