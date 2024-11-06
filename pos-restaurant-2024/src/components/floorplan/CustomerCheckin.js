import React, { useState } from 'react'
import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import CustomerDetail from './CustomerDetail';

const min = 1;
const max = 10;

const CustomerCheckin = ({ openTable, tableNo, status, closeModal }) => {
    const [custCount, setCustCount] = useState(1)
    const [manCount, setManCount] = useState(0)
    const [womanCount, setWomanCount] = useState(0)
    const [kidCount, setKidCount] = useState(0)
    const [oldCount, setOldCount] = useState(0)
    const [showError, setShowError] = useState(false)

    const [memberCode, setMemberCode] = useState("")
    const [reserveNo, setReserveNo] = useState("")

    const handleOpenTable = () => {
        if(status==="Free Table"){
            setShowError(false)
            openTable()
        }else {
            setShowError(true)
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid size={12} textAlign="center">
                <Typography variant='h5' sx={{ fontWeight: "bold", color: "#0030bb", textShadow: "2px 2px #eee" }}>Table: {tableNo}</Typography>
            </Grid>
            <Grid size={12} textAlign="center">
                <Typography variant='p' sx={{ fontWeight: "bold", color: "green" }}>Status: ({status})</Typography>
            </Grid>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Grid container spacing={2}>
                    <TextField
                        id="outlined-number"
                        label="ระบุจำนวนลูกค้า"
                        value={custCount}
                        onChange={(e) => {
                            var value = parseInt(e.target.value, 10);
                            if (value > max) value = max;
                            if (value < min) value = min;
                            setCustCount(value);
                        }}
                        type="number"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            }
                        }}
                        fullWidth
                    />
                </Grid>
                <CustomerDetail 
                    man={manCount} setMan={setManCount} 
                    woman={womanCount} setWoman={setWomanCount} 
                    kid={kidCount} setKid={setKidCount} 
                    old={oldCount} setOld={setOldCount}
                />
            </Box>
            <Grid container spacing={2}>
                <Grid size={12} textAlign="center">
                    <Typography variant='p'>เวลาเข้าใช้งาน: 04/11/2024</Typography>
                </Grid>
                <Grid size={12}>
                    <TextField
                        id="outlined-number"
                        label="เลขที่สมาชิก"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        value={memberCode}
                        onChange={e=>setMemberCode(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid size={12}>
                    <TextField
                        id="outlined-number"
                        label="เลขที่จอง"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        value={reserveNo}
                        onChange={e=>setReserveNo(e.target.value)}
                        fullWidth
                    />
                </Grid>
                {showError && <Alert severity="error" sx={{width: "100%"}}>สถานะโต๊ะไม่พร้อมใช้งาน</Alert>}
                <Grid size={12} textAlign="center">
                    <Button variant='contained' sx={{ width: "120px", fontSize: "16px", marginRight: "10px" }} color='error' onClick={closeModal}>Cancel</Button>
                    <Button variant='contained' sx={{ width: "120px", fontSize: "16px" }} onClick={handleOpenTable}>เปิดโต๊ะ</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomerCheckin