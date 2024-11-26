import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Checkbox, Modal, Paper, TextField, Typography } from "@mui/material";
import ArrowBack from '@mui/icons-material/ArrowBack'
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid2'
import DiscountIcon from '@mui/icons-material/Discount';
import AddPaymentMethodIcon from '@mui/icons-material/AddBoxOutlined';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"
import { POSContext } from "../../AppContext";

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${Math.round(num).toFixed(2)}`;
}

function subtotal(items) {
    return items.map(({ R_Price }) => R_Price).reduce((sum, i) => sum + i, 0);
}

const normalButton = { bgcolor: "#123456", color: "white", fontWeight: "bold", fontSize: "36px", borderRadius: "10px" }
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

function PaymentForm({ open, close, orderList, tableNo, handleNotification }) {
    const { appData } = useContext(POSContext)
    const { macno } = appData

    const invoiceSubtotal = subtotal(orderList);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    const [paymentAmount, setPaymentAmount] = useState(0)
    const [discountAmount, setDiscountAmount] = useState(0)
    const [balanceAmount, setBalanceAmount] = useState(0)
    const [tonAmount, setTonAmount] = useState(0)

    const [cashEnable, setCashEnable] = useState(true)
    const [cashAmount, setCashAmount] = useState(0)

    const [crCode, setCrCode] = useState("")
    const [creditEnable, setCreditEnable] = useState(true)
    const [creditNumber, setCreditNumber] = useState("")
    const [creditRef, setCreditRef] = useState("")
    const [creditChargePercent, setCreditChargePercent] = useState(0)
    const [creditAmount, setCreditAmount] = useState(0)

    const [transferEnable, setTransferEnable] = useState(true)
    const [transferAmount, setTransferAmount] = useState(0)
    const [transferAccountNo, setTransferAccountNo] = useState("")
    const [transferAccount, setTransferAccount] = useState("")

    const [openCreditInfo, setOpenCreditInfo] = useState(false)
    const [openTransferInfo, setOpenTransferInfo] = useState(false)

    const navigate = useNavigate();
    const handleBackPage = () => {
        navigate(`/sale/${tableNo}`);
    }

    const handleCashEnabled = () => {
        if (!cashEnable) {
            setCashAmount(0)
        }
        setCashEnable(!cashEnable)
    }
    const handleCreditEnabled = () => {
        if (!creditEnable) {
            setCreditAmount(0)
        }
        if (creditEnable) {
            setOpenCreditInfo(true)
        }
        setCreditEnable(!creditEnable)
    }
    const handleTransferEnabled = () => {
        if (!transferEnable) {
            setTransferAmount(0)
        }
        if (transferEnable) {
            setOpenTransferInfo(true)
        }
        setTransferEnable(!transferEnable)
    }

    const handleAdd = (addMoney) => {
        if (!cashEnable) {
            setCashAmount(cash => cash + addMoney)
            totalAmount()
        }
    }
    const handleConcat = (addMoney) => {
        if (!cashEnable) {
            setCashAmount(cash => parseFloat("" + cash + addMoney))
        }
    }

    const totalAmount = useCallback(() => {
        const cc = cashAmount ? parseFloat(cashAmount) : 0
        const cd = creditAmount ? parseFloat(creditAmount) : 0
        const ta = transferAmount ? parseFloat(transferAmount) : 0
        const toalNetAmt = parseFloat(Math.round(invoiceTotal))
        const paymentAmt = parseFloat(cc + cd + ta)
        const discountAmt = 0
        const balanceAmt = parseFloat((paymentAmt - discountAmt) - toalNetAmt)
        setPaymentAmount(paymentAmt)
        setDiscountAmount(discountAmt)
        if (balanceAmt < 0) {
            setBalanceAmount(balanceAmt)
            setTonAmount(0)
        } else {
            setTonAmount(balanceAmt)
            setBalanceAmount(0)
        }
    }, [cashAmount, creditAmount, transferAmount, invoiceTotal])

    const handleClear = () => {
        setCashAmount(0)
        totalAmount()
    }

    const handleConfirmPayment = () => {
        if (balanceAmount >= 0) {
            // update billno
            axios.post(`/api/billno/${tableNo}`, { 
                macno, 
                orderList,
                cashAmount,
                creditAmount,
                transferAmount,
                discountAmount,
                tonAmount,
                paymentAmount,
                invoiceTotal
            })
                .then(response => {
                    // console.log('handleConfirmPayment:', response)
                    open()
                })
                .catch(err => {
                    handleNotification(err)
                })
            console.log(tableNo, orderList)
        } else {
            handleNotification("ข้อมูลรับชำระยังไม่ถูกต้อง!")
        }
    }

    useEffect(() => {
        console.log('useEffect PaymentForm')
        totalAmount()
    }, [totalAmount])

    return (
        <Grid container spacing={2} display="flex" direction="column" sx={{ padding: "10px" }}>
            <Grid size={12}>
                <Box display="flex" sx={{ padding: "20px", backgroundColor: "salmon", border: "2px solid gray", borderRadius: "10px" }} justifyContent="space-between">
                    <Typography variant="h3" sx={{ fontWeight: "bold", color: "#444" }}>TOTAL</Typography>
                    <Typography variant="h3" sx={{ marginRight: "20px", fontSize: "72px", textShadow: "3px 3px snow", fontWeight: "bold" }}>{ccyFormat(invoiceTotal)}</Typography>
                </Box>
            </Grid>
            <Grid size={12}>
                <Grid container spacing={2} display="flex" direction="row">
                    <Grid size={6}>
                        <Paper elevation={3} sx={{ padding: "10px" }}>
                            <Box display="flex" justifyContent="space-between" margin={2}>
                                <img width={60} src={"/images/payment/cash.png"} alt="" style={{ marginRight: "20px" }} />
                                <TextField
                                    type="number"
                                    value={cashAmount}
                                    onChange={e => setCashAmount(e.target.value)}
                                    onKeyUp={totalAmount}
                                    id="txtCashAmount"
                                    label="ชำระด้วยเงินสด"
                                    disabled={cashEnable}
                                    inputProps={{ min: 0, style: { textAlign: "right" } }} />
                                <Checkbox onChange={handleCashEnabled} icon={<AddPaymentMethodIcon fontSize="large" />} />
                            </Box>
                            <Box display="flex" justifyContent="space-between" margin={2}>
                                <img width={60} src={"/images/payment/credit-card.png"} alt="" style={{ marginRight: "20px" }} />
                                <TextField
                                    type="number"
                                    value={creditAmount}
                                    onChange={e => setCreditAmount(e.target.value)}
                                    onKeyUp={totalAmount}
                                    id="txtCreditAmount"
                                    label="ชำระด้วยบัตรเครดิต"
                                    disabled={creditEnable}
                                    inputProps={{ min: 0, style: { textAlign: "right" } }} />
                                <Checkbox onChange={handleCreditEnabled} icon={<AddPaymentMethodIcon fontSize="large" />} />
                            </Box>
                            <Box display="flex" justifyContent="space-between" margin={2}>
                                <img width={55} src={"/images/payment/banking_money.png"} alt="" style={{ marginRight: "20px" }} />
                                <TextField
                                    type="number"
                                    value={transferAmount}
                                    onChange={e => setTransferAmount(e.target.value)}
                                    id="txtTransferAmount"
                                    label="เงินโอน"
                                    disabled={transferEnable}
                                    inputProps={{ min: 0, style: { textAlign: "right" } }} />
                                <Checkbox onChange={handleTransferEnabled} icon={<AddPaymentMethodIcon fontSize="large" />} />
                            </Box>
                            <Box display="flex" justifyContent="flex-end" margin={2}>
                                <TextField
                                    variant="filled"
                                    label="ยอดรับชำระทั้งหมด"
                                    type="number"
                                    value={paymentAmount}
                                    inputProps={{ min: 0, style: { textAlign: "right" } }}
                                    fullWidth
                                    disabled />
                            </Box>
                            <Grid container spacing={2} margin={2} display="flex" justifyContent="center">
                                <Button variant="outlined" fullWidth startIcon={<DiscountIcon />}>ให้ส่วนลดเพิ่ม</Button>
                            </Grid>
                            <Box display="flex" justifyContent="flex-end" margin={2}>
                                <TextField
                                    variant="filled"
                                    label="ส่วนลด"
                                    type="number"
                                    value={discountAmount}
                                    inputProps={{ min: 0, style: { textAlign: "right" } }}
                                    fullWidth
                                    disabled />
                            </Box>
                            <Box display="flex" justifyContent="flex-end" margin={2}>
                                <TextField
                                    variant="filled"
                                    label="ค้างชำระ"
                                    type="number"
                                    value={balanceAmount}
                                    inputProps={{ min: 0, style: { textAlign: "right" } }}
                                    fullWidth
                                    disabled />
                            </Box>
                            <Box display="flex" justifyContent="flex-end" margin={2}>
                                <TextField
                                    variant="filled"
                                    label="เงินทอน"
                                    type="number"
                                    value={tonAmount}
                                    inputProps={{ min: 0, style: { textAlign: "right", fontSize: "48px", fontWeight: "bold" } }}
                                    fullWidth
                                    disabled />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid size={6}>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <table width="100%">
                                    <tr>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(7)}>7</Button></td>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(8)}>8</Button></td>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(9)}>9</Button></td>
                                        <td><Button variant="contained" sx={{ ...normalButton, bgcolor: "yellow", color: "black" }} fullWidth>+</Button></td>
                                    </tr>
                                </table>
                                <table width="100%">
                                    <tr>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(4)}>4</Button></td>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(5)}>5</Button></td>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(6)}>6</Button></td>
                                        <td><Button variant="contained" sx={{ ...normalButton, bgcolor: "red", color: "black" }} fullWidth>-</Button></td>
                                    </tr>
                                </table>
                                <table width="100%">
                                    <tr>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(1)}>1</Button></td>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(2)}>2</Button></td>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(3)}>3</Button></td>
                                        <td><Button variant="contained" sx={{ ...normalButton, bgcolor: "orange", color: "black" }} fullWidth>x</Button></td>
                                    </tr>
                                </table>
                                <table width="100%">
                                    <tr>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat(0)}>0</Button></td>
                                        <td><Button variant="contained" sx={normalButton} fullWidth onClick={() => handleConcat('00')}>00</Button></td>
                                        <td colSpan={2}><Button variant="contained" sx={{ ...normalButton, bgcolor: "green", color: "white" }} fullWidth onClick={handleClear}>clear</Button></td>
                                    </tr>
                                </table>
                            </Grid>
                            <Grid size={12}>
                                <Grid container spacing={2}>
                                    <Grid size={6}>
                                        <img src="/images/payment/m1000.png" width={160} style={{ border: "1px solid gray", borderRadius: "2px", boxShadow: "1px 2px" }} onClick={() => handleAdd(1000)} alt="" />
                                    </Grid>
                                    <Grid size={6}>
                                        <img src="/images/payment/m500.png" width={160} style={{ border: "1px solid gray", borderRadius: "2px", boxShadow: "1px 2px" }} onClick={() => handleAdd(500)} alt="" />
                                    </Grid>
                                    <Grid size={6}>
                                        <img src="/images/payment/m100.png" width={160} style={{ border: "1px solid gray", borderRadius: "2px", boxShadow: "1px 2px" }} onClick={() => handleAdd(100)} alt="" />
                                    </Grid>
                                    <Grid size={6}>
                                        <img src="/images/payment/m50.png" width={160} style={{ border: "1px solid gray", borderRadius: "2px", boxShadow: "1px 2px" }} onClick={() => handleAdd(50)} alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12}>
                                <Box sx={{ marginTop: "30px" }} textAlign="center">
                                    <Button variant="contained" sx={{ margin: "5px" }} color="primary" startIcon={<ArrowBack />} onClick={handleBackPage}>ย้อนกลับ</Button>
                                    <Button variant="contained" sx={{ margin: "5px" }} color="success" onClick={handleConfirmPayment} disabled={balanceAmount < 0} endIcon={<ConfirmIcon />}>ยืนยันชำระเงิน</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Modal open={openCreditInfo} onClose={() => setOpenCreditInfo(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle, width: "350px", padding: "5px" }}>
                    <Grid container spacing={2} padding={2} justifyContent="center" direction="column">
                        <TextField variant="outlined" label="CrCode" value={crCode} onChange={e => setCrCode(e.target.value)} />
                        <TextField variant="outlined" label="เลขที่บัตรเครดิต" value={creditNumber} onChange={e => setCreditNumber(e.target.value)} />
                        <TextField variant="outlined" label="approve code" value={creditRef} onChange={e => setCreditRef(e.target.value)} />
                        <TextField variant="outlined" disabled type="number" label="Credit Charge" value={creditChargePercent} onChange={e => setCreditChargePercent(e.target.value)} />
                        <TextField variant="outlined" type="number" label="จำนวนเงินที่ใส่เครดิต" value={creditAmount} onChange={e => setCreditAmount(e.target.value)} />
                    </Grid>
                    <Box sx={{ marginTop: "30px" }} textAlign="center">
                        <Button variant="contained" sx={{ margin: "5px" }} color="error" startIcon={<CloseIcon />} onClick={() => setOpenCreditInfo(false)}>ยกเลิก</Button>
                        <Button variant="contained" sx={{ margin: "5px" }} onClick={() => setOpenCreditInfo(false)} endIcon={<ConfirmIcon />}>ยืนยันข้อมูล</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={openTransferInfo} onClose={() => setOpenTransferInfo(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle, padding: "5px" }}>
                    <Grid container spacing={2} padding={2} justifyContent="center" direction="column">
                        <TextField variant="outlined" label="เลขที่บัญชีที่โอน" value={transferAccountNo} onChange={e => setTransferAccountNo(e.target.value)} />
                        <TextField variant="outlined" label="ชื่อบัญชีที่โอน" value={transferAccount} onChange={e => setTransferAccount(e.target.value)} />
                        <TextField variant="outlined" label="จำนวนเงิน" value={transferAmount} onChange={e => setTransferAmount(e.target.value)} />
                    </Grid>
                    <Box sx={{ marginTop: "30px" }} textAlign="center">
                        <Button variant="contained" sx={{ margin: "5px" }} color="error" startIcon={<CloseIcon />} onClick={() => setOpenTransferInfo(false)}>ยกเลิก</Button>
                        <Button variant="contained" sx={{ margin: "5px" }} onClick={() => setOpenTransferInfo(false)} endIcon={<ConfirmIcon />}>ยืนยันข้อมูล</Button>
                    </Box>
                </Box>
            </Modal>
        </Grid>
    );
}

export default PaymentForm;