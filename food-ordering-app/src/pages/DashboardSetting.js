import React from "react"
import Box from "@mui/material/Box"
import { Button, Grid2 } from "@mui/material"
import FlatwareIcon from "@mui/icons-material/Flatware"

const panelStyle = {
  background: "radial-gradient(circle, #123456, #000)",
  borderRadius: "5px",
  padding: "10px",
  border: "1px solid gray",
  "&:hover": {
    background: "radial-gradient(circle, chocolate, #000)"
  }
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "16px",
  boxShadow: 24
}

const DashboardSetting = ({ setOpen, openSetting }) => {
  const handleCallFlatware = () => {
    console.log('handleCallFlatware')
    setOpen(false)
  }
  const handleCallCondiment = () => {
    console.log('handleCallCondiment')
    setOpen(false)
  }
  const handleCallPayment = () => {
    console.log('handleCallPayment')
    setOpen(false)
  }
  const handleCallWaiter = () => {
    console.log('handleCallWaiter')
    setOpen(false)
  }
  return (
    <Box
      sx={{
        ...modalStyle,
        padding: "10px",
        width: "350px",
        background: "none"
      }}
    >
      <Grid2
        container
        spacing={1}
        padding={1}
        margin={1}
        justifyContent="space-between"
      >
        <Grid2
          size={6}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <div align="center" onClick={handleCallFlatware}>
            <FlatwareIcon
              sx={{ color: "white", fontSize: "48px" }}
              fontSize="large"
            />
            <Button variant="text" sx={{ color: "white" }}>
              ขออุปกรณ์
            </Button>
          </div>
        </Grid2>
        <Grid2
          size={6}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <div align="center" onClick={handleCallCondiment}>
            <img src="/images/condiment.png" alt="" width={50} />
            <Button variant="text" sx={{ color: "white" }}>
              ขอเครื่องปรุง
            </Button>
          </div>
        </Grid2>
        <Grid2
          size={6}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <div align="center" onClick={handleCallPayment}>
            <img src="/images/atm-card.png" alt="" width={50} />
            <Button variant="text" sx={{ color: "white" }}>
              เรียกเก็บเงิน
            </Button>
          </div>
        </Grid2>
        <Grid2
          size={6}
          container
          direction="column"
          alignItems="center"
          sx={panelStyle}
        >
          <div align="center" onClick={handleCallWaiter}>
            <img src="/images/waiter.png" alt="" width={50} />
            <Button variant="text" sx={{ color: "white" }}>
              เรียกพนักงาน
            </Button>
          </div>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default DashboardSetting
