import React from "react"
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
import AdjustStock from "./pages/inventory/adjustStock"
import PrintAdjustStock from "./pages/inventory/printAdjustStock"
import EOrdering from "./pages/inventory/eOrdering"

// for Master Menu
import CompanyFile from "./pages/master/company/CompanyFile"
import GroupFile from "./pages/master/productGroup/GroupFile"
import StockCode from "./pages/master/stock/StockFile"
import FactoryFile from "./pages/master/factory/FactoryFile"
import BranchFile from "./pages/master/branch/BranchFile"
import UnitFile from "./pages/master/unit/UnitFile"
import UserGroupSetup from "./pages/master/UserGroupSetup"
import UserSetup from "./pages/master/UserSetup"
import EndOfYear from "./pages/master/EndOfYear"
import NewPeriod from "./pages/master/NewPeriod"

// for Expense Menu
import PurchaseProduct from "./pages/purchase/PurchaseProduct"
import ExpenseItem from "./pages/purchase/ExpenseItem"
import CreditNote from "./pages/purchase/CreditNote"
import Vendor from "./pages/purchase/Vendor"
import ExpenseMaster from "./pages/purchase/ExpenseMaster"

// for Report Menu
import StockCard from "./pages/reports/StockCard"
import StockInHand from "./pages/reports/StockInHand"
import StockMovement from "./pages/reports/StockMovement"
import NonMovement from "./pages/reports/NonMovement"
import ProductRecommend from "./pages/reports/ProductRecommend"
import PurchaseAnalyst from "./pages/reports/PurchaseAnalyst"

import ReportPurchase from "./pages/reports/ReportPurchase"
import ReportPurchaseByCode from "./pages/reports/ReportPurchaseByCode"
import ReportPurchaseByGroup from "./pages/reports/ReportPurchaseByGroup"

import ReportExpenseVoucher from "./pages/reports/ReportExpenseVoucher"
import ReportExpenseCode from "./pages/reports/ReportExpenseCode"

import ReportRecive from "./pages/reports/ReportRecive"
import ReportReciveByPluCode from "./pages/reports/ReportReciveByPluCode"
import ReportReciveByDept from "./pages/reports/ReportReciveByDept"

import ReportTranin from "./pages/reports/ReportTranin"
import ReportTraninByPluCode from "./pages/reports/ReportTraninByPluCode"
import ReportTraninByDept from "./pages/reports/ReportTraninByDept"

import ReportTranout from "./pages/reports/ReportTranout"
import ReportTranoutByPluCode from "./pages/reports/ReportTranoutByPluCode"
import ReportTranoutByDept from "./pages/reports/ReportTranoutByDept"

import ReportWaste from "./pages/reports/ReportWaste"
import ReportWasteByPluCode from "./pages/reports/ReportWasteByPluCode"
import ReportWasteByDept from "./pages/reports/ReportWasteByDept"

import ReportCharge from "./pages/reports/ReportCharge"
import ReportChargeByPluCode from "./pages/reports/ReportChargeByPluCode"
import ReportChargeByDept from "./pages/reports/ReportChargeByDept"

import ReportIngredient from "./pages/reports/ReportIngredient"
import ReportIngredientPluCode from "./pages/reports/ReportIngredientPluCode"

