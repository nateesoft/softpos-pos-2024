import React, { useContext, useState } from "react"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import { useNavigate } from "react-router-dom"
import Moment from "react-moment"
import NoFoodIcon from "@mui/icons-material/NoFood"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import ArrowBack from "@mui/icons-material/TableBar"
import PrintIcon from "@mui/icons-material/Print"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
  Box,
  Button,
  Modal,
  Typography,
  Paper,
  Grid2,
  Divider
} from "@mui/material"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails} from "@mui/material"

import apiClient from "../../../httpRequest"
import ProductCard from "./ProductCard"
import ProductDetailCard from "./ProductDetailCard"
import { CurrencyContext } from "../../../contexts/CurrencyContext"

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
      totalBill =
        totalBill +
        parseInt(balance.R_Quan * balance.R_Price - balance.R_DiscBath)
    }
  }

  return totalBill
}

const TotalBill = ({ orderList }) => {
  console.log("TotalBill")
  const { currency, convertCurrency } = useContext(CurrencyContext)
  const totalBill = getTotalAmount(orderList)
  const convertedTotal = convertCurrency(totalBill, currency)
  return (
    <div
      style={{
        padding: "3px",
        border: "2px solid #eee",
        borderRadius: "5px",
        background: "#ffb4a4"
      }}
    >
      <Grid2 container spacing={1} padding={1}>
        <Typography variant="span" fontSize={14} fontWeight="bold" sx={{color: "black"}}>
          Total Amount
        </Typography>
      </Grid2>
      <Grid2 container justifyContent="flex-end">
        <Typography fontSize={28} fontWeight="bold" sx={{ color: "black" }}>
          {new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency
          }).format(convertCurrency(convertedTotal))}
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

  const [hideItem, setHideItem] = useState(false)

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
    <div style={{ overflow: "auto", width: "100%" }}>
      <Grid2
          container
          justifyContent="center"
          padding={1}
          sx={{
            background:
              "linear-gradient(90deg, #FF9A8B 0%, salmon 55%, #FF99AC 100%)"
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              borderRadius: "15px",
              color: "snow",
              fontSize: 18
            }}
          >
            โต๊ะ {tableNo}
          </Typography>
          <Divider sx={{ padding: "5px" }} />
        </Grid2>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Dine In" value="E" sx={{ boxShadow: "2px 2px #eee" }} />
          <Tab label="Take Away" value="T" sx={{ boxShadow: "2px 2px #eee" }} />
          <Tab label="Delivery" value="D" sx={{ boxShadow: "2px 2px #eee" }} />
        </TabList>
        <TabPanel
          value="E"
          sx={{
            height: typePopup ? "220px" : "270px",
            overflow: "auto",
            minHeight: "350px",
            padding: 0
          }}
        >
          {OrderEList && OrderEList.length > 0 &&<Accordion key={1} sx={{ borderBottom: "1px solid #eee", boxShadow: "none", borderRadius: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{1}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {OrderEList.map((product) => {
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
            </AccordionDetails>
          </Accordion>}
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
          sx={{
            height: typePopup ? "220px" : "270px",
            overflow: "auto",
            minHeight: "350px",
            padding: 0
          }}
        >
          {OrderTList && OrderTList.length > 0 &&<Accordion key={1} sx={{ borderBottom: "1px solid #eee", boxShadow: "none", borderRadius: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{1}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {OrderTList.map((product) => {
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
            </AccordionDetails>
          </Accordion>}
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
          sx={{
            height: typePopup ? "220px" : "270px",
            overflow: "auto",
            minHeight: "350px",
            padding: 0
          }}
        >
          {OrderDList && OrderDList.length > 0 &&<Accordion key={1} sx={{ borderBottom: "1px solid #eee", boxShadow: "none", borderRadius: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{1}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {OrderDList.map((product) => {
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
            </AccordionDetails>
          </Accordion>}
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
      <Grid2 container spacing={1} margin={1} justifyContent="center">
        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          disabled={OrderList.length === 0}
          onClick={() => setShowKicPrint(true)}
          color="secondary"
        >
          ส่งครัว/ พักโต๊ะ
        </Button>
      </Grid2>
      <TotalBill orderList={OrderList} />
      <Grid2 container spacing={1} justifyContent="center" padding={1}>
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
        <Box sx={{ ...modalStyle, width: 400 }} id="paperPrint">
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
          <div
            style={{
              background: "radial-gradient(circle, chocolate, white)",
              padding: "10px"
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "22px" }}>
              Table No: {tableNo}
            </div>
            <div>
              Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} />
            </div>
          </div>
          <Paper elevation={3} sx={{ overflow: "auto", padding: "5px" }}>
            {OrderEList && OrderEList.length > 0 && (
              <div style={{ maxHeight: "400px", overflow: "auto" }}>
                <div
                  align="right"
                  style={{
                    fontWeight: "bold",
                    color: "chocolate",
                    textDecoration: "underline"
                  }}
                >
                  ประเภท Dine In
                </div>
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
                <div
                  align="right"
                  style={{
                    fontWeight: "bold",
                    color: "chocolate",
                    textDecoration: "underline"
                  }}
                >
                  ประเภท Take Away
                </div>
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
                <div
                  align="right"
                  style={{
                    fontWeight: "bold",
                    color: "chocolate",
                    textDecoration: "underline"
                  }}
                >
                  ประเภท Deliver
                </div>
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
            <Grid2
              container
              justifyContent="center"
              padding={1}
              marginTop={2}
              sx={{ background: "#eee" }}
            >
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
    </div>
  )
}

export default OrderItem
