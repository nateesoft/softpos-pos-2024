import React, { useEffect, useState } from "react"
import MenuItem from "@mui/material/MenuItem"
import { Box, Grid2, IconButton, Menu, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

const LanguageSettings = () => {
  console.log("LanguageSettings")
  const { i18n } = useTranslation("global")
  const [anchorEl, setAnchorEl] = useState(null)
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  )
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (data) => {
    setAnchorEl(false)
    setLanguage(data)
    i18n.changeLanguage(data)
    localStorage.setItem("language", data)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
    localStorage.setItem("language", "en")
  }, [])

  return (
    <>
      <IconButton onClick={handleClick}>
        {language === "en" && (
          <img
            src="/images/en.png"
            alt="United Kingdom"
            width={24}
            height={24}
          />
        )}
        {language === "th" && (
          <img src="/images/th.png" alt="Thailand" width={24} height={24} />
        )}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={() => handleChange("en")}>
          <Grid2 spacing={1} container alignItems="center">
            <Box>
              <img
                src="/images/en.png"
                alt="United Kingdom"
                width={32}
                height={32}
              />
            </Box>
            <Typography variant="p">English</Typography>
          </Grid2>
        </MenuItem>
        <MenuItem onClick={() => handleChange("th")}>
          <Grid2 spacing={1} container alignItems="center">
            <img src="/images/th.png" alt="Thailand" width={32} height={32} />
            <Typography variant="p">Thai</Typography>
          </Grid2>
        </MenuItem>
      </Menu>
    </>
  )
}

export default LanguageSettings
