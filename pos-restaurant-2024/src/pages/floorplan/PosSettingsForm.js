import React, { useState } from "react"
import { Box, Button, Divider, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel'
import PrintIcon from '@mui/icons-material/Print';

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

const PosSettingsForm = ({ setOpen, onLoadFloorPlan }) => {

  const [language, setLanguage] = useState('th')
  const [timezone, setTimeZone] = useState('bangkok')
  const [currency, setCurrency] = useState('Baht')
  const [currencyRate, setCurrencyRate] = useState(1)
  const [currencyBaht, setCurrencyBaht] = useState(1)

  return (
    <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
      <Grid2 container spacing={2} padding={2} justifyContent="center">
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "16px" }}>POS Settings</Typography>
      </Grid2>
      <Grid2 container spacing={1} padding={1} direction="column">
        <Grid2 container size={12}>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="th">Thailand (TH)</MenuItem>
              <MenuItem value="en">English (EN)</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timezone}
              label="Currency"
              onChange={(e) => setTimeZone(e.target.value)}
            >
              <MenuItem value="bangkok">Bangkok</MenuItem>
              <MenuItem value="kingdom">United State</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 container spacing={1} padding={2} sx={{ border: "2px solid orange" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Use Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Use Currency"
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value="Baht">Baht</MenuItem>
              <MenuItem value="Dollar">Dollar</MenuItem>
            </Select>
          </FormControl>
          <Grid2 container spacing={1}>
            <TextField 
              label="Baht Rate" 
              value={currencyBaht} 
              onChange={e => setCurrencyBaht(e.target.value)} 
              sx={{ width: "120px" }} />
            <TextField 
              label={`${currency} Rate`} 
              value={currencyRate} 
              onChange={e => setCurrencyRate(e.target.value)} 
              sx={{ width: "120px" }} />
          </Grid2>
        </Grid2>

        <Divider />
        <Grid2 container>
          <TextField label="Printer IP" />
          <Button variant="contained" startIcon={<PrintIcon />}>Test Printer</Button>
        </Grid2>
      </Grid2>
      <Box display="flex" justifyContent="center">
        <Grid2 container spacing={2} padding={2}>
          <Button variant="contained" color="error" endIcon={<CancelIcon />} onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" color="info" endIcon={<SaveIcon />}>Save</Button>
        </Grid2>
      </Box>
    </Box>
  )
}

export default PosSettingsForm
