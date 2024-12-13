import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import CryptoJS from "crypto-js";
import { CookiesProvider } from 'react-cookie'

import { POSContext } from './AppContext'
import AnimatedRoutes from "./pages/AnimatedRouters"

const SECRET_PASS = process.env.REACT_APP_API_SECRET_PASS
const initContext = {
  macno: localStorage.getItem('macno') || "",
  userLogin: localStorage.getItem('userLogin') || "",
  empCode: "",
  companyInfo: {
    companyCode: "",
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
    branchCode: "",
  },
  productList: [],
  posuser: localStorage.getItem('posuser') || {},
  encryptData: data => CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_PASS).toString()
}

function App() {
  const [appData, setAppData] = useState(initContext)
  return (
    <Router>
      <CookiesProvider>
        <POSContext.Provider value={{ appData, setAppData }}>
          <AnimatedRoutes />
        </POSContext.Provider>
      </CookiesProvider>
    </Router>
  )
}

export default App
