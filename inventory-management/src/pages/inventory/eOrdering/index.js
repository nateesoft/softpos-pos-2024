import React from "react"
import Button from "@mui/material/Button"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import {
  Box,
  Divider,
  Grid2,
  InputLabel,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableCell,
  TableRow,
  TextField
} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import PostAddIcon from "@mui/icons-material/PostAdd"
import CancelIcon from "@mui/icons-material/Cancel"
import SaveIcon from "@mui/icons-material/Save"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import ListAltIcon from "@mui/icons-material/ListAlt"
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
    <IconButton size="small" {...props}>
      <ZoomInIcon fontSize="large" />
    </IconButton>
  )
}

const FindButtonNoBorder = (props) => {
  return (
    <IconButton size="small">
      <ZoomInIcon fontSize="large" />
    </IconButton>
  )
}

const EOrdering = () => {
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
      <AppBar position="static" sx={{ background: "green" }}>
        <Toolbar variant="dense">
          <Typography variant="h6">โปรแกรมสั่งสินค้า e-Ordering</Typography>
        </Toolbar>
      </AppBar>
      <Grid2
        container
        spacing={1}
        justifyContent="space-between"
        marginTop={1}
        marginBottom={1}
      >
        <Grid2 container spacing={1}>
          <Button variant="outlined" startIcon={<PostAddIcon />}>
            เพิ่มเอกสาร
          </Button>
          <Button variant="outlined" startIcon={<CancelIcon />}>
            ยกเลิก
          </Button>
          <Button variant="outlined" startIcon={<SaveIcon />}>
            บันทึกข้อมูล
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteForeverIcon />}
          >
            ลบข้อมูลใบรับ
          </Button>
          <Button variant="outlined" startIcon={<ListAltIcon />}>
            แสดงรายการ
          </Button>
        </Grid2>
        <Grid2 container spacing={1}>
          <Button
            variant="outlined"
            color="success"
            id="process-menu"
            aria-controls={openProcess ? "process-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProcess ? "true" : undefined}
            onClick={(e) => handleClick(e, setProcessEl)}
            startIcon={<AccountTreeIcon />}
          >
            Process
          </Button>
          <Button variant="outlined" startIcon={<PrintIcon />}>
            พิมพ์
          </Button>
          <Button
            variant="outlined"
            color="info"
            endIcon={<ExitToAppIcon />}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={1} margin={1}>
        <Grid2 container size={8} spacing={1}>
          <Stack direction="row" spacing={1}>
            <TextField size="small" label="เลขที่เอกสาร" />
            <TextField size="small" label="วันที่สั่งสินค้า" />
            <TextField size="small" label="วันที่นัดส่งสินค้า" />
          </Stack>
          <Stack direction="row">
            <TextField size="small" label="หมายเหตุ" inputProps={{style: {width: 368} }} />
          </Stack>
        </Grid2>
        <Grid2 container spacing={1} size={4}>
          <Stack direction="row" spacing={1}>
            <TextField size="small" label="สำหรับสาขา" />
            <TextField size="small" label="" />
          </Stack>
          <Stack direction="row" spacing={1}>
            <TextField size="small" label="จำนวนรายการที่สั่ง" />
          </Stack>
        </Grid2>
      </Grid2>
      <Divider />
      <DataTable />
      <Menu
        id="process-menu"
        anchorEl={processEl}
        open={openProcess}
        onClose={() => setProcessEl(false)}
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
        onClose={() => setReportEl(false)}
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

export default EOrdering
