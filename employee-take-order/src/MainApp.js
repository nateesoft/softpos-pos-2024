import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { io } from "socket.io-client"

import "./App.css"

import GroupMenu from "./pages/GroupMenu"
import MenuDetail from "./pages/MenuDetail"
import BottomAppBar from "./pages/BottomAppBar"
import DashboardSetting from "./pages/DashboardSetting"
import HeaderAppBar from "./pages/HeaderAppBar"
import CartItems from "./pages/cart-items"
import BillItems from "./pages/bill-items"
import MessageAlert from "./pages/modal/MessageAlert"
import AllTable from "./pages/AllTable"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%"
}

const modalStyle2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  textAlign: "center",
  minWidth: "380px",
  height: "600px",
  padding: "10px"
}

const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKETIO_SERVER

// เชื่อมต่อกับ Socket.IO server
const socket = io(SOCKET_SERVER_URL, {
  autoConnect: false
})

const MainApp = ({ page }) => {
  const [openDashboard, setOpenDashboard] = useState(false)
  const [openBill, setOpenBill] = useState(false)
  const [openItemProgress, setOpenItemProgress] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  useEffect(() => {
    socket.connect()

    socket.on("message", (data) => {
      console.log(data)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div className="App">
      <HeaderAppBar
        setOpenDashboard={setOpenDashboard}
        setOpenBill={setOpenBill}
      />
      <header className="App-header">
        {page && page === "tables" && <AllTable />}
        {page && page === "home" && <GroupMenu />}
        {page && page === "detail" && <MenuDetail />}
      </header>
      <BottomAppBar setOpenItemProgress={setOpenItemProgress} />
      <Modal open={openDashboard} onClose={() => setOpenDashboard(false)}>
        <Box sx={{ ...modalStyle }}>
          <DashboardSetting
            tableNo="T9"
            setOpen={setOpenDashboard}
            socket={socket}
          />
        </Box>
      </Modal>
      <Modal open={openBill} onClose={() => setOpenBill(false)}>
        <Box sx={{ ...modalStyle2, overflow: "auto" }}>
          <BillItems
            onClose={() => setOpenBill(false)}
            items={[
              {
                id: 1,
                img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
                menuName: "ก๋วยเตี๋ยวหมู",
                options: [
                  { id: "101", label: "ใหญ่", price: 0 },
                  { id: "102", label: "น้ำ", price: 0 },
                  { id: "103", label: "เผ็ดปกติ", price: 0 }
                ],
                menuPrice: 60,
                qty: 1,
                orderBy: "นาย A",
                orderStatus: "ส่งครัวแล้ว",
                orderTime: "11:34"
              },
              {
                id: 2,
                img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                menuName: "มาม่าผัดขี้เมา",
                options: [{ id: "101", label: "เผ็ดมาก", price: 0 }],
                menuPrice: 120,
                qty: 1,
                orderBy: "นาย B",
                orderStatus: "เซิร์ฟแล้ว",
                orderTime: "11:34"
              },
              {
                id: 3,
                img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                menuName: "มาม่าผัดขี้เมา",
                options: [{ id: "101", label: "เผ็ดมาก", price: 0 }],
                menuPrice: 120,
                qty: 1,
                orderBy: "นาย B",
                orderStatus: "กำลังทำ",
                orderTime: "11:34"
              },
              {
                id: 4,
                img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                menuName: "มาม่าผัดขี้เมา",
                options: [{ id: "101", label: "เผ็ดมาก", price: 0 }],
                menuPrice: 120,
                qty: 1,
                orderBy: "นาย C",
                orderStatus: "ส่งครัวแล้ว",
                orderTime: "11:34"
              }
            ]}
          />
        </Box>
      </Modal>
      <Modal open={openItemProgress} onClose={() => setOpenItemProgress(false)}>
        <Box sx={{ ...modalStyle2, overflow: "auto" }}>
          <CartItems
            setOpenAlert={setOpenAlert}
            onClose={() => setOpenItemProgress(false)}
            items={[
              {
                id: 1,
                img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
                menuName: "ก๋วยเตี๋ยวหมู",
                options: [
                  { id: "101", label: "ใหญ่", price: 0 },
                  { id: "102", label: "น้ำ", price: 0 },
                  { id: "103", label: "เผ็ดปกติ", price: 0 }
                ],
                menuPrice: 60,
                qty: 1
              },
              {
                id: 2,
                img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                menuName: "มาม่าผัดขี้เมา",
                options: [{ id: "101", label: "เผ็ดมาก", price: 0 }],
                menuPrice: 120,
                qty: 1
              },
              {
                id: 3,
                img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                menuName: "มาม่าผัดขี้เมา",
                options: [{ id: "101", label: "เผ็ดมาก", price: 0 }],
                menuPrice: 120,
                qty: 1
              },
              {
                id: 4,
                img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                menuName: "มาม่าผัดขี้เมา",
                options: [{ id: "101", label: "เผ็ดมาก", price: 0 }],
                menuPrice: 120,
                qty: 1
              }
            ]}
          />
        </Box>
      </Modal>
      <MessageAlert open={openAlert} onClose={() => setOpenAlert(false)} />
    </div>
  )
}

export default MainApp
