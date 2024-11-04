import React from "react"
import { useTranslation } from "react-i18next"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import FloorPlanPage from "./components/FloorPlanPage"
import MainSalePage from "./components/mainSale/MainSalePage"
import PaymentPage from "./components/payment/PaymentPage"
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
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/sale-report" element={<SaleReportPage />} />
        </Routes>
        <h1>{t("mainSection.title")}</h1>
      </main>
    </Router>
  )
}

export default App
