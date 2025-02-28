import { createContext, useContext, useState } from "react"

import ShowNotification from "../pages/ui-utils/ShowNotification"
const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const [showNoti, setShowNoti] = useState(false)

  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  return (
    <AlertContext.Provider value={{ handleNotification }}>
      {children}
      <ShowNotification
        showNoti={showNoti}
        setShowNoti={setShowNoti}
        message={notiMessage}
        alertType={alertType}
      />
    </AlertContext.Provider>
  )
}

export const useAlert = () => useContext(AlertContext)
