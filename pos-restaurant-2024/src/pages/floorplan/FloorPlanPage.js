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
import { AppBar, Box, Button, Divider, Grid2, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from "@mui/material"
import ExitToApp from "@mui/icons-material/ExitToApp"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from "framer-motion"
import "@xyflow/react/dist/style.css"
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VipPeopleIcon from '@mui/icons-material/Hail';
import RefundIcon from "@mui/icons-material/ReceiptLong"
import RecieptCopyPrint from "./RecieptCopyPrint"
import RefundBill from "./refund/RefundBill"
import ManageCashDrawer from './ManageCashDrawer';
import NumberPadLock from '../utils/NumberPadLock';
import ManageCustTable from './ManageCustTable';

import apiClient from '../../httpRequest'
import RoundNode from "./nodes/RoundNode"
import SquareNode from "./nodes/SquareNode"
import LongNode from "./nodes/LongBarNode"
import TallNode from "./nodes/TallBarNode"

import { useKeyPress } from "../../util/PageListener"
import { ModalConfirm } from "../../util/AlertPopup"
import PinLock from "./PinLock"

import ResizeNode from "./nodes/ResizeNode"
import FloorSelect from "./FloorSelect"
import OtherMenuSelect from "./OtherMenuSelect"
import { POSContext } from "../../AppContext"
import ShowNotification from "../utils/ShowNotification"
import ReportSelect from "./ReportSelect"
import Footer from '../Footer'

const modalPinStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

const nodeTypes = {
  round: RoundNode,
  square: SquareNode,
  long: LongNode,
  tall: TallNode,
  resize: ResizeNode
}

function FloorPlanPage() {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { appData, setAppData } = useContext(POSContext)
  const { userLogin } = appData

  // const matches = useMediaQuery("(min-width:600px)")
  const iphonePro14max = useMediaQuery('(max-width:430px)');
  const reactFlowWrapper = useRef(null)

  const [nodes, setNodes, onNodesChange] = useNodesState([])

  const [openCopyPrint, setOpenCopyPrint] = useState(false)
  const [openRefundBill, setOpenRefundBill] = useState(false)
  const [openMgrCashDrawer, setOpenMgrCashDrawer] = useState(false)
  const [openPinMgrTable, setOpenPinMgrTable] = useState(false)
  const [openMgrTable, setOpenMgrTable] = useState(false)

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const [openPin, setOpenPin] = useState(false)
  const [openLogout, setOpenLogout] = useState(false)

  const [selectFloor, setSelectFloor] = useState("STAND_ROOM")
  const keyPressed = useKeyPress("Escape")

  const confirmLogoutAlert = useCallback(() => {
    apiClient
      .patch("/api/posuser/logout", { username: userLogin })
      .then((response) => {
        if (response.data.status === 2000) {
          setAppData({ ...appData, userLogin: "", posuser: null })
          localStorage.setItem("userLogin", "")
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
          // const Employ = response.data.data.Employ
          if (tableStatus === "cashierInUse" && Cashier !== userLogin) {
            setNotiMessage(`มีพนักงาน ${Cashier} กำลังใช้งานโต๊ะนี้อยู่ !!!`)
            setAlertType("warning")
            setShowNoti(true)
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

    setAnchorEl(null);
  }

  const handleChange = (data) => {
    setAnchorEl(null);
    if (data === 'CopyPrint') {
      setOpenCopyPrint(true)
    } else if (data === 'RefundBill') {
      setOpenRefundBill(true)
    } else if (data === 'CashDrawer') {
      setOpenMgrCashDrawer(true)
    } else if (data === 'MgrTable') {
      setOpenPinMgrTable(true)
    } else if (data === 'SetupTableFlorPlan') {
      navigate("/table-setup")
    }
  };

  const handleCloseModal = (func) => {
    func()
  }

  const loadFloorPlan = useCallback((floor) => {
    apiClient.get(`/api/floorplan-template/${floor}`)
      .then(response => {
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
      .catch(err => handleNotification(err.message))
  }, [setNodes])

  useEffect(() => {
    loadFloorPlan(selectFloor)
  }, [loadFloorPlan, selectFloor])

  useEffect(() => {
    if (keyPressed) {
      setOpenLogout(true)
    }
  }, [keyPressed])

  return (
    <motion.div
      style={{ backgroundColor: "#123456", padding: "10px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar component="static" sx={{ backgroundColor: "#123456", boxShadow: "5px 3px #aaa" }}>
          <Toolbar>
            <Grid2 container justifyContent="flex-start">
              {iphonePro14max === true && <div>
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleClick}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  handleClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={() => handleSelect('STAND_ROOM')}>
                    <Box display="flex" justifyContent="center">
                      <RestaurantIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>Normal Room</Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem onClick={() => handleSelect('VIP_ROOM')}>
                    <Box display="flex" justifyContent="center">
                      <VipPeopleIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>VIP Room</Typography>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => handleChange('RefundBill')}>
                    <Box display="flex" justifyContent="center">
                      <RefundIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>ยกเลิกบิล (Refund Bill)</Typography>
                    </Box>
                  </MenuItem>
                </Menu>
              </div>}
              {iphonePro14max === false && <div>
                <IconButton color="inherit" aria-label="open drawer" edge="start">
                  <FloorSelect selectFloor={selectFloor} setSelectFloor={handleSelect} />
                </IconButton>
                <IconButton color="inherit" aria-label="open drawer" edge="start">
                  <OtherMenuSelect
                    handleChange={handleChange}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    open={open}
                    anchorEl={anchorEl} />
                </IconButton>
                <IconButton color="inherit" aria-label="open drawer" edge="start">
                  <ReportSelect />
                </IconButton>
              </div>}
            </Grid2>
            <Grid2 container spacing={1} justifyContent="flex-end" alignItems="center" sx={{ flexGrow: 1 }}>
              <IconButton>
                <AccountCircleIcon sx={{ color: "snow" }} />
              </IconButton>
              <Typography>User: {userLogin}</Typography>
              <Button variant="contained" color="error" onClick={() => setOpenLogout(true)} endIcon={<ExitToApp />}>
                Logout
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
            onNodesChange={onNodesChange}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            fitView
          >
            <Controls />
            <Background variant={BackgroundVariant.Dots} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
      <Footer />
      <Modal open={openPin} onClose={() => setOpenPin(false)}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <PinLock setOpenPin={setOpenPin} />
        </Box>
      </Modal>
      <ModalConfirm
        open={openLogout}
        setOpen={() => setOpenLogout(false)}
        onSubmit={confirmLogoutAlert}
        header="Confirm Logout"
        content="ยืนยันการออกจากระบบ ?"
      />
      <Modal open={openCopyPrint} onClose={() => handleCloseModal(() => setOpenCopyPrint(false))}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <RecieptCopyPrint setOpen={setOpenCopyPrint} />
        </Box>
      </Modal>
      <Modal open={openRefundBill} onClose={() => handleCloseModal(() => setOpenRefundBill(false))}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <RefundBill setOpen={setOpenRefundBill} />
        </Box>
      </Modal>
      <Modal open={openMgrCashDrawer} onClose={() => handleCloseModal(() => setOpenMgrCashDrawer(false))}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <ManageCashDrawer setOpen={setOpenMgrCashDrawer} />
        </Box>
      </Modal>
      <Modal open={openPinMgrTable} onClose={() => handleCloseModal(() => setOpenPinMgrTable(false))}>
        <NumberPadLock
          close={() => handleCloseModal(() => setOpenPinMgrTable(false))}
          nextStep={() => setOpenMgrTable(true)}
        />
      </Modal>
      <Modal open={openMgrTable} onClose={() => handleCloseModal(() => setOpenMgrTable(false))}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <ManageCustTable setOpen={setOpenMgrTable} />
        </Box>
      </Modal>
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </motion.div>
  )
}

export default FloorPlanPage
