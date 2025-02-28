import React, { useContext, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'

import apiClient from '../../httpRequest';
import { POSContext } from "../../AppContext";
import { useAlert } from "../../contexts/AlertContext";

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

const RecieptCopyPrint = ({ setOpen }) => {
  const { appData } = useContext(POSContext)
  const { userLogin, macno } = appData
  const { handleNotification } = useAlert()

  const [receiptNo, setReceiptNo] = useState("")
  const [copyCount, setCopyCount] = useState(1)

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
          handleNotification(`พิมพ์สำเนาเอกสารเลขที่: ${billNo}`)
        }else {
          handleNotification("พบข้อผิดพลาดในการพิมพ์สำเนา!")
        }
      })
      .catch(err => { handleNotification(err.message) })
  }

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid2 container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{fontWeight: "bold", fontSize: "16px"}}>
          กรุณาระบุเลขที่บิล และจำนวน Copy ที่ต้องการพิมพ์สำเนา
        </Typography>
      </Grid2>
      <Grid2 container spacing={2} padding={2} direction="column">
        <Grid2 size={12}>
          <TextField label="เลขที่บิล (Receipt No)" value={receiptNo} onChange={e => setReceiptNo(e.target.value)} fullWidth />
        </Grid2>
        <Grid2 size={12}>
          <TextField label="จำนวน Copy" type="number" disabled value={copyCount} onChange={e => setCopyCount(e.target.value)} fullWidth />
        </Grid2>
      </Grid2>
      <Box display="flex" justifyContent="center">
        <Grid2 container spacing={2} padding={2}>
          <Button variant="contained" color="error" endIcon={<CancelIcon />} onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" color="info" endIcon={<ConfirmIcon />} onClick={handleConfirm}>Confirm</Button>
        </Grid2>
      </Box>
    </Box>
  )
}

export default RecieptCopyPrint
