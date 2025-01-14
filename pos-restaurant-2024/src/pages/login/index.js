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
import LoginIcon from '@mui/icons-material/Login';
import { Divider, Grid2, useMediaQuery } from "@mui/material"

import apiClient from '../../httpRequest'
import { POSContext } from "../../AppContext"
import { handleEnter } from "../../util/EventLisener"
import bg from "./bg/welcome.jpg"
import bgimg from "./bg/bgbg.jpg"
import ShowNotification from "../utils/ShowNotification"
import Footer from '../Footer'

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
  boxShadow: 24
}

const Login = () => {
  const { appData, setAppData } = useContext(POSContext)
  const { macno, encryptData } = appData

  const iphonePro14max = useMediaQuery('(max-width:430px)');
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    apiClient
      .post("/api/posuser/login", { username: user, password: encryptData(password), macno: macno })
      .then(async (response) => {
        if (response.data.status === 2000) {
          const responseLogin = response.data.data
          if (responseLogin) {
            // get branch info
            const responseBranch = await apiClient.get(`/api/branch`)
            const branchInfo = responseBranch.data.data

            // get company info
            const responseCompany = await apiClient.get(`/api/company`)
            const companyInfo = responseCompany.data.data

            localStorage.setItem("userLogin", user)
            localStorage.setItem("posuser", JSON.stringify(response.data.data))
            setAppData({
              ...appData,
              userLogin: user,
              posuser: JSON.stringify(response.data.data),
              branchInfo,
              companyInfo
            })
            const backLink = localStorage.getItem('backLink')
            if (backLink) {
              localStorage.removeItem('backLink')
              navigate(backLink)
            } else {
              navigate("/floorplan")
            }
          } else {
            handleNotification("ข้อมูลผู้ใช้งาน Username/ Pasword ไม่ถูกต้อง !!!", "warning")
          }
        } else {
          handleNotification("ไม่สามารถ Login เข้าระบบได้ !", "error")
        }
      })
      .catch(error => {
        handleNotification(error.message)
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
                  background: "radial-gradient(circle at center, #123456, #000)",
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
                    {iphonePro14max === true && <Grid2 container justifyContent="center">
                      <img src={bg} width={220} alt='' />
                    </Grid2>}
                    <Divider sx={{ marginBottom: "20px" }} />
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
                            id="username"
                            label="Username"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                              color: "#ffffff",
                              background: "radial-gradient(circle, #123456, #000)",
                              height: "100px",
                              fontSize: "28px",
                              '&:hover': {
                                background: "radial-gradient(circle, green, #000)"
                              }
                            }}
                            endIcon={<LoginIcon />}
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
        <Footer />
        <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
      </div>
    </motion.div>
  )
}

export default Login
