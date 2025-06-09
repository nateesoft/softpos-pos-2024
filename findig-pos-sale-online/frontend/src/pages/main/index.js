import { Outlet, useNavigate } from "react-router-dom"
import { Box, Button, Divider, Grid2, Typography } from "@mui/material"

import {
  Dropdown,
  DropdownMenuItem} from "../../components/menu/Dropdown"

const MainApp = () => {
  const navigate = useNavigate()

  return (
    <div style={{marginTop: "8vh"}}>
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
                navigate("/dashboard/add-stkfile")
              }}
            >
              บันทึกข้อมูลการขาย (นอกเครื่อง POS)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/dashboard/user-group")
              }}
            >
              กำหนดรหัสกลุ่มผู้ใช้งาน (User Group Setting)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/dashboard/user-setting")
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
            <DropdownMenuItem onClick={() => { navigate("/dashboard/report-sale-branch") }}>
              รายงานการบันทึกข้อมูลการขาย แยกตามสาขา
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem onClick={() => { navigate("/dashboard/report-stock-branch") }}>
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
                navigate("/dashboard/shortcut")
              }}
            >
              กำหนดเมนูปุ่มลัด (Hot Key)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/dashboard/option-config")
              }}
            >
              ปรับแต่งระบบ (Options...)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/dashboard/branch-detail")
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

      <Outlet />
    </div>
  )
}

export default MainApp
