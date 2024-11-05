import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LoginPage from "./components/LoginPage"
import FloorPlanPage from "./components/floorplan/FloorPlanPage"
import MainSalePage from "./components/mainSale/MainSalePage"
import PaymentPage from "./components/payment/PaymentPage"
import SaleReportPage from "./components/SaleReportPage"

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/floorplan" element={<FloorPlanPage />} />
          <Route path="/sale" element={<MainSalePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/sale-report" element={<SaleReportPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
