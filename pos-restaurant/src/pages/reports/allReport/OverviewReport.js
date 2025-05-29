import React, { useEffect, useState } from "react"
import {
  AppBar,
  Box,
  Button,
  Grid2,
  IconButton,
  Toolbar} from "@mui/material"
import TableBar from "@mui/icons-material/TableBar"
import { useNavigate } from "react-router-dom"

import ReportDaily from "../../floorplan/ReportDaily"
import apiClient from "../../../httpRequest"
import DashboardContent from "../DashboardContent"

export const valueFormatter = (item) => `${item.value}%`

const OverviewReport = () => {
  const navigate = useNavigate()

  const [overviewReport, setOverviewReport] = useState(null)
  const [customers, setCustomers] = useState(null)
  const [topSales, setTopSales] = useState([])
  const [saleByGroup, setSaleByGroup] = useState([])
  const [saleByType, setSaleByType] = useState([])
  const [saleByTime, setSaleByTime] = useState([])
  const [saleByAllTime, setSaleByAllTime] = useState([])

  const initLoad = () => {
    apiClient
      .get(`/api/overview-report/all`)
      .then((response) => {
        setOverviewReport(response.data.data)

        setCustomers(response.data.data.customers.data)
        setTopSales(response.data.data.topSales.data)
        setSaleByType(response.data.data.saleByType.data)
        setSaleByGroup(response.data.data.saleByGroup.data)
        setSaleByTime(response.data.data.saleByTime.data.overview)
        setSaleByAllTime(response.data.data.saleByTime.data.allTime)
      })
      .catch((err) => alert(err.message))
  }

  const backToFloorPlan = () => {
    navigate("/floorplan")
  }

  useEffect(() => {
    initLoad()
  }, [])

  if (!overviewReport) {
    return <div>Loading...</div>
  }

  return (
    <Box sx={{ width: "100%", backgroundColor: "#123456", color: "white" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar component="static" sx={{ backgroundColor: "#123456" }}>
          <Toolbar>
            <Grid2 container justifyContent="flex-start">
              <IconButton color="inherit" aria-label="open drawer" edge="start">
                <ReportDaily />
              </IconButton>
            </Grid2>
            <Grid2
              container
              spacing={1}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ flexGrow: 1 }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<TableBar />}
                onClick={backToFloorPlan}
              >
                หน้าหลัก
              </Button>
            </Grid2>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{marginTop: "7vh"}}>
        <DashboardContent />
      </Box>
    </Box>
  )
}

export default OverviewReport
