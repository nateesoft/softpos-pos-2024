import React from "react"
import Button from "@mui/material/Button"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { Box, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/MenuBook"

import { useTranslation } from "../../contexts/Translation"

const myStyle = {
  listStyleType: "none",
  padding: 10,
  margin: 10
}

const detail = {
  margin: "10px",
  fontWeight: "bold",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "1px 2px orange",
  cursor: "pointer"
}

function LeftMenu() {
  const { setLang } = useTranslation()
  const [alignment, setAlignment] = React.useState("th")

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <ul style={myStyle}>
      <Box display="flex" justifyContent="center">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          fullWidth
        >
          <ToggleButton
            value="th"
            aria-label="centered"
            onClick={() => setLang("th")}
          >
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              TH
            </Typography>
          </ToggleButton>
          <ToggleButton
            value="en"
            aria-label="left aligned"
            onClick={() => setLang("en")}
          >
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              EN
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <li style={detail}>
        <Button
          variant="contained"
          color="warning"
          sx={{ fontWeight: "bold" }}
          fullWidth
          startIcon={<MenuIcon />}
        >
          Menu
        </Button>
      </li>
      <li style={detail}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fae5d3", color: "black" }}
          fullWidth
        >
          Table Services
        </Button>
      </li>
      <li style={detail}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fae5d3", color: "black" }}
          fullWidth
        >
          Reservation
        </Button>
      </li>
      <li style={detail}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fae5d3", color: "black" }}
          fullWidth
        >
          Delivery
        </Button>
      </li>
      <li style={detail}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fae5d3", color: "black" }}
          fullWidth
        >
          Accounting
        </Button>
      </li>
      <li style={detail}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fae5d3", color: "black" }}
          fullWidth
        >
          Settings
        </Button>
      </li>
    </ul>
  )
}

export default LeftMenu
