import React, { useState, useEffect, useCallback } from "react"
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

import { useKeyPress } from '../../util/PageListener'
import { ModalConfirm } from "../../util/AlertPopup";
import NumberPadLock from '../utils/NumberPadLock'
import PinLock from './PinLock'
import ManageCustTable from './ManageCustTable'
import RecieptCopyPrint from './RecieptCopyPrint'
import ManageCashDrawer from "./ManageCashDrawer";
import RefundBill from "./RefundBill";

const bgImage = {
  backgroundImage: `url(/images/floorplan_bg.jpg)`,
  width: "100vw",
  height: "100vh",
  border: "1px solid",
  padding: "10px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

const tableCust = {
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  padding: "20px",
  textAlign: "center",
  top: "55%",
  left: "50%",
  width: "90%",
  height: "75vh"
}

const modalPinStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

const buttonPink = {
  width: "100px", height: "50px", backgroundColor: "pink"
}

const emptyTable = "Free Table"
const fullTable = "Full Table"
const instuctTable = "Instruct"
const notUseTable = "Not Use"
const reserveTable = "Reserve"

function FloorPlanPage() {
  const navigate = useNavigate();

  const [openPin, setOpenPin] = useState(false)
  const [openMgrTable, setOpenMgrTable] = useState(false)
  const [openPinMgrTable, setOpenPinMgrTable] = useState(false)
  const [openCopyPrint, setOpenCopyPrint] = useState(false)
  const [openMgrCashDrawer, setOpenMgrCashDrawer] = useState(false)
  const [openRefundBill, setOpenRefundBill] = useState(false)

  const [openLogout, setOpenLogout] = useState(false)
  const [tableNo, setTableNo] = useState("")
  const [tableStatus, setTableStatus] = useState("")

  const keyPressed = useKeyPress('Escape');

  const handleClick = (tableNumber, status) => {
    axios.post("/api/tablefile/checkTableOpen", { tableNo: tableNumber })
      .then((response) => {
        if (response.data.code === 200) {
          const result = response.data.data
          if (result.length === 0){
            alert('มีพนักงานกำลังใช้งานโต๊ะนี้อยู่ !!!(1)')
          } else {
            setTableNo(tableNumber)
            setTableStatus(status)
            setOpenPin(true)
          }
        } else {
          alert('มีพนักงานกำลังใช้งานโต๊ะนี้อยู่ !!!(2)')
        }
      })
  }

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
    navigate("/future-floorplan");
  }

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
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuItem />
          </IconButton>

          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid>
              <Button variant="contained" sx={{ bgcolor: "#123499" }}>
                Floor: VIP Floor
              </Button>
            </Grid>
            <Grid size={10} display="flex" justifyContent="flex-end">
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
      <div style={bgImage}></div>
      <div style={tableCust}>
        <table border="0">
          <tr>
            <td>
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black", marginRight: "15px" }} onClick={() => handleClick("T1", fullTable)}>T-1</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "green", border: "1px solid black", borderRadius: "2px", color: "white" }} onClick={() => handleClick("T4", emptyTable)}>T-4</button>
            </td>
            <td>
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black" }} onClick={() => handleClick("T5", fullTable)}>T-5</button>
            </td>
            <td>
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black" }} onClick={() => handleClick("T6", fullTable)}>T-6</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "white", border: "1px solid black", color: "black", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-1", reserveTable)}>R-1</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "blue", borderRadius: "2px", border: "1px solid black", color: "white" }} onClick={() => handleClick("T8", notUseTable)}>T-8</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T9", fullTable)}>T-9</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T10", fullTable)}>T-10</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "red", borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-11", instuctTable)}>T-11</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T12", fullTable)}>T-12</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "orange", borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T13", instuctTable)}>T-13</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "green", border: "1px solid black", color: "white", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-2", emptyTable)}>R-2</button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <button style={{ width: "350px", height: "50px", backgroundColor: "white", borderRadius: "2px", border: "1px solid black", color: "black", fontSize: "22px" }} onClick={() => handleClick("Bar-1", reserveTable)}>Bar-1</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T19", fullTable)}>T-19</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T20", fullTable)}>T-20</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "white", border: "1px solid black", color: "black", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-3", reserveTable)}>R-3</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid gray", color: "black" }} onClick={() => handleClick("T-22", fullTable)}>T-22</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid gray", color: "black" }} onClick={() => handleClick("T-23", fullTable)}>T-23</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "green", borderRadius: "2px", border: "1px solid gray", color: "white" }} onClick={() => handleClick("T-26", emptyTable)}>T-26</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "green", borderRadius: "2px", border: "1px solid gray", color: "white" }} onClick={() => handleClick("T-27", emptyTable)}>T-27</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "green", border: "1px solid gray", color: "white", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-4", emptyTable)}>R-4</button>
            </td>
          </tr>
        </table>
      </div>
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
