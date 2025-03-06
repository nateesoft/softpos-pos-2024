import React from "react"
import { Alert, Snackbar } from "@mui/material"

const ShowNotification = ({
  showNoti,
  message,
  setShowNoti,
  alertType = "error",
  hide = 2000
}) => {
  return (
    <Snackbar
      open={showNoti}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={hide}
      onClose={() => setShowNoti(false)}
    >
      <Alert
        onClose={() => setShowNoti(false)}
        severity={alertType}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default ShowNotification
