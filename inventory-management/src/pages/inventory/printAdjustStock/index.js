import React from "react"
import Button from "@mui/material/Button"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import {
  FormControl,
  Grid2,
  InputLabel,
  Menu,
  MenuItem,
  Stack,
  TextField
} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import PrintIcon from "@mui/icons-material/Print"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import ZoomInIcon from "@mui/icons-material/ZoomIn"
import AssessmentIcon from "@mui/icons-material/Assessment"
import AccountTreeIcon from "@mui/icons-material/AccountTree"

import DataTable from "./DataTable"
import { useNavigate } from "react-router-dom"

const TextFieldCustom = (props) => {
  return <TextField size="small" variant="outlined" {...props} />
}

const FindButton = (props) => {
  return (
    <IconButton
      size="small"
      {...props}
    >
      <ZoomInIcon fontSize="large" />
    </IconButton>
  )
}

const PrintAdjustStock = () => {
  const navigate = useNavigate()

  const [processEl, setProcessEl] = React.useState(null)
  const [reportEl, setReportEl] = React.useState(null)

  const openProcess = Boolean(processEl)
  const openReport = Boolean(reportEl)

  const handleClick = (event, setValue) => {
    setValue(event.currentTarget)
  }

  return (
    <div style={{ marginTop: 60, overflow: "auto" }}>
      <AppBar position="static" sx={{background: "green"}}>
        <Toolbar variant="dense">
          <Typography variant="h6">
            พิมพ์ใบรายการสำหรับตรวจนับสินค้า
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid2
        container
        spacing={1}
        justifyContent="space-between"
        marginTop={1}
        marginBottom={1}
      >
        <Grid2 container spacing={1} alignContent="center">
          <TextFieldCustom label="รหัสสินค้า (Plu Code)" />
          <FindButton />
          <InputLabel size="small">ถึง</InputLabel>
          <TextFieldCustom label="" />
          <FindButton />
        </Grid2>
        <Grid2 container spacing={1}>
          <Button variant="outlined" startIcon={<PrintIcon />}>
            พิมพ์
          </Button>
          <Button variant="outlined" color="info" endIcon={<ExitToAppIcon />} onClick={()=>navigate("/")}>
            Home
          </Button>
        </Grid2>
      </Grid2>
      <DataTable />

      <Menu
        id="process-menu"
        anchorEl={processEl}
        open={openProcess}
        onClose={()=>setProcessEl(false)}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem>POST ตัดสต๊อกสินค้า</MenuItem>
        <MenuItem>ยกเลิกการ POST สต็อกสินค้า</MenuItem>
      </Menu>

      <Menu
        id="report-menu"
        anchorEl={reportEl}
        open={openReport}
        onClose={()=>setReportEl(false)}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem>สรุปการแจกฟรี (Charge) ตามรหัสสินค้า</MenuItem>
        <MenuItem>สรุปการแจกฟรี (Charge) ตามแผนกสินค้า</MenuItem>
      </Menu>
    </div>
  )
}

export default PrintAdjustStock
