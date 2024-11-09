import React, { useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'

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
  const [receiptNo, setReceiptNo] = useState("")
  const [copyCount, setCopyCount] = useState(0)

  const handleConfirm = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid container spacing={2} padding={2} justifyContent="center">
      <Typography variant="p" sx={{fontWeight: "bold", fontSize: "16px"}}>กรุณาระบุเลขที่บิล และจำนวน Copy ที่ต้องการพิมพ์สำเนา</Typography>

      </Grid>
      <Grid container spacing={2} padding={2} direction="column">
        <Grid size={12}>
          <TextField label="เลขที่บิล (Receipt No)" value={receiptNo} onChange={e => setReceiptNo(e.target.value)} fullWidth />
        </Grid>
        <Grid size={12}>
          <TextField label="จำนวน Copy" type="number" value={copyCount} onChange={e => setCopyCount(e.target.value)} fullWidth />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2} padding={2}>
          <Button variant="contained" color="error" endIcon={<CancelIcon />} onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" color="info" endIcon={<ConfirmIcon />} onClick={handleConfirm}>Confirm</Button>
        </Grid>
      </Box>
    </Box>
  )
}

export default RecieptCopyPrint
