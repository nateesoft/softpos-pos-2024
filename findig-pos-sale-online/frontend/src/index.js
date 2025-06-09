import ReactDOM from "react-dom/client"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "@fontsource/roboto";

import "./index.css"
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
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
