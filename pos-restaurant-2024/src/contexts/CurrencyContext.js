import React, { createContext, useState, useEffect } from "react"

import { fetchExchangeRates } from "../services/exchangeRateService"

export const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {
  console.log("CurrencyContext")
  const [currency, setCurrency] = useState("THB")
  const [exchangeRates, setExchangeRates] = useState({})

  useEffect(() => {
    fetchExchangeRates().then((rates) => setExchangeRates(rates))
  }, [])

  const convertCurrency = (amount, targetCurrency) => {
    if (!exchangeRates[targetCurrency]) return amount
    return amount * exchangeRates[targetCurrency]
  }

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, convertCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}
