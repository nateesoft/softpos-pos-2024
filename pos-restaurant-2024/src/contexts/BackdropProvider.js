import React, { createContext, useContext, useState } from "react"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

const BackdropContext = createContext()

export const BackdropProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  const showLoading = () => setOpen(true)
  const hideLoading = () => setOpen(false)

  return (
    <BackdropContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </BackdropContext.Provider>
  )
}

export const useBackdrop = () => useContext(BackdropContext)
