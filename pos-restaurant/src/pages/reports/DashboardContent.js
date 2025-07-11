import React, { useEffect, useState } from "react"
import { BarChart } from "@mui/x-charts/BarChart"
import { Box, Grid, Grid2, Paper, Typography } from "@mui/material"
import { PieChart, pieArcLabelClasses } from "@mui/x-charts"
import { styled } from "@mui/material/styles"
import Man from "@mui/icons-material/Man"
import Woman from "@mui/icons-material/Woman"
import ChildCare from "@mui/icons-material/ChildCare"
import ElderlyIcon from "@mui/icons-material/Elderly"
import MenuBook from "@mui/icons-material/MenuBook"
import ScheduleIcon from "@mui/icons-material/Schedule"
import WineBarIcon from "@mui/icons-material/WineBar"
import DinnerDiningIcon from "@mui/icons-material/DinnerDining"
import LunchDiningIcon from "@mui/icons-material/LunchDining"
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"
import ArchiveIcon from "@mui/icons-material/Archive"
import DiningIcon from "@mui/icons-material/Dining"
import { useNavigate } from "react-router-dom"

import Diversity1Icon from "@mui/icons-material/Diversity1"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied"
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"

import apiClient from "../../httpRequest"

export const valueFormatter = (item) => `${item.value}%`

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 200,
  height: 160,
  textAlign: "center",
  padding: "10px"
}))

