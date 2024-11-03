import React from "react"
import { useTranslation } from "react-i18next"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import FloorPlanPage from "./components/FloorPlanPage"
import MainSalePage from "./components/MainSalePage"
import OrderDetailPage from "./components/OrderDetailPage"
import PaymentPage from "./components/PaymentPage"
import ReceiptPage from "./components/ReceiptPage"
import SaleReportPage from "./components/SaleReportPage"

function App() {
  const { t } = useTranslation("global")

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/floorplan" element={<FloorPlanPage />} />
          <Route path="/sale" element={<MainSalePage />} />
          <Route path="/order-detail" element={<OrderDetailPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
          <Route path="/sale-report" element={<SaleReportPage />} />
        </Routes>
        <h1>{t("mainSection.title")}</h1>
      </main>
    </Router>
  )
}

export default App
