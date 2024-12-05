import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { motion } from "framer-motion"

import apiClient from '../../httpRequest'
import { POSContext } from "../../AppContext"
import { handleEnter } from "../../util/EventLisener"
import bg from "./bg/welcome.jpg"
import bgimg from "./bg/bgbg.jpg"
import ShowNotification from "../utils/ShowNotification"

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  boxShadow: 24
}

export default function Login() {
  const { appData, setAppData } = useContext(POSContext)
  const { macno } = appData

  console.log("context:", appData)
  const [remember, setRemember] = useState(false)
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  
  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type="error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    apiClient
      .post("/api/posuser/login", { username: user, password, macno: macno })
      .then((response) => {
        if (response.data.status === 2000) {
          if (response.data.data) {
            setAppData({ ...appData, userLogin: user, posuser: response.data.data })
            localStorage.setItem("userLogin", user)
            navigate("/floorplan")
          } else {
            handleNotification("ข้อมูลผู้ใช้งาน Username/ Pasword ไม่ถูกต้อง !!!", "warning")
          }
        } else {
          handleNotification("ไม่สามารถ Login เข้าระบบได้ !", "error")
        }
      })
      .catch((error) => {
        handleNotification(error)
      })
  }

  return (
    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div
        style={{
          background: `url(${bgimg}) no-repeat center center fixed`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          color: "#f5f5f5"
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={6} lg={6}>
              <Box
                style={{
                  background: `url(${bg}) no-repeat center center fixed`,
                  backgroundSize: "cover",
                  height: "100%",
                  width: "100%",
                  color: "#f5f5f5",
                  borderRadius: "10px 0px 0px 0px"
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "#123456",
                  borderRadius: "0px 0px 10px 0px"
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                    <Box display="flex" justifyContent="center">
                      <Typography component="h1" variant="h4">
                        POS Restaurant
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                      {macno && (
                        <Typography variant="p" sx={{ color: "yellow" }}>
                          - หมายเลขเครื่อง {macno} -
                        </Typography>
                      )}
                      {!macno && (
                        <Typography variant="p" sx={{ color: "red" }}>
                          ( ไม่พบหมายเลขเครื่อง !!! )
                        </Typography>
                      )}
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            autoComplete="email"
                            autoFocus
                            onKeyDown={(e) => handleEnter(e)}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            color="primary"
                            sx={{
                              mt: "10px",
                              mr: "20px",
                              borderRadius: 28,
                              color: "#ffffff",
                              minWidth: "170px",
                              backgroundColor: "chocolate"
                            }}
                          >
                            Login
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
      </div>
    </motion.div>
  )
}
