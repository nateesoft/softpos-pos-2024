import React, { useState } from "react"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import { useNavigate } from "react-router-dom"
import Moment from "react-moment"
import NoFoodIcon from "@mui/icons-material/NoFood"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import {
  Box,
  Button,
  Modal,
  Typography,
  Paper,
  Grid2,
  Divider
} from "@mui/material"

import apiClient from "../../../httpRequest"
import ArrowBack from "@mui/icons-material/TableBar"
import PrintIcon from "@mui/icons-material/Print"
import ProductCard from "./ProductCard"
import ProductDetailCard from "./ProductDetailCard"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #eee",
  backgroundColor: "snow"
}

const getTotalAmount = (orderList) => {
  let totalBill = 0
  for (let i = 0; i < orderList.length; i++) {
    const balance = orderList[i]
    if (balance.R_Void !== "V") {
      totalBill = totalBill + parseInt(balance.R_Quan * balance.R_Price)
    }
  }

  return totalBill
}

const TotalBill = ({ orderList }) => {
  const totalBill = getTotalAmount(orderList)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
  return (
    <div
      style={{
        padding: "3px",
        background: "salmon",
        border: "2px solid #eee",
        borderRadius: "5px"
      }}
    >
      <Grid2 container spacing={1} padding={1}>
        <Typography variant="p" sx={{ fontWeight: "bold" }}>
          Total Amount
        </Typography>
      </Grid2>
      <Grid2 container display="flex" justifyContent="flex-end">
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", textShadow: "2px 2px white" }}
        >
          {totalBill}
        </Typography>
      </Grid2>
    </div>
  )
}

const OrderItem = ({
  tableNo,
  orderType,
  OrderList,
  OrderEList,
  OrderTList,
  OrderDList,
  initLoadMenu,
  initLoadOrder,
  typePopup = false,
  handleNotification
}) => {
  console.log("OrderItem:", orderType)
  const navigate = useNavigate()
  const [value, setValue] = useState(orderType || "E")
  const [open, setOpen] = useState(false)

  const [productInfo, setProductInfo] = useState({})
  const [showKicPrint, setShowKicPrint] = useState(false)

  const handleChange = (event, newValue) => {
    console.log("handleChange:", newValue)
    setValue(newValue)
  }

  const handleClick = () => {
    // update send to Kic
    apiClient
      .patch(`/api/balance/printToKic/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          navigate(`/payment/${tableNo}`)
        }
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }

  const backFloorPlan = () => {
    // update send to Kic
    apiClient
      .patch(`/api/balance/printToKic/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          navigate("/floorplan")
        }
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }

  const handleOpenMenu = (product) => {
    setProductInfo(product)
    setOpen(true)
  }

  function handlePrint() {
    // update send to Kic
    apiClient
      .patch(`/api/balance/printToKic/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          setShowKicPrint(false)
          navigate("/floorplan")
        }
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }

  return (
    <>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Dine In" value="E" sx={{ boxShadow: "2px 2px #eee" }} />
          <Tab label="Take Away" value="T" sx={{ boxShadow: "2px 2px #eee" }} />
          <Tab label="Delivery" value="D" sx={{ boxShadow: "2px 2px #eee" }} />
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
          value="E"
          sx={{ height: typePopup ? "220px" : "270px", overflow: "auto" }}
        >
          {OrderEList &&
            OrderEList.map((product) => {
              return (
                <div style={{ margin: "5px" }} key={product.R_PluCode}>
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
          value="T"
          sx={{ height: typePopup ? "220px" : "270px", overflow: "auto" }}
        >
          {OrderTList &&
            OrderTList.map((product) => {
              return (
                <div style={{ margin: "5px" }} key={product.R_PluCode}>
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
          value="D"
          sx={{ height: typePopup ? "220px" : "270px", overflow: "auto" }}
        >
          {OrderDList &&
            OrderDList.map((product) => {
              return (
                <div style={{ margin: "5px" }} key={product.R_PluCode}>
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
        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          disabled={OrderList.length === 0}
          onClick={() => setShowKicPrint(true)}
        >
          ส่งครัว/ พักโต๊ะ
        </Button>
      </Grid2>
      <TotalBill orderList={OrderList} />
      <Grid2 container spacing={2} justifyContent="center" padding={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={backFloorPlan}
          startIcon={<ArrowBack />}
        >
          Floor Plan
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleClick}
          disabled={OrderList.length === 0 || getTotalAmount(OrderList) <= 0}
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
          <div
            align="center"
            style={{
              background: "radial-gradient(circle, #123456, #000)",
              fontSize: "22px",
              color: "snow",
              padding: "5px",
              fontWeight: "bold"
            }}
          >
            *** รายการส่งครัว ***
          </div>
          <div style={{ background: "radial-gradient(circle, chocolate, white)", padding: "10px" }}>
            <div style={{fontWeight: "bold", fontSize: "22px"}}>Table No: {tableNo}</div>
            <div>
              Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} />
            </div>
          </div>
          <Paper elevation={3} sx={{ overflow: "auto", padding: "5px" }}>
            {OrderEList && OrderEList.length > 0 && (
              <div style={{ maxHeight: "400px", overflow: "auto" }}>
                <div align="right" style={{fontWeight: "bold", color: "chocolate", textDecoration: "underline"}}>ประเภท Dine In</div>
                <table width="100%" cellPadding={3}>
                  {OrderEList.map((product) => {
                    return (
                      <tr key={product.R_PluCode}>
                        <td>{product.R_ETD}</td>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
              </div>
            )}
            {OrderTList && OrderTList.length > 0 && (
              <div>
                <div align="right" style={{fontWeight: "bold", color: "chocolate", textDecoration: "underline"}}>ประเภท Take Away</div>
                <table width="100%">
                  {OrderTList.map((product) => {
                    return (
                      <tr key={product.R_PluCode}>
                        <td>{product.R_ETD}</td>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
              </div>
            )}
            {OrderDList && OrderDList.length > 0 && (
              <div>
                <div align="right" style={{fontWeight: "bold", color: "chocolate", textDecoration: "underline"}}>ประเภท Deliver</div>
                <table width="100%">
                  {OrderDList.map((product) => {
                    return (
                      <tr key={product.R_PluCode}>
                        <td>{product.R_ETD}</td>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                </table>
              </div>
            )}
            <Grid2 container justifyContent="center" padding={1} marginTop={2} sx={{background: "#eee"}}>
              <Button
                variant="contained"
                startIcon={<PrintIcon />}
                onClick={handlePrint}
              >
                Print
              </Button>
            </Grid2>
          </Paper>
        </Box>
      </Modal>
    </>
  )
}

export default OrderItem
