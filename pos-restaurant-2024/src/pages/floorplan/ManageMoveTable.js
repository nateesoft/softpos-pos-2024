import React, { useContext, useState } from "react"
import { Alert, Box, Button, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'

import apiClient from '../../httpRequest'
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

const ManageCustTable = ({ setOpen, onLoadFloorPlan }) => {
  const { appData } = useContext(POSContext)
  const { userLogin } = appData

  const [sourceTable, setSourceTable] = useState("")
  const [targetTable, setTargetTable] = useState("")
  const [admin, setAdmin] = useState("")

  const [showError, setShowError] = useState(false)
  const [msgError, setMsgError] = useState("")

  const handleConfirm = async () => {
    if (sourceTable === "" || targetTable === "") {
      setMsgError("ท่านกำหนดเบอร์โต๊ะไม่ถูกต้อง กรุณาตรวจสอบ !!!")
      setShowError(true)
      return;
    }
    if (sourceTable === targetTable) {
      setMsgError("ท่านกำหนดเบอร์โต๊ะไม่ถูกต้อง กรุณาตรวจสอบ !!!")
      setShowError(true)
      return;
    }

    if (admin.trim() === "") {
      return;
    }

    const checkPin = await apiClient.post(`/api/employ/getEmployeeByCode`, {
      code: admin
    })
    const { pinValid } = checkPin.data.data
    if (!pinValid) {
      setMsgError("ข้อมูลผู้ดูแลระบบไม่ถูกต้อง !!!")
      setShowError(true)
      return;
    }

    apiClient.post(`/api/tablefile/moveTable`, {
      sourceTable, targetTable, admin, Cashier: userLogin
    })
      .then(response => {
        if (response.status === 200) {
          onLoadFloorPlan()
          setOpen(false)
        }
      })
      .catch(err => {
        setMsgError(err.message)
        setShowError(true)
      })

  }

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>กรุณาระบุข้อมูลโต๊ะหลัก และโต๊ะที่ต้องการย้าย</Typography>
      </Grid>
      <Grid container spacing={2} padding={2} direction="column">
        <Grid size={12}>
          <TextField label="ย้ายข้อมูลจากโต๊ะ" value={sourceTable} onChange={e => setSourceTable(e.target.value)} fullWidth />
        </Grid>
        <Grid size={12}>
          <TextField label="ไปยังโต๊ะ" value={targetTable} onChange={e => setTargetTable(e.target.value)} fullWidth />
        </Grid>
        <Grid size={12}>
          <TextField type="password" label="ผู้ดูแล" value={admin} onChange={e => setAdmin(e.target.value)} fullWidth />
        </Grid>
      </Grid>
      {showError && <Alert severity="error">{msgError}</Alert>}
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2} padding={2}>
          <Button variant="contained" color="error" endIcon={<CancelIcon />} onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" color="info" endIcon={<ConfirmIcon />} onClick={handleConfirm}>Confirm</Button>
        </Grid>
      </Box>
    </Box>
  )
}

export default ManageCustTable
