import React, { useCallback, useContext, useEffect, useState } from 'react'

import { IconButton, TextField, Typography, Box, Grid2, Modal, Button, FormControl, InputLabel, Select, MenuItem, ImageListItem } from '@mui/material'
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from '@mui/icons-material/DoNotDisturbOn';
import BlockIcon from '@mui/icons-material/Block';
import GppGoodIcon from '@mui/icons-material/GppGood';

import apiClient from '../../../httpRequest';
import { POSContext } from '../../../AppContext';
import ShowNotification from "../../ui-utils/ShowNotification"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #eee",
  backgroundColor: "snow"
}

const ProductCard = ({ tableNo, product, openModal, initLoadMenu, initLoadOrder }) => {
  console.log('ProductCard:', product)
  const { appData } = useContext(POSContext)
  const { macno, userLogin, empCode } = appData
  const [voidMsgList, setVoidMsgList] = useState([])
  const [voidMsg, setVoidMsg] = useState([])
  const [currRIndex, setCurrRIndex] = useState("")
  const [optList] = useState([product.R_Opt1, product.R_Opt2, product.R_Opt3, product.R_Opt4, product.R_Opt5, product.R_Opt6, product.R_Opt7, product.R_Opt8, product.R_Opt9])
  const [count, setCount] = useState(product.R_Quan || 1)
  const [open, setOpen] = useState(false)

  const voidStatus = product.R_Void === 'V'
  const pauseStatus = product.R_Pause === 'P'
  // const backgroundItem = product.R_Void === 'V' ? "yellow" : pauseStatus ? "#eee" : "snow"

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const handleVoidItem = (R_Index) => {
    if (voidMsg) {
      apiClient.post(`/api/balance/void`, {
        R_Index: R_Index,
        Cachier: userLogin,
        empCode: empCode,
        macno: macno,
        voidMsg: voidMsg
      })
        .then(response => {
          initLoadMenu()
          initLoadOrder()
          setOpen(false)
        })
        .catch(err => {
          handleNotification(err.message)
        })
    }
  }

  const handleAddItem = () => {
    apiClient.post(`/api/balance`, {
      tableNo, menuInfo: {
        menu_code: product.R_PluCode,
        menu_name: product.R_PName,
        menu_price: product.R_Price
      }, qty: 1, macno, userLogin, empCode
    })
      .then(response => {
        initLoadMenu()
        initLoadOrder()
      })
      .catch(err => {
        handleNotification(err.message)
      })
  }

  const handleOpen = (R_Index) => {
    setCurrRIndex(R_Index)
    setVoidMsg("")
    setOpen(true)
  }

  const loadVoidMsgList = useCallback(() => {
    apiClient.get(`/api/voidmsg`)
      .then(response => {
        const voidMsgData = response.data.data
        setVoidMsgList(voidMsgData)
      })
      .catch(err => handleNotification(err.message))
  }, [])

  const showActionBalance = product => {
    if ("" === product.R_LinkIndex || null === product.R_LinkIndex || "null" === product.R_LinkIndex) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    loadVoidMsgList()
  }, [loadVoidMsgList])

  return (
    <>
      <Grid2 container spacing={1} justifyContent="space-evenly">
        <Grid2 size={3}>
          <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
            <img src={product.image_url} alt="" height={100} width={100} style={{ borderRadius: "5px" }}
              onClick={!voidStatus ? openModal : console.log('')}
            />
            {!product.R_LinkIndex && <ImageListItem sx={{ position: "absolute", top: "0px", right: "0px" }}>
              <GppGoodIcon fontSize='large' sx={{ color: "gold" }} />
            </ImageListItem>}
          </div>
        </Grid2>
        <Grid2 size={7} padding={1} margin={1} sx={{ backgroundColor: product.R_Void === 'V' ? "#eee" : "snow" }}>
          <Grid2 margin={1}>{product.R_PluCode}-{product.R_PName}</Grid2>
          {voidStatus && <Typography sx={{ fontWeight: "bold", color: "red" }}>( * ยกเลิกรายการอาหาร = {optList[8]} * )</Typography>}
          {!voidStatus &&
            <Grid2 display="flex" justifyContent="center">
              {showActionBalance(product) && <IconButton onClick={() => handleOpen(product.R_Index)} disabled={product.R_Pause === 'P'}>
                <RemoveCircleIcon sx={{ color: product.R_Pause === 'P' ? "gray" : "red" }} fontSize="large" />
              </IconButton>}
              <TextField
                inputProps={{ min: 0, style: { textAlign: "right", minWidth: '35px', fontWeight: "bold" } }}
                variant="outlined"
                type="number"
                value={count}
                disabled
                onChange={(e) => setCount(e.target.value)}
              />
              {showActionBalance(product) && <IconButton onClick={handleAddItem}>
                <AddCircleIcon color="success" fontSize="large" />
              </IconButton>}
            </Grid2>}
          <Grid2 container>
            <Typography>
              ราคา {product.R_Price} x {product.R_Quan}{" "}
            </Typography>
            <Typography>&nbsp;=&nbsp;</Typography>
            <Typography>{product.R_Price * product.R_Quan}</Typography>
          </Grid2>
          {!voidStatus &&
            <Box display="flex" flexDirection="row">
              {optList && optList.filter(o => o !== "").map((opt) =>
                <Typography sx={{ fontSize: "10px", color: "green" }}>{opt},</Typography>
              )}
            </Box>}
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
              <InputLabel id="demo-simple-select-label">เหตุผลในการ VOID</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={voidMsg}
                label="เหตุผลในการ VOID"
                onChange={(e) => setVoidMsg(e.target.value)}
              >
                {voidMsgList && voidMsgList.map(item => <MenuItem key={item.VName} value={item.VName}>{item.VName}</MenuItem>)}
              </Select>
            </FormControl>
            <Button variant='contained' color='error' startIcon={<BlockIcon />} onClick={() => handleVoidItem(currRIndex)}>ยืนยันการ Void</Button>
          </Grid2>
        </Box>
      </Modal>
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </>
  )
}

export default ProductCard
