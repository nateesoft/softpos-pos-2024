import React, { useState } from 'react'
import { Button, Grid2, TextField } from '@mui/material'

import apiClient from '../../httpRequest';
import { useAlert } from '../../contexts/AlertContext';

const Thermal = () => {
    const [printerIp, setPrinterIp] = useState("192.168.1.209")
    const [message, setMessage] = useState("")
    const { handleNotification } = useAlert()

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
        </div>
    )
}

export default Thermal
