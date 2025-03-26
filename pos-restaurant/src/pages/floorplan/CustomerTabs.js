import React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import CustomerGeneral from "./CustomerGeneral"
import { useTranslation } from "react-i18next"
import CustomerNational from "./CustomerNational"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  }
}

const CustomerTabs = (props) => {
  const {
    manCount,
    setManCount,
    womanCount,
    setWomanCount,
    kidCount,
    setKidCount,
    oldCount,
    setOldCount
  } = props
  const {
    thaiCount,
    setThaiCount,
    europeCount,
    setEuropeCount,
    americaCount,
    setAmericaCount,
    asiaCount,
    setAsiaCount
  } = props
  const { t } = useTranslation("global")
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Thai" {...a11yProps(0)} sx={{fontWeight: "bold", fontSize: 22}} />
          <Tab label="Other" {...a11yProps(1)} sx={{fontWeight: "bold", fontSize: 22}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} style={{ padding: 10 }}>
        <CustomerGeneral {...props} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} style={{ padding: 10 }}>
        <CustomerNational {...props} />
      </CustomTabPanel>
    </Box>
  )
}

export default CustomerTabs
