import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./pages/login"
import MainApp from "./pages/main"
import Dashboard from "./pages/main/Dashboard"

import AddStkFile from './pages/main/AddStkFile'
import UserGroup from './pages/main/UserGroup'
import UserSetting from './pages/main/UserSetting'

import ReportSaleBranch from './pages/main/report/ReportSaleBranch'
import ReportStockBranch from './pages/main/report/ReportStockBranch'

import Shortcut from './pages/main/config/Shortcut'
import OptionConfig from './pages/main/config/OptionConfig'
import BranchDetail from './pages/main/config/BranchDetail'

const App = () => {
  return (
    <Router basename="findig-pos-backoffice">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<MainApp />}>
          <Route path="" element={<Dashboard />} />

          <Route path="add-stkfile" element={<AddStkFile />} />
          <Route path="user-group" element={<UserGroup />} />
          <Route path="user-setting" element={<UserSetting />} />

          <Route path="report-sale-branch" element={<ReportSaleBranch />} />
          <Route path="report-stock-branch" element={<ReportStockBranch />} />

          <Route path="shortcut" element={<Shortcut />} />
          <Route path="option-config" element={<OptionConfig />} />
          <Route path="branch-detail" element={<BranchDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
