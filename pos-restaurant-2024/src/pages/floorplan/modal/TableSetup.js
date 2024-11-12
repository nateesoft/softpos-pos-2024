import React, { useState } from "react"
import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import SaveIcon from '@mui/icons-material/Save';
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

const TableSetup = (props) => {
  const { tableInfo, closeModal, onChange } = props
  console.log('TableSetup:', props)
  const [tableNo, setTableNo] = useState(tableInfo.data.label)
  const [tableImage, setTableImage] = useState("images/floorplan/round-table.png")
  const [zone, setZone] = useState("a")
  const [customerCount, setCustomerCount] = useState("2")
  const [tableStatus, setTableStatus] = useState("notActive")

  const handleChange = (status) => {
    setTableStatus(status)
  }

  const handleSave = () => {
    onChange({ label: tableNo, customerCount, tableStatus, zone, image: tableImage })
    closeModal()
  }

  return (
    <Box sx={{ ...modalStyle, padding: "10px", width: "450px" }}>
      <Grid container spacing={2} padding={2} justifyContent="center">
        <Typography variant="h5">Table Floorplan Setup</Typography>
      </Grid>
      <Divider />
      <Grid container spacing={2} padding={2} direction="column">
        <Grid size={12}>
          <TextField label="ID" value={tableInfo.id} fullWidth disabled />
        </Grid>
        <Grid size={12}>
          <TextField label="Table No" value={tableNo} onChange={e => setTableNo(e.target.value)} fullWidth />
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <InputLabel id="selectZone">Zone</InputLabel>
            <Select
              labelId="selectZone"
              id="demo-simple-select-helper"
              value={zone}
              label="Table Status"
              onChange={e => setZone(e.target.value)}
            >
              <MenuItem value={"a"}>Zone A</MenuItem>
              <MenuItem value={"b"}>Zone B</MenuItem>
              <MenuItem value={"c"}>Zone C</MenuItem>
              <MenuItem value={"d"}>Zone D</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <TextField label="Customer Size" type="number" value={customerCount} onChange={e => setCustomerCount(e.target.value)} fullWidth />
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <InputLabel id="table-image-id">Table Image</InputLabel>
            <Select
              labelId="table-image-id"
              value={tableImage}
              label="Table Status"
              onChange={e => setTableImage(e.target.value)}
            >
              <MenuItem value={"images/floorplan/round-table.png"}>Round</MenuItem>
              <MenuItem value={"images/floorplan/rectangle-table.png"}>Rectangle</MenuItem>
              <MenuItem value={"images/floorplan/dinner-table.png"}>Dinner</MenuItem>
              <MenuItem value={"images/floorplan/toilet.png"}>Rest Room</MenuItem>
              <MenuItem value={"images/floorplan/chef.png"}>Chef</MenuItem>
              <MenuItem value={"images/floorplan/cash-counter.png"}>Cashier Counter</MenuItem>
              <MenuItem value={"images/floorplan/open-door.png"}>Open Door</MenuItem>
              <MenuItem value={"images/floorplan/exit-door.png"}>Exit Door</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <InputLabel id="table-status-id">Table Status</InputLabel>
            <Select
              labelId="table-status-id"
              value={tableStatus}
              label="Table Status"
              onChange={e => handleChange(e.target.value)}
            >
              <MenuItem value={"notActive"}>Not Active</MenuItem>
              <MenuItem value={"active"}>Active</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2} padding={2}>
          <Button variant="contained" color="error" startIcon={<CancelIcon />} onClick={closeModal}>Cancel</Button>
          <Button variant="contained" color="info" startIcon={<SaveIcon />} onClick={handleSave}>Save</Button>
        </Grid>
      </Box>
    </Box>
  )
}

export default TableSetup
