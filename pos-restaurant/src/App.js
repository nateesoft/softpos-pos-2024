import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import CryptoJS from "crypto-js"
import { CookiesProvider } from "react-cookie"
import Cookies from 'js-cookie';

import { POSContext } from "./AppContext"
import AnimatedRoutes from "./pages/AnimatedRouters"
import { CurrencyProvider } from "./contexts/CurrencyContext"
import { AlertProvider } from "./contexts/AlertContext"
import { BackdropProvider } from "./contexts/BackdropProvider"

import { getConfig, loadConfig } from './config';

const SECRET_PASS = process.env.REACT_APP_API_SECRET_PASS
const initContext = {
  baseName: 'pos-restaurant',
  userLogin: localStorage.getItem("userLogin") || "",
  macno: Cookies.get('MACNO'),
  socketHost: Cookies.get('SOCKET_HOST'),
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
  const [appData, setAppData] = useState(initContext)

  useEffect(()=> {
    loadConfig().then(config => {
      console.log(config)
      setAppData({ 
        ...appData, 
        macno: getConfig().MACNO, 
        socketHost: getConfig().SOCKET_HOST 
      })
    })
  }, [])

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
