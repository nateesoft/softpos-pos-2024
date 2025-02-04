import React from "react"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import Grid2 from '@mui/material/Grid2'
import { Typography } from "@mui/material"

const MessageAlert = ({ open, onClose }) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={() => onClose()}>
        <Alert
          onClose={() => onClose()}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          <Grid2 container direction="column" textAlign="center">
            <Typography fontSize={16} fontWeight="bold">
              ส่งรายการเข้าครัวแล้ว
            </Typography>
            <Typography fontSize={12}>
              ^^ ร้านกำลังทำอาหารให้คุณ รอออ แป๊บบบ ^^
            </Typography>
          </Grid2>
        </Alert>
      </Snackbar>
    </div>
  )
}

export default MessageAlert
