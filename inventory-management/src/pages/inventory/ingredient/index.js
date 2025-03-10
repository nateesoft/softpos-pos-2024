import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import {
  Grid2,
  Menu,
  MenuItem,
  TextField
} from "@mui/material"
import PostAddIcon from "@mui/icons-material/PostAdd"
import CancelIcon from "@mui/icons-material/Cancel"
import SaveIcon from "@mui/icons-material/Save"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import ListAltIcon from "@mui/icons-material/ListAlt"
import PrintIcon from "@mui/icons-material/Print"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import AssessmentIcon from "@mui/icons-material/Assessment"
import AccountTreeIcon from "@mui/icons-material/AccountTree"

import TabData from "./TabData"

const Ingredient = () => {
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
          <Typography variant="h6">แฟ้มข้อมูลวัตถุดิบ</Typography>
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
          <Button
            variant="outlined"
            id="process-menu"
            aria-controls={openReport ? "report-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openReport ? "true" : undefined}
            onClick={(e) => handleClick(e, setReportEl)}
            startIcon={<AssessmentIcon />}
          >
            รายงาน
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
      <Grid2 container spacing={1}>
        <TextField size="small" label="รหัสสินค้า (Item Number)" />
        <TextField size="small" label="ชื่อสินค้า (Description)" />
      </Grid2>
      <TabData />

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

export default Ingredient
