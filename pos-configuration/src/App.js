import React from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { Box, Button, Divider, Grid2, Typography } from "@mui/material"
import ArrowRight from "@mui/icons-material/ArrowRight"

import LoginPage from "./pages/login"
import SalePage from "./pages/sales"

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
          color: "#eee",
          p: 1,
          border: "1px solid lightblue",
          width: "100%",
          background: "darkred",
          zIndex: 999
        }}
      >
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white">แฟ้มข้อมูล</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/recive")
              }}
            >
              กำหนดรายละเอียดสาขา (Branch)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/tranin")
              }}
            >
              กำหนดข้อมูลเริ่มต้นระบบ (POS-Config Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/tranout")
              }}
            >
              กำหนดรายละเอียดเครื่อง Cashier (POS Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/prolost")
              }}
            >
              กำหนดรายการบัตรเครดิต (Credit Card Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/charge")
              }}
            >
              กำหนดข้อมูลตารางโปรโมชั่น (Promotion Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/produce")
              }}
            >
              กำหนดข้อมูลคูปองบัตรพิเศษ (Special Cupon)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/transtk")
              }}
            >
              กำหนดรายการ OPTION (สำหรับกลุ่มสินค้า)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/plusetup")
              }}
            >
              กำหนดรหัสบริกร (พนักงานรับ Order)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/ingredient")
              }}
            >
              กำหนดโซน (Table Zone)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/adjust-stock")
              }}
            >
              กำหนดเบอร์โต๊ะ (Table Setting)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/print-adjust-stock")
              }}
            >
              กำหนดรหัสเมนู
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
              กำหนดสิทธิ์การใช้งานของ Cashier (User Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              ยกเลิกการทำงาน Cashier (Log Out User)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              แฟ้มข้อมูลรหัสสินค้า (PLU Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              แฟ้มข้อมูลวัตถุดิบ (Ingredient Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              แฟ้มข้อมูลกลุ่มสินค้า (Department/ Group Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              แฟ้มข้อมูลผู้ขาย (Vender Setup)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              แฟ้มข้อมูลบริษัท (Company Setup)
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white">
                ปิดยอดการขายประจำวัน/รายงานการขายระหว่างวัน
              </Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-product")
              }}
            >
              ปิดยอดการขายประจำวัน (End Of Day)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownNestedMenuItem
              label="ตรวจสอบยอดขายระหว่างวัน"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase")
                  }}
                >
                  รายงานตรวจสอบยอดการขายระหว่างวัน (Current Sale Report)
                </DropdownMenuItem>,
                <Divider />,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-code")
                  }}
                >
                  รายงานการขายแยกตามเครื่อง (Terminal Report)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  รายงานยอดขายแยกตามพนักงานขาย (Cashier Report)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  รายงานยอดขายตามรหัสสินค้า (PLU Report)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  รายงานยอดขายตามช่วงเวลา (Hourly Report)
                </DropdownMenuItem>
              ]}
            />
          ]}
        />
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white">รายงานการวิเคราะห์การขาย</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-card")
              }}
            >
              รายงานการขายแยกตามเครื่อง (Terminal Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-inhand")
              }}
            >
              รายงานการขายแยกตามพนักงาน (Cashier Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-movement")
              }}
            >
              รายงานการขายแยกตามรหัสสินค้า (Sale By PLU Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/non-movement")
              }}
            >
              รายงานสรุปสินค้าตามกลุ่มสินค้า (Sale By Group/Department Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/product-recommend")
              }}
            >
              รายงานสรุปการขายตามผู้ขาย (Sale By Vendor Report)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการขายตามช่วงเวลา (Hourly Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการออกใบกำกับภาษีอย่างย่อ (Receipt Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการรับชำระด้วยบัตรเครดิต (Credit Card Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการรับชำระด้วยบัตรกำนัล (Gift Voucher Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการ Void / การคืนสินค้า (Void Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการยกเลิกการขาย (Refund Report)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานอันดับสินค้าขายดี (Top Sale Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการให้ส่วนลดบัตรคูปองพิเศษ (Special Cupon Discount)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการให้ส่วนลดโปรโมชั่น (Promotion Sale Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการขายสินค้าแยกตามพนักงานขาย (Cashier/PLU Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานรายละเอียดการขายตามช่วงเวลา (Hourly/PLU Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานขายแยกตามพนักงานเดินบิล (Take Order/PLU Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานรายละเอียดการขายแยกตามวันที่ (Sale Detail By Date)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานรายละเอียดรายรับประจำวัน (Daily Sale Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานสรุปรายรับประจำวัน แยกตามวันที่ (Daily Summary Sale Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการขายแยกตามโซน (Zone/Table Sale Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการใช้วัตถุดิบจากการขาย (Ingredient Report)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการใช้วัตถุดิบแยกตามรหัสสินค้า
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานลูกหนี้ค้างชำระ (AR Non-Payment Report)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานภาษีขาย (Vat Report)
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white">รับส่งข้อมูลกับสำนักงานใหญ่</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/company-file")
              }}
            >
              ส่งข้อมูลไปสำนักงานใหญ่ (Send Data To Center)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/group-file")
              }}
            >
              บันทึกรับข้อมูลจากสำนักงานใหญ่ (Recive Data From Center)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-code")
              }}
            >
              ระบบสำรองข้อมูล (Backup Data) / ระบบเรียกคืนข้อมูล (Restore Data)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/factory-file")
              }}
            >
              ประมวลผลส้นปี
            </DropdownMenuItem>
          ]}
        />
        <Button color="white" onClick={() => navigate("/")}>
          ออกจากระบบ (Exit Program)
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
