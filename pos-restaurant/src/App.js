import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import CryptoJS from "crypto-js"
import { CookiesProvider } from "react-cookie"

import { POSContext } from "./AppContext"
import AnimatedRoutes from "./pages/AnimatedRouters"
import { CurrencyProvider } from "./contexts/CurrencyContext"
import { AlertProvider } from "./contexts/AlertContext"
import { BackdropProvider } from "./contexts/BackdropProvider"

const SECRET_PASS = process.env.REACT_APP_API_SECRET_PASS
const initContext = {
  macno: process.env.REACT_APP_MACNO || "",
  userLogin: localStorage.getItem("userLogin") || "",
  empCode: "",
  companyInfo: {
    companyCode: ""
  },
  tableInfo: {
    tableNo: "",
    tableStatus: "",
    customerName: "",
    customerCount: 0,
    orderInfo: {
      orderType: "E"
    },
    orderDetails: []
  },
  branchInfo: {
    branchCode: ""
  },
  productList: [],
  posuser: localStorage.getItem("posuser") || {},
  encryptData: (data) =>
    CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_PASS).toString()
}

const App = () => {
  console.log("App")
  const [appData, setAppData] = useState(initContext)
  return (
    <Router basename="pos-restaurant">
      <CookiesProvider>
        <POSContext.Provider value={{ appData, setAppData }}>
          <CurrencyProvider>
            <AlertProvider>
              <BackdropProvider>
                <AnimatedRoutes />
              </BackdropProvider>
            </AlertProvider>
          </CurrencyProvider>
        </POSContext.Provider>
      </CookiesProvider>
    </Router>
  )
}

export default App
