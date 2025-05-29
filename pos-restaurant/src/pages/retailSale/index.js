import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext
} from "react"
import {
  useNodesState
} from "@xyflow/react"
import { useNavigate } from "react-router-dom"
import Modal from "@mui/material/Modal"
import {
  Alert,
  AppBar,
  Box,
  Button,
  Divider,
  Grid2,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Toolbar,
  Typography} from "@mui/material"
import ExitToApp from "@mui/icons-material/ExitToApp"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/LogoutOutlined"
import { motion } from "framer-motion"
import "@xyflow/react/dist/style.css"
import StoreIcon from "@mui/icons-material/Store"
import moment from "moment"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"
import SearchIcon from "@mui/icons-material/Search";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import PageviewIcon from '@mui/icons-material/Pageview';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import BlockIcon from '@mui/icons-material/Block';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import CheckCashierStatus from "./cashierStatus"
import RecieptCopyPrint from "./RecieptCopyPrint"
import RefundBill from "./refund/RefundBill"
import ManageCashDrawer from "./ManageCashDrawer"
import DashboardSetting from "./DashboardSetting"

import apiClient from "../../httpRequest"

import { useKeyPress } from "../ui-utils/PageListener"
import { ModalConfirm } from "../ui-utils/AlertPopup"

import OtherMenuSelect from "./OtherMenuSelect"
import { POSContext } from "../../AppContext"
import ReportSelect from "./ReportSelect"
import LanguageSettings from "./LanguageSettings"
import Footer from "../Footer"
import { useAlert } from "../../contexts/AlertContext"
import BalanceTable from "./BalanceTable"
import { useTranslation } from "../../contexts/Translation"

const modalPinStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%"
}

