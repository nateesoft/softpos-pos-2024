import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import AnimatedRoutes from "./pages/AnimatedRouters"

function App() {
  return (
    <Router>
      <main>
        <AnimatedRoutes />
      </main>
    </Router>
  )
}

export default App
