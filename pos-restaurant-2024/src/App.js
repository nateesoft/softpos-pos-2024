import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import AnimatedRoutes from "./components/AnimatedRouters"

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
