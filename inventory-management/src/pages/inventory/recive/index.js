import React from "react"
import Button from "@mui/material/Button"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import {
  Box,
  Divider,
  Grid2,
  Menu,
  MenuItem,
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
    <IconButton
      size='small'
      {...props}
    >
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

const Recive = () => {
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
            รายการรับสินค้าจากโรงงาน/การผลิต
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
            aria-controls={openProcess ? 'process-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openProcess ? 'true' : undefined}
            onClick={e=>handleClick(e, setProcessEl)}
            startIcon={<AccountTreeIcon />}
          >
            Process
          </Button>
          <Button 
            variant="outlined" 
            id="process-menu"
            aria-controls={openReport ? 'report-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openReport ? 'true' : undefined}
            onClick={e=>handleClick(e, setReportEl)}
            startIcon={<AssessmentIcon />}>
            รายงาน
          </Button>
          <Button variant="outlined" startIcon={<PrintIcon />}>
            พิมพ์
          </Button>
          <Button variant="outlined" color="info" endIcon={<ExitToAppIcon />} onClick={()=>navigate("/")}>
            Home
          </Button>
        </Grid2>
      </Grid2>
      <Box marginBottom={1}>
        <Grid2 container direction="row" spacing={1} marginBottom={1}>
          <TextFieldCustom label="เลขที่เอกสาร" />
          <FindButton />
          <TextFieldCustom label="วันที่รับสินค้า" />
          <TextField
            size="small"
            label="หมายเหตุ"
            inputProps={{
              style: {
                width: 350
              }
            }}
          />
        </Grid2>
        <Grid2 container direction="row" spacing={1}>
          <TextFieldCustom label="รับสินค้าจาก" />
          <FindButton />
          <TextFieldCustom label="ชื่อโรงงาน/สถานที่ส่งสินค้า" />
          <Button size="small" variant="contained" color="inherit">
            Load ข้อมูลใบสั่งสินค้า
          </Button>
          <TextFieldCustom label="" />
        </Grid2>
      </Box>
      <Divider />
      <Box marginBottom={1}>
        <Table sx={{ margin: "1px" }}>
          <TableRow>
            <TableCell>
              <TextFieldCustom variant="standard" label="NO" />
            </TableCell>
            <TableCell>
              <TextFieldCustom
                variant="standard"
                label="รหัสสินค้า (PLU-Code)"
              />
            </TableCell>
            <TableCell>
              <FindButtonNoBorder />
            </TableCell>
            <TableCell>
              <TextFieldCustom variant="standard" label=" " />
            </TableCell>
            <TableCell>
              <TextFieldCustom variant="standard" label="สำหรับคลัง" />
            </TableCell>
            <TableCell>
              <FindButtonNoBorder />
            </TableCell>
            <TableCell>
              <TextFieldCustom variant="standard" label="จำนวน (Qty)" />
            </TableCell>
            <TableCell>
              <TextFieldCustom variant="standard" label="ราคาทุน/หน่วย" />
            </TableCell>
            <TableCell>
              <TextFieldCustom variant="standard" label="จำนวนเงิน (Amount)" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ background: "#ffeeee" }}>
              <Typography>จำนวน 0 รายการ</Typography>
            </TableCell>
            <TableCell sx={{ background: "#ffeeee" }}>
              <Typography>0.00</Typography>
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell>
              <TextFieldCustom label="" variant="standard" disabled />
            </TableCell>
            <TableCell>
              <Button variant="outlined" color="error">
                ลบ (Delete)
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="outlined">ตกลง (OK)</Button>
            </TableCell>
          </TableRow>
        </Table>
      </Box>
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
        <MenuItem>สรุปการรับสินค้าตามรหัสสินค้า</MenuItem>
        <MenuItem>สรุปการรับสินค้าตามแผนกสินค้า</MenuItem>
      </Menu>
    </div>
  )
}

export default Recive
