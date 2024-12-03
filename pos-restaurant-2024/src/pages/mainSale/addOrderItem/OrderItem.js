import React, { useState } from "react"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import { useNavigate } from "react-router-dom"
import Moment from 'react-moment'
import NoFoodIcon from "@mui/icons-material/NoFood"
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import {
  Box,
  Button,
  Modal,
  Typography,
  Paper,
  Grid2,
  Divider,
} from "@mui/material"
import axios from "axios"
import ArrowBack from "@mui/icons-material/TableBar"
import PrintIcon from "@mui/icons-material/Print"
import PrintCheckboxIcon from "@mui/icons-material/CheckBox"
import ProductCard from './ProductCard'
import ProductDetailCard from './ProductDetailCard'

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #eee",
  backgroundColor: "snow"
}

const TotalBill = ({ tableNo, orderList }) => {
  let totalBill = 0
  for (let i = 0; i < orderList.length; i++) {
    const balance = orderList[i]
    if (balance.R_Void !== 'V') {
      totalBill = totalBill + parseInt(balance.R_Quan * balance.R_Price)
    }
  }
  totalBill = totalBill.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
  return (
    <div
      style={{
        padding: "5px",
        backgroundColor: "salmon",
        border: "2px solid #eee",
        borderRadius: "10px",
        margin: "5px"
      }}
    >
      <Grid2 container spacing={2}>
        <Typography variant="p" sx={{ fontWeight: "bold", margin: "4px" }}>Total Amount</Typography>
      </Grid2>
      <Grid2 container display="flex" justifyContent="flex-end">
        <Typography variant="h2" sx={{ fontWeight: "bold", textShadow: "2px 2px white" }}>{totalBill}</Typography>
      </Grid2>
    </div>
  )
}

