import React, { useState } from "react"
import { Box, Button, Divider } from "@mui/material"
import ArrowRight from "@mui/icons-material/ArrowRight"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"

import {
  Dropdown,
  DropdownMenuItem,
  DropdownNestedMenuItem
} from "./components/menu/Dropdown"

import LoginPage from "./pages/login"
import Recive from "./pages/inventory/recive"
import Tranin from "./pages/inventory/tranin"
import Tranout from "./pages/inventory/tranout"
import Prolost from "./pages/inventory/prolost"
import Charge from "./pages/inventory/charge"
import Produce from "./pages/inventory/produce"
import TranStk from "./pages/inventory/transtk"
import Product from "./pages/inventory/product"
import Ingredient from "./pages/inventory/ingredient"

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
          background: "#123456",
          zIndex: 999
        }}
      >
        <Dropdown
          trigger={<Button color="white">ระบบคลังสินค้า</Button>}
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/recive")
              }}
            >
              {"รับสินค้าจากโรงงาน/การผลิต"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/tranin")
              }}
            >
              {"โอนสินค้า (เข้า)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/tranout")
              }}
            >
              {"โอนสินค้า (ออก)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/prolost")
              }}
            >
              {"บันทึกรายการของเสีย & ชำรุด"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/charge")
              }}
            >
              {"บันทึกรายการแจกฟรี"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/produce")
              }}
            >
              {"บันทึกการผลิตสินค้า"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/transtk")
              }}
            >
              {"โอนสินค้าระหว่างคลัง (Stock)"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/plusetup")
              }}
            >
              {"แฟ้มข้อมูลสินค้า (PLU Setup)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/ingredient")
              }}
            >
              {"แฟ้มข้อมูลวัตถุดิบ"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายการตรวจนับสต็อกสินค้า"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"พิมพ์ใบรายการสำหรับตรวจนับสินค้า"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"ระบบสั่งสินค้า e-Ordering"}
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={<Button color="white">ระบบการซื้อสินค้า /ค่าใช้จ่าย</Button>}
          menu={[
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"ซื้อสินค้า/ ใบแจ้งหนี้/ใบกำกับภาษี"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"บันทึกค่าใช้จ่ายอื่น ๆ"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"ใบลดหนี้ & ส่งคืนสินค้า"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"แฟ้มข้อมูลผู้ขาย & เจ้าหนี้"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"แฟ้มข้อมูลค่าใช้จ่ายอื่น ๆ"}
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={<Button color="white">รายงานต่าง ๆ</Button>}
          menu={[
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"บัญชีคุมสินค้าพิเศษ (Stock Card)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานสินค้าคงเหลือ (Stock Inhand)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานความเคลื่อนไหว (Stock Movement)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานสินค้าที่ไม่เคลื่อนไหว (Non Movement)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานสินค้าที่ควรสั่งซื้อ"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานการวิเคราะห์การสั่งซื้อ"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownNestedMenuItem
              label="รายงานการซื้อสินค้า"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  แสดงรายการซื้อสินค้า (ตามเอกสารการซื้อ)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปการซื้อสินค้าตามรหัสสินค้า (Plu Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปการซื้อสินค้าตามกลุ่มสินค้า (Group)
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการบันทึกค่าใช้จ่าย"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  แสดงรายการ การบันทึกค่าใช้จ่าย (Voucher)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการค่าใช้จ่าย (ตามรหัสค่าใช้จ่าย)
                </DropdownMenuItem>
              ]}
            />,
            <Divider />,
            <DropdownNestedMenuItem
              label="รายงานการรับสินค้าจากโรงงาน"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  แสดงรายการใบรับสินค้าจากโรงงาน
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายงานการรับสินค้าจากโรงงานตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการรับสินค้าจากโรงงานตามแผนกสินค้า (Dept)
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการโอนสินค้า (เข้า)"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  แสดงรายการใบรับโอนสินค้า (เข้า)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการรับโอนสินค้า (เข้า) ตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการรับโอนสินค้า (เข้า) ตามแผนกสินค้า (Dept)
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการโอนสินค้า (ออก)"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  แสดงรายการใบรับโอนสินค้า (ออก)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการรับโอนสินค้า (ออก) ตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการรับโอนสินค้า (ออก) ตามแผนกสินค้า (Dept)
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการบันทึกรายการของเสีย"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  แสดงรายการบันทึกรายการของเสีย
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการบันทึกของเสียตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการบันทึกของเสียตามแผนกสินค้า (Dept)
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการบันทึกรายการแจกฟรี (Charge)"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  แสดงรายการบันทึกรายการแจกฟรี (Charge)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการแจกฟรี (Charge) ตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  สรุปรายการแจกฟรี (Charge) ตามแผนกสินค้า (Dept)
                </DropdownMenuItem>
              ]}
            />,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานการใช้วัตถุดิบ"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานการใช้วัตถุดิบแยกตามรหัสสินค้า"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานภาษีซื้อ"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"รายงานภาษีขาย (จาก POS)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"งบกำไรขาดทุนจากการดำเนินงาน"}
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={<Button color="white">ระบบช่วยงาน/แฟ้มข้อมูลระบบ</Button>}
          menu={[
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"กำหนดรายละเอียดบริษัท (Company File)"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"แฟ้มข้อมูลกลุ่มสินค้า (Group File)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"แฟ้มข้อมูลสต็อกสินค้า (Stock Code)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"แฟ้มข้อมูลโรงงาน (Factory File)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"แฟ้มข้อมูลสาขา (Branch File)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"แฟ้มข้อมูลหน่วยสินค้า (Unit File)"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"กำหนดรหัสกลุ่มผู้ใช้งาน (User Group Setup)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"กำหนดสิทธิการใช้งนของพนักงาน (User Setup)"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"ประมวลผลสิ้นปี (End Of Year)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"คำนวณยอดคงเหลือยกมาต้นงวดใหม่"}
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
          <Route path="/recive" element={<Recive />} />
          <Route path="/tranin" element={<Tranin />} />
          <Route path="/tranout" element={<Tranout />} />
          <Route path="/prolost" element={<Prolost />} />
          <Route path="/charge" element={<Charge />} />
          <Route path="/produce" element={<Produce />} />
          <Route path="/transtk" element={<TranStk />} />
          <Route path="/plusetup" element={<Product />} />
          <Route path="/ingredient" element={<Ingredient />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
