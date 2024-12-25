import React, { useContext, useEffect, useState } from "react"
import { Box, Button, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'
import { useNavigate } from "react-router-dom";

import { POSContext } from "../../../../AppContext";
import apiClient from '../../../../httpRequest'

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

const VoidReportModal = ({ setOpen }) => {
  const { appData } = useContext(POSContext)
  const navigate = useNavigate()

  const [terminalList, setTerminalList] = useState([])

  const [macno1, setMacno1] = useState("")
  const [macno2, setMacno2] = useState("")

  const [user1, setUser1] = useState("")
  const [user2, setUser2] = useState("")

  const handleConfirm = async () => {
    navigate('/reportDaily/void-report')
  }

  const loadTerminalList = () => {
    apiClient
      .get(`/api/poshwsetup/all`)
      .then((response) => {
        if (response.status === 200) {
          setTerminalList(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  useEffect(() => {
    loadTerminalList()
  }, [])

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>รายงานการ Void</Typography>
      </Grid>
      <Grid container spacing={1} margin={1}>
        <Grid2 size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">หมายเลขเครื่อง</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={macno1}
              label="หมายเลขเครื่อง"
              onChange={e => setMacno1(e.target.value)}
            >
              {terminalList && terminalList.map(item => {
                return <MenuItem value={item.Terminal}>{item.Terminal}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">หมายเลขเครื่อง</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={macno2}
              label="หมายเลขเครื่อง"
              onChange={e => setMacno2(e.target.value)}
            >
              {terminalList && terminalList.map(item => {
                return <MenuItem value={item.Terminal}>{item.Terminal}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid2>
      </Grid>
      <Grid container spacing={1} margin={1}>
        <Grid2 size={6}>
          <FormControl fullWidth>
            <TextField label="รหัสพนักงานขาย" value={user1} onChange={e => setUser1(e.target.value)} fullWidth />
          </FormControl>
        </Grid2>
        <Grid2 size={6}>
          <FormControl fullWidth>
            <TextField label="รหัสพนักงานขาย" value={user2} onChange={e => setUser2(e.target.value)} fullWidth />
          </FormControl>
        </Grid2>
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

export default VoidReportModal
