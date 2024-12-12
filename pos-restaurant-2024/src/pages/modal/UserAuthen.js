import React, { useState } from 'react'
import { Button, Grid2, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

import apiClient from '../../httpRequest'
import ShowNotification from '../utils/ShowNotification';

const UserAuthen = ({ setAuthenUser, handleShowConfirm, onClose }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [showNoti, setShowNoti] = useState(false)
    const [notiMessage, setNotiMessage] = useState("")
    const [alertType, setAlertType] = useState("info")
    const handleNotification = (message, type = "error") => {
        setNotiMessage(message)
        setAlertType(type)
        setShowNoti(true)
    }

    const handleCancel = () => {
        setUsername("")
        setPassword("")
        onClose()
    }

    const handleConfirm = () => {
        if (username && password) {
            apiClient.post(`/api/posuser/loginAuth`, { username, password })
                .then(response => {
                    if (response.status === 200 && response.data.status === 2000) {
                        const posUser = response.data.data
                        if (posUser.Sale2 === 'Y') {
                            setAuthenUser(response.data.data)
                            handleShowConfirm()
                            onClose()
                        } else {
                            setUsername("")
                            setPassword("")
                            handleNotification(`Username: ${posUser.UserName} ไม่มีสิทธิ์ทำรายการ !`)
                        }
                    } else {
                        handleNotification("ข้อมูล Authentication Login ไม่ถูกต้อง!")
                    }
                })
                .catch(err => {
                    handleNotification(err.message)
                })
        }
    }

    return (
        <Grid2 container justifyContent="center" alignItems="center" alignContent="center">
            <Grid2 container justifyContent="center" direction="column" alignItems="center">
                <Grid2 container spacing={1} padding={1}>
                    <Typography>User Authentication</Typography>
                </Grid2>
                <Grid2 container spacing={1} padding={1} direction="column">
                    <TextField variant='filled' label="Username" value={username} onChange={e => setUsername(e.target.value)} />
                    <TextField variant='filled' label="Password" value={password} onChange={e => setPassword(e.target.value)} type='password' />
                </Grid2>
                <Grid2 container spacing={1} padding={1}>
                    <Button variant='contained' color='error' onClick={handleCancel}>Cancel</Button>
                    <Button variant='contained' color='primary' onClick={handleConfirm} endIcon={<LoginIcon />}>Ok</Button>
                </Grid2>
            </Grid2>
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </Grid2>
    )
}

export default UserAuthen
