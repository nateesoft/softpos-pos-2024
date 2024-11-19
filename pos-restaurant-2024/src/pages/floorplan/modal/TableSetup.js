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
  const { tableInfo, setTableInfo, closeModal, onChange } = props
  console.log('tableInfo:', tableInfo)
  const [tableNo, setTableNo] = useState(tableInfo.data.label || "")
  const [image, setImage] = useState(tableInfo.data.image || "")
  const [zone, setZone] = useState(tableInfo.data.zone || "STAND_ROOM")
  const [customerCount, setCustomerCount] = useState(tableInfo.data.customerCount || 0)
  const [tableStatus, setTableStatus] = useState(tableInfo.data.tableStatus || "Y")

  const handleChange = (status) => {
    setTableStatus(status)
  }

  const handleSave = () => {
    setTableInfo(tableInfo)
    onChange({ label: tableNo, customerCount, tableStatus, zone, image })
    closeModal()
  }

  if(!tableInfo.id){
    return <></>
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
              <MenuItem value="STAND_ROOM">STAND_ROOM</MenuItem>
              <MenuItem value="VIP_ROOM">VIP_ROOM</MenuItem>
              <MenuItem value="MEETING_ROOM">MEETING_ROOM</MenuItem>
              <MenuItem value="DINNING_ROOM">DINNING_ROOM</MenuItem>
              <MenuItem value="WARTER_BAR">WARTER_BAR</MenuItem>
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
              value={image}
              label="Table Status"
              onChange={e => setImage(e.target.value)}
            >
              <MenuItem value={"/images/floorplan/pos-table.png"}>Round-1</MenuItem>
              <MenuItem value={"/images/floorplan/oval-table.png"}>Round-2</MenuItem>
              <MenuItem value={"/images/floorplan/round-table.png"}>Round-3</MenuItem>
              <MenuItem value={"/images/floorplan/rectangle-table.png"}>Rectangle</MenuItem>
              <MenuItem value={"/images/floorplan/dinner-table.png"}>Dinner</MenuItem>
              <MenuItem value={"/images/floorplan/toilet.png"}>Rest Room</MenuItem>
              <MenuItem value={"/images/floorplan/chef.png"}>Chef</MenuItem>
              <MenuItem value={"/images/floorplan/cash-counter.png"}>Cashier Counter</MenuItem>
              <MenuItem value={"/images/floorplan/open-door.png"}>Open Door</MenuItem>
              <MenuItem value={"/images/floorplan/exit-door.png"}>Exit Door</MenuItem>
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
              <MenuItem value="Y">Active</MenuItem>
              <MenuItem value="N">Not Active</MenuItem>
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