import ReportInputTax from "./pages/reports/ReportInputTax"
import ReportInputTaxPos from "./pages/reports/ReportInputTaxPos"
import ReportIncomeStatement from "./pages/reports/ReportIncomeStatement"

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
              รับสินค้าจากโรงงาน/การผลิต
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/tranin")
              }}
            >
              โอนสินค้า (เข้า)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/tranout")
              }}
            >
              โอนสินค้า (ออก)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/prolost")
              }}
            >
              บันทึกรายการของเสีย & ชำรุด
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/charge")
              }}
            >
              บันทึกรายการแจกฟรี
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/produce")
              }}
            >
              บันทึกการผลิตสินค้า
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/transtk")
              }}
            >
              โอนสินค้าระหว่างคลัง (Stock)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/plusetup")
              }}
            >
              แฟ้มข้อมูลสินค้า (PLU Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/ingredient")
              }}
            >
              แฟ้มข้อมูลวัตถุดิบ
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/adjust-stock")
              }}
            >
              รายการตรวจนับสต็อกสินค้า
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/print-adjust-stock")
              }}
            >
              พิมพ์ใบรายการสำหรับตรวจนับสินค้า
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/e-ordering")
              }}
            >
              ระบบสั่งสินค้า e-Ordering
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={<Button color="white">ระบบการซื้อสินค้า /ค่าใช้จ่าย</Button>}
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-product")
              }}
            >
              ซื้อสินค้า/ใบแจ้งหนี้/ใบกำกับภาษี
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/expense-item")
              }}
            >
              บันทึกค่าใช้จ่ายอื่น ๆ
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/credit-note")
              }}
            >
              ใบลดหนี้ & ส่งคืนสินค้า
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/vendor")
              }}
            >
              แฟ้มข้อมูลผู้ขาย & เจ้าหนี้
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/expense-master")
              }}
            >
              แฟ้มข้อมูลค่าใช้จ่ายอื่น ๆ
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={<Button color="white">รายงานต่าง ๆ</Button>}
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-card")
              }}
            >
              บัญชีคุมสินค้าพิเศษ (Stock Card)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-inhand")
              }}
            >
              รายงานสินค้าคงเหลือ (Stock Inhand)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-movement")
              }}
            >
              รายงานความเคลื่อนไหว (Stock Movement)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/non-movement")
              }}
            >
              รายงานสินค้าที่ไม่เคลื่อนไหว (Non Movement)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/product-recommend")
              }}
            >
              รายงานสินค้าที่ควรสั่งซื้อ
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/purchase-analyst")
              }}
            >
              รายงานการวิเคราะห์การสั่งซื้อ
            </DropdownMenuItem>,
            <Divider />,
            <DropdownNestedMenuItem
              label="รายงานการซื้อสินค้า"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase")
                  }}
                >
                  แสดงรายการซื้อสินค้า (ตามเอกสารการซื้อ)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-code")
                  }}
                >
                  สรุปการซื้อสินค้าตามรหัสสินค้า (Plu Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-purchase-by-group")
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
                    navigate("/report-expense-voucher")
                  }}
                >
                  แสดงรายการ การบันทึกค่าใช้จ่าย (Voucher)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-expense-code")
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
                    navigate("/report-recive")
                  }}
                >
                  แสดงรายการใบรับสินค้าจากโรงงาน
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-recive-by-plucode")
                  }}
                >
                  สรุปรายงานการรับสินค้าจากโรงงานตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-recive-by-dept")
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
                    navigate("/report-tranin")
                  }}
                >
                  แสดงรายการใบรับโอนสินค้า (เข้า)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-tranin-by-plucode")
                  }}
                >
                  สรุปรายการรับโอนสินค้า (เข้า) ตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-tranin-by-dept")
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
                    navigate("/report-tranout")
                  }}
                >
                  แสดงรายการใบรับโอนสินค้า (ออก)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-tranout-by-plucode")
                  }}
                >
                  สรุปรายการรับโอนสินค้า (ออก) ตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-tranout-by-dept")
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
                    navigate("/report-waste")
                  }}
                >
                  แสดงรายการบันทึกรายการของเสีย
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-waste-by-plucode")
                  }}
                >
                  สรุปรายการบันทึกของเสียตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-waste-by-dept")
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
                    navigate("/report-charge")
                  }}
                >
                  แสดงรายการบันทึกรายการแจกฟรี (Charge)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-charge-by-plucode")
                  }}
                >
                  สรุปรายการแจกฟรี (Charge) ตามรหัสสินค้า (PLU Code)
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    navigate("/report-charge-by-dept")
                  }}
                >
                  สรุปรายการแจกฟรี (Charge) ตามแผนกสินค้า (Dept)
                </DropdownMenuItem>
              ]}
            />,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/report-ingredient")
              }}
            >
              รายงานการใช้วัตถุดิบ
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/report-ingredient-plucode")
              }}
            >
              รายงานการใช้วัตถุดิบแยกตามรหัสสินค้า
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/report-input-tax")
              }}
            >
              รายงานภาษีซื้อ
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/report-input-tax-pos")
              }}
            >
              รายงานภาษีขาย (จาก POS)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/report-income-statement")
              }}
            >
              งบกำไรขาดทุนจากการดำเนินงาน
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={<Button color="white">ระบบช่วยงาน/แฟ้มข้อมูลระบบ</Button>}
          menu={[
            <DropdownMenuItem
              onClick={() => {
                navigate("/company-file")
              }}
            >
              กำหนดรายละเอียดบริษัท (Company File)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/group-file")
              }}
            >
              แฟ้มข้อมูลกลุ่มสินค้า (Group File)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/stock-code")
              }}
            >
              แฟ้มข้อมูลสต็อกสินค้า (Stock Code)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/factory-file")
              }}
            >
              แฟ้มข้อมูลโรงงาน (Factory File)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/branch-file")
              }}
            >
              แฟ้มข้อมูลสาขา (Branch File)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/unit-file")
              }}
            >
              แฟ้มข้อมูลหน่วยสินค้า (Unit File)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/user-group-setup")
              }}
            >
              กำหนดรหัสกลุ่มผู้ใช้งาน (User Group Setup)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/user-setup")
              }}
            >
              กำหนดสิทธิการใช้งานของพนักงาน (User Setup)
            </DropdownMenuItem>,
            <Divider />,
            <DropdownMenuItem
              onClick={() => {
                navigate("/end-of-year")
              }}
            >
              ประมวลผลสิ้นปี (End Of Year)
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                navigate("/new-period")
              }}
            >
              คำนวณยอดคงเหลือยกมาต้นงวดใหม่
            </DropdownMenuItem>
          ]}
        />
        <Button color="white" onClick={() => navigate("/")}>
          ออกจากระบบ (Exit Program)
        </Button>
      </Box>
      <Routes location={location}>
        <Route>
          {/* ระบบคลังสินค้า */}
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
          <Route path="/adjust-stock" element={<AdjustStock />} />
          <Route path="/print-adjust-stock" element={<PrintAdjustStock />} />
          <Route path="/e-ordering" element={<EOrdering />} />

          {/* ระบบการซื้อสินค้า/ค่าใช้จ่าย */}
          <Route path="/purchase-product" element={<PurchaseProduct />} />
          <Route path="/expense-item" element={<ExpenseItem />} />
          <Route path="/credit-note" element={<CreditNote />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/expense-master" element={<ExpenseMaster />} />

          {/* รายงานต่าง ๆ */}
          <Route path="/stock-card" element={<StockCard />} />
          <Route path="/stock-inhand" element={<StockInHand />} />
          <Route path="/stock-movement" element={<StockMovement />} />
          <Route path="/non-movement" element={<NonMovement />} />
          <Route path="/product-recommend" element={<ProductRecommend />} />
          <Route path="/purchase-analyst" element={<PurchaseAnalyst />} />

          <Route path="/report-purchase" element={<ReportPurchase />} />
          <Route
            path="/report-purchase-by-code"
            element={<ReportPurchaseByCode />}
          />
          <Route
            path="/report-purchase-by-group"
            element={<ReportPurchaseByGroup />}
          />

          <Route
            path="/report-expense-voucher"
            element={<ReportExpenseVoucher />}
          />
          <Route path="/report-expense-code" element={<ReportExpenseCode />} />

          <Route path="/report-recive" element={<ReportRecive />} />
          <Route
            path="/report-recive-by-plucode"
            element={<ReportReciveByPluCode />}
          />
          <Route
            path="/report-recive-by-dept"
            element={<ReportReciveByDept />}
          />

          <Route path="/report-tranin" element={<ReportTranin />} />
          <Route
            path="/report-tranin-by-plucode"
            element={<ReportTraninByPluCode />}
          />
          <Route
            path="/report-tranin-by-dept"
            element={<ReportTraninByDept />}
          />

          <Route path="/report-tranout" element={<ReportTranout />} />
          <Route
            path="/report-tranout-by-plucode"
            element={<ReportTranoutByPluCode />}
          />
          <Route
            path="/report-tranout-by-dept"
            element={<ReportTranoutByDept />}
          />

          <Route path="/report-waste" element={<ReportWaste />} />
          <Route
            path="/report-waste-by-plucode"
            element={<ReportWasteByPluCode />}
          />
          <Route path="/report-waste-by-dept" element={<ReportWasteByDept />} />

          <Route path="/report-charge" element={<ReportCharge />} />
          <Route
            path="/report-charge-by-plucode"
            element={<ReportChargeByPluCode />}
          />
          <Route
            path="/report-charge-by-dept"
            element={<ReportChargeByDept />}
          />

          <Route path="/report-ingredient" element={<ReportIngredient />} />
          <Route
            path="/report-ingredient-plucode"
            element={<ReportIngredientPluCode />}
          />

          <Route path="/report-input-tax" element={<ReportInputTax />} />
          <Route path="/report-input-tax-pos" element={<ReportInputTaxPos />} />
          <Route
            path="/report-income-statement"
            element={<ReportIncomeStatement />}
          />

          {/* ระบบช่วยงาน/แฟ้มข้อมูลระบบ */}
          <Route path="/company-file" element={<CompanyFile />} />
          <Route path="/group-file" element={<GroupFile />} />
          <Route path="/stock-code" element={<StockCode />} />
          <Route path="/factory-file" element={<FactoryFile />} />
          <Route path="/branch-file" element={<BranchFile />} />
          <Route path="/unit-file" element={<UnitFile />} />
          <Route path="/user-group-setup" element={<UserGroupSetup />} />
          <Route path="/user-setup" element={<UserSetup />} />
          <Route path="/end-of-year" element={<EndOfYear />} />
          <Route path="/new-period" element={<NewPeriod />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