const DashboardContent = () => {
  const navigate = useNavigate()

  const [overviewReport, setOverviewReport] = useState(null)
  const [customers, setCustomers] = useState(null)
  const [member, setMember] = useState(null)
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
        setMember(response.data.data.member.data)
        setCustomers(response.data.data.customers.data)
        setTopSales(response.data.data.topSales.data)
        setSaleByType(response.data.data.saleByType.data)
        setSaleByGroup(response.data.data.saleByGroup.data)
        setSaleByTime(response.data.data.saleByTime.data.overview)
        setSaleByAllTime(response.data.data.saleByTime.data.allTime)
      }).catch((err) => alert(err.message))
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
    <Box sx={{ width: "100%" }}>
      <Grid container padding={1}>
        <Grid xs={12} spacing={1}>
          <Grid2 container spacing={1} padding={1}>
            <DemoPaper
              variant="elevation"
              sx={{
                backgroundColor: "chocolate",
                color: "white",
                borderRadius: "10px",
                border: "1px solid black",
                boxShadow: "2px 3px 0px 0px salmon"
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography sx={{ fontWeight: "bold" }}>
                  <u>จำนวนลูกค้า {customers.customer_count} คน</u>
                </Typography>
                <table width="100%">
                  <tr>
                    <td>
                      <Man />
                    </td>
                    <td>
                      <Typography>ชาย</Typography>
                    </td>
                    <td>{customers.customer_man_count || 0} คน</td>
                  </tr>
                  <tr>
                    <td>
                      <Woman />
                    </td>
                    <td>
                      <Typography>หญิง</Typography>
                    </td>
                    <td>{customers.customer_woman_count || 0} คน</td>
                  </tr>
                  <tr>
                    <td>
                      <ChildCare />
                    </td>
                    <td>
                      <Typography>เด็ก</Typography>
                    </td>
                    <td>{customers.customer_kid_count || 0} คน</td>
                  </tr>
                  <tr>
                    <td>
                      <ElderlyIcon />
                    </td>
                    <td>
                      <Typography>คนชรา</Typography>
                    </td>
                    <td>{customers.customer_old_count || 0} คน</td>
                  </tr>
                </table>
              </Box>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                backgroundColor: "lightblue",
                borderRadius: "10px",
                border: "1px solid darkblue",
                width: 410,
                boxShadow: "2px 3px 0px 0px #aaa"
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography sx={{ fontWeight: "bold" }}>
                  <u>ข้อมูลสมาชิกประจำเดือน</u>
                </Typography>
                <table width="100%">
                  <tr>
                    <td>
                      <Diversity1Icon />
                    </td>
                    <td align="left">
                      <Typography>All member</Typography>
                    </td>
                    <td>{member.all_member || 0} คน</td>
                  </tr>
                  <tr>
                    <td>
                      <PersonAddAltIcon />
                    </td>
                    <td align="left">
                      <Typography>New Register</Typography>
                    </td>
                    <td>{member.new_register || 0} คน</td>
                  </tr>
                  <tr>
                    <td>
                      <SensorOccupiedIcon />
                    </td>
                    <td align="left">
                      <Typography>First Check-In</Typography>
                    </td>
                    <td>{member.first_check_in || 0} คน</td>
                  </tr>
                  <tr>
                    <td>
                      <SelfImprovementIcon />
                    </td>
                    <td align="left">
                      <Typography>Registered Not Used</Typography>
                    </td>
                    <td>{member.not_come || 0} คน</td>
                  </tr>
                </table>
              </Box>
            </DemoPaper>
          </Grid2>
        </Grid>
        <Grid xs={12} spacing={1}>
          <Grid2 container spacing={1} padding={1}>
            <DemoPaper
              variant="elevation"
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography sx={{ fontWeight: "bold" }}>
                  <u>รายการสินค้าขายดี</u>
                </Typography>
                <table width="100%">
                  {topSales &&
                    topSales.map((item) => (
                      <tr key={item.R_PluCode}>
                        <td>
                          <MenuBook />
                        </td>
                        <td align="left">
                          <Typography>{item.R_PName}</Typography>
                        </td>
                        <td>
                          <Typography>{item.SUM_QTY}</Typography>
                        </td>
                      </tr>
                    ))}
                </table>
                {topSales.length === 0 && (
                  <div style={{ color: "orange" }}>ไม่พบข้อมูล</div>
                )}
              </Box>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                backgroundColor: "purple",
                color: "white",
                borderRadius: "10px"
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography sx={{ fontWeight: "bold" }}>
                  <u>ช่วงเวลาขายดี</u>
                </Typography>
                <table width="100%">
                  {saleByTime &&
                    saleByTime.map((item) => (
                      <tr>
                        <td>
                          <ScheduleIcon />
                        </td>
                        <td align="left">
                          <Typography>{item.time}</Typography>
                        </td>
                        <td>
                          <Typography>{item.qty}</Typography>
                        </td>
                      </tr>
                    ))}
                </table>
                {saleByTime.length === 0 && (
                  <div style={{ color: "orange" }}>ไม่พบข้อมูล</div>
                )}
              </Box>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "10px"
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography sx={{ fontWeight: "bold" }}>
                  <u>ตามประเภท</u>
                </Typography>
                <table width="100%">
                  {saleByType &&
                    saleByType.map((item) => (
                      <tr>
                        <td>
                          {item.R_ETD === "E" && <DiningIcon />}
                          {item.R_ETD === "T" && <ArchiveIcon />}
                          {item.R_ETD === "D" && <DeliveryDiningIcon />}
                        </td>
                        <td align="left">
                          <Typography>{item.label}</Typography>
                        </td>
                        <td align="right">
                          <Typography>{item.NetTotal}</Typography>
                        </td>
                      </tr>
                    ))}
                </table>
                {saleByType.length === 0 && (
                  <div style={{ color: "orange" }}>ไม่พบข้อมูล</div>
                )}
              </Box>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                backgroundColor: "yellow",
                color: "black",
                borderRadius: "10px"
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography sx={{ fontWeight: "bold" }}>
                  <u>กลุ่มสินค้า</u>
                </Typography>
                <table width="100%">
                  {saleByGroup &&
                    saleByGroup.map((item, index) => (
                      <tr>
                        <td>
                          {item.label === "Food" && <DinnerDiningIcon />}
                          {item.label === "Drink" && <WineBarIcon />}
                          {item.label === "Product" && <LunchDiningIcon />}
                        </td>
                        <td align="left">
                          <Typography>{item.label}</Typography>
                        </td>
                        <td align="right">
                          <Typography>{item.NetTotal || 0}</Typography>
                        </td>
                      </tr>
                    ))}
                </table>
                {saleByGroup.length === 0 && (
                  <div style={{ color: "orange" }}>ไม่พบข้อมูล</div>
                )}
              </Box>
            </DemoPaper>
          </Grid2>
        </Grid>
      </Grid>
      <Paper sx={{ padding: "10px", margin: "10px" }}>
        <Grid2 container spacing={2}>
          {saleByAllTime && (
            <BarChart
              series={saleByAllTime}
              height={290}
              xAxis={[
                {
                  data: [
                    "06:00 - 08:00",
                    "08:00 - 12:00",
                    "12:00 - 16:00",
                    "16:00 - 21:00"
                  ],
                  scaleType: "band"
                }
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          )}
          {saleByType.length > 0 && (
            <PieChart
              colors={["lightcoral", "slateblue", "green"]}
              series={[
                {
                  arcLabel: (item) => `${item.value}%`,
                  arcLabelMinAngle: 35,
                  arcLabelRadius: "60%",
                  highlightScope: { fade: "global", highlight: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "black"
                  },
                  data: saleByType,
                  valueFormatter
                }
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fontWeight: "bold"
                }
              }}
              width={350}
              height={200}
            />
          )}
          {saleByGroup.length > 0 && (
            <PieChart
              colors={["slateblue", "green", "purple"]}
              series={[
                {
                  arcLabel: (item) => `${item.value}%`,
                  arcLabelMinAngle: 35,
                  arcLabelRadius: "60%",
                  highlightScope: { fade: "global", highlight: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "black"
                  },
                  data: saleByGroup,
                  valueFormatter
                }
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fontWeight: "bold"
                }
              }}
              width={350}
              height={200}
            />
          )}
          {topSales.length > 0 && (
            <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.value}%`,
                  arcLabelMinAngle: 35,
                  arcLabelRadius: "60%",
                  highlightScope: { fade: "global", highlight: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "black"
                  },
                  data: topSales,
                  valueFormatter
                }
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fontWeight: "bold"
                }
              }}
              width={350}
              height={200}
            />
          )}
        </Grid2>
      </Paper>
    </Box>
  )
}

export default DashboardContent
