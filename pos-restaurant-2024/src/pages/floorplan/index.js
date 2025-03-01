import React, { memo, useState } from "react"
import { Box, Modal } from "@mui/material"

import PinLock from "./PinLock"
import FloorPlanPage from "./FloorPlanPage"

const modalPinStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
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

const FloorPlan = () => {
  const [openPin, setOpenPin] = useState(false)

  return (
    <>
      <FloorPlanPage setOpenPin={setOpenPin} />
      {openPin && <DisplayModal openPin={openPin} setOpenPin={setOpenPin} />}
    </>
  )
}

export default FloorPlan
