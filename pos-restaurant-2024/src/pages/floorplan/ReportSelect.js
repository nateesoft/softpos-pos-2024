import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Divider, IconButton, Menu, Typography } from '@mui/material';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SummarizeIcon from '@mui/icons-material/Summarize';
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
        if (data === 'saleReport') {
            viewReport("")
        } else if (data === 'saleReport1') {
            viewReport("1")
        } else if (data === 'saleReport2') {
            viewReport("2")
        } else if (data === 'saleReport3') {
            viewReport("3")
        } else if (data === 'saleReport4') {
            viewReport("4")
        } else if (data === 'saleReport5') {
            viewReport("5")
        } else if (data === 'print2kic') {
            navigate("/kitchen-monitor")
        }
    };

    const viewReport = (page) => {
        navigate("/sale-report" + page)
    }

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
                <MenuItem onClick={()=>handleChange('saleReport')}>
                    <Box display="flex" justifyContent="center">
                        <AssessmentIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>ภาพรวมการขาย</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={()=>handleChange('saleReport1')}>
                    <Box display="flex" justifyContent="center">
                        <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 1</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('saleReport2')}>
                    <Box display="flex" justifyContent="center">
                        <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 2</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('saleReport3')}>
                    <Box display="flex" justifyContent="center">
                        <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 3</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('saleReport4')}>
                    <Box display="flex" justifyContent="center">
                        <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 4</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('saleReport5')}>
                    <Box display="flex" justifyContent="center">
                        <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 5</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={()=>handleChange('print2kic')}>
                    <Box display="flex" justifyContent="center">
                        <MicrowaveIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานส่งครัว</Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </>

    );
}

export default ReportSelect
