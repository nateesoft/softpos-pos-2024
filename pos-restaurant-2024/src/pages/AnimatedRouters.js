import React, { Suspense } from 'react'
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import PinLock from "./PinLock"
import LoginPage from './login'
import FloorPlanPage from "./floorplan/FloorPlanPage"
import TableManagement from "./floorplan/TableManagement"
import MainSalePage from "./mainSale/MainSalePage"
import PaymentPage from "./payment/PaymentPage"

// report all page
import SaleReport from "./reports/SaleReport"
import SaleReport1 from "./reports/SaleReport1"
import SaleReport2 from "./reports/SaleReport2"
import SaleReport3 from "./reports/SaleReport3"
import SaleReport4 from "./reports/SaleReport4"
import SaleReport5 from "./reports/SaleReport5"

import PageNotFound from './PageNotFound'

import TrelloBoard from '../pages/monitor/kitchen'
import Protected from "../routes/ProtectedRoute"
import DashboardLayout from "../layouts"
import RegisterMacNo from './RegisterMacno'

// inventory stock
import TemplateReport from './inventory'

// test printer
import TestPrinter from '../pages/thermal'
import PrinterDemo from '../pages/printer'
import ReceiptToPrint from './payment/ReceiptToPrint'

const AnimatedRoutes = () => {
    const location = useLocation()

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
                        <Route path="/payment/:tableNo" element={<PaymentPage />} />
                        <Route path="/payment/receipt/:billNo" element={<ReceiptToPrint />} />
                        <Route path="/sale-report" element={<SaleReport />} />
                        <Route path="/sale-report1" element={<SaleReport1 />} />
                        <Route path="/sale-report2" element={<SaleReport2 />} />
                        <Route path="/sale-report3" element={<SaleReport3 />} />
                        <Route path="/sale-report4" element={<SaleReport4 />} />
                        <Route path="/sale-report5" element={<SaleReport5 />} />
                        <Route path="/inventory/db" element={<TemplateReport />} />
                    </Route>
                </Route>
                <Route path="/test-print" element={<TestPrinter />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/register-macno" element={<RegisterMacNo />} />
                <Route path="404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
