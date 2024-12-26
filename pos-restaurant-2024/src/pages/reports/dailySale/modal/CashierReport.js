import React, { useState } from "react"
import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'
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

const CashierReportModal = ({ setOpen }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState("")

  const handleConfirm = async () => {
    if (user) {
      navigate(`/reportDaily/cashier-report/?cashier=${user}`)
    }
  }

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid2 container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>รายงานพนักงานขาย (Cashier Report)</Typography>
      </Grid2>
      <Grid2 container spacing={2} padding={2} direction="column">
        <Grid2 size={12}>
          <TextField label="รหัสพนักงานขาย" value={user} onChange={e => setUser(e.target.value)} fullWidth />
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

export default CashierReportModal
