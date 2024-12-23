import React, { useContext, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'

import { POSContext } from "../../../../AppContext";
import { useNavigate } from "react-router-dom";

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

const PromotionDiscountModal = ({ setOpen }) => {
  const { appData } = useContext(POSContext)
  const navigate = useNavigate()

  const [date, setDate] = useState("")

  const handleConfirm = async () => {
    navigate('/reportDaily/promotion-discount')
  }

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>รายงานส่วนลดโปรโมชั่น</Typography>
      </Grid>
      <Grid container spacing={2} padding={2} direction="column">
        <Grid size={12}>
          <TextField label="เลือกวันที่" value={date} onChange={e => setDate(e.target.value)} fullWidth />
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

export default PromotionDiscountModal
