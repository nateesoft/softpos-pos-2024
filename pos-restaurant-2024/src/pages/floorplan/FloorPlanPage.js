import React, { useState, useEffect, useCallback, useRef } from "react"
import { Background, BackgroundVariant, Controls, ReactFlow, ReactFlowProvider, useNodesState } from '@xyflow/react';
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal'
import { AppBar, Box, Button, IconButton, MenuItem, Toolbar } from "@mui/material";
import Splitscreen from '@mui/icons-material/Splitscreen'
import ManageAccounts from '@mui/icons-material/TableBar'
import ExitToApp from '@mui/icons-material/ExitToApp'
import PrintIcon from '@mui/icons-material/Print'
import RefundIcon from '@mui/icons-material/ReceiptLong';
import MoneyIcon from '@mui/icons-material/MonetizationOn'
import { motion } from 'framer-motion'
import Grid from '@mui/material/Grid2'
import axios from 'axios'

import '@xyflow/react/dist/style.css';

import RoundNode from "./nodes/RoundNode"
import SquareNode from "./nodes/SquareNode"
import LongNode from "./nodes/LongBarNode"
import TallNode from "./nodes/TallBarNode"

import { useKeyPress } from '../../util/PageListener'
import { ModalConfirm } from "../../util/AlertPopup";
import NumberPadLock from '../utils/NumberPadLock'
import PinLock from './PinLock'
import ManageCustTable from './ManageCustTable'
import RecieptCopyPrint from './RecieptCopyPrint'
import ManageCashDrawer from "./ManageCashDrawer";
import RefundBill from "./RefundBill";
import ResizeNode from "./nodes/ResizeNode";
import FloorSelect from "./FloorSelect";

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

const emptyTable = "Free Table"
const fullTable = "Full Table"
const instuctTable = "Instruct"
const notUseTable = "Not Use"
const reserveTable = "Reserve"

function FloorPlanPage() {
  const navigate = useNavigate();

  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)
  const [tableInfo, setTableInfo] = useState({})
  const [openTableSetup, setOpenTableSetup] = useState(false)

  const [openPin, setOpenPin] = useState(false)
  const [openMgrTable, setOpenMgrTable] = useState(false)
  const [openPinMgrTable, setOpenPinMgrTable] = useState(false)
  const [openCopyPrint, setOpenCopyPrint] = useState(false)
  const [openMgrCashDrawer, setOpenMgrCashDrawer] = useState(false)
  const [openRefundBill, setOpenRefundBill] = useState(false)

  const [openLogout, setOpenLogout] = useState(false)
  const [tableNo, setTableNo] = useState("")
  const [tableStatus, setTableStatus] = useState(emptyTable)

  const [selectFloor, setSelectFloor] = useState("STAND_ROOM")

  const keyPressed = useKeyPress('Escape');

  const confirmLogoutAlert = useCallback(() => {
    console.log('confirmLogoutAlert')
    axios.patch("/api/posuser/logout", { username: "9999" })
      .then((response) => {
        if (response.data.code === 200) {
          localStorage.removeItem('pos_login')
          navigate("/");
        } else {
          setOpenLogout(false)
        }
      })
  }, [setOpenLogout, navigate])

  const setupFloorPlan = () => {
    navigate("/table-setup");
  }

  const onNodeClick = (event, node) => {
    // axios.post("/api/tablefile/checkTableOpen", { tableNo: tableNumber })
    //   .then((response) => {
    //     if (response.data.code === 200) {
    //       const result = response.data.data
    //       if (result.length === 0) {
    //         alert('มีพนักงานกำลังใช้งานโต๊ะนี้อยู่ !!!(1)')
    //       } else {
            setTableNo("T-1")
            setTableStatus(tableStatus)
            setOpenPin(true)
      //     }
      //   } else {
      //     alert('มีพนักงานกำลังใช้งานโต๊ะนี้อยู่ !!!(2)')
      //   }
      // })
  }

  const handleSelect = (floor) => {
    setSelectFloor(floor)
    initialLoadFloorPlan(floor)
}

  const initialLoadFloorPlan = useCallback((floor) => {
    console.log('initialLoadFloorPlan:', floor)
    const flow = JSON.parse(localStorage.getItem(floor))
    if (flow) {
        setNodes(flow.nodes || [])
    } else {
        setNodes([])
    }
}, [setNodes])

  useEffect(() => {
    initialLoadFloorPlan(selectFloor)
  }, [])

  useEffect(() => {
    if (keyPressed) {
      setOpenLogout(true)
    }
  }, [keyPressed]);

  return (
    <motion.div
      style={{ backgroundColor: "#123456", padding: "10px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AppBar component="nav" sx={{ backgroundColor: "black", boxShadow: "5px 3px #aaa" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
          >
            <FloorSelect selectFloor={selectFloor} setSelectFloor={handleSelect} />
          </IconButton>

          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid size={12} display="flex" justifyContent="flex-end">
              <Grid container spacing={2}>
                
                <Button variant="contained" startIcon={<MoneyIcon />} onClick={() => setOpenMgrCashDrawer(true)}>นำเงินเข้า/ออกลิ้นชัก</Button>
                <Button variant="contained" startIcon={<RefundIcon />} onClick={() => setOpenRefundBill(true)}>ยกเลิกบิล (Refund Bill)</Button>
                <Button variant="contained" startIcon={<PrintIcon />} onClick={() => setOpenCopyPrint(true)}>พิมพ์สำเนาบิล</Button>
                <Button variant="contained" startIcon={<Splitscreen />} onClick={() => setOpenPinMgrTable(true)}>แยกโต๊ะ / รวมโต๊ะ</Button>
                <Button variant="contained" onClick={setupFloorPlan} startIcon={<ManageAccounts />}>จัดการโต๊ะ</Button>
                <Button variant="contained" color="error" onClick={() => setOpenLogout(true)} endIcon={<ExitToApp />}>Logout</Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
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
            onInit={setReactFlowInstance}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <Background variant={BackgroundVariant.Dots} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
      <Modal open={openPin} onClose={() => setOpenPin(false)}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <PinLock setOpenPin={setOpenPin} tableNo={tableNo} tableStatus={tableStatus} />
        </Box>
      </Modal>

      <Modal open={openMgrTable} onClose={() => setOpenMgrTable(false)}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <ManageCustTable setOpen={setOpenMgrTable} />
        </Box>
      </Modal>
      <Modal open={openPinMgrTable} onClose={() => setOpenPinMgrTable(false)}>
        <NumberPadLock
          close={() => setOpenPinMgrTable(false)}
          nextStep={() => setOpenMgrTable(true)} />
      </Modal>

      <Modal open={openCopyPrint} onClose={() => setOpenCopyPrint(false)}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <RecieptCopyPrint setOpen={setOpenCopyPrint} />
        </Box>
      </Modal>
      <Modal open={openMgrCashDrawer} onClose={() => setOpenMgrCashDrawer(false)}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <ManageCashDrawer setOpen={setOpenMgrCashDrawer} />
        </Box>
      </Modal>
      <Modal open={openRefundBill} onClose={() => setOpenRefundBill(false)}>
        <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
          <RefundBill setOpen={setOpenRefundBill} />
        </Box>
      </Modal>
      <ModalConfirm
        open={openLogout}
        setOpen={() => setOpenLogout(false)}
        onSubmit={confirmLogoutAlert}
        header="Confirm Logout"
        content="ยืนยันการออกจากระบบ ?" />
    </motion.div>
  )
}

export default FloorPlanPage
