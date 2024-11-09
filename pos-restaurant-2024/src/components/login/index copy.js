import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid2'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'

import { handleEnter } from '../../util/EventLisener'
import { ModalInfo } from '../../util/AlertPopup'

const LoginPage = () => {
    const inputUsername = useRef(null)

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)

    const handleCloseModal = () => {
        // inputUsername.current.focus()
        setOpen(false)
        window.location.reload()
    }

    const loginProcess = () => {
        if (user === '9999' && password === '9999') {
            navigate("/floorplan");
        } else {
            setOpen(true)
        }
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Box sx={{ padding: "50px" }}>
                        <Box display="flex" justifyContent="center">
                            <Typography variant='h3'>E-POS</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography variant='h5'>POS for automating your business</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" sx={{ marginTop: "100px" }}>
                            <img src='/images/welcome.jpg' width="450" alt="" style={{ boxShadow: "5px 5px gray", borderRadius: "5px" }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Paper elevation={3} sx={{ borderRadius: "10px", margin: "75px", minWidth: "450px" }}>
                        <Box sx={{ padding: "20px", margin: "25px" }}>
                            <Box display="flex" justifyContent="center" component="form">
                                <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: "20px", marginTop: "20px" }}>เข้าสู่ระบบ</Typography>
                            </Box>
                            <form>
                                <Box sx={{ padding: '5px' }}>
                                    <Typography sx={{ color: "gray", marginBottom: "10px" }}>USERNAME</Typography>
                                    <TextField id='txtUser' ref={inputUsername} value={user} sx={{ borderRadius: "10px" }} autoFocus fullWidth onChange={e => setUser(e.target.value)} onKeyDown={(e) => handleEnter(e)}></TextField>
                                </Box>
                                <Box sx={{ padding: '5px' }}>
                                    <Typography sx={{ color: "gray", marginBottom: "10px" }}>PASSWORD</Typography>
                                    <TextField id='txtPassword' value={password} type="password" onChange={e => setPassword(e.target.value)} fullWidth onKeyDown={(e) => handleEnter(e)}></TextField>
                                </Box>
                                <Box sx={{ padding: '5px', marginTop: "20px" }}>
                                    <Button variant='contained' color='success' fullWidth onClick={loginProcess}>
                                        Login
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "60px", backgroundColor: "#eee", color: "#b3c0c8", fontSize: "14px" }}>
                            * Please use the credentials provided your administrators
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <ModalInfo 
                open={open} 
                setOpen={handleCloseModal} 
                header="Error Login" 
                content="ไม่สามารถ Login เข้าสู่ระบบได้ กรุณาตรวจสอบข้อมูลอีกครั้ง" />
        </>
    )
}

export default LoginPage
