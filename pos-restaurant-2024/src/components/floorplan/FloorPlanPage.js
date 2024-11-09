import React, { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal'
import { AppBar, Box, Button, IconButton, MenuItem, Toolbar, Typography } from "@mui/material";
import Splitscreen from '@mui/icons-material/Splitscreen'
import ManageAccounts from '@mui/icons-material/TableBar'
import ExitToApp from '@mui/icons-material/ExitToApp'
import { motion } from 'framer-motion'

import CustomerCheckin from "./CustomerCheckin";
import { useKeyPress } from '../../util/PageListener'
import { ModalConfirm } from "../../util/AlertPopup";

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

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  border: "1px solid #eee",
  boxShadow: 24
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
  const [open, setOpen] = useState(false)
  const [openLogout, setOpenLogout] = useState(false)
  const [tableNo, setTableNo] = useState("")
  const [tableStatus, setTableStatus] = useState("")

  const keyPressed = useKeyPress('Escape');

  const openTable = () => {
    navigate("/sale");
  }

  const handleClick = (tableNumber, status) => {
    setTableNo(tableNumber)
    setTableStatus(status)
    setOpen(true)
  }

  const confirmLogoutAlert = useCallback(() => {
    setOpenLogout(true)
  }, [setOpenLogout])

  const handleLogout = () => {
    navigate("/");
  }

  const setupFloorPlan = () => {
    navigate("/floorplan2");
  }

  useEffect(() => {
    console.log("Key event connected.")
    if (keyPressed) {
      confirmLogoutAlert()
    }
  }, [keyPressed, confirmLogoutAlert]);

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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Button variant="contained" sx={{ bgcolor: "#123499" }}>
              Floor: VIP Floor
            </Button>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button variant="contained" sx={{ marginRight: "10px" }} startIcon={<Splitscreen />}>แยกโต๊ะ / รวมโต๊ะ</Button>
            <Button variant="contained" onClick={setupFloorPlan} sx={{ marginRight: "10px" }} startIcon={<ManageAccounts />}>จัดการโต๊ะ</Button>
            <Button variant="contained" color="error" onClick={confirmLogoutAlert} endIcon={<ExitToApp />}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={bgImage}></div>
      <div style={tableCust}>
        <table border="0">
          <tr>
            <td>
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black", marginRight: "15px" }} onClick={() => handleClick("T-1", fullTable)}>T-1</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "green", border: "1px solid black", borderRadius: "2px", color: "white" }} onClick={() => handleClick("T-4", emptyTable)}>T-4</button>
            </td>
            <td>
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black" }} onClick={() => handleClick("T-5", fullTable)}>T-5</button>
            </td>
            <td>
              <button style={{ ...buttonPink, border: "1px solid black", borderRadius: "2px", color: "black" }} onClick={() => handleClick("T-6", fullTable)}>T-6</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px", backgroundColor: "white", border: "1px solid black", color: "black", borderRadius: "50%", fontSize: "24px" }} onClick={() => handleClick("R-1", reserveTable)}>R-1</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "blue", borderRadius: "2px", border: "1px solid black", color: "white" }} onClick={() => handleClick("T-8", notUseTable)}>T-8</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-9", fullTable)}>T-9</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-10", fullTable)}>T-10</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "red", borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-11", instuctTable)}>T-11</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-12", fullTable)}>T-12</button>
            </td>
            <td>
              <button style={{ width: "100px", height: "50px", backgroundColor: "orange", borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-13", instuctTable)}>T-13</button>
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
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-19", fullTable)}>T-19</button>
            </td>
            <td>
              <button style={{ ...buttonPink, borderRadius: "2px", border: "1px solid black", color: "black" }} onClick={() => handleClick("T-20", fullTable)}>T-20</button>
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
      <Modal open={open} onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...modalStyle, width: 450, padding: "10px" }}>
          <CustomerCheckin
            openTable={openTable}
            closeModal={() => setOpen(false)}
            tableNo={tableNo} status={tableStatus} />
        </Box>
      </Modal>
      <ModalConfirm
        open={openLogout}
        setOpen={() => setOpenLogout(false)}
        onSubmit={handleLogout}
        header="Confirm"
        content="ยืนยันการออกจากระบบ" />
    </motion.div>
  )
}

export default FloorPlanPage
