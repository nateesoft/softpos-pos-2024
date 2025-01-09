import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button, Divider, Menu, Modal, Typography } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/ReceiptLong';
import { useNavigate } from 'react-router-dom';
import moment from 'moment'

// load all modal reports
import TableOnAction from '../reports/dailySale/modal/TableOnAction'
import CashierReport from '../reports/dailySale/modal/CashierReport'
import CreditReport from '../reports/dailySale/modal/CreditReport'
import CustomerPerHourReport from '../reports/dailySale/modal/CustomerPerHourReport'
import DepartmentGroupReport from '../reports/dailySale/modal/DepartmentGroupReport'
import HourlyPluReport from '../reports/dailySale/modal/HourlyPluReport'
import PLUReport from '../reports/dailySale/modal/PLUReport'
import PromotionDiscount from '../reports/dailySale/modal/PromotionDiscount'
import RecieptReport from '../reports/dailySale/modal/RecieptReport'
import SpecialCuponDiscount from '../reports/dailySale/modal/SpecialCuponDiscount'
import TerminalReport from '../reports/dailySale/modal/TerminalReport'
import TopSaleReport from '../reports/dailySale/modal/TopSaleReport'
import VoidReport from '../reports/dailySale/modal/VoidReport'

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

const ReportDaily = (props) => {
    const navigate = useNavigate()

    // report modal
    const [openTableOnAction, setOpenTableOnAction] = useState(false)
    const [cashierReport, setCashierReport] = useState(false)
    const [creditReport, setCreditReport] = useState(false)
    const [customerPerHourReport, setCustomerPerHourReport] = useState(false)
    const [departmentGroupReport, setDepartmentGroupReport] = useState(false)
    const [hourlyPluReport, setHourlyPluReport] = useState(false)
    const [pluReport, setPluReport] = useState(false)
    const [promotionDiscountReport, setPromotionDiscountReport] = useState(false)
    const [receiptReport, setReceiptReport] = useState(false)
    const [specialCuponDiscountReport, setSpecialCuponDiscountReport] = useState(false)
    const [terminalReport, setTerminalReport] = useState(false)
    const [topSaleReport, setTopSaleReport] = useState(false)
    const [voidReport, setVoidReport] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (data) => {
        if (data === 'table-on-action') {
            setOpenTableOnAction(true)
        } else if(data==='terminal-report'){
            setTerminalReport(true)
        } else if(data==='cashier-report'){
            setCashierReport(true)
        } else if(data==='department-group-report'){
            setDepartmentGroupReport(true)
        } else if(data==='plu-report'){
            setPluReport(true)
        } else if(data==='customer-per-hour-report'){
            setCustomerPerHourReport(true)
        } else if(data==='hourly-plu-report'){
            setHourlyPluReport(true)
        } else if(data==='reciept-report'){
            setReceiptReport(true)
        } else if(data==='void-report'){
            setVoidReport(true)
        } else if(data==='credit-report'){
            setCreditReport(true)
        } else if(data==='top-sale-report'){
            setTopSaleReport(true)
        } else if(data==='promotion-discount'){
            setPromotionDiscountReport(true)
        } else if(data==='special-cupon-discount'){
            setSpecialCuponDiscountReport(true)
        }
    };

    return (
        <>
            <Button startIcon={<SummarizeIcon />} onClick={handleClick} sx={{ color: "snow" }}>
                <Typography variant='h6'>
                    รายงานการขาย
                </Typography>
            </Button>
            <Typography variant='h6'>
                    ( {moment().format('DD/MM/YYYY HH:mm:ss')} )
                </Typography>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleChange('table-on-action')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานโต๊ะค้างยังไม่ได้ชำระเงิน</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleChange('terminal-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานยอดการเงินของเครื่อง</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleChange('cashier-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานพนักงานขาย</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleChange('department-group-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานการขายตามกลุ่มสินค้า</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleChange('plu-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานการขายตามรหัสสินค้า</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleChange('customer-per-hour-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานการขายตามช่วงเวลา</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleChange('hourly-plu-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานการขายรายชั่วโมง</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleChange('reciept-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานการพิมพ์ใบเสร็จรับเงิน</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleChange('void-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานการ Void</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleChange('credit-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานการรับชำระเงินด้วยบัตรเครดิต</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleChange('top-sale-report')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานอันดับสินค้าขายดี</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleChange('promotion-discount')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานส่วนลดโปรโมชั่น</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleChange('special-cupon-discount')}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant='p'>รายงานส่วนลดคูปองพิเศษ</Typography>
                    </Box>
                </MenuItem>
            </Menu>
            <Modal open={openTableOnAction}>
                <Box sx={{ ...modalStyle }}>
                    <TableOnAction setOpen={setOpenTableOnAction} />
                </Box>
            </Modal>
            <Modal open={cashierReport}>
                <Box sx={{ ...modalStyle }}>
                    <CashierReport setOpen={setCashierReport} />
                </Box>
            </Modal>
            <Modal open={creditReport}>
                <Box sx={{ ...modalStyle }}>
                    <CreditReport setOpen={setCreditReport} />
                </Box>
            </Modal>
            <Modal open={customerPerHourReport}>
                <Box sx={{ ...modalStyle }}>
                    <CustomerPerHourReport setOpen={setCustomerPerHourReport} />
                </Box>
            </Modal>
            <Modal open={departmentGroupReport}>
                <Box sx={{ ...modalStyle }}>
                    <DepartmentGroupReport setOpen={setDepartmentGroupReport} />
                </Box>
            </Modal>
            <Modal open={hourlyPluReport}>
                <Box sx={{ ...modalStyle }}>
                    <HourlyPluReport setOpen={setHourlyPluReport} />
                </Box>
            </Modal>
            <Modal open={pluReport}>
                <Box sx={{ ...modalStyle }}>
                    <PLUReport setOpen={setPluReport} />
                </Box>
            </Modal>
            <Modal open={promotionDiscountReport}>
                <Box sx={{ ...modalStyle }}>
                    <PromotionDiscount setOpen={setPromotionDiscountReport} />
                </Box>
            </Modal>
            <Modal open={receiptReport}>
                <Box sx={{ ...modalStyle }}>
                    <RecieptReport setOpen={setReceiptReport} />
                </Box>
            </Modal>
            <Modal open={specialCuponDiscountReport}>
                <Box sx={{ ...modalStyle }}>
                    <SpecialCuponDiscount setOpen={setSpecialCuponDiscountReport} />
                </Box>
            </Modal>
            <Modal open={terminalReport}>
                <Box sx={{ ...modalStyle }}>
                    <TerminalReport setOpen={setTerminalReport} />
                </Box>
            </Modal>
            <Modal open={topSaleReport}>
                <Box sx={{ ...modalStyle }}>
                    <TopSaleReport setOpen={setTopSaleReport} />
                </Box>
            </Modal>
            <Modal open={voidReport}>
                <Box sx={{ ...modalStyle }}>
                    <VoidReport setOpen={setVoidReport} />
                </Box>
            </Modal>
        </>

    );
}

export default ReportDaily
