import React, { useContext, useState } from "react"
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"
import { POSContext } from "../../../AppContext"

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
  const { appData } = useContext(POSContext)
  const { baseName } = appData

  const imageItems = [
    `/${baseName}/images/floorplan/pos-table.png`,
    `/${baseName}/images/floorplan/oval-table.png`,
    `/${baseName}/images/floorplan/round-table.png`,
    `/${baseName}/images/floorplan/rectangle-table.png`,
    `/${baseName}/images/floorplan/dinner-table.png`,
    `/${baseName}/images/floorplan/toilet.png`,
    `/${baseName}/images/floorplan/chef.png`,
    `/${baseName}/images/floorplan/cash-counter.png`,
    `/${baseName}/images/floorplan/open-door.png`,
    `/${baseName}/images/floorplan/exit-door.png`
  ]

  const { tableInfo, setTableInfo, closeModal, onChange } = props
  const [tableNo, setTableNo] = useState(tableInfo.data.label || "")
  const [image, setImage] = useState(tableInfo.data.image || "")
  const [zone, setZone] = useState(tableInfo.data.zone || "STAND_ROOM")
  const [customerCount, setCustomerCount] = useState(
    tableInfo.data.customerCount || 0
  )
  const [tableStatus, setTableStatus] = useState(
    tableInfo.data.tableStatus || "Y"
  )

  const handleChange = (status) => {
    setTableStatus(status)
  }

  const handleSave = () => {
    const replaceImageUri = image.replace(`/${baseName}`, '')
    setTableInfo(tableInfo)
    onChange({ label: tableNo, customerCount, tableStatus, zone, image: replaceImageUri })
    closeModal()
  }

  if (!tableInfo.id) {
    return <></>
  }

  return (
    <Box sx={{ ...modalStyle, padding: "10px", width: "450px" }}>
      <Grid2 container spacing={2} padding={2} justifyContent="center">
        <Typography variant="h5">Table Floorplan Setup</Typography>
      </Grid2>
      <Divider />
      <Grid2 container spacing={2} padding={2} direction="column">
        <Grid2 size={12}>
          <TextField label="ID" value={tableInfo.id} fullWidth disabled />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            label="Table No"
            value={tableNo}
            onChange={(e) => setTableNo(e.target.value)}
            fullWidth
          />
        </Grid2>
        <Grid2 size={12}>
          <FormControl fullWidth>
            <InputLabel id="selectZone">Zone</InputLabel>
            <Select
              labelId="selectZone"
              id="demo-simple-select-helper"
              value={zone}
              label="Table Status"
              onChange={(e) => setZone(e.target.value)}
            >
              <MenuItem value="STAND_ROOM">STAND_ROOM</MenuItem>
              <MenuItem value="VIP_ROOM">VIP_ROOM</MenuItem>
              <MenuItem value="MEETING_ROOM">MEETING_ROOM</MenuItem>
              <MenuItem value="DINNING_ROOM">DINNING_ROOM</MenuItem>
              <MenuItem value="WARTER_BAR">WARTER_BAR</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={12}>
          <TextField
            label="Customer Size"
            type="number"
            value={customerCount}
            onChange={(e) => setCustomerCount(e.target.value)}
            fullWidth
          />
        </Grid2>
        <Grid2 size={12}>
          <FormControl fullWidth>
            <InputLabel id="table-image-id">Table Image</InputLabel>
            <Select
              labelId="table-image-id"
              value={image}
              label="Table Status"
              onChange={(e) => setImage(e.target.value)}
            >
              {imageItems &&
                imageItems.map((img) => (
                  <MenuItem value={img}>
                    <img src={img} width={32} height={32} alt="" />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={12}>
          <FormControl fullWidth>
            <InputLabel id="table-status-id">Table Status</InputLabel>
            <Select
              labelId="table-status-id"
              value={tableStatus}
              label="Table Status"
              onChange={(e) => handleChange(e.target.value)}
            >
              <MenuItem value="Y">Active</MenuItem>
              <MenuItem value="N">Not Active</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <Box display="flex" justifyContent="center">
        <Grid2 container spacing={2} padding={2}>
          <Button
            variant="contained"
            color="error"
            startIcon={<CancelIcon />}
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="info"
            startIcon={<SaveIcon />}
            onClick={handleSave}
          >
            Save
          </Button>
        </Grid2>
      </Box>
    </Box>
  )
}

export default TableSetup
