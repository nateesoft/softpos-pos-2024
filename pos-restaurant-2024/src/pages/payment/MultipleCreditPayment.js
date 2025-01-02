import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid2, IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import CreditChargeModal from './CreditChargeModal'
import { POSContext } from '../../AppContext';
import apiClient from '../../httpRequest';

const columns = [
    { id: 'action', align: 'center' },
    { id: 'MacNo', label: 'MacNo', minWidth: 50 },
    { id: 'CrCode', label: 'Code', minWidth: 50 },
    { id: 'CrNumber', label: 'Number', minWidth: 50 },
    { id: 'CrApprove', label: 'Approve', minWidth: 100 },
    { id: 'CrChargePercent', label: 'Charge', minWidth: 100, align: 'right' },
    { id: 'CrChargeAmount', label: 'Amount', minWidth: 100, align: 'right' },
    { id: 'CrCreditAmount', label: 'Credit', minWidth: 50, align: 'right' }
];

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

const floatFormat = data => data.toFixed(2)

const MultipleCreditPayment = ({ balanceAmount, onClose, setTotalCreditAmount, tableNo }) => {
    const { appData } = useContext(POSContext)
    const { macno } = appData

    const [balanceAmountForm, setBalanceAmountForm] = useState(Math.abs(balanceAmount))

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [creditList, setCreditList] = useState([])

    // credit info
    const [crCode, setCrCode] = useState("")
    const [creditNumber, setCreditNumber] = useState("")
    const [creditRef, setCreditRef] = useState("")
    const [creditChargePercent, setCreditChargePercent] = useState(0)
    const [creditChargeAmount, setCreditChargeAmount] = useState(0)
    const [creditAmount, setCreditAmount] = useState(0)

    // inline error
    const [crCodeError, setCrCodeError] = useState("")
    const [creditNumberError, setCreditNumberError] = useState("")
    const [creditRefError, setCreditRefError] = useState("")
    const [creditAmountError, setCreditAmountError] = useState("")

    const [openCreditFile, setOpenCreditFile] = useState(false)

    const handleShowOpenCreditFile = () => {
        setCreditAmount(0)
        setCrCode("")
        setCreditChargeAmount(0)
        setOpenCreditFile(true)
    }

    const handleCancelCredit = () => {
        setCrCodeError("")
        setCreditNumberError("")

        onClose()
    }

    const handleConfirmCreditModal = () => {
        if (creditList.length > 0) {
            // create temp creditfile
            apiClient.post(`/api/creditfile/temp`, { payload: creditList })
                .then(response => {
                    if (response.status === 200) {
                        const summaryCreditAmt = creditList.reduce((n, {CrCreditAmount}) => n + parseFloat(CrCreditAmount), 0)
                        setTotalCreditAmount(summaryCreditAmt)
                        onClose()
                    } else {
                        // handleNotification("พบข้อผิดพลาดในการบันทึกข้อมูลบัตรเดรดิต!")
                    }
                })
                .catch(err => {
                    // handleNotification(err.message)
                })
            
        }
    }

    const handleCreditInfoSelect = (cInfo) => {
        setCrCode(cInfo.crCode)
        setCreditNumber("")
        setCreditRef("")
        setCreditChargePercent(cInfo.crCharge)

        const chargeAmt = cInfo.crCharge * Math.abs(balanceAmountForm) / 100
        const creditAmt = chargeAmt + Math.abs(balanceAmountForm)
        setCreditChargeAmount(chargeAmt)
        setBalanceAmountForm(d => d + chargeAmt)
        setCreditAmount(creditAmt)
    }

    const addCreditListFile = () => {
        if (!crCode) {
            setCrCodeError('กรุณาระบุข้อมูล Credit Code !')
            return;
        }
        if (!creditNumber) {
            setCreditNumberError("กรุณาระบุข้อมูลเลขที่บัตรเครดิต !")
            return;
        }
        if (!creditRef) {
            setCreditRefError("กรุณาระบุข้อมูลเลขอนุมัติ !")
            return;
        }
        if (!creditAmount && creditAmount <= 0) {
            setCreditAmountError("จำนวนเงินบัตรเครดิตไม่ถูกต้อง !")
            return;
        }

        if (crCode && creditNumber && creditRef && creditAmount && creditAmount > 0) {
            const newCreditList = [...creditList];
            newCreditList.push({
                MacNo: macno,
                RefNo: tableNo,
                Terminal: macno,
                CrCode: crCode,
                CrNumber: creditNumber,
                CrApprove: creditRef,
                CrChargePercent: creditChargePercent,
                CrChargeAmount: creditChargeAmount,
                CrCreditAmount: creditAmount,
            })

            // clear form
            setCrCode("")
            setCreditNumber("")
            setCreditRef("")
            setCreditChargePercent(0)
            setCreditChargeAmount(0)
            setCreditAmount(0)
            setCreditList(newCreditList)
            setBalanceAmountForm(d => d - creditAmount)

            // clear validate
            setCrCodeError('')
            setCreditNumberError('')
            setCreditRefError('')
            setCreditAmountError('')
        }
    }

    const handleCreditAmountBalance = (amt) => {
        setCreditAmount(amt)
    }

    const removeCreditRow = (CrCode, amt) => {
        const newCreditList = creditList.filter(i => i.CrCode !== CrCode)
        setCreditList(newCreditList)
        const newBalanceAmount = newCreditList.reduce((n, {CrCreditAmount}) => n + parseFloat(CrCreditAmount), 0)
        setBalanceAmountForm(newBalanceAmount)
    }

    const loadCreditListData = () => {
        apiClient.get(`/api/creditfile/temp/${macno}`)
        .then(response => {
            if (response.status === 200) {
                const arrList = response.data.data
                setCreditList(arrList.map(item => {
                    return {
                        MacNo: item.Mac_No,
                        RefNo: item.RefNo,
                        Terminal: item.Ref_No,
                        CrCode: item.CrCode,
                        CrNumber: item.CrId,
                        CrApprove: item.CrApp,
                        CrChargePercent: item.CrCharge,
                        CrChargeAmount: item.CrChargeAmount,
                        CrCreditAmount: item.CrAmt,
                    }
                }))
            }
        })
        .catch(err => {
            // handleNotification(err.message)
        })
    }

    useEffect(()=> {
        loadCreditListData()
    }, [])

    return (
        <>
            <Grid2 container>
                <Grid2>
                    <Grid2 container spacing={1} padding={1} justifyContent="space-between">
                        <div>
                            <TextField 
                                required
                                error
                                disabled
                                sx={{ marginRight: "5px" }} 
                                variant="outlined" 
                                label="CrCode" 
                                value={crCode} 
                                helperText={crCodeError}
                                onChange={e => setCrCode(e.target.value)} />
                            <Button variant="contained" onClick={() => handleShowOpenCreditFile()}>...</Button>
                        </div>
                        <Typography sx={{color: "orange"}}>จำนวนเงินก่อนใส่ยอดเงินเดรดิต: {floatFormat(Math.abs(balanceAmount))}</Typography>
                    </Grid2>
                    <Grid2 container spacing={1} padding={1}>
                        <TextField 
                            required
                            error
                            variant="outlined" 
                            label="เลขที่บัตรเครดิต" 
                            value={creditNumber} 
                            onChange={e => setCreditNumber(e.target.value)} 
                            helperText={creditNumberError} />
                        <TextField 
                            required
                            error
                            variant="outlined" 
                            label="approve code" 
                            value={creditRef} 
                            onChange={e => setCreditRef(e.target.value)} 
                            helperText={creditRefError} />
                        <TextField variant="outlined" disabled type="number" label="Credit Charge (%)" value={creditChargePercent.toFixed(2)} />
                        <TextField variant="outlined" disabled type="number" label="Charge Amount" value={creditChargeAmount.toFixed(2)} />
                        <TextField variant="outlined" type="number" label="ยอดค้างชำระ" value={balanceAmountForm.toFixed(2)} disabled />
                        <TextField 
                            required
                            error
                            variant="outlined" 
                            type="number" 
                            label="จำนวนเงินที่ใส่เครดิต" 
                            value={creditAmount} 
                            onChange={e => handleCreditAmountBalance(e.target.value)} 
                            helperText={creditAmountError} />
                    </Grid2>
                </Grid2>
                <Grid2 container size={12} spacing={1} padding={1} justifyContent="space-between">
                    <Button variant='contained' color='success' onClick={addCreditListFile}>Add Credit</Button>
                    <Typography sx={{color: "green"}}>คงเหลือ: {floatFormat(balanceAmountForm)}</Typography>
                </Grid2>
                <Grid2>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns && columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {creditList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.CrCode}>
                                                {columns && columns.map((column) => {
                                                    const value = row[column.id];
                                                    if (column.id === 'action') {
                                                        return (
                                                            <TableCell>
                                                                <IconButton onClick={() => removeCreditRow(row.CrCode, (row.CrCreditAmount+row.CrChargeAmount))}>
                                                                    <DeleteOutlineIcon color='error' />
                                                                </IconButton>
                                                            </TableCell>
                                                        )
                                                    }
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid2>
            </Grid2>
            <Box sx={{ marginTop: "30px" }} textAlign="center">
                <Button variant="contained" sx={{ margin: "5px" }} color="error" startIcon={<CloseIcon />} onClick={handleCancelCredit}>ยกเลิก</Button>
                <Button variant="contained" sx={{ margin: "5px" }} disabled={creditList.length === 0} onClick={handleConfirmCreditModal} endIcon={<ConfirmIcon />}>ยืนยันข้อมูล</Button>
            </Box>
            <Modal open={openCreditFile} onClose={() => setOpenCreditFile(false)}>
                <Box sx={{ ...modalStyle }}>
                    <CreditChargeModal
                        setClose={() => setOpenCreditFile(false)}
                        setCreditInfo={handleCreditInfoSelect}
                    />
                </Box>
            </Modal>
        </>
    )
}

export default MultipleCreditPayment
