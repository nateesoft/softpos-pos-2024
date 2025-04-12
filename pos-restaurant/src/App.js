import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import CryptoJS from "crypto-js"
import { CookiesProvider } from "react-cookie"
import { io } from "socket.io-client"

import { POSContext } from "./AppContext"
import AnimatedRoutes from "./pages/AnimatedRouters"
import { CurrencyProvider } from "./contexts/CurrencyContext"
import { AlertProvider } from "./contexts/AlertContext"
import { BackdropProvider } from "./contexts/BackdropProvider"

import { getConfig, loadConfig } from './config';
import Loading from './Loading'

const SECRET_PASS = process.env.REACT_APP_API_SECRET_PASS
const initContext = {
  baseName: 'pos-restaurant',
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
  const [appData, setAppData] = useState(initContext)

  useEffect(()=> {
    loadConfig().then(config => {
      setAppData({ 
        ...appData, 
        macno: getConfig().MACNO, 
        socketHost: getConfig().SOCKET_HOST,
        socket: io(getConfig().SOCKET_HOST, {
          autoConnect: false
        })
      })
    })
  }, [])

  if(!appData.socket){
    return <Loading />
  }

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
