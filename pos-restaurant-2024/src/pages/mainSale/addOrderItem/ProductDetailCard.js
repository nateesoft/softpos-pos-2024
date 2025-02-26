import React, { useContext, useState } from "react"
import CloseIcon from "@mui/icons-material/Cancel"
import ConfirmIcon from "@mui/icons-material/Check"
import {
  Alert,
  Box,
  Button,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Grid2,
  TextField,
  Divider
} from "@mui/material"

import apiClient from "../../../httpRequest"
import OptionMenuSelect from "../OptionMenuSelect"
import { POSContext } from "../../../AppContext"

const ProductDetailCard = ({
  tableNo,
  product,
  handleNotification,
  closeModal,
  initLoadOrder,
  initLoadMenu
}) => {
  const { appData } = useContext(POSContext)
  const { empCode, macno, userLogin } = appData

  const [count, setCount] = useState(product.R_Quan || 1)
  const [orderType, setOrderType] = useState(product.R_ETD || "E")
  const [optList, setOptList] = useState([])
  const [specialText, setSpecialText] = useState("")

  // discount
  const [discountPercent, setDiscountPercent] = useState(0)
  const [discountBaht, setDiscountBaht] = useState(0)

  const handleChange = (event, oType) => {
    setOrderType(event.target.value)
  }

  const handleConfirm = () => {
    if(discountPercent < 0 || discountPercent > 100) {
      return
    }
    if(discountBaht < 0 || discountBaht > product.menuPrice) {
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
          closeModal()
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #eee",
        borderRadius: "10px",
        background: "#eee"
      }}
    >
      <Box sx={{background: "radial-gradient(circle, #123456, #000)"}}>
        <Grid2 container justifyContent="center">
          <img
            src={product.image_url}
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
          sx={{ background: "chocolate", marginTop: -8, borderBottom: "1px solid snow" }}
        >
          <Typography variant="p" sx={{color: "white"}}>เมนู {product.R_PName}</Typography>
        </Grid2>
      </Box>
      <Grid2
        container
        justifyContent="space-between"
        padding={1}
        marginBottom={1}
        sx={{ background: "chocolate" }}
      >
        <Typography variant="p" sx={{color: "white"}}>ราคา {product.R_Price} บาท</Typography>
        <Typography variant="p" sx={{color: "white"}}>รหัส {product.R_PluCode}</Typography>
      </Grid2>
      <OptionMenuSelect
        setSpecialText={setSpecialText}
        productCode={product.R_PluCode}
        optList={optList}
        setOptList={setOptList}
      />
      {product.R_Discount === 'Y' && <Grid2
        marginTop={1}
        marginBottom={1}
        container
        justifyContent="space-between"
      >
        <TextField label="ส่วนลด %" value={discountPercent} onChange={e=>setDiscountPercent(e.target.value)}></TextField>
        <TextField label="จำนวนเงินส่วนลด" value={discountBaht} onChange={e=>setDiscountBaht(e.target.value)}></TextField>
      </Grid2>}
      <Grid2 container>
        <Grid2 container size={12}>
          <Typography variant="p">ประเภทอาหาร</Typography>
        </Grid2>
        <Grid2 justifyContent="center" size={12}>
          <ToggleButtonGroup
            color="primary"
            value={orderType}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            fullWidth
          >
            <ToggleButton value="E">Dine In</ToggleButton>
            <ToggleButton value="T">Take Away</ToggleButton>
            <ToggleButton value="D">Delivery</ToggleButton>
          </ToggleButtonGroup>
        </Grid2>
      </Grid2>
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
  )
}

export default ProductDetailCard
