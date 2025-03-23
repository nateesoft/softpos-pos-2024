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
          color: "#eee",
          p: 1,
          border: "1px solid lightblue",
          width: "100%",
          background: "green",
          zIndex: 999
        }}
      >
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white">แฟ้มข้อมูลหลัก</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/recive")
              }}
            >
              แฟ้มข้อมูลสมาชิก (Member File)
            </DropdownMenuItem>,
            <DropdownNestedMenuItem
              label="องค์ประกอบของแฟ้มข้อมูลสมาชิก"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase")
                  }}
                >
                  แฟ้มข้อมูลประเภทสมาชิก (Member Type File)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-code")
                  }}
                >
                  แฟ้มข้อมูลคำนำหน้าชื่อ (Titile Name File)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  แฟ้มข้อมูลสถานะภาพ (Status File)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  แฟ้มข้อมูลอาชีพ (Occupation File)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  แฟ้มข้อมูลรายได้ (Income File)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  แฟ้มข้อมูลสัญชาติ (Nation File)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  แฟ้มข้อมูลระดับการศึกษา (Education File)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
                  }}
                >
                  แฟ้มข้อมูลงานอดิเรก (Hobby File)
                </DropdownMenuItem>
              ]}
            />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/tranout")
              }}
            >
              แฟ้มข้อมูลกิจกรรม (Activities File)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/prolost")
              }}
            >
              แฟ้มข้อมูลประเภทกลุ่มสาขา (Branch Group File)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/charge")
              }}
            >
              แฟ้มข้อมูลสาขา (Branch File)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/produce")
              }}
            >
              แฟ้มข้อมูลแผนกสินค้า (Department File)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/transtk")
              }}
            >
              กำหนดรายละเอียดข้อมูลบริษัท (Company File)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/plusetup")
              }}
            >
              แฟ้มประเภทอัตราแต้มท้ายบิล (Bill Point Type File)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/ingredient")
              }}
            >
              แฟ้มข้อมูลโปรโมชั่นบัตร (Card Promotion File)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/adjust-stock")
              }}
            >
              กำหนดโปรโมชั่นบัตรให้กับสมาชิก (Card Promotion Setting)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/print-adjust-stock")
              }}
            >
              แฟ้มข้อมูลของรางวัล (Gift File)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              รายการนำของรางวัลเข้าสู่ระบบ
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              บันทึกการจองของรางวัล
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              บันทึกการส่งของรางวัล
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
              <Button color="white">การดำเนินงานรายวัน</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-product")
              }}
            >
              บันทึกรายการยอดซื้อของสมาชิกจากเอกสาร ตามรหัสสินค้า(PLU)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/expense-item")
              }}
            >
              ล้างข้อมูลการซื้อตามช่วงวันที่ (Clear Sales Transaction)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/credit-note")
              }}
            >
              ล้างยอดซื้อสะสมของสมาชิก (ทั้งหมด)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/vendor")
              }}
            >
              ลบข้อมูลสมาชิกตามเงื่อนไขที่กำหนด (Delete Member)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/expense-master")
              }}
            >
              การปรับปรุงยอดซื้อ และแต้มสะสม (Balance)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/expense-master")
              }}
            >
              การปรับปรุงข้อมูลจาก BOR (Branch, Product etc.)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/expense-master")
              }}
            >
              ยกยอดสต๊อกของขวัญ(สิ้นปี)
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white">รายงานต่าง ๆ</Button>
              <Typography variant="h5">|</Typography>
            </Grid2>
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-card")
              }}
            >
              รายงานยอดการซื้อประจำวัน (สรุปต่อวัน)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-inhand")
              }}
            >
              รายงานยอดการซื้อสะสม และเฉลี่ยต่อครั้ง (สรุปเป็นช่วง)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-movement")
              }}
            >
              รายงานประวัติการซื้อ และแต้มที่ได้ของสมาชิก (การซื้อ/ครั้ง)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/non-movement")
              }}
            >
              รายงานยอดการซื้อช่วงจัดกิจกรรม
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/product-recommend")
              }}
            >
              รายงานประวิติการซื้อ PLU
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการซื้อของสมาชิก (By Total Amount)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการซื้อของสมาชิก (By Service Type)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการซื้อของสมาชิก (By Dept.)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการซื้อของสมาชิก (By PLU)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานสรุปยอดซื้อของสมาชิก (ของแต่ละสาขา)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการจองของรางวัล
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการส่งของรางวัล
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานจำนวนของรางวัลคงเหลือ
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานประเภทอัตราแต้ม ตามสาขา
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานรายละเอียดข้อมูลสมาชิก
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานรายละเอียดข้อมูลสมาชิก ตามช่วงการซื้อ
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานแต้มคงเหลือปัจจุบัน ของสมาชิก
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานข้อมูลสมาชิกที่เข้าร่วมกิจกรรม
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานสมาชิกที่ใช้โปรโมชั่นบัตร
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการต่ออายุบัตรของสมาชิก (รายวัน)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานแต้มพิเศษรายสมาชิก
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานรวมประวัติแต้ม รับเข้า/ใช้ไป ของสมาชิก
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานตรวจสอบยอดซื้อ และแต้มสะสม (Diff.Report)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานบันทึกเหตุการณ์ (Log File)
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={
            <Grid2 container justifyContent="center" alignItems="center">
              <Button color="white">ปรับแต่งระบบ</Button>
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
              เกี่ยวกับระบบสมาชิก
            </DropdownMenuItem>
          ]}
        />
        <Button color="white" onClick={() => navigate("/")}>
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
