import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider, Modal, Typography } from '@mui/material';

import MoneyIcon from "@mui/icons-material/MonetizationOn"
import Splitscreen from "@mui/icons-material/Splitscreen"
import PrintIcon from "@mui/icons-material/Print"
import RefundIcon from "@mui/icons-material/ReceiptLong"
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TableBar from "@mui/icons-material/TableBar"

import RecieptCopyPrint from "./RecieptCopyPrint"
import RefundBill from "./RefundBill"
import ManageCashDrawer from './ManageCashDrawer';
import NumberPadLock from '../utils/NumberPadLock';
import ManageCustTable from './ManageCustTable';
import { useNavigate } from 'react-router-dom';

const modalPinStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

const OtherMenuSelect = (props) => {
    const { sxStyle = { color: "white" }, variant = 'outlined' } = props
    const navigate = useNavigate()

    const [value, setValue] = useState("main")
    const [openCopyPrint, setOpenCopyPrint] = useState(false)
    const [openRefundBill, setOpenRefundBill] = useState(false)
    const [openMgrCashDrawer, setOpenMgrCashDrawer] = useState(false)
    const [openPinMgrTable, setOpenPinMgrTable] = useState(false)
    const [openMgrTable, setOpenMgrTable] = useState(false)

    const handleChange = (event) => {
        const data = event.target.value
        if (data === 'CopyPrint') {
            setOpenCopyPrint(true)
        } else if (data === 'RefundBill') {
            setOpenRefundBill(true)
        } else if (data === 'CashDrawer') {
            setOpenMgrCashDrawer(true)
        } else if (data === 'MgrTable') {
            setOpenPinMgrTable(true)
        } else if (data === 'SetupTableFlorPlan') {
            navigate("/table-setup")
        }
        setValue(data)
    };

    const handleCloseModal = (func) => {
        func()
        setValue("main")
    }

    return (
        <Box sx={{ border: "1px solid orange", borderRadius: "5px" }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    variant={variant}
                    sx={sxStyle}
                    onChange={handleChange}
                >
                    <MenuItem value="main">
                        <Box display="flex" justifyContent="center">
                            <SettingsSuggestIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>ข้อมูลระบบ</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem value="CashDrawer">
                        <Box display="flex" justifyContent="center">
                            <MoneyIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>นำเงินเข้า/ออกลิ้นชัก</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem value="RefundBill">
                        <Box display="flex" justifyContent="center">
                            <RefundIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>ยกเลิกบิล (Refund Bill)</Typography>
                        </Box>
                    </MenuItem>
                    <MenuItem value="CopyPrint">
                        <Box display="flex" justifyContent="center">
                            <PrintIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>พิมพ์สำเนาบิล</Typography>
                        </Box>
                    </MenuItem>
                    <MenuItem value="MgrTable">
                        <Box display="flex" justifyContent="center">
                            <Splitscreen sx={{ marginRight: "10px" }} /> <Typography variant='p'>แยกโต๊ะ / รวมโต๊ะ</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem value="SetupTableFlorPlan">
                        <Box display="flex" justifyContent="center">
                            <TableBar sx={{ marginRight: "10px" }} /> <Typography variant='p'>จัดการโต๊ะ</Typography>
                        </Box>
                    </MenuItem>
                </Select>
            </FormControl>

            <Modal open={openCopyPrint} onClose={() => handleCloseModal(() => setOpenCopyPrint(false))}>
                <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
                    <RecieptCopyPrint setOpen={setOpenCopyPrint} />
                </Box>
            </Modal>
            <Modal open={openRefundBill} onClose={() => handleCloseModal(() => setOpenRefundBill(false))}>
                <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
                    <RefundBill setOpen={setOpenRefundBill} />
                </Box>
            </Modal>
            <Modal open={openMgrCashDrawer} onClose={() => handleCloseModal(() => setOpenMgrCashDrawer(false))}>
                <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
                    <ManageCashDrawer setOpen={setOpenMgrCashDrawer} />
                </Box>
            </Modal>
            <Modal open={openPinMgrTable} onClose={() => handleCloseModal(() => setOpenPinMgrTable(false))}>
                <NumberPadLock
                    close={() => handleCloseModal(() => setOpenPinMgrTable(false))}
                    nextStep={() => setOpenMgrTable(true)}
                />
            </Modal>
            <Modal open={openMgrTable} onClose={() => handleCloseModal(() => setOpenMgrTable(false))}>
                <Box sx={{ ...modalPinStyle, width: 450, padding: "10px" }}>
                    <ManageCustTable setOpen={setOpenMgrTable} />
                </Box>
            </Modal>
        </Box>
    );
}

export default OtherMenuSelect
