import React from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TelephoneIcon from '@mui/icons-material/Phone'

const MemberInfo = () => {
    return (
        <Paper elevation={20} sx={{ padding: "10px", margin: "10px", background: "#555" }}>
            <Grid container spacing={2}>
                <Grid size={4} display="flex" justifyContent="center">
                    <img src="images/profile_crm.png" alt="" />
                </Grid>
                <Grid size={4} padding={1}>
                    <Typography variant='p' sx={{ color: "white", background: "purple", padding: "10px" }}>
                        ( ข้อมูลส่วนตัว )
                    </Typography>
                    <Box padding={1} sx={{borderBlock: "2px solid white"}}>
                        <Typography style={{ color: "white" }}>คุณสมชาย เก่งการเงิน</Typography>
                        <Typography style={{ color: "white" }}>วันเกิด 18/02/2000</Typography>
                        <Grid container spacing={1}>
                            <TelephoneIcon sx={{color: "yellow"}} />
                            <Typography style={{ color: "yellow" }}>Tel. 081-220-8090</Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={4} padding={1}>
                    <Typography variant='p' sx={{ color: "white", background: "green", padding: "10px" }}>
                        <u>คะแนนสะสม</u>
                    </Typography>
                    <Box padding={1} sx={{borderBlock: "2px solid yellow"}}>
                        <Typography style={{ color: "white" }}>วันที่สมัคร: 01/01/2016</Typography>
                        <Typography style={{ color: "white" }}>คะแนนสะสม 100 คะแนน</Typography>
                        <Typography style={{ color: "white" }}>ยอดซื้อสะสม 1,000 บาท</Typography>
                    </Box>
                </Grid>
            </Grid>

        </Paper>
    );
}

export default MemberInfo
