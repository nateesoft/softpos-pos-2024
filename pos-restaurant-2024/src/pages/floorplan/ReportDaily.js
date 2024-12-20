import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Divider, IconButton, Menu, Typography } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/ReceiptLong';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useNavigate } from 'react-router-dom';

const ReportDaily = (props) => {
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
        navigate("/reportDaily/" + data)
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <SummarizeIcon fontSize='large' sx={{ color: 'white' }} />
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
                <MenuItem onClick={()=>handleChange('table-on-action')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานโต๊ะค้างยังไม่ได้ชำระเงิน</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={()=>handleChange('terminal-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานยอดการเงินของเครื่อง</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('cashier-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานพนักงานขาย</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={()=>handleChange('department-group-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานการขายตามกลุ่มสินค้า</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('plu-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานการขายตามรหัสสินค้า</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('customer-per-hour-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานการขายตามช่วงเวลา</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('hourly-plu-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานการขายรายชั่วโมง</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={()=>handleChange('reciept-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานการพิมพ์ใบเสร็จรับเงิน</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('void-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานการ Void</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('credit-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานการรับชำระเงินด้วยบัตรเครดิต</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('top-sale-report')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานอันดับสินค้าขายดี</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={()=>handleChange('promotion-discount')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานส่วนลดโปรโมชั่น</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('special-cupon-discount')}>
                    <Box display="flex" justifyContent="center">
                        <ReceiptLongIcon sx={{ marginRight: "10px" }} />
                        <Typography variant='p'>รายงานส่วนลดตูปองพิเศษ</Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </>

    );
}

export default ReportDaily
