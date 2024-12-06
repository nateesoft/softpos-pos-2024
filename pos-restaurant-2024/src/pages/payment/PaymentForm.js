import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid2, Modal, Paper, TextField, Typography } from "@mui/material";
import ArrowBack from '@mui/icons-material/ArrowBack'
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid2'
import DiscountIcon from '@mui/icons-material/Discount';
import CloseIcon from '@mui/icons-material/Close';
import apiClient from '../../httpRequest'
import SplitBillIcon from "@mui/icons-material/VerticalSplit"

import SplitBiPayment from "./SplitBillPayment"
import { POSContext } from "../../AppContext";
import QrCodeGenerator from "./QRCodePayment";
import CreditChargeModal from "./CreditChargeModal";

const NumFormat = data => {
    return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

// function subtotal(items) {
//     return items.filter(item => item.R_Void !== 'V').map(({ R_Price }) => R_Price).reduce((sum, i) => sum + i, 0);
// }

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

function PaymentForm({ loadBillInfo, close, orderList, tableNo, handleNotification, tableFile }) {
    const { appData } = useContext(POSContext)
    const { macno } = appData

    const { 
        subTotalAmount, 
        serviceAmount,
        vatAmount,
        netTotalAmount,
        productAndService,
        printRecpMessage } = tableFile
    const R_NetTotal = netTotalAmount;

    const [paymentAmount, setPaymentAmount] = useState(0)

    // discount info
    const [discountEnable, setDiscountEnable] = useState(false)
    const [discountAmount, setDiscountAmount] = useState(0)

    const [balanceAmount, setBalanceAmount] = useState(0)
    const [tonAmount, setTonAmount] = useState(0)

    // cash info
    const [cashEnable, setCashEnable] = useState(true)
    const [cashAmount, setCashAmount] = useState(0)

    // credit info
    const [crCode, setCrCode] = useState("")
    const [creditNumber, setCreditNumber] = useState("")
    const [creditRef, setCreditRef] = useState("")
    const [creditChargePercent, setCreditChargePercent] = useState(0)
    const [creditChargeAmount, setCreditChargeAmount] = useState(0)
    const [creditAmount, setCreditAmount] = useState(0)

    const [openCreditInfo, setOpenCreditInfo] = useState(false)
    const [openTransferInfo, setOpenTransferInfo] = useState(false)

    // transfer info
    const [transferAmount, setTransferAmount] = useState(0)
    const [transferAccountNo, setTransferAccountNo] = useState("")
    const [transferToAccount, setTransferToAccount] = useState("0864108403")
    const [transferAccount, setTransferAccount] = useState("")

    const [openSplitBill, setOpenSplitBill] = useState(false)
    const [openCreditFile, setOpenCreditFile] = useState(false)

    const navigate = useNavigate();
    const handleBackPage = () => {
        navigate(`/sale/${tableNo}`);
    }

    const handleCreditInfoSelect = (cInfo) => {
        const NetTotal = R_NetTotal - cashAmount
        const totalCreditCharge = Math.abs(NetTotal) * cInfo.crCharge / 100
        const totalCreditChargeAmount = Math.abs(NetTotal) + totalCreditCharge
        setCrCode(cInfo.crCode)
        setCreditNumber("")
        setCreditRef("")
        setCreditChargePercent(cInfo.crCharge)
        setCreditChargeAmount(totalCreditCharge)
        setCreditAmount(totalCreditChargeAmount)
    }

    const handleCreditEnabled = () => {
        setCreditAmount(R_NetTotal - cashAmount - transferAmount)
        setOpenCreditInfo(true)
    }

    const handleTransferEnabled = () => {
        setTransferAmount(R_NetTotal - cashAmount)
        setOpenTransferInfo(true)
    }

    const handleAdd = (addMoney) => {
        if (cashEnable) {
            setCashAmount(cash => cash + addMoney)
            totalAmount()
        }
    }
    const handleConcat = (addMoney) => {
        if (cashEnable) {
            setCashAmount(cash => parseFloat("" + cash + addMoney))
        }
    }

    const handleShowOpenCreditFile = () => {
        setCreditAmount(0)
        setCrCode("")
        setCreditChargeAmount(0)
        setBalanceAmount(0)
        setOpenCreditFile(true)
    }

    const totalAmount = useCallback(() => {
        const cc = cashAmount ? parseFloat(cashAmount) : 0
        const cd = creditAmount ? parseFloat(creditAmount - creditChargeAmount) : 0
        const ta = transferAmount ? parseFloat(transferAmount) : 0
        const toalNetAmt = parseFloat(Math.round(R_NetTotal)) + creditChargeAmount
        const paymentAmt = parseFloat(cc + cd + ta)
        const discountAmt = 0
        const balanceAmt = parseFloat((paymentAmt - discountAmt) - toalNetAmt)
        setPaymentAmount(paymentAmt)
        setDiscountAmount(discountAmt)
        if (balanceAmt < 0) {
            if (creditAmount > 0) {
                setBalanceAmount(0)
            } else {
                setBalanceAmount(balanceAmt)
                setTonAmount(0)
            }
        } else {
            if (creditAmount > 0) {
                setTonAmount(0)
                setBalanceAmount(0)
            } else {
                setTonAmount(balanceAmt)
                setBalanceAmount(0)
            }
        }
    }, [cashAmount, creditAmount, transferAmount, R_NetTotal])

    const handleClear = () => {
        setCashAmount(0)
        totalAmount()
    }

    const handleConfirmPayment = async () => {
        if (balanceAmount >= 0) {

            // update billno
            const payload = {
                macno,
                tableNo,
                billType: "E",
                orderList,
                serviceInfo: {
                    serviceAmount,
                    vatAmount

                },
                cashInfo: {
                    cashEnable,
                    cashAmount
                },
                creditInfo: {
                    crCode,
                    creditNumber,
                    creditRef,
                    creditChargePercent,
                    creditChargeAmount,
                    creditAmount
                },
                transferInfo: {
                    transferAmount,
                    transferAccountNo,
                    transferAccount
                },
                discountInfo: {
                    discountEnable,
                    discountAmount,
                },
                memberInfo: {
                    memberCode: "",
                    memberName: "",
                    memberBegin: "2024-01-01",
                    memberEnd: "2024-01-01",
                    memberCurSum: 0
                },
                tonAmount,
                paymentAmount,
                netTotal: (R_NetTotal+creditChargeAmount)
            }

            // update print2kic
            await apiClient.patch(`/api/balance/printToKic/${tableNo}`)

            // send bill payment
            apiClient.post(`/api/billno`, payload)
                .then(response => {
                    if (response.data.data != null) {
                        loadBillInfo(response.data.data)
                    } else {
                        handleNotification("พบข้อผิดพลาดในการรับชำระเงิน!")
                    }
                })
                .catch(err => {
                    handleNotification(err.message)
                })
        } else {
            handleNotification("ข้อมูลรับชำระยังไม่ถูกต้อง!")
        }
    }

    const cancelTransferAmount = () => {
        setTransferAmount(0)
        setOpenTransferInfo(false)
    }

    const handleCloseCreditModal = () => {
        totalAmount()
        setOpenCreditInfo(false)
    }

    useEffect(() => {
        totalAmount()
    }, [totalAmount])

    return (
        <Grid container spacing={2} display="flex" direction="column" sx={{ padding: "10px" }}>
            <Grid size={12}>
                <Box display="flex" sx={{ padding: "20px", backgroundColor: "salmon", border: "2px solid gray", borderRadius: "10px" }} justifyContent="space-between">
                    <Typography variant="h3" sx={{ fontWeight: "bold", color: "#444" }}>TOTAL</Typography>
                    <Typography variant="h3" sx={{ marginRight: "20px", fontSize: "72px", textShadow: "3px 3px snow", fontWeight: "bold" }}>
                        {NumFormat(R_NetTotal + creditChargeAmount)}
                    </Typography>
                </Box>
            </Grid>
            <Grid size={12}>
                <Grid container spacing={2} display="flex" direction="row">
                    <Grid size={6}>
                        <Paper elevation={3} sx={{ padding: "10px" }}>
                            <Box display="flex" justifyContent="space-between" margin={2}>
                                <img width={48} height={48} src={"/images/payment/cash.png"} alt="" style={{ marginRight: "8px" }} />
                                <TextField
                                    type="number"
                                    value={cashAmount}
                                    onFocus={() => setCashEnable(true)}
                                    onChange={e => setCashAmount(e.target.value)}
                                    onKeyUp={totalAmount}
                                    id="txtCashAmount"
                                    label="ชำระด้วยเงินสด"
                                    fullWidth
                                    inputProps={{ min: 0, style: { textAlign: "right" } }} />
                            </Box>
                            <Box display="flex" justifyContent="space-between" margin={2}>
                                <Grid2 container spacing={1}>
                                    <img width={48} src={"/images/payment/banking_money.png"} alt="" />
                                    <TextField
                                        type="number"
                                        value={transferAmount}
                                        onChange={e => setTransferAmount(e.target.value)}
                                        id="txtTransferAmount"
                                        label="เงินโอน"
                                        disabled
                                        inputProps={{ min: 0, style: { textAlign: "right" } }} />
                                    <Button variant="outlined" onClick={handleTransferEnabled}>...</Button>
                                </Grid2>
                            </Box>
                            <Box display="flex" justifyContent="space-between" margin={2}>
                                <Grid2 container spacing={1} justifyContent="space-between">
                                    <img width={48} src={"/images/payment/credit-card.png"} alt="" />
                                    <TextField
                                        value={NumFormat(creditAmount - creditChargeAmount)}
                                        onKeyUp={totalAmount}
                                        id="txtCreditAmount"
                                        label="ชำระด้วยบัตรเครดิต"
                                        disabled
                                        inputProps={{ min: 0, style: { textAlign: "right" } }} />
                                    <Button variant="outlined" onClick={handleCreditEnabled}>...</Button>
                                </Grid2>
                            </Box>
                            <Box display="flex" justifyContent="space-between" margin={2}>
                                <Grid2 container spacing={1} justifyContent="space-between">
                                    <img width={48} src={"/images/payment/credit-card.png"} alt="" />
                                    <TextField
                                        value={NumFormat(creditChargeAmount)}
                                        onKeyUp={totalAmount}
                                        id="txtCreditAmount"
                                        label="Credit Charge Amount"
                                        disabled
                                        inputProps={{ min: 0, style: { textAlign: "right" } }} />
                                </Grid2>
                            </Box>
                            <Box display="flex" justifyContent="flex-end" margin={2}>
                                <TextField
                                    variant="filled"
                                    label="ยอดรับชำระทั้งหมด"
                                    value={NumFormat(paymentAmount+creditChargeAmount)}
                                    inputProps={{ min: 0, style: { textAlign: "right" } }}
                                    fullWidth
                                    disabled />
                            </Box>
                            <Grid container spacing={2} margin={2} display="flex" justifyContent="center">
                                <Button variant="outlined" fullWidth startIcon={<DiscountIcon />} disabled>ให้ส่วนลดเพิ่ม</Button>
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
                                    inputProps={{ min: 0, style: { textAlign: "right", fontSize: "22px", fontWeight: "bold" } }}
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
                                    <Button variant="contained" color="secondary"
                                        onClick={() => setOpenSplitBill(true)} endIcon={<SplitBillIcon />} disabled>
                                        แยกชำระ
                                    </Button>
                                    <Button variant="contained"
                                        sx={{ margin: "5px" }}
                                        color="success"
                                        onClick={handleConfirmPayment}
                                        disabled={balanceAmount < 0}
                                        endIcon={<ConfirmIcon />}>ชำระเงิน</Button>
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
                        <Grid2 container>
                            <TextField variant="outlined" label="CrCode" value={crCode} onChange={e => setCrCode(e.target.value)} />
                            <Button variant="contained" onClick={() => handleShowOpenCreditFile()}>...</Button>
                        </Grid2>
                        <TextField variant="outlined" label="เลขที่บัตรเครดิต" value={creditNumber} onChange={e => setCreditNumber(e.target.value)} />
                        <TextField variant="outlined" label="approve code" value={creditRef} onChange={e => setCreditRef(e.target.value)} />
                        <TextField variant="outlined" disabled type="number" label="Credit Charge" value={creditChargePercent} />
                        <TextField variant="outlined" disabled type="number" label="Charge Amount" value={creditChargeAmount} />
                        <TextField variant="outlined" type="number" label="ยอดค้างชำระ" value={0} disabled />
                        <TextField variant="outlined" type="number" disabled label="จำนวนเงินที่ใส่เครดิต" value={creditAmount} onChange={e => setCreditAmount(e.target.value)} />
                    </Grid>
                    <Box sx={{ marginTop: "30px" }} textAlign="center">
                        <Button variant="contained" sx={{ margin: "5px" }} color="error" startIcon={<CloseIcon />} onClick={() => setOpenCreditInfo(false)}>ยกเลิก</Button>
                        <Button variant="contained" sx={{ margin: "5px" }} onClick={handleCloseCreditModal} endIcon={<ConfirmIcon />}>ยืนยันข้อมูล</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={openTransferInfo} onClose={() => setOpenTransferInfo(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle, width: "350px", padding: "5px" }}>
                    <Grid container spacing={2} padding={2} justifyContent="center" direction="column">
                        <TextField variant="outlined" label="เลขที่บัญชีที่โอน" value={transferAccountNo} onChange={e => setTransferAccountNo(e.target.value)} />
                        <TextField variant="outlined" label="ชื่อบัญชีที่โอน" value={transferAccount} onChange={e => setTransferAccount(e.target.value)} />
                        <TextField variant="outlined" label="จำนวนเงิน" value={transferAmount} onChange={e => setTransferAmount(e.target.value)} />
                        <Box>
                            <TextField variant="filled"
                                label="โอนเงินเข้าบัญขีนี้"
                                value={transferToAccount}
                                onChange={e => setTransferToAccount(e.target.value)} fullWidth
                            />
                        </Box>
                    </Grid>
                    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                        <QrCodeGenerator mobileNumber={transferToAccount} amount={transferAmount} />
                        <Typography>ยอดเงินโอน {transferAmount}</Typography>
                        <Typography>โอนเข้าบัญชี {transferToAccount}</Typography>
                    </Box>
                    <Box sx={{ marginTop: "30px" }} textAlign="center">
                        <Button variant="contained" sx={{ margin: "5px" }} color="error" startIcon={<CloseIcon />} onClick={cancelTransferAmount}>ยกเลิก</Button>
                        <Button variant="contained" sx={{ margin: "5px" }} onClick={() => setOpenTransferInfo(false)} endIcon={<ConfirmIcon />}>ยืนยันข้อมูล</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={openSplitBill} onClose={() => setOpenSplitBill(false)}>
                <Box sx={{ ...modalStyle, width: "80%" }}>
                    <SplitBiPayment onClose={() => setOpenSplitBill(false)} />
                </Box>
            </Modal>
            <Modal open={openCreditFile}>
                <Box sx={{ ...modalStyle }}>
                    <CreditChargeModal
                        setClose={() => setOpenCreditFile(false)}
                        setCreditInfo={handleCreditInfoSelect}
                    />
                </Box>
            </Modal>
        </Grid>
    );
}

export default PaymentForm;