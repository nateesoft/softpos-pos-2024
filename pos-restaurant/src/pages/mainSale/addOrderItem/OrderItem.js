import React, { useContext, useEffect, useState } from "react"
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
import {
  Box,
  Button,
  Modal,
  Typography,
  Paper,
  Grid2,
  Divider,
  IconButton,
  Badge,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails} from "@mui/material"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from "@mui/icons-material/DoNotDisturbOn"
import { motion, AnimatePresence } from "framer-motion";

import apiClient from "../../../httpRequest"
import ProductCard from "./ProductCard"
import ProductDetailCard from "./ProductDetailCard"
import { CurrencyContext } from "../../../contexts/CurrencyContext"
import { POSContext } from "../../../AppContext"

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

const getFormatMoney = (convertCurrency, currency, number) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency
  }).format(convertCurrency(number))
}

const TotalBill = ({summaryTable}) => {
  const { currency, convertCurrency } = useContext(CurrencyContext)
  const convertedTotal = convertCurrency(summaryTable, currency)
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
        <AnimatePresence mode="popLayout">
          <motion.div
            key={summaryTable}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Typography fontSize={28} fontWeight="bold" sx={{ color: "black" }}>
              {getFormatMoney(convertCurrency, currency, convertedTotal)}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Grid2>
    </div>
  )
}

