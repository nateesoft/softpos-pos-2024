import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "@fontsource/roboto";

import App from "./App"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Router basename="findig-pos-backoffice">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
)
