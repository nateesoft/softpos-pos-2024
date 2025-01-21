import React, { useState } from 'react'
import { Button, Grid2, TextField } from '@mui/material'

import apiClient from '../../httpRequest';
import ShowNotification from "../ui-utils/ShowNotification"

const ConnectThermalPrinter = () => {
    const [printerIp, setPrinterIp] = useState("192.168.1.209")
    const [message, setMessage] = useState("")

    const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

    const handlePrinter = () => {
        apiClient.post('/api/printer-thermal', {
            "printerIp": printerIp,
            "message": message
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                handleNotification(err.message)
            })
    }
    return (
        <div align="center" style={{ marginTop: "100px" }}>
            <div>Printer Testing</div>
            <Grid2 container spacing={2} padding={3} display="flex" justifyContent="space-evenly" direction="column">
                <TextField value={printerIp} label='Printer IP' onChange={e => setPrinterIp(e.target.value)} />
                <TextField value={message} label='Message' multiline rows={5} onChange={e => setMessage(e.target.value)} />
                <Button variant='contained' onClick={handlePrinter}>
                    Test
                </Button>
            </Grid2>
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </div>
    )
}

export default ConnectThermalPrinter
