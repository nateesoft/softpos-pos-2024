import { useCallback, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { motion } from "framer-motion"
import LoginIcon from "@mui/icons-material/Login"
import { Divider, Grid2, Modal, useMediaQuery } from "@mui/material"

import { useAlert } from "../../contexts/AlertContext"
import { POSContext } from "../../AppContext"
import { handleEnter } from "../ui-utils/EventLisener"
import Footer from "../Footer"
import DashboardApps from "../dashboard"
import { validateLogin } from "../../api/userLoginApi"
import { getBranchInfo } from "../../api/branchApi"
import { getCompanyInfo } from "../../api/companyApi"

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

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%"
}

const Login = () => {
  const { appData, setAppData } = useContext(POSContext)
  const { macno, encryptData, socket, bgImage, bgLogin } = appData
  const { handleNotification } = useAlert()

  const [branchInfo, setBranchInfo] = useState({})
  const [companyInfo, setCompanyInfo] = useState({})
  const navigate = useNavigate()

  const iphonePro14max = useMediaQuery("(max-width:430px)")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const [openDashboard, setOpenDashboard] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
        username: user,
        password: encryptData(password),
        macno: macno,
        timeout: 3000
      }
    const { data: userInfo, error } = await validateLogin(payload)
    if (userInfo) {
        localStorage.setItem("userLogin", user)
        localStorage.setItem("posuser", JSON.stringify(userInfo))

        setAppData({
          ...appData,
          userLogin: user,
          posuser: JSON.stringify(userInfo),
          branchInfo,
          companyInfo
        })
        const backLink = localStorage.getItem("backLink")
        if (backLink) {
          localStorage.removeItem("backLink")
          navigate(backLink)
        } else {
          if(user === "9999"){
            setOpenDashboard(true)
          }else{
            navigate("/floorplan")
          }
        }
    } else {
      handleNotification(error)
    }
  }

  const getBranch = useCallback(async () => {
    const {data, error} = await getBranchInfo()
    setBranchInfo(data)
  }, [])

  const getCompany = useCallback(async () => {
    const {data, error} = await getCompanyInfo()
    setCompanyInfo(data)
  }, [])

  useEffect(() => {
    getBranch()
    getCompany()
  }, [getBranch, getCompany])

  useEffect(() => {
    socket.connect()

    socket.emit("message", "Hello POS Restuarant !!!")
    socket.on("message", (newMessage) => {
      console.log(newMessage)
    })

    socket.on("reply", (newMessage) => {
      console.log(newMessage)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div
        style={{
          background: `url(${bgImage}) no-repeat center center fixed`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          color: "#f5f5f5"
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={6} lg={6} sx={{backgroundColor: "#fffbd6"}}>
              <Box
                style={{
                  background: `url(${bgLogin}) no-repeat center center fixed`,
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
                  background:
                    "radial-gradient(circle at center, #123456, #000)",
                  borderRadius: "0px 0px 10px 0px"
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                    {branchInfo && <Grid2 textAlign="right">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "lightgreen",
                          fontWeight: "bold",
                          fontStyle: "italic"
                        }}
                      >
                        สาขา {branchInfo.Code} {branchInfo.Name} ➲
                      </Typography>
                    </Grid2>}
                    <Box display="flex" justifyContent="center">
                      <Typography
                        sx={{
                          fontSize: "28px",
                          fontBold: "bold",
                          padding: "10px"
                        }}
                      >
                        POS Login
                      </Typography>
                    </Box>
                    {iphonePro14max === true && (
                      <Grid2 container justifyContent="center">
                        <img src={`${bgLogin}`} width={220} alt="" />
                      </Grid2>
                    )}
                    <Box display="flex" justifyContent="center">
                      {macno && (
                        <Typography variant="p" sx={{ color: "yellow" }}>
                          * หมายเลขเครื่อง {macno} *
                        </Typography>
                      )}
                      {!macno && (
                        <Typography variant="p" sx={{ color: "red" }}>
                          ( ไม่พบหมายเลขเครื่อง !!! )
                        </Typography>
                      )}
                    </Box>
                    <Divider sx={{ marginBottom: "20px" }} />
                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid2 container spacing={1}>
                        <TextField
                          required
                          aria-label="txtUser"
                          fullWidth
                          id="txUser"
                          label="Username"
                          value={user}
                          onChange={(e) => setUser(e.target.value)}
                          autoComplete="email"
                          autoFocus
                          onKeyDown={(e) => handleEnter(e)}
                        />
                        <TextField
                          required
                          fullWidth
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          label="Password"
                          type="password"
                          id="txPassword"
                          autoComplete="new-password"
                        />
                        <Button
                          id="btnLogin"
                          type="submit"
                          aria-label="buttonLogin"
                          variant="contained"
                          fullWidth
                          sx={{
                            color: "#ffffff",
                            background:
                              "radial-gradient(circle, #123456, #000)",
                            height: "70px",
                            fontSize: "28px",
                            "&:hover": {
                              background:
                                "radial-gradient(circle, #44449a, #000)"
                            }
                          }}
                          endIcon={<LoginIcon />}
                        >
                          Login
                        </Button>
                      </Grid2>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </div>
      <Modal open={openDashboard} onClose={() => setOpenDashboard(false)}>
        <Box sx={{ ...modalStyle }}>
          <DashboardApps open={openDashboard} />
        </Box>
      </Modal>
    </motion.div>
  )
}

export default Login
