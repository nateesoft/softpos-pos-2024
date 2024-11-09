import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import PinLock from "./PinLock"
import LoginPage from './login'
import RegisterPage from './login/Register'
import ForgotPassPage from './login/ForgotPassword'
import FloorPlanPage from "./floorplan/FloorPlanPage"
import FutureFloorplan from "./floorplan/FutureFloorplan"
import MainSalePage from "./mainSale/MainSalePage"
import PaymentPage from "./payment/PaymentPage"
import SaleReportPage from "./SaleReportPage"

const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/reset-password" element={<ForgotPassPage />} />
                <Route path="/pinlock" element={<PinLock />} />
                <Route path="/floorplan" element={<FloorPlanPage />} />
                <Route path="/floorplan2" element={<FutureFloorplan />} />
                <Route path="/sale" element={<MainSalePage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/sale-report" element={<SaleReportPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