const RetailSalePage = () => {
  const { t } = useTranslation()
  const { handleNotification } = useAlert()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { appData, setAppData } = useContext(POSContext)
  const { userLogin, socket } = appData

  const [nodes, setNodes] = useNodesState([])
  const [openCashierStatus, setOpenCashierStatus] = useState(false)
  const [openCopyPrint, setOpenCopyPrint] = useState(false)
  const [openRefundBill, setOpenRefundBill] = useState(false)
  const [openMgrCashDrawer, setOpenMgrCashDrawer] = useState(false)
  const [openPosSetting, setPosSetting] = useState(false)
  const [openDashboard, setOpenDashboard] = useState(false)

  const [messageAlert, setMessageAlert] = useState("")
  const [showClient, setShowClient] = useState(false)

  const [openLogout, setOpenLogout] = useState(false)

  const keyPressed = useKeyPress("Escape")

  const timeRef = useRef(null)

  const confirmLogoutAlert = useCallback(() => {
    apiClient
      .patch("/api/posuser/logout", { username: userLogin })
      .then((response) => {
        if (response.data.status === 2000) {
          setAppData({ ...appData, userLogin: "", posuser: null })
          localStorage.setItem("userLogin", "")

          // send to printer
          socket.emit(
            "printerMessage",
            JSON.stringify({
              id: 1,
              printerType: "message",
              printerName: "cashier",
              message: "ออกจากระบบเรียบร้อย",
              terminal: "",
              tableNo: "",
              billNo: "",
              title: "",
              billType: ""
            })
          )

          navigate("/")
        } else {
          setOpenLogout(false)
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }, [setOpenLogout, navigate, appData, setAppData])

  const handleChange = (data) => {
    setAnchorEl(null)
    if (data === "CopyPrint") {
      setOpenCopyPrint(true)
    } else if (data === "RefundBill") {
      setOpenRefundBill(true)
    } else if (data === "CashDrawer") {
      setOpenMgrCashDrawer(true)
    } else if (data === "CashierStatus") {
      setOpenCashierStatus(true)
    }
  }

  const handleCloseModal = (func) => {
    func()
  }

  useEffect(() => {
    if (keyPressed) {
      setOpenLogout(true)
    }
  }, [keyPressed])

  useEffect(() => {
    const updateClock = () => {
      if (timeRef.current) {
        timeRef.current.innerText = moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
      }
      requestAnimationFrame(updateClock);
    };

    requestAnimationFrame(updateClock);

    return () => cancelAnimationFrame(updateClock);
  }, [])

  return (
    <motion.div
      style={{
        background: "radial-gradient(circle at top, #003, #000)",
        height: "100vh",
        padding: "10px"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          component="static"
          sx={{
            background: "radial-gradient(circle at center, #003, #000)",
            boxShadow: "5px 3px #aaa"
          }}
        >
          <Toolbar>
            <Grid2 container justifyContent="flex-start">
              <div>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => setOpenDashboard(true)}
                >
                  <StoreIcon
                    fontSize="large"
                    sx={{ background: "chocolate", borderRadius: "15px" }}
                  />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                >
                  <OtherMenuSelect
                    handleChange={handleChange}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    open={open}
                    anchorEl={anchorEl}
                  />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{ display: { xs: "none", md: "inline" } }}
                >
                  <ReportSelect />
                </IconButton>
              </div>
            </Grid2>
            <Grid2
              container
              spacing={1}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ flexGrow: 1 }}
            >
              <Typography
                ref={timeRef}
                sx={{ color: "yellow", display: { xs: "none", md: "flex" } }}
              >
                {moment(new Date()).format("DD/MM/YYYY HH:mm:ss")}
              </Typography>
              <LanguageSettings />
              <Button
                variant="text"
                sx={{ color: "snow", fontWeight: "bold" }}
                onClick={() => setOpenLogout(true)}
                startIcon={<AccountCircleIcon />}
                endIcon={
                  <LogoutIcon
                    sx={{
                      color: "snow",
                      background: "red",
                      display: { xs: "flex", md: "none" },
                      borderRadius: "5px",
                      padding: "2px"
                    }}
                  />
                }
              >
                {userLogin}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => setOpenLogout(true)}
                endIcon={<ExitToApp />}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {t("FloorPlanPage.logoutButton")}
              </Button>
            </Grid2>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid2 container marginTop={10} spacing={1}>
        <Grid2 size={12}>
          <Grid2 container alignItems="center" justifyContent="space-between">
            <Typography variant="h4" color="white" sx={{ fontWeight: "bold" }}>
              Total Amount
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "orange",
                marginLeft: 2,
                fontWeight: "bold",
                textShadow: `2px 1px 0px snow`
              }}
            >
              9,999.00
            </Typography>
            <Button
              size="large"
              variant="contained"
              endIcon={<PointOfSaleIcon />}
              color="success"
              sx={{ fontSize: 28 }}
            >
              ชำระเงิน
            </Button>
          </Grid2>
        </Grid2>
        <Grid2
          size={12}
          sx={{ background: "snow" }}
          marginTop={1}
          marginBottom={1}
        >
          <TextField
            label=""
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid2>
        <Grid2 size={12}>
          <Grid2 container spacing={1}>
            <Grid2 size={1}>
              <Grid2 container spacing={2} justifyContent="center">
                <IconButton
                  variant="contained"
                  sx={{
                    background: "orange",
                    color: "#eee",
                    fontWeight: "bold",
                    border: "1px solid orange"
                  }}
                  fullWidth
                >
                  <SortByAlphaIcon fontSize="large" />
                </IconButton>
                <IconButton
                  variant="contained"
                  sx={{
                    background: "red",
                    color: "#eee",
                    fontWeight: "bold",
                    border: "1px solid snow"
                  }}
                  fullWidth
                >
                  <CheckCircleOutlineIcon fontSize="large" />
                </IconButton>
                <IconButton
                  variant="contained"
                  sx={{
                    background: "green",
                    color: "white",
                    fontWeight: "bold",
                    border: "1px solid snow"
                  }}
                  fullWidth
                >
                  <DeliveryDiningIcon fontSize="large" />
                </IconButton>
                <IconButton
                  variant="contained"
                  sx={{
                    background: "lightblue",
                    color: "darkblue",
                    fontWeight: "bold",
                    border: "1px solid orange"
                  }}
                  fullWidth
                >
                  <LocalMallIcon fontSize="large" />
                </IconButton>
                <IconButton
                  variant="contained"
                  sx={{
                    background: "chocolate",
                    color: "white",
                    fontWeight: "bold",
                    border: "1px solid snow"
                  }}
                  fullWidth
                >
                  <CloudDownloadIcon fontSize="large" />
                </IconButton>
              </Grid2>
            </Grid2>
            <Grid2 size={6}>
              <BalanceTable />
            </Grid2>
            <Grid2 size={3} sx={{ background: "snow" }}>
              <Grid2 size={12} sx={{ border: "1px solid #eee" }}>
                <Grid2
                  container
                  justifyContent="center"
                  sx={{ background: "#123456" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    สมาชิก
                  </Typography>
                </Grid2>
              </Grid2>
              <Grid2 size={12} sx={{ background: "darkblue", color: "white" }}>
                <Grid2 container justifyContent="space-between" padding={1}>
                  <Typography>นายนที</Typography>
                  <Typography>ภูวงษ</Typography>
                </Grid2>
                <Grid2 container justifyContent="space-between" padding={1}>
                  <Typography>ใช้งานล่าสุด</Typography>
                  <Typography>22/03/2025 12:30:22</Typography>
                </Grid2>
                <Grid2 container justifyContent="space-between" padding={1}>
                  <Typography>คะแนนสะสม</Typography>
                  <Typography>1000</Typography>
                </Grid2>
              </Grid2>
              <Divider />
              <Grid2 size={12} marginTop={1} sx={{ border: "1px solid blue" }}>
                <Grid2
                  container
                  justifyContent="space-between"
                  padding={1}
                  sx={{
                    background:
                      "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
                  }}
                >
                  <Typography fontWeight="bold">Item</Typography>
                  <Typography>1</Typography>
                </Grid2>
                <Grid2
                  container
                  justifyContent="space-between"
                  padding={1}
                  sx={{
                    background:
                      "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
                  }}
                >
                  <Typography fontWeight="bold">Total Amount</Typography>
                  <Typography>2,999.00</Typography>
                </Grid2>
                <Grid2
                  container
                  justifyContent="space-between"
                  padding={1}
                  sx={{
                    background:
                      "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
                  }}
                >
                  <Typography fontWeight="bold">Discount</Typography>
                  <Typography>299.00</Typography>
                </Grid2>
                <Grid2
                  container
                  justifyContent="space-between"
                  padding={1}
                  sx={{
                    background:
                      "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
                  }}
                >
                  <Typography fontWeight="bold">Service</Typography>
                  <Typography>100.00</Typography>
                </Grid2>
                <Divider />
                <Grid2
                  container
                  justifyContent="space-between"
                  padding={1}
                  sx={{
                    background:
                      "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    Amount Due
                  </Typography>
                  <Typography>3,999.00</Typography>
                </Grid2>
              </Grid2>
              <Grid2 size={12}>
                <Grid2
                  container
                  justifyContent="center"
                  sx={{ background: "chocolate" }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    9,999.00
                  </Typography>
                </Grid2>
              </Grid2>
            </Grid2>
            <Grid2 size={2}>
              <Grid2 container spacing={1}>
                <Button
                  variant="contained"
                  fullWidth
                  color="error"
                  sx={{ height: 100, fontSize: 22 }}
                  startIcon={<HourglassTopIcon fontSize="large" />}
                >
                  พักบิล/เปิดบิล
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  color="success"
                  sx={{ height: 100, fontSize: 22 }}
                  startIcon={<PageviewIcon fontSize="large" />}
                >
                  ค้นหาสินค้า
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  color="info"
                  sx={{ height: 100, fontSize: 22 }}
                  startIcon={<RememberMeIcon fontSize="large" />}
                >
                  ค้นหาสมาชิก
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  sx={{ height: 100, fontSize: 32 }}
                  startIcon={<LoyaltyIcon fontSize="large" />}
                >
                  โปรโมชั่น
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  color="warning"
                  sx={{ height: 100, fontSize: 22 }}
                  startIcon={<BlockIcon fontSize="large" />}
                >
                  ยกเลิกบิล
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

      <Footer />

      <ModalConfirm
        open={openLogout}
        setOpen={() => setOpenLogout(false)}
        onSubmit={confirmLogoutAlert}
        header="Confirm Logout"
        content="ยืนยันการออกจากระบบ ?"
      />
      <Modal
        open={openCopyPrint}
        onClose={() => handleCloseModal(() => setOpenCopyPrint(false))}
      >
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <RecieptCopyPrint setOpen={setOpenCopyPrint} socket={socket} />
        </Box>
      </Modal>
      <Modal
        open={openCashierStatus}
        onClose={() => handleCloseModal(() => setOpenCashierStatus(false))}
      >
        <Box sx={{ ...modalPinStyle, padding: "10px" }}>
          <CheckCashierStatus
            setOpen={setOpenCashierStatus}
            onClose={() => setOpenCashierStatus(false)}
          />
        </Box>
      </Modal>
      <Modal
        open={openRefundBill}
        onClose={() => handleCloseModal(() => setOpenRefundBill(false))}
      >
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <RefundBill setOpen={setOpenRefundBill} socket={socket} />
        </Box>
      </Modal>
      <Modal
        open={openMgrCashDrawer}
        onClose={() => handleCloseModal(() => setOpenMgrCashDrawer(false))}
      >
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <ManageCashDrawer setOpen={setOpenMgrCashDrawer} />
        </Box>
      </Modal>
      <Modal
        open={openDashboard}
        onClose={() => handleCloseModal(() => setOpenDashboard(false))}
      >
        <Box sx={{ ...modalStyle }}>
          <DashboardSetting
            setOpen={setOpenDashboard}
            openSetting={setPosSetting}
          />
        </Box>
      </Modal>
      {showClient && (
        <Snackbar
          open={showClient}
          autoHideDuration={10000}
          onClose={() => setShowClient(false)}
          anchorOrigin={{ vertical: "center", horizontal: "right" }}
        >
          <Alert
            sx={{ background: "orange" }}
            icon={<NotificationsActiveIcon fontSize="large" color="error" />}
            severity="success"
          >
            <Typography fontWeight="bold" fontSize={20}>
              ลูกค้า: {messageAlert}
            </Typography>
          </Alert>
        </Snackbar>
      )}
    </motion.div>
  )
}

export default RetailSalePage
