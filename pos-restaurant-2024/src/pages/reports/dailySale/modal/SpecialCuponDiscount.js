import React, { useContext, useState } from "react"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
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

const SpecialCuponDiscountModal = ({ setOpen }) => {
  const { appData } = useContext(POSContext)
  const navigate = useNavigate()

  const [macno, setMacno] = React.useState('');

  const handleConfirm = async () => {
    navigate('/reportDaily/special-cupon-discount')
  }

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>รายงานส่วนลดคูปองพิเศษ</Typography>
      </Grid>
      <Grid container spacing={2} padding={2} direction="column">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">หมายเลขเครื่อง (Macno)</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={macno}
            label="หมายเลขเครื่อง (Macno)"
            onChange={e=>setMacno(e.target.value)}
          >
            <MenuItem value={10}>001</MenuItem>
            <MenuItem value={20}>002</MenuItem>
            <MenuItem value={30}>003</MenuItem>
          </Select>
        </FormControl>
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

export default SpecialCuponDiscountModal
