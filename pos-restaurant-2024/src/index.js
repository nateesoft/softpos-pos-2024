import React from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import { HelmetProvider } from "react-helmet-async"
import { CssBaseline, ThemeProvider } from "@mui/material";

import global_th from "./locales/th/global.json"
import global_en from "./locales/en/global.json"

import App from "./App"
import reportWebVitals from "./reportWebVitals"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "auto",
  fallbackLng: "en",
  resources: {
    en: {
      global: global_en
    },
    th: {
      global: global_th
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <HelmetProvider>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={{}}>
        <CssBaseline enableColorSchem />
          <App />
      </ThemeProvider>
    </I18nextProvider>
  </HelmetProvider>
)

reportWebVitals()
