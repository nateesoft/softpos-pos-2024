import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Grid2, TextField } from '@mui/material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "16px",
    border: "1px solid #eee",
    boxShadow: 24
}

export default function ManageCashDrawer({ setOpen }) {
    const [value, setValue] = useState(0);
    const [inCash, setInCash] = useState(0)
    const [outCash, setOutCash] = useState(0)
    const [outReason, setOutReason] = useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleConfirmIn = () => {
        setOpen(false)
      }
    const handleConfirmOut = () => {
        setOpen(false)
      }

    return (
        <Box sx={{ ...modalStyle, padding: "20px", width: "450px" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="นำเงินเข้าลิ้นชัก" {...a11yProps(0)} />
                    <Tab label="นำเงินออกจากลิ้นชัก" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TextField label="เงินสำรองทอน เข้าลิ้นชัก" type="number" value={inCash} onChange={e=>setInCash(e.target.value)} fullWidth />
                <Grid2 container spacing={2} margin={2} justifyContent="center">
                    <Button variant='contained' color='error' onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button variant='contained' color='info' onClick={handleConfirmIn}>Confirm</Button>
                </Grid2>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid2 container spacing={2}>
                    <TextField multiline rows={3} label="สาเหตุการนำเงินออกจากลิ้นชัก" value={outReason} onChange={e=>setOutReason(e.target.value)} fullWidth />
                    <TextField label="เงินสำรองทอน ออกจากลิ้นชัก" type="number" value={outCash} onChange={e=>setOutCash(e.target.value)} fullWidth />
                </Grid2>
                <Grid2 container spacing={2} margin={2} justifyContent="center">
                    <Button variant='contained' color='error' onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button variant='contained' color='info' onClick={handleConfirmOut}>Confirm</Button>
                </Grid2>
            </CustomTabPanel>
        </Box>
    );
}
