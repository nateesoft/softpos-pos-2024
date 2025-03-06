import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"

import LoginPage from './pages/login';
import SalePage from './pages/sales';

const App = () => {
  const location = useLocation()

  return (
    <div style={{background: "radial-gradient(circle at top, #123456, #123)", padding: "0px", margin: "0px"}}>
      <Routes location={location}>
        <Route>
          <Route path='/' element={<LoginPage />} />
          <Route path='/sale' element={<SalePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
