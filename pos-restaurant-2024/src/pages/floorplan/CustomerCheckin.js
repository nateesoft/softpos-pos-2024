import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import CloseButton from '@mui/icons-material/Close'
import OpenTableButton from '@mui/icons-material/MobileFriendly';
import Moment from 'react-moment';

import CustomerDetail from './CustomerDetail';
import { POSContext } from '../../AppContext';

const min = 1;
const max = 10;

const CustomerCheckin = (props) => {
    const { appData, setAppData } = useContext(POSContext)
    const { tableNo, tableStatus } = appData.tableInfo
    console.log(appData)

    const { setOpenPin } = props
    const navigate = useNavigate();

    const [customerName, setCustomerName] = useState("")
    const [custCount, setCustCount] = useState(1)
    const [orderType, setOrderType] = useState('E');

    // additional other customer count
    const [manCount, setManCount] = useState(0)
    const [womanCount, setWomanCount] = useState(0)
    const [kidCount, setKidCount] = useState(0)
    const [oldCount, setOldCount] = useState(0)

    const [showError, setShowError] = useState(false)
    const [showCustomerError, setShowCustomerError] = useState(false)

    const [memberCode, setMemberCode] = useState("")
    const [reserveNo, setReserveNo] = useState("")

    const handleChangeOrderType = (event, oType) => {
        setOrderType(oType);
    };

    const handleOpenTable = () => {
        if (tableStatus === "available") {
            if (custCount >= 0) {
                setShowError(false)
                setShowCustomerError(false)
                setAppData({...appData, tableInfo: {
                    ...appData.tableInfo,
                    customerCount: custCount,
                    customerName: customerName
                }})
                navigate(`/sale/${tableNo}`)
            } else {
                setShowCustomerError(true)
            }
        } else {
            setShowError(true)
        }
    }

    const handleCancel = () => {
        setOpenPin(false)
        setShowError(false)
        setShowCustomerError(false)
        navigate('/floorplan')
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={12} textAlign="center">
                    <Typography variant='h5' sx={{ fontWeight: "bold", color: "#0030bb", textShadow: "2px 2px #eee" }}>Table: {tableNo}</Typography>
                </Grid>
                <Grid size={12} textAlign="center">
                    <Typography variant='p' sx={{ fontWeight: "bold", color: "green" }}>Status: ({tableStatus})</Typography>
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
                        <Typography variant='p'>เวลาเข้าใช้งาน: <Moment format="DD/MM/YYYY HH:mm" date={new Date()} /></Typography>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            id="outlined-number"
                            label="ชื่อลูกค้า"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            value={customerName}
                            onChange={e => setCustomerName(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={6}>
                        <TextField
                            id="outlined-number"
                            label="เลขที่สมาชิก"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            value={memberCode}
                            onChange={e => setMemberCode(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={6}>
                        <TextField
                            id="outlined-number"
                            label="เลขที่จอง"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            value={reserveNo}
                            onChange={e => setReserveNo(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} padding={1}>
                        <Grid size={12}>
                            <Typography variant='p'>ประเภทอาหาร</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Box display="flex" justifyContent="center">
                                <ToggleButtonGroup
                                    color="primary"
                                    value={orderType}
                                    exclusive
                                    onChange={handleChangeOrderType}
                                    aria-label="Platform"
                                >
                                    <ToggleButton value="E">Dine In</ToggleButton>
                                    <ToggleButton value="T">Take Away</ToggleButton>
                                    <ToggleButton value="D">Delivery</ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                        </Grid>
                    </Grid>
                    {showError && <Alert severity="error" sx={{ width: "100%" }}>สถานะโต๊ะไม่พร้อมใช้งาน</Alert>}
                    {showCustomerError && <Alert severity="error" sx={{ width: "100%" }}>ข้อมูลลูกค้าไม่ถูกต้อง</Alert>}
                    <Grid size={12} textAlign="center">
                        <Button variant='contained' sx={{ width: "120px", fontSize: "16px", marginRight: "10px" }} color='error' onClick={handleCancel} startIcon={<CloseButton />}>Cancel</Button>
                        <Button variant='contained' sx={{ width: "120px", fontSize: "16px" }} onClick={handleOpenTable} startIcon={<OpenTableButton />}>เปิดโต๊ะ</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CustomerCheckin