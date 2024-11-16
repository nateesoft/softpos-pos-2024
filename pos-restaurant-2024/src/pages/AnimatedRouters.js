import React, { Suspense } from 'react'
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import PinLock from "./PinLock"
import LoginPage from './login'
import RegisterPage from './login/Register'
import ForgotPassPage from './login/ForgotPassword'
import FloorPlanPage from "./floorplan/FloorPlanPage"
import TableManagement from "./floorplan/TableManagement"
import MainSalePage from "./mainSale/MainSalePage"
import PaymentPage from "./payment/PaymentPage"
import SaleReportPage from "./SaleReportPage"
import PageNotFound from './PageNotFound'

import TrelloBoard from '../pages/monitor/kitchen'
import Protected from "../routes/ProtectedRoute"
import DashboardLayout from "../layouts"
import RegisterMacNo from './RegisterMacno'

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
                        <Route path="/sale" element={<MainSalePage />} />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path="/sale-report" element={<SaleReportPage />} />
                    </Route>
                </Route>

                <Route path="/register" element={<RegisterPage />} />
                <Route path="/reset-password" element={<ForgotPassPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/register-macno" element={<RegisterMacNo />} />
                <Route path="404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
