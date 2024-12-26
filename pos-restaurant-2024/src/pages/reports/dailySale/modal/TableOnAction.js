import React, { useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useNavigate } from "react-router-dom";
import moment from 'moment'

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

const TableOnActionModal = ({ setOpen }) => {
  const navigate = useNavigate()

  const [date, setDate] = useState("")

  const handleConfirm = async () => {
    const dateSelect = moment(date).format('YYYY-MM-DD')
    navigate(`/reportDaily/table-on-action/?date=${dateSelect}`)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
          <Grid container spacing={2} padding={2} justifyContent="center">
            <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>รายงานโต๊ะค้าง (ยังไม่ได้ชำระเงิน)</Typography>
          </Grid>
          <Grid container spacing={2} padding={2} direction="column">
            <DatePicker
              label="เลือกวันที่"
              format="DD/MM/YYYY"
              slotProps={{
                textField: {
                  helperText: 'DD/MM/YYYY'
                }
              }}
              onChange={(newValue)=>setDate(newValue)}
            />
          </Grid>
          <Box display="flex" justifyContent="center">
            <Grid container spacing={2} padding={2}>
              <Button variant="contained" color="error" endIcon={<CancelIcon />} onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" color="info" endIcon={<ConfirmIcon />} onClick={handleConfirm}>Confirm</Button>
            </Grid>
          </Box>
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default TableOnActionModal
