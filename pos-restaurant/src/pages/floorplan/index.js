import React, { memo, useContext, useState } from "react"
import { Box, Modal } from "@mui/material"

import PinLock from "./PinLock"
import FloorPlanPage from "./FloorPlanPage"
import ListTable from "./modal/ListTable"
import { useAlert } from "../../contexts/AlertContext"
import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"

const modalPinStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

const modalStyle2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  border: "1px solid #eee",
  boxShadow: 24
}

const DisplayModal = memo(({ openPin, setOpenPin }) => {
  return (
    <Modal open={openPin} onClose={() => setOpenPin(false)}>
      <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
        <PinLock setOpenPin={setOpenPin} />
      </Box>
    </Modal>
  )
})

const DisplayListTable = memo(({ open, setOpen, TCode, setOpenPin }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={{ ...modalStyle2, width: "auto", padding: "10px" }}>
        <ListTable setOpen={setOpen} tableNo={TCode} setOpenPin={setOpenPin} />
      </Box>
    </Modal>
  )
})

const FloorPlan = () => {
  const { appData, setAppData } = useContext(POSContext)
  const { userLogin } = appData
  const { handleNotification } = useAlert()

  const [openPin, setOpenPin] = useState(false)
  const [openListTable, setOpenListTable] = useState(false)
  const [TCode, setTCode] = useState("")

  const onNodeClick = (event, node) => {
    const tableNo = node.data.label
    setTCode(tableNo)

    apiClient
      .post("/api/tablefile/checkTableOpen", { tableNo, Cashier: userLogin })
      .then(async (response) => {
        if (response.data.status === 2000) {
          const rrr = response.data.data
          let tableStatus = rrr.tableStatus
          const Cashier = rrr.Cashier
          if (tableStatus === "cashierInUse" && Cashier !== userLogin && Cashier !== null && Cashier !== 'null') {
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
            if (rrr.tableList.length > 1) {
              setOpenListTable(true)
            } else {
              setOpenPin(true)
            }
          }
        } else {
          handleNotification("พบปัญหาในการเปิดโต๊ะ")
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }

  return (
    <>
      <FloorPlanPage setOpenPin={setOpenPin} onNodeClick={onNodeClick} />
      {openPin && <DisplayModal openPin={openPin} setOpenPin={setOpenPin} />}
      {openListTable && (
        <DisplayListTable open={openListTable} setOpen={setOpenListTable} TCode={TCode} setOpenPin={setOpenPin} />
      )}
    </>
  )
}

export default FloorPlan