const OrderItem = ({
  tableNo,
  balanceProductGroup,
  orderType,
  OrderList,
  OrderEList,
  OrderTList,
  OrderDList,
  initLoadMenu,
  initLoadOrder,
  typePopup = false,
  handleNotification,
  initLoadBalanceProductGroup,
  summaryTable,
  summaryTableFileBalance
}) => {
  const navigate = useNavigate()
  const { appData } = useContext(POSContext)
  const { macno, userLogin, empCode } = appData

  const [currentMenuCode, setCurrentMainMenuCode] = useState("")
  
  const [value, setValue] = useState(orderType || "E")
  const [open, setOpen] = useState(false)
  const [openVoidGroup, setOpenVoidGroup] = useState(false)

  const [voidMsgList, setVoidMsgList] = useState([])
  const [voidMsg, setVoidMsg] = useState([])

  const [productInfo, setProductInfo] = useState({})
  const [showKicPrint, setShowKicPrint] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleVoidGroupMenu = (pluCode) => {
    setCurrentMainMenuCode(pluCode)
    setOpenVoidGroup(true)
    summaryTableFileBalance()
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

  const loadVoidMsgList = () => {
    apiClient
      .get(`/api/voidmsg`)
      .then((response) => {
        if(response.status === 200){
          const voidMsgData = response.data.data
          setVoidMsgList(voidMsgData)
        }
      })
      .catch((err) => handleNotification(err.message))
  }

  const handleVoidItem = () => {
    if (voidMsg) {
      apiClient
        .post(`/api/balance/voidList`, {
          menu_code: currentMenuCode,
          void_message: voidMsg,
          Cachier: userLogin,
          empCode: empCode,
          macno: macno
        })
        .then((response) => {
          setOpenVoidGroup(false)
          initLoadMenu()
          initLoadOrder()
          summaryTableFileBalance()
        })
        .catch((err) => {
          handleNotification(err.message)
        })
    }
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

  useEffect(() => {
    loadVoidMsgList()
  }, [])

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
              color: "#123456",
              fontSize: 22
            }}
          >
            โต๊ะ {tableNo}
          </Typography>
          <Divider sx={{ padding: "5px" }} />
        </Grid2>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label={
            <Badge
                  badgeContent={balanceProductGroup && balanceProductGroup.filter(gg=>gg.R_ETD==='E').length}
                  sx={{
                    "& .MuiBadge-badge": {
                      background: "lightpink",
                      height: 20,
                      width: 15,
                      top: -2,
                      right: -2,
                      borderRadius: "50%",
                      color: "white",
                      fontWeight: "bold"
                    }
                  }}
                >
                  <Typography sx={{fontWeight: "bold"}}>Dine In</Typography>
                </Badge>
          } value="E" sx={{ border: "1px solid #eee", fontWeight: "bold", fontSize: 18 }} />
          <Tab label={
            <Badge
                  badgeContent={balanceProductGroup && balanceProductGroup.filter(gg=>gg.R_ETD==='T').length}
                  sx={{
                    "& .MuiBadge-badge": {
                      background: "lightblue",
                      height: 20,
                      width: 15,
                      top: -2,
                      right: -2,
                      borderRadius: "50%",
                      color: "white",
                      fontWeight: "bold"
                    }
                  }}
                >
                  <Typography sx={{fontWeight: "bold"}}>Take Away</Typography>
                </Badge>
          } value="T" sx={{ border: "1px solid #eee", fontWeight: "bold", fontSize: 18 }} />
          <Tab label={
            <Badge
                  badgeContent={balanceProductGroup && balanceProductGroup.filter(gg=>gg.R_ETD==='D').length}
                  sx={{
                    "& .MuiBadge-badge": {
                      background: "lightgreen",
                      height: 20,
                      width: 15,
                      top: -2,
                      right: -2,
                      borderRadius: "50%",
                      color: "white",
                      fontWeight: "bold"
                    }
                  }}
                >
                  <Typography sx={{fontWeight: "bold"}}>Delivery</Typography>
                </Badge>
          } value="D" sx={{ border: "1px solid #eee", fontWeight: "bold", fontSize: 18 }} />
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
          {balanceProductGroup && 
          balanceProductGroup.filter(gg=>gg.R_ETD==='E').map(item => 
            <Accordion key={1} sx={{ borderBottom: "1px solid #eee", background: "linear-gradient(0deg, #FFDEE9 0%, snow 100%)", boxShadow: "none", borderRadius: "none" }}>
              <AccordionSummary>
                <Grid2 container size={12}>
                  <Grid2 size={6}>
                    <Grid2 container>
                      <Typography>{item.R_PName}</Typography>
                    </Grid2>
                  </Grid2>
                  <Grid2 size={6}>
                    <Grid2 container direction="row" justifyContent="flex-end" alignItems="center">
                      <IconButton onClick={()=>handleVoidGroupMenu(item.R_PluCode)}>
                        <RemoveCircleIcon color="error" fontSize="large"/>
                      </IconButton>
                      <Typography>({item.R_Quan} items)</Typography>
                    </Grid2>
                  </Grid2>
                </Grid2>
              </AccordionSummary>
              <AccordionDetails>
                {OrderEList.filter(x => x.R_PluCode === item.R_PluCode).map((product) => {
                  return (
                    <div style={{ margin: "5px" }} key={product.R_PluCode}>
                      <ProductCard
                        tableNo={tableNo}
                        product={product}
                        handleNotification={handleNotification}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder}
                        openModal={() => handleOpenMenu(product)}
                        initLoadBalanceProductGroup={initLoadBalanceProductGroup} 
                        menuType="E"
                      />
                      <Divider />
                    </div>
                  )
                })}
              </AccordionDetails>
            </Accordion>
          )}
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
          {balanceProductGroup && 
          balanceProductGroup.filter(gg=>gg.R_ETD==='T').map(item => 
            <Accordion key={1} sx={{ borderBottom: "1px solid #eee", background: "linear-gradient(0deg, #b5dbff 0%, snow 100%)", boxShadow: "none", borderRadius: "none" }}>
              <AccordionSummary>
                <Grid2 container size={12}>
                  <Grid2 size={6}>
                    <Grid2 container>
                      <Typography>{item.R_PName}</Typography>
                    </Grid2>
                  </Grid2>
                  <Grid2 size={6}>
                    <Grid2 container direction="row" justifyContent="flex-end" alignItems="center">
                      <IconButton onClick={()=>handleVoidGroupMenu(item.R_PluCode)}>
                        <RemoveCircleIcon color="error" fontSize="large"/>
                      </IconButton>
                      <Typography>({item.R_Quan} items)</Typography>
                    </Grid2>
                  </Grid2>
                </Grid2>
              </AccordionSummary>
              <AccordionDetails>
                {OrderTList.filter(x => x.R_PluCode === item.R_PluCode).map((product) => {
                  return (
                    <div style={{ margin: "5px" }} key={product.R_PluCode}>
                      <ProductCard
                        tableNo={tableNo}
                        product={product}
                        handleNotification={handleNotification}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder}
                        openModal={() => handleOpenMenu(product)}
                        initLoadBalanceProductGroup={initLoadBalanceProductGroup} 
                        menuType="T"
                      />
                      <Divider />
                    </div>
                  )
                })}
              </AccordionDetails>
            </Accordion>
          )}
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
          {balanceProductGroup && 
          balanceProductGroup.filter(gg=>gg.R_ETD==='D').map(item => 
            <Accordion key={1} sx={{ borderBottom: "1px solid #eee", background: "linear-gradient(0deg, #b5ffb5 0%, snow 100%)", boxShadow: "none", borderRadius: "none" }}>
              <AccordionSummary>
                <Grid2 container size={12}>
                  <Grid2 size={6}>
                    <Grid2 container>
                      <Typography>{item.R_PName}</Typography>
                    </Grid2>
                  </Grid2>
                  <Grid2 size={6}>
                    <Grid2 container direction="row" justifyContent="flex-end" alignItems="center">
                      <IconButton onClick={()=>handleVoidGroupMenu(item.R_PluCode)}>
                        <RemoveCircleIcon color="error" fontSize="large"/>
                      </IconButton>
                      <Typography>({item.R_Quan} items)</Typography>
                    </Grid2>
                  </Grid2>
                </Grid2>
              </AccordionSummary>
              <AccordionDetails>
                {OrderDList.filter(x => x.R_PluCode === item.R_PluCode).map((product) => {
                  return (
                    <div style={{ margin: "5px" }} key={product.R_PluCode}>
                      <ProductCard
                        tableNo={tableNo}
                        product={product}
                        handleNotification={handleNotification}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder}
                        openModal={() => handleOpenMenu(product)}
                        initLoadBalanceProductGroup={initLoadBalanceProductGroup} 
                        menuType="D"
                      />
                      <Divider />
                    </div>
                  )
                })}
              </AccordionDetails>
            </Accordion>
          )}
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
      <TotalBill summaryTable={getTotalAmount(OrderList)} />
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
            initLoadBalanceProductGroup={initLoadBalanceProductGroup}
            handleNotification={handleNotification}
          />
        </Box>
      </Modal>

      <Modal
        open={openVoidGroup}
        onClose={() => setOpenVoidGroup(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 450 }}>
          <Grid2 container justifyContent="center" padding={2} spacing={2}>
            <Typography>เมนูอาหาร: {currentMenuCode}</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                เหตุผลในการยกเลิกรายการ
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={voidMsg}
                label="เหตุผลในการ VOID"
                onChange={(e) => setVoidMsg(e.target.value)}
              >
                {voidMsgList && voidMsgList.map((item) => (
                  <MenuItem key={item.VName} value={item.VName}>
                    {item.VName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" color="error" onClick={()=>handleVoidItem()}>Confirm Void</Button>
          </Grid2>
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
            *** รายการเตรียมส่งครัว ***
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
                  {OrderEList.filter(x=>x.TranType!=='PDA').map((product) => {
                    return (
                      <tr key={product.R_PluCode}>
                        <td align="center" style={{border: "1px solid", background: "red", color: "white"}}>{product.R_ETD}</td>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                  {OrderEList.filter(x=>x.TranType!=='PDA').length===0 && 
                  <div align="center" style={{padding: 50}}>
                    <Typography>ไม่พบรายการส่งครัว</Typography>
                  </div>}
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
                  {OrderTList.filter(x=>x.TranType!=='PDA').map((product) => {
                    return (
                      <tr key={product.R_PluCode}>
                        <td align="center" style={{border: "1px solid", background: "blue", color: "white"}}>{product.R_ETD}</td>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                  {OrderTList.filter(x=>x.TranType!=='PDA').length===0 && 
                  <div align="center" style={{padding: 50}}>
                    <Typography>ไม่พบรายการส่งครัว</Typography>
                  </div>}
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
                  {OrderDList.filter(x=>x.TranType!=='PDA').map((product) => {
                    return (
                      <tr key={product.R_PluCode}>
                        <td align="center" style={{border: "1px solid", background: "green", color: "white"}}>{product.R_ETD}</td>
                        <td>{product.R_PName}</td>
                        <td>x</td>
                        <td>{product.R_Quan}</td>
                      </tr>
                    )
                  })}
                  {OrderDList.filter(x=>x.TranType!=='PDA').length===0 && 
                  <div align="center" style={{padding: 50}}>
                    <Typography>ไม่พบรายการส่งครัว</Typography>
                  </div>}
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
                color="success"
                onClick={handlePrint}
              >
                ส่งครัว/พักโต๊ะ
              </Button>
            </Grid2>
          </Paper>
        </Box>
      </Modal>
    </div>
  )
}

export default OrderItem
