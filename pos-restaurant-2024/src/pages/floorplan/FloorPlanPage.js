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
import { AppBar, Box, Button, Grid2, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material"
import ExitToApp from "@mui/icons-material/ExitToApp"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from "framer-motion"
import "@xyflow/react/dist/style.css"
import MenuIcon from '@mui/icons-material/Menu';

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
  const { appData, setAppData } = useContext(POSContext)
  const { userLogin } = appData

  const matches = useMediaQuery("(min-width:600px)")
  const iphonePro14max = useMediaQuery('(min-width:430px)');

  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")

  const [openPin, setOpenPin] = useState(false)

  const [openLogout, setOpenLogout] = useState(false)

  const [selectFloor, setSelectFloor] = useState("STAND_ROOM")
  const keyPressed = useKeyPress("Escape")

  const confirmLogoutAlert = useCallback(() => {
    console.log("confirmLogoutAlert")
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
        handleErrorMessage(error)
      })
  }, [setOpenLogout, navigate, appData, setAppData])

  const handleErrorMessage = (message) => {
    setNotiMessage(message)
    setAlertType("error")
    setShowNoti(true)
  }

  const onNodeClick = (event, node) => {
    console.log("onNodeClick:", node)
    const tableNo = node.data.label
    apiClient
      .post("/api/tablefile/checkTableOpen", { tableNo, Cashier: userLogin })
      .then(async (response) => {
        // console.log(response)
        if (response.data.status === 2000) {
          let tableStatus = response.data.data.tableStatus
          const Cashier = response.data.data.Cashier
          const Employ = response.data.data.Employ
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
          handleErrorMessage("พบปัญหาในการเปิดโต๊ะ")
        }
      })
      .catch((error) => {
        handleErrorMessage(error)
      })
  }

  const handleSelect = (floor) => {
    setSelectFloor(floor)
    loadFloorPlan(floor)
  }

  const loadFloorPlan = useCallback((floor) => {
    apiClient.get(`/api/floorplan-template/${floor}`)
      .then(response => {
        // console.log('loadFloorPlan:', response)
        const result = response.data
        if (result.code === 200) {
          if (result.data != null) {
            const flow = result.data.template
            console.log('loadFloorPlan:', flow)
            if (flow) {
              // const updFlow = flow.nodes.map(node => ({...node, bgColor: "red"}))
              // setNodes(updFlow || [])
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
      .catch(err => handleErrorMessage(err))
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
              <IconButton color="inherit" aria-label="open drawer" edge="start">
                <FloorSelect selectFloor={selectFloor} setSelectFloor={handleSelect} />
              </IconButton>
              {!iphonePro14max && <>
                <IconButton color="inherit" aria-label="open drawer" edge="start">
                  <OtherMenuSelect />
                </IconButton>
                <IconButton color="inherit" aria-label="open drawer" edge="start">
                  <ReportSelect />
                </IconButton>
              </>}
            </Grid2>
            <Grid2 container spacing={1} justifyContent="flex-end" alignItems="center" sx={{flexGrow: 1}}>
              <IconButton>
                <AccountCircleIcon sx={{color: "snow"}} />
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
            height: "100vh"
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
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </motion.div>
  )
}

export default FloorPlanPage
