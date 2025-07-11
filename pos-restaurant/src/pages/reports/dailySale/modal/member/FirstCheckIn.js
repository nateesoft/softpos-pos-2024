import React, { useState, useEffect } from "react"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import ConfirmIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { useNavigate } from "react-router-dom"

import apiClient from "../../../../../httpRequest"

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

const FirstCheckInModal = ({ setOpen }) => {
  const navigate = useNavigate()

  const [branchList, setBranchList] = useState([])

  const [date1, setDate1] = useState(null)
  const [date2, setDate2] = useState(null)
  const [branch1, setBranch1] = useState("")
  const [branch2, setBranch2] = useState("")

  const handleConfirm = async () => {
    const dateSelect1 = date1.format("YYYY-MM-DD")
    const dateSelect2 = date2.format("YYYY-MM-DD")
    navigate(`/reportDaily/first-check-in/?date1=${dateSelect1}&date2=${dateSelect2}&branch1=${branch1}&branch2=${branch2}`)
  }

  const loadBranchList = () => {
    apiClient
      .get(`/api/branch/all`)
      .then((response) => {
        if (response.status === 200) {
          setBranchList(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  useEffect(() => {
    loadBranchList()
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
          <Grid2 container spacing={2} padding={2} justifyContent="center">
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              รายงานสมาชิกเข้าใช้บริการครั้งแรก
            </Typography>
          </Grid2>
          <Grid2 container spacing={1} margin={1}>
            <Grid2 size={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  รหัสสาขา
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={branch1}
                  label="รหัสสาขา"
                  onChange={(e) => setBranch1(e.target.value)}
                >
                  {branchList && branchList.map((item) => {
                      return (
                        <MenuItem value={item.Code}>{item.Name}</MenuItem>
                      )
                    })}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 size={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  รหัสสาขา
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={branch2}
                  label="รหัสสาขา"
                  onChange={(e) => setBranch2(e.target.value)}
                >
                  {branchList && branchList.map((item) => {
                      return (
                        <MenuItem value={item.Code}>{item.Name}</MenuItem>
                      )
                    })}
                </Select>
              </FormControl>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={1} padding={1}>
            <Grid2 size={6}>
              <DatePicker
                label="เลือกวันที่"
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    helperText: "DD/MM/YYYY"
                  }
                }}
                value={date1}
                onChange={(newValue) => setDate1(newValue)}
              />
            </Grid2>
            <Grid2 size={6}>
              <DatePicker
                label="เลือกวันที่"
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    helperText: "DD/MM/YYYY"
                  }
                }}
                value={date2}
                onChange={(newValue) => setDate2(newValue)}
              />
            </Grid2>
          </Grid2>
          <Box display="flex" justifyContent="center">
            <Grid2 container spacing={2} padding={2}>
              <Button
                variant="contained"
                color="error"
                endIcon={<CancelIcon />}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="info"
                endIcon={<ConfirmIcon />}
                onClick={handleConfirm}
              >
                Confirm
              </Button>
            </Grid2>
          </Box>
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default FirstCheckInModal
