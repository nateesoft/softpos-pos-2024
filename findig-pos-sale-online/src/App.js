import React from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import ArrowRight from "@mui/icons-material/ArrowRight"

import LoginPage from "./pages/login"
import SalePage from "./pages/sales"
import { Box, Button, Divider, Grid2, Typography } from "@mui/material"

import {
  Dropdown,
  DropdownMenuItem,
  DropdownNestedMenuItem
} from "./components/menu/Dropdown"

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          p: 1,
          border: "1px solid lightblue",
          width: "100%",
          background: "#dc3545",
          zIndex: 999
        }}
      >
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white" sx={{fontSize: 16, fontWeight: "bold"}}>ข้อมูลการขาย</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/print-adjust-stock")
              }}
            >
              บันทึกข้อมูลการขาย (นอกเครื่อง POS)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              กำหนดรหัสกลุ่มผู้ใช้งาน (User Group Setting)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              กำหนดรหัสผู้ใช้งาน (User Setting)
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white" sx={{fontSize: 16, fontWeight: "bold"}}>รายงานต่าง ๆ</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem onClick={() => { navigate("/stock-card") }}>
              รายงานการบันทึกข้อมูลการขาย แยกตามสาขา
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem onClick={() => { navigate("/stock-card") }}>
              รายงานสต็อกสินค้าคงเหลือ แยกตามสาขา
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white" sx={{fontSize: 16, fontWeight: "bold"}}>ตั้งค่าระบบ</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/company-file")
              }}
            >
              กำหนดเมนูปุ่มลัด (Hot Key)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/group-file")
              }}
            >
              ปรับแต่งระบบ (Options...)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-code")
              }}
            >
              ข้อมูลรายละเอียดสาขา
            </DropdownMenuItem>
          ]}
        />
        <Button color="white" sx={{fontSize: 16, fontWeight: "bold"}} onClick={() => navigate("/")}>
          ออกจากระบบ
        </Button>
      </Box>
      <Routes location={location}>
        <Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sale" element={<SalePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
