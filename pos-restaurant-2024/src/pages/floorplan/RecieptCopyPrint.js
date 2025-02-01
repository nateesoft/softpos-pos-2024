import React, { useContext, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'
import { useNavigate } from "react-router-dom";

import apiClient from '../../httpRequest';
import ShowNotification from "../ui-utils/ShowNotification"
import { POSContext } from "../../AppContext";

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

const RecieptCopyPrint = ({ setOpen, socket }) => {
  const navigate = useNavigate();

  const { appData } = useContext(POSContext)
  const { userLogin, macno } = appData

  const [receiptNo, setReceiptNo] = useState("")
  const [copyCount, setCopyCount] = useState(1)

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const handleConfirm = () => {
    apiClient.post(`/api/billno/billCopy`, {
      billNo: receiptNo,
      Cashier: userLogin,
      macno: macno,
      copy: copyCount
    })
      .then(response => {
        if(response.status === 200){
          const billNo = response.data.data
          // send to printer
          socket.emit(
            "printerMessage",
            JSON.stringify({
              id: 1,
              printerType: "receipt",
              printerName: "",
              message: `พิมพ์สำเนาเอกสารเลขที่: ${billNo}`,
              terminal: macno,
              tableNo: "",
              billNo: billNo,
              billType: 'copy',
              title: "(สำเนา) ใบเสร็จรับเงิน"
            })
          )
        }else {
          handleNotification("พบข้อผิดพลาดในการพิมพ์สำเนา!")
        }
      })
      .catch(err => { handleNotification(err.message) })
  }

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{fontWeight: "bold", fontSize: "16px"}}>
          กรุณาระบุเลขที่บิล และจำนวน Copy ที่ต้องการพิมพ์สำเนา
        </Typography>
      </Grid>
      <Grid container spacing={2} padding={2} direction="column">
        <Grid size={12}>
          <TextField label="เลขที่บิล (Receipt No)" value={receiptNo} onChange={e => setReceiptNo(e.target.value)} fullWidth />
        </Grid>
        <Grid size={12}>
          <TextField label="จำนวน Copy" type="number" disabled value={copyCount} onChange={e => setCopyCount(e.target.value)} fullWidth />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2} padding={2}>
          <Button variant="contained" color="error" endIcon={<CancelIcon />} onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" color="info" endIcon={<ConfirmIcon />} onClick={handleConfirm}>Confirm</Button>
        </Grid>
      </Box>
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </Box>
  )
}

export default RecieptCopyPrint
