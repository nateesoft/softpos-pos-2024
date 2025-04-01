import React, { useContext, useState, useEffect } from "react"
import CloseIcon from "@mui/icons-material/Cancel"
import ConfirmIcon from "@mui/icons-material/Check"
import PropTypes from "prop-types"
import {
  Alert,
  Box,
  Button,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Grid2,
  TextField,
  Tabs,
  Tab,
  Divider
} from "@mui/material"
import MainMenuIcon from '@mui/icons-material/StarHalf';
import SubItemIcon from '@mui/icons-material/ViewSidebar';

import apiClient from "../../../httpRequest"
import OptionMenuSelect from "../OptionMenuSelect"
import { POSContext } from "../../../AppContext"
import NumberFormat from "../../ui-utils/NumberFormat"

const baseName = process.env.REACT_APP_BASE_NAME

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  }
}

const ProductDetailCard = ({
  tableNo,
  product,
  handleNotification,
  closeModal,
  initLoadOrder,
  initLoadMenu,
  initLoadBalanceProductGroup
}) => {
  const { appData } = useContext(POSContext)
  const { empCode, macno, userLogin } = appData
  const {R_Opt1,R_Opt2,R_Opt3,R_Opt4,R_Opt5,R_Opt6,R_Opt7,R_Opt8} = product

  const [value, setValue] = React.useState(0)

  const [count, setCount] = useState(product.R_Quan || 1)
  const [orderType, setOrderType] = useState(product.R_ETD || "E")
  const [optList, setOptList] = useState([])
  const [specialText, setSpecialText] = useState(R_Opt1+R_Opt2+R_Opt3+R_Opt4+R_Opt5+R_Opt6+R_Opt7+R_Opt8)

  const [subMenuList, setSubMenuList] = useState([])

  // discount
  const [discountPercent, setDiscountPercent] = useState(product.R_PrDisc||0)
  const [discountBaht, setDiscountBaht] = useState(product.R_PrAmt||0)

  const handleChangeETDType = (event, oType) => {
    setOrderType(event.target.value)

    // update balance
    apiClient
      .patch(`/api/balance/updateChangeType`, {
        R_Table: tableNo, 
        R_ETD: oType, 
        macno, 
        R_Index: product.R_Index
      })
      .then((response) => {
        if (response.data.status === 2000) {
          console.log(`change type updated (${oType}).`)
          initLoadBalanceProductGroup()
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  const computeDiscount = (e) => {
    setDiscountPercent(e.target.value)
    const totalAmount = product.R_Price * product.R_Quan * e.target.value / 100
    setDiscountBaht(totalAmount)
  }

  const handleConfirm = () => {
    if (discountPercent < 0 || discountPercent > 100) {
      return
    }
    if (discountBaht < 0 || discountBaht > product.menuPrice) {
      return
    }
    // update balance
    apiClient
      .put(`/api/balance`, {
        oldBalance: product,
        discount: {
          discountPercent,
          discountPercent
        },
        optList,
        specialText,
        macno,
        userLogin,
        empCode,
        R_ETD: orderType
      })
      .then((response) => {
        if (response.data.status === 2000) {
          initLoadMenu()
          initLoadOrder()
          initLoadBalanceProductGroup()

          closeModal()
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const initLoadSubProduct = async () => {
    const listSubMenu = await apiClient.post(`/api/balance/getSubProduct`, {
      tableNo: product.R_Table,
      rLinkIndex: product.R_Index
    })

    setSubMenuList(listSubMenu.data.data)
  }

  useEffect(()=> {
    initLoadSubProduct()
  }, [])

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleTabChange}
        aria-label="basic tabs example"
      >
        <Tab
          iconPosition="start"
          icon={<MainMenuIcon />}
          label="Main Menu"
          {...a11yProps(0)}
          sx={{ fontWeight: "bold" }}
        />
        <Tab
          iconPosition="start"
          icon={<SubItemIcon />}
          label="Sub Menu"
          {...a11yProps(1)}
          sx={{ fontWeight: "bold" }}
        />
      </Tabs>

      <CustomTabPanel value={value} index={0} style={{ padding: 10 }}>
        <div
          style={{
            border: "2px solid #eee",
            borderRadius: "10px",
            background: "#eee"
          }}
        >
          <Box sx={{ background: "radial-gradient(circle, #123456, #000)" }}>
            <Grid2 container justifyContent="center">
              <img
                src={`/${baseName}/${product.image_url}`}
                height={150}
                width="auto"
                alt=""
                style={{ borderRadius: "10px", boxShadow: "2px 3px #ccc" }}
              />
            </Grid2>
            <Grid2
              container
              justifyContent="space-between"
              padding={1}
              sx={{
                background: "chocolate",
                marginTop: -8,
                borderBottom: "1px solid snow"
              }}
            >
              <Typography variant="p" sx={{ color: "white" }}>
                เมนู {product.R_PName}
              </Typography>
            </Grid2>
          </Box>
          <Grid2
            container
            justifyContent="space-between"
            padding={1}
            marginBottom={1}
            sx={{ background: "chocolate" }}
          >
            <Typography variant="p" sx={{ color: "white" }}>
              ราคา {NumberFormat(product.R_Price)}
            </Typography>
            <Typography variant="p" sx={{ color: "white", fontSize: 12 }}>
              รหัสสินค้า {product.R_PluCode}
            </Typography>
          </Grid2>
          <OptionMenuSelect
            setSpecialText={setSpecialText}
            productCode={product.R_PluCode}
            optList={optList}
            setOptList={setOptList}
          />
          {product.R_Discount === "Y" && (
            <Grid2
              marginTop={1}
              marginBottom={1}
              container
              justifyContent="space-between"
            >
              <TextField
                label="ส่วนลด %"
                value={discountPercent}
                onChange={computeDiscount}
                onFocus={(evt) => {
                  evt.target.select()
                }} />
              <TextField
                label="จำนวนเงินส่วนลด"
                value={discountBaht}
                onChange={(e) => setDiscountBaht(e.target.value)}
                onFocus={(evt) => {
                  evt.target.select()
                }} />
            </Grid2>
          )}
          <Grid2 container spacing={2} marginTop={2}>
            <Typography variant="p">ประเภทอาหาร ({orderType})</Typography>
            <ToggleButtonGroup
              color="primary"
              value={orderType}
              exclusive
              onChange={handleChangeETDType}
              aria-label="Platform"
              fullWidth
            >
              <ToggleButton value="E" sx={{background: "pink", fontWeight: "bold"}}>Dine In</ToggleButton>
              <ToggleButton value="T" sx={{background: "lightblue", fontWeight: "bold"}}>Take Away</ToggleButton>
              <ToggleButton value="D" sx={{background: "lightgreen", fontWeight: "bold"}}>Delivery</ToggleButton>
            </ToggleButtonGroup>
          </Grid2>
          <Divider sx={{background: "#000", margin: 1}} />
          {count === 0 && (
            <Alert severity="error" sx={{ width: "100%", marginBottom: "5px" }}>
              <Box>
                <Typography variant="span">
                  คุณต้องการลบรายการอาหารนี้หรือไม่ !!!
                </Typography>
              </Box>
            </Alert>
          )}
          <Grid2 padding={1} container justifyContent="center">
            <Button
              variant="contained"
              color="error"
              onClick={closeModal}
              sx={{ marginRight: "10px" }}
              startIcon={<CloseIcon />}
            >
              CANCEL
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleConfirm}
              startIcon={<ConfirmIcon />}
            >
              CONFIRM
            </Button>
          </Grid2>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid2 container spacing={2} sx={{height: 500, overflow: 'auto'}} justifyContent="flex-start">
          {subMenuList && subMenuList.map((item) => (
            <Grid2 key={item.R_Index} xs={3}>
              <Button variant="outlined" sx={{height: 100, width: 120}}>{item.R_PName}</Button>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      </CustomTabPanel>
    </div>
  )
}

export default ProductDetailCard