const OrderItem = ({
  tableNo,
  OrderList,
  OrderEList,
  OrderTList,
  OrderDList,
  initLoadMenu,
  initLoadOrder,
  typePopup = false,
  handleNotification
}) => {
  const navigate = useNavigate()
  const [value, setValue] = React.useState("1")
  const [open, setOpen] = useState(false)

  const [productInfo, setProductInfo] = useState({})
  const [showKicPrint, setShowKicPrint] = useState(false)

  // const matches = useMediaQuery('(min-width:600px)');

  const styleMain = {
    typography: "body1",
    marginTop: "8vh"
  }

  const stylePopup = {
    width: "350x",
    height: "85vh",
    typography: "body1"
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClick = () => {
    navigate(`/payment/${tableNo}`)
  }

  const backFloorPlan = () => {
    navigate("/floorplan")
  }

  const handleOpenMenu = (product) => {
    setProductInfo(product)
    setOpen(true)
  }

  function handlePrint() {
    // update send to Kic
    axios.patch(`/api/balance/printToKic/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          setShowKicPrint(false)
          navigate("/floorplan")
        }
      })
      .catch(err => {
        handleNotification(err)
      })
  }

  return (
    <Box sx={typePopup ? stylePopup : styleMain}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Dine In" value="1" sx={{ boxShadow: "2px 2px #eee" }} />
          <Tab label="Take Away" value="2" sx={{ boxShadow: "2px 2px #eee" }} />
          <Tab label="Delivery" value="3" sx={{ boxShadow: "2px 2px #eee" }} />
        </TabList>
        <Box textAlign="center" sx={{ marginTop: "10px" }}>
          <Typography variant="h5">รายการอาหารที่สั่ง</Typography>
        </Box>
        <Box textAlign="center" sx={{ marginTop: "10px" }}>
          <Typography
            variant="p"
            sx={{
              border: "1px solid salmon",
              fontWeight: "bold",
              color: "snow",
              borderRadius: "15px",
              padding: "12px",
              background: "chocolate"
            }}
          >
            โต๊ะ {tableNo}
          </Typography>
        </Box>
        <TabPanel
          value="1"
          sx={{ height: typePopup ? "320px" : "380px", overflow: "auto" }}
        >
          {OrderEList && OrderEList.map((product) => {
            return (
              <div style={{margin: "5px"}}>
                <ProductCard
                  tableNo={tableNo}
                  product={product}
                  handleNotification={handleNotification}
                  initLoadMenu={initLoadMenu}
                  initLoadOrder={initLoadOrder}
                  openModal={() => handleOpenMenu(product)}
                />
                <Divider />
              </div>
            )
          })}
          {OrderEList && OrderEList.length === 0 && (
            <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
              <Box>
                <NoFoodIcon />
              </Box>
              <Typography variant="p">
                ไม่พบรายการอาหารที่สั่ง Dine In
              </Typography>
            </Box>
          )}
        </TabPanel>
        <TabPanel
          value="2"
          sx={{ height: typePopup ? "320px" : "380px", overflow: "auto" }}
        >
          {OrderTList && OrderTList.map((product) => {
            return (
              <ProductCard
                tableNo={tableNo}
                product={product}
                handleNotification={handleNotification}
                initLoadMenu={initLoadMenu}
                initLoadOrder={initLoadOrder}
                openModal={() => handleOpenMenu(product)}
              />
            )
          })}
          {OrderTList && OrderTList.length === 0 && (
            <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
              <Box>
                <NoFoodIcon />
              </Box>
              <Typography variant="p">
                ไม่พบรายการอาหารที่สั่ง Take Away
              </Typography>
            </Box>
          )}
        </TabPanel>
        <TabPanel
          value="3"
          sx={{ height: typePopup ? "320px" : "380px", overflow: "auto" }}
        >
          {OrderDList && OrderDList.map((product) => {
            return (
              <ProductCard
                tableNo={tableNo}
                product={product}
                handleNotification={handleNotification}
                initLoadMenu={initLoadMenu}
                initLoadOrder={initLoadOrder}
                openModal={() => handleOpenMenu(product)}
              />
            )
          })}
          {OrderDList && OrderDList.length === 0 && (
            <Box textAlign="center" sx={{ marginTop: "100px", color: "#bbb" }}>
              <Box>
                <NoFoodIcon />
              </Box>
              <Typography variant="p">
                ไม่พบรายการอาหารที่สั่ง Delivery
              </Typography>
            </Box>
          )}
        </TabPanel>
      </TabContext>
      <Grid2 container spacing={2} margin={3} justifyContent="center">
        {/* <Button
          variant="outlined"
          startIcon={<PrintCheckboxIcon />}
          onClick={() => setShowKicPrint(true)}
          sx={{ marginRight: "10px" }}
        >
          ตรวจสอบปริ้นเตอร์
        </Button> */}
        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          disabled={OrderList.length === 0}
          onClick={() => setShowKicPrint(true)}
        >
          ส่งครัว/ พักโต๊ะ
        </Button>
      </Grid2>
      <TotalBill tableNo={tableNo} orderList={OrderList} />
      <Grid2 container spacing={1} justifyContent="center">
        {typePopup === false && (
          <Button
            variant="contained"
            color="primary"
            onClick={backFloorPlan}
            startIcon={<ArrowBack />}
          >
            Floor Plan
          </Button>
        )}
        <Button
          variant="contained"
          color="success"
          onClick={handleClick}
          disabled={OrderList.length === 0}
          endIcon={<PointOfSaleIcon />}
        >
          ชำระเงิน
        </Button>
      </Grid2>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 450 }}>
          <ProductDetailCard
            tableNo={tableNo}
            product={productInfo}
            closeModal={() => setOpen(false)}
            initLoadMenu={initLoadMenu}
            initLoadOrder={initLoadOrder}
            handleNotification={handleNotification}
          />
        </Box>
      </Modal>

      <Modal
        open={showKicPrint}
        onClose={() => setShowKicPrint(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 450 }} id="paperPrint">
          <Paper elevation={3} sx={{ padding: "10px", height: '450px', overflow: 'auto' }}>
            <div align="center">*** รายการส่งครัว ***</div>
            <div>Table No: {tableNo}</div>
            <div>Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} /></div>
            <hr />
            {OrderEList && OrderEList.length > 0 &&
              (<div>
                <div>Dine in</div>
                <hr />
                <table width="100%">
                  {OrderEList.map((product) => {
                    return (
                      <tr>
                        <di>{product.R_ETD}</di>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
                <hr />
              </div>)
            }
            {OrderTList && OrderTList.length > 0 &&
              (<div>
                <div>Take Away</div>
                <hr />
                <table width="100%">
                  {OrderTList.map((product) => {
                    return (
                      <tr>
                        <di>{product.R_ETD}</di>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
                <hr />
              </div>)
            }
            {OrderDList && OrderDList.length > 0 &&
              (<div>
                <div>Deliver</div>
                <hr />
                <table width="100%">
                  {OrderDList.map((product) => {
                    return (
                      <tr>
                        <di>{product.R_ETD}</di>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
                <hr />
              </div>)
            }
            <Box display="flex" justifyContent="center">
              <Button
                variant="outlined"
                startIcon={<PrintIcon />}
                onClick={handlePrint}
              >
                Print
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </Box>
  )
}

export default OrderItem
