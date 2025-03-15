import React from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

import "./index.css"

import global_th from "./locales/th/global.json"
import global_en from "./locales/en/global.json"
import reportWebVitals from "./reportWebVitals"
import NotFound from "./pages/NotFound"
import MainApp from "./MainApp"
import TaskFinish from "./pages/TaskFinish"

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

i18next.init({
  interpolation: { escapeValue: false },
  lng: "auto",
  fallbackLng: "th",
  resources: {
    th: {
      global: global_th
    },
    en: {
      global: global_en
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <Routes>
          <Route path="/:id" element={<MainApp page="home" />} />
          <Route path="/:id/detail" element={<MainApp page="detail" />} />
          <Route path="/:id/task-finish" element={<TaskFinish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </I18nextProvider>
    </ThemeProvider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
