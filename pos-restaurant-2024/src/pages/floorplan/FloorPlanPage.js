import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext
} from "react"
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useNodesState
} from "@xyflow/react"
import { useNavigate } from "react-router-dom"
import Modal from "@mui/material/Modal"
import {
  Alert,
  AppBar,
  Box,
  Button,
  Grid2,
  IconButton,
  Snackbar,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material"
import ExitToApp from "@mui/icons-material/ExitToApp"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/LogoutOutlined"
import { motion } from "framer-motion"
import "@xyflow/react/dist/style.css"
import StoreIcon from "@mui/icons-material/Store"
import { useTranslation } from "react-i18next"
import moment from "moment"
import { io } from "socket.io-client"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"

import CheckTableStatus from "./checkTable"
import CheckCashierStatus from "./cashierStatus"
import RecieptCopyPrint from "./RecieptCopyPrint"
import RefundBill from "./refund/RefundBill"
import ManageCashDrawer from "./ManageCashDrawer"
import ManageMoveTable from "./ManageMoveTable"
import PosSettingsForm from "./PosSettingsForm"
import DashboardSetting from "./DashboardSetting"

import apiClient from "../../httpRequest"
import RoundNode from "./nodes/RoundNode"
import SquareNode from "./nodes/SquareNode"
import LongNode from "./nodes/LongBarNode"
import TallNode from "./nodes/TallBarNode"

import { useKeyPress } from "../ui-utils/PageListener"
import { ModalConfirm } from "../ui-utils/AlertPopup"

import ResizeNode from "./nodes/ResizeNode"
import FloorSelect from "./FloorSelect"
import OtherMenuSelect from "./OtherMenuSelect"
import { POSContext } from "../../AppContext"
import ReportSelect from "./ReportSelect"
import LanguageSettings from "./LanguageSettings"
import Footer from "../Footer"
import { useAlert } from "../../contexts/AlertContext"

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

const nodeTypes = {
  round: RoundNode,
  square: SquareNode,
  long: LongNode,
  tall: TallNode,
  resize: ResizeNode
}

const defaultViewport = { x: 400, y: 400, zoom: 0.5 }

const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKETIO_SERVER
// เชื่อมต่อกับ Socket.IO server
const socket = io(SOCKET_SERVER_URL, {
  autoConnect: false
})

const FloorPlanPage = ({ setOpenPin }) => {
  console.log("FloorPlanPage")
  const { t } = useTranslation("global")
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
  const { userLogin } = appData

  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes] = useNodesState([])
  const [openTableStatus, setOpenTableStatus] = useState(false)
  const [openCashierStatus, setOpenCashierStatus] = useState(false)
  const [openCopyPrint, setOpenCopyPrint] = useState(false)
  const [openRefundBill, setOpenRefundBill] = useState(false)
  const [openMgrCashDrawer, setOpenMgrCashDrawer] = useState(false)
  const [openMgrTable, setOpenMgrTable] = useState(false)
  const [openPosSetting, setPosSetting] = useState(false)
  const [openDashboard, setOpenDashboard] = useState(false)

  const [messageAlert, setMessageAlert] = useState("")
  const [showClient, setShowClient] = useState(false)

  const [openLogout, setOpenLogout] = useState(false)

  const [selectFloor, setSelectFloor] = useState("STAND_ROOM")
  const keyPressed = useKeyPress("Escape")

  const [currentDate, setCurrentDate] = useState(new Date())

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

  const onNodeClick = (event, node) => {
    const tableNo = node.data.label
    apiClient
      .post("/api/tablefile/checkTableOpen", { tableNo, Cashier: userLogin })
      .then(async (response) => {
        if (response.data.status === 2000) {
          let tableStatus = response.data.data.tableStatus
          const Cashier = response.data.data.Cashier
          if (tableStatus === "cashierInUse" && Cashier !== userLogin) {
            handleNotification(
              `มีพนักงาน ${Cashier} กำลังใช้งานโต๊ะนี้อยู่ !!!`,
              "warning"
            )
          } else {
            tableStatus = "available"
            setAppData({
              ...appData,
              tableInfo: {
                tableNo: tableNo,
                tableStatus: tableStatus
              }
            })
            setOpenPin(true)
          }
        } else {
          handleNotification("พบปัญหาในการเปิดโต๊ะ")
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  const handleSelect = (floor) => {
    setSelectFloor(floor)
    loadFloorPlan(floor)

    setAnchorEl(null)
  }

  const handleChange = (data) => {
    setAnchorEl(null)
    if (data === "CopyPrint") {
      setOpenCopyPrint(true)
    } else if (data === "RefundBill") {
      setOpenRefundBill(true)
    } else if (data === "CashDrawer") {
      setOpenMgrCashDrawer(true)
    } else if (data === "MgrTable") {
      setOpenMgrTable(true)
    } else if (data === "SetupTableFlorPlan") {
      navigate("/table-setup")
    } else if (data === "CheckTableStatus") {
      setOpenTableStatus(true)
    } else if (data === "CashierStatus") {
      setOpenCashierStatus(true)
    }
  }

  const handleCloseModal = (func) => {
    func()
  }

  const loadFloorPlan = useCallback(
    (floor) => {
      apiClient
        .get(`/api/floorplan-template/${floor}`)
        .then((response) => {
          const result = response.data
          if (result.status === 2000) {
            if (result.data != null) {
              const flow = result.data.template
              if (flow) {
                setNodes(flow.nodes || [])
              } else {
                setNodes([])
              }
            } else {
              setNodes([])
            }
          } else {
            setNodes([])
          }
        })
        .catch((err) => handleNotification(err.message))
    },
    [setNodes]
  )

  useEffect(() => {
    loadFloorPlan(selectFloor)
  }, [loadFloorPlan, selectFloor])

  useEffect(() => {
    if (keyPressed) {
      setOpenLogout(true)
    }
  }, [keyPressed])

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentDate(new Date())
  //   }, 1000)
  // }, [])

  useEffect(() => {
    socket.connect()

    // รับข้อความจาก server
    socket.on("message", (newMessage) => {
      console.log(newMessage)
    })
    socket.on("customerMessage", (newMessage) => {
      console.log(newMessage)
      setShowClient(true)
      setMessageAlert(newMessage)
    })

    socket.on("reply", (newMessage) => {
      console.log(newMessage)
    })

    socket.emit("message", "floor plan")

    // ทำความสะอาดการเชื่อมต่อเมื่อ component ถูกทำลาย
    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <motion.div
      style={{
        background: "radial-gradient(circle at top, #003, #000)",
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
                  <FloorSelect
                    selectFloor={selectFloor}
                    setSelectFloor={handleSelect}
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
                sx={{ color: "yellow", display: { xs: "none", md: "flex" } }}
              >
                {moment(currentDate).format("DD/MM/YYYY HH:mm:ss")}
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
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{
            height: "90vh"
          }}
        >
          <ReactFlow
            nodes={nodes}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            defaultViewport={defaultViewport}
            fitView
            minZoom={0.1}
            proOptions={{ hideAttribution: true }}
          >
            <Controls />
            <Background variant={BackgroundVariant.Dots} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
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
        open={openTableStatus}
        onClose={() => handleCloseModal(() => setOpenTableStatus(false))}
      >
        <Box sx={{ ...modalPinStyle, padding: "10px" }}>
          <CheckTableStatus setOpen={setOpenTableStatus} />
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
      <Modal open={openMgrTable}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <ManageMoveTable
            setOpen={setOpenMgrTable}
            onLoadFloorPlan={() => loadFloorPlan(selectFloor)}
          />
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
      <Modal open={openPosSetting} onClose={() => setPosSetting(false)}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <PosSettingsForm
            setOpen={setPosSetting}
            onLoadFloorPlan={() => loadFloorPlan(selectFloor)}
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

export default FloorPlanPage
