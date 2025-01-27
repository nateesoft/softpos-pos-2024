import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Menu, Typography } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

import { useNavigate } from 'react-router-dom';

const ReportSelect = (props) => {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (data) => {
        if (data === 'print2kic') {
            navigate("/kitchen-monitor")
        } else if(data==='overview-report'){
            navigate('/reportDaily/overview')
        }
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <AssessmentIcon fontSize='large' sx={{ color: 'white' }} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=>handleChange('overview-report')}>
                    <Box display="flex" justifyContent="center">
                        <SpaceDashboardIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>Report Dashboard</Typography>
                    </Box>
                </MenuItem>
                {/* <MenuItem onClick={()=>handleChange('print2kic')}>
                    <Box display="flex" justifyContent="center">
                        <MicrowaveIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานส่งครัว</Typography>
                    </Box>
                </MenuItem> */}
            </Menu>
        </>

    );
}

export default ReportSelect
