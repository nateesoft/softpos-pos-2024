import React, { Suspense, useContext } from "react"
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useIdleTimer } from "react-idle-timer"

import PinLock from "./PinLock"
import LoginPage from "./login"
import FloorPlanPage from "./floorplan"
import TableManagement from "./floorplan/TableManagement"
import MainSalePage from "./mainSale/MainSalePage"
import RetailSalePage from "./retailSale"
import PaymentPage from "./payment/PaymentPage"

import PageNotFound from "./PageNotFound"

import TrelloBoard from "../pages/monitor/kitchen"
import Protected from "../routes/ProtectedRoute"
import DashboardLayout from "../layouts"

// inventory stock
import TemplateReport from "./inventory"

// test printer
import TestPrinter from "../pages/thermal"
import PrinterDemo from "../pages/printer"
import ReceiptToPrint from "./payment/ReceiptToPrint"
import { ReceiptPrint } from "./paper-print/ReceiptPrint"
import PrintReceiptCheck from "./payment/PrintReceiptCheck"
import UserAuthen from "./modal/UserAuthen"

// all reports
import OverviewReport from "./reports/allReport/OverviewReport"
import TableOnActionList from "./reports/allReport/TableOnAction"

// daily report
import TableOnAction from "./reports/dailySale/TableOnAction"
import TerminalReport from "./reports/dailySale/TerminalReport"
import CashierReport from "./reports/dailySale/CashierReport"
import DepartmentGroupReport from "./reports/dailySale/DepartmentGroupReport"
import PLUReport from "./reports/dailySale/PLUReport"
import CustomerPerHourReport from "./reports/dailySale/CustomerPerHourReport"
import HourlyPluReport from "./reports/dailySale/HourlyPluReport"
import RecieptReport from "./reports/dailySale/RecieptReport"
import VoidReport from "./reports/dailySale/VoidReport"
import CreditReport from "./reports/dailySale/CreditReport"
import TopSaleReport from "./reports/dailySale/TopSaleReport"
import PromotionDiscount from "./reports/dailySale/PromotionDiscount"
import SpecialCuponDiscount from "./reports/dailySale/SpecialCuponDiscount"

// monthly report
import MTerminalReport from "./reports/monthlySale/TerminalReport"
import MDepartmentGroupReport from "./reports/monthlySale/DepartmentGroupReport"
import MPLUReport from "./reports/monthlySale/PLUReport"
import MCustomerPerHourReport from "./reports/monthlySale/CustomerPerHourReport"
import MRecieptReport from "./reports/monthlySale/RecieptReport"
import MVoidReport from "./reports/monthlySale/VoidReport"
import MCreditReport from "./reports/monthlySale/CreditReport"
import MTopSaleReport from "./reports/monthlySale/TopSaleReport"
import Character from "../agi/Character"
import VoiceCommand from "../agi/VoiceCommand"
import AICharacter from "../agi/AICharacter"
import VirtualKeyboard from "../utils/VirtualKeyboard"

import DashboardPage from "./dashboard"
import { POSContext } from "../AppContext"
import Loading from "../Loading"

const AnimatedRoutes = () => {
  const location = useLocation()
  const { appData } = useContext(POSContext)
  const { baseName } = appData

  const handleOnUserIdle = () => {
    localStorage.setItem("userLogin", "")
    localStorage.setItem("posuser", null)
    if (window.location.pathname !== `/${baseName}`) {
      const saveLink = window.location.pathname
      localStorage.setItem("backLink", saveLink.replace(`/${baseName}`, ''))
      window.location.href = `/${baseName}`
    }
  }

  useIdleTimer({
    timeout: 5 * 60 * 1000,
    onIdle: handleOnUserIdle,
    debounce: 500
  })

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route
          element={
            <DashboardLayout>
              <Suspense>
                <Outlet />
              </Suspense>
            </DashboardLayout>
          }
        >
          <Route element={<Protected />}>
            <Route path="/pinlock" element={<PinLock />} />
            <Route path="/floorplan" element={<FloorPlanPage />} />
            <Route path="/table-setup" element={<TableManagement />} />
            <Route path="/kitchen-monitor" element={<TrelloBoard />} />
            <Route path="/sale/:tableNo" element={<MainSalePage />} />
            <Route path="/retail" element={<RetailSalePage />} />
            <Route path="/payment/:tableNo" element={<PaymentPage />} />
            <Route path="/payment/receipt/:billNo" element={<ReceiptToPrint />} />
            <Route path="/payment/receipt-test/:billNo" element={<ReceiptPrint />} />

            <Route path="/payment/print-bill-check/:tableNo" element={<PrintReceiptCheck />} />

            <Route path="/reportDaily/overview" element={<OverviewReport />} />
            <Route path="/reportDaily/table-on-action/list" element={<TableOnActionList />} />

            <Route path="/reportDaily/table-on-action" element={<TableOnAction />} />
            <Route path="/reportDaily/terminal-report" element={<TerminalReport />} />
            <Route path="/reportDaily/cashier-report" element={<CashierReport />} />
            <Route path="/reportDaily/department-group-report" element={<DepartmentGroupReport />} />
            <Route path="/reportDaily/plu-report" element={<PLUReport />} />
            <Route path="/reportDaily/customer-per-hour-report" element={<CustomerPerHourReport />} />
            <Route path="/reportDaily/hourly-plu-report" element={<HourlyPluReport />} />
            <Route path="/reportDaily/reciept-report" element={<RecieptReport />} />
            <Route path="/reportDaily/void-report" element={<VoidReport />} />
            <Route path="/reportDaily/credit-report" element={<CreditReport />} />
            <Route path="/reportDaily/top-sale-report" element={<TopSaleReport />} />
            <Route path="/reportDaily/promotion-discount" element={<PromotionDiscount />} />
            <Route path="/reportDaily/special-cupon-discount" element={<SpecialCuponDiscount />} />

            <Route path="/reportMonthly/terminal-report" element={<MTerminalReport />} />
            <Route path="/reportMonthly/department-group-report" element={<MDepartmentGroupReport />} />
            <Route path="/reportMonthly/plu-report" element={<MPLUReport />} />
            <Route path="/reportMonthly/customer-per-hour-report" element={<MCustomerPerHourReport />} />
            <Route path="/reportMonthly/reciept-report" element={<MRecieptReport />} />
            <Route path="/reportMonthly/void-report" element={<MVoidReport />} />
            <Route path="/reportMonthly/credit-report" element={<MCreditReport />} />
            <Route path="/reportMonthly/top-sale-report" element={<MTopSaleReport />} />
            <Route path="/inventory/db" element={<TemplateReport />} />
          </Route>
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/modal" element={<UserAuthen />} />
        <Route path="/print-demo" element={<PrinterDemo />} />
        <Route path="/test-print" element={<TestPrinter />} />
        <Route path="/keyboard" element={<VirtualKeyboard />} />
        <Route path="/agi" element={<Character />} />
        <Route path="/ai" element={<AICharacter />} />
        <Route path="/voice" element={<VoiceCommand />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
