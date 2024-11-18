import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { POSContext } from './AppContext'

import AnimatedRoutes from "./pages/AnimatedRouters"

const initContext = {
  macno: localStorage.getItem('macno') || "",
  userLogin: localStorage.getItem('userLogin') || "",
  empCode: "",
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
  productList: []
}

function App() {
  const [appData, setAppData] = useState(initContext)
  return (
    <Router>
      <POSContext.Provider value={{ appData, setAppData }}>
        <AnimatedRoutes />
      </POSContext.Provider>
    </Router>
  )
}

export default App
