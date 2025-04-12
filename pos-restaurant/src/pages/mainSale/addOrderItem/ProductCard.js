import React, { useContext, useEffect, useState } from "react"

import {
  IconButton,
  TextField,
  Typography,
  Box,
  Grid2,
  Modal,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ImageListItem} from "@mui/material"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import RemoveCircleIcon from "@mui/icons-material/DoNotDisturbOn"
import BlockIcon from "@mui/icons-material/Block"
import GppGoodIcon from "@mui/icons-material/GppGood"

import apiClient from "../../../httpRequest"
import { POSContext } from "../../../AppContext"
import { CurrencyContext } from "../../../contexts/CurrencyContext"
import { useAlert } from "../../../contexts/AlertContext"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #eee",
  backgroundColor: "snow"
}

const ProductCard = ({
  tableNo,
  product,
  openModal,
  initLoadMenu,
  initLoadOrder,
  hideItem,
  setHideItem,
  initLoadBalanceProductGroup,
  menuType
}) => {
  const { appData } = useContext(POSContext)
  const { currency, convertCurrency } = useContext(CurrencyContext)
  const { handleNotification } = useAlert()

  const { macno, userLogin, empCode, baseName } = appData
  const [voidMsgList, setVoidMsgList] = useState([])
  const [voidMsg, setVoidMsg] = useState([])
  const [currRIndex, setCurrRIndex] = useState("")
  const optList = [
    product.R_Opt1,
    product.R_Opt2,
    product.R_Opt3,
    product.R_Opt4,
    product.R_Opt5,
    product.R_Opt6,
    product.R_Opt7,
    product.R_Opt8,
    product.R_Opt9
  ]
  const [count, setCount] = useState(product.R_Quan || 1)
  const [open, setOpen] = useState(false)

  const voidStatus = product.R_Void === "V"

  const RPrice = convertCurrency(product.R_Price, currency)
  const RPriceQty = convertCurrency(product.R_Price * product.R_Quan, currency)

  const handleVoidItem = (R_Index) => {
    if (voidMsg) {
      apiClient
        .post(`/api/balance/void`, {
          R_Index: R_Index,
          Cachier: userLogin,
          empCode: empCode,
          macno: macno,
          voidMsg: voidMsg
        })
        .then((response) => {
          initLoadMenu()
          initLoadOrder()
          initLoadBalanceProductGroup()

          setOpen(false)
        })
        .catch((err) => {
          handleNotification(err.message)
        })
    }
  }

  const handleAddItem = (etdType) => {
    apiClient
      .post(`/api/balance`, {
        tableNo,
        menuInfo: {
          menu_code: product.R_PluCode,
          menu_name: product.R_PName,
          menu_price: product.R_Price
        },
        qty: 1,
        macno,
        userLogin,
        empCode,
        etdType
      })
      .then((response) => {
        initLoadMenu()
        initLoadOrder()
        initLoadBalanceProductGroup()
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }

  const handleOpen = (R_Index) => {
    setCurrRIndex(R_Index)
    setVoidMsg("")
    setOpen(true)
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

  const showActionBalance = (product) => {
    if (
      "" === product.R_LinkIndex ||
      null === product.R_LinkIndex ||
      "null" === product.R_LinkIndex
    ) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    loadVoidMsgList()
  }, [])

  return (
    <>
      <Grid2 container spacing={1} justifyContent="space-evenly">
        <Grid2 size={3}>
          <div
            style={{
              position: "relative",
              textAlign: "center",
              color: "white"
            }}
          >
            <img
              src={`/${baseName}/${product.image_url}`}
              alt=""
              height={100}
              width={100}
              style={{ borderRadius: "5px" }}
              onClick={!voidStatus ? openModal : console.log("")}
            />
            {!product.R_LinkIndex && (
              <ImageListItem
                sx={{ position: "absolute", top: "0px", right: "0px" }}
              >
                <GppGoodIcon fontSize="small" sx={{ color: "gold" }} />
              </ImageListItem>
            )}
          </div>
          {optList && optList
              .filter((o) => o !== "")
              .map((opt) => (
                <Typography sx={{ fontSize: "12px", color: "green" }}>
                  *{opt},
                </Typography>
              ))}
          {product.R_Pause === "P" && <LocalPrintshopIcon sx={{color: "#aaa"}} />}
        </Grid2>
        <Grid2
          size={7}
          padding={1}
          margin={1}
          sx={{ backgroundColor: product.R_Void === "V" ? "#eee" : "snow" }}
        >
          <Grid2 margin={1}>
            {product.R_PluCode}-{product.R_PName}
          </Grid2>
          {voidStatus && (
            <Typography sx={{ fontWeight: "bold", color: "red" }}>
              ( *{optList[8]}* )
            </Typography>
          )}
          {!voidStatus && (
            <Grid2 display="flex" justifyContent="center">
              {showActionBalance(product) && (
                <IconButton onClick={() => handleOpen(product.R_Index)}>
                  <RemoveCircleIcon
                    sx={{ color: product.R_Pause === "P" ? "gray" : "red" }}
                    fontSize="large"
                  />
                </IconButton>
              )}
              {showActionBalance(product) && <TextField
                inputProps={{
                  min: 0,
                  style: {
                    textAlign: "right",
                    minWidth: "35px",
                    fontWeight: "bold"
                  }
                }}
                variant="standard"
                type="number"
                value={count}
                disabled
                onChange={(e) => setCount(e.target.value)}
              />}
              {showActionBalance(product) && (
                <IconButton onClick={()=>handleAddItem(menuType)}>
                  <AddCircleIcon color="success" fontSize="large" />
                </IconButton>
              )}
            </Grid2>
          )}
          <Grid2 container margin={1}>
            <Typography>
              x {product.R_Quan}{" "}
            </Typography>
            <Typography>&nbsp;=&nbsp;</Typography>
            <Typography>
              {new Intl.NumberFormat("th-TH", {
                style: "currency",
                currency
              }).format(convertCurrency(RPriceQty))}
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 450 }}>
          <Grid2 container spacing={2} padding={2} justifyContent="flex-end">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                เหตุผลในการ VOID
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
            <Button
              variant="contained"
              color="error"
              startIcon={<BlockIcon />}
              onClick={() => handleVoidItem(currRIndex)}
            >
              ยืนยันการ Void
            </Button>
          </Grid2>
        </Box>
      </Modal>
    </>
  )
}

export default ProductCard
