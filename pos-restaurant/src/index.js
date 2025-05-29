import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { I18nProvider } from "./contexts/Translation"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <I18nProvider>
    <App />
  </I18nProvider>
)
