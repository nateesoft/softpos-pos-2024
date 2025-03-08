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
                console.log("clicked")
              }}
            >
              {"โอนสินค้า (เข้า)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"โอนสินค้า (ออก)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"บันทึกรายการของเสีย & ชำรุด"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"บันทึกรายการแจกฟรี"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"บันทึกการผลิตสินค้า"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"โอนสินค้าระหว่างคลัง (Stock)"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
              }}
            >
              {"แฟ้มข้อมูลสินค้า (PLU Setup)"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked")
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
              {"รายงานวิเคราะห์การซื้อ"}
            </DropdownMenuItem>,
            <Divider />,
            <DropdownNestedMenuItem
              label="รายงานการซื้อสินค้า"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem>
                  <Button
                    variant="text"
                    component="label"
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      fontSize: "1rem"
                    }}
                  >
                    Upload from Computer
                    <input
                      id="imageInput"
                      type="file"
                      accept="image/png, image/jpeg"
                      hidden
                      onChange={() => {}}
                    />
                  </Button>
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked")
                  }}
                >
                  From URL
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการบันทึกค่าใช้จ่าย"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <Divider />,
            <DropdownNestedMenuItem
              label="รายงานการรับสินค้าจากโรงงาน"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการโอนสินค้า (เข้า)"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการโอนสินค้า (ออก)"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการบันทึกรายการของเสีย"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการบันทึกรายการแจกฟรี (Charge)"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <Divider />,
            <DropdownNestedMenuItem
              label="รายงานการใช้วัตถุดิบ"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานการใช้วัตถุดิบแยกตามรหัสสินค้า"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <Divider />,
            <DropdownNestedMenuItem
              label="รายงานภาษีซื้อ"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานภาษีซื้อ"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <DropdownNestedMenuItem
              label="รายงานภาษีขาย (จาก POS)"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />,
            <DropdownNestedMenuItem
              label="งบกำไรขาดทุนจากการดำเนินงาน"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked")
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />
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
        <Button color="white" onClick={()=>navigate("/")}>ออกจากระบบ (Exit Program)</Button>
      </Box>
      <Routes location={location}>
        <Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/recive" element={<Recive />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
