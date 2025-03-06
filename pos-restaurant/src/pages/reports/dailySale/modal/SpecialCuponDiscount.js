import React, { useState, useEffect } from "react"
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import ConfirmIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import { useNavigate } from "react-router-dom"

import apiClient from "../../../../httpRequest"

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
  console.log("SpecialCuponDiscountModal")
  const navigate = useNavigate()

  const [terminalList, setTerminalList] = useState([])
  const [macno, setMacno] = React.useState("")

  const handleConfirm = async () => {
    navigate("/reportDaily/special-cupon-discount")
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
      <Grid2 container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>
          รายงานส่วนลดคูปองพิเศษ
        </Typography>
      </Grid2>
      <Grid2 container spacing={2} padding={2} direction="column">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            หมายเลขเครื่อง (Macno)
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={macno}
            label="หมายเลขเครื่อง (Macno)"
            onChange={(e) => setMacno(e.target.value)}
          >
            {terminalList &&
              terminalList.map((item) => {
                return (
                  <MenuItem value={item.Terminal}>{item.Terminal}</MenuItem>
                )
              })}
          </Select>
        </FormControl>
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
  )
}

export default SpecialCuponDiscountModal
