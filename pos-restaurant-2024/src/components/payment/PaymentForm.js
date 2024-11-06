import React from "react";
import Grid from '@mui/material/Grid2'
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBack from '@mui/icons-material/ArrowBack'
import CancelIcon from '@mui/icons-material/Cancel'
import ConfirmIcon from '@mui/icons-material/CheckCircle';
import PaidIcon from '@mui/icons-material/Paid';

const Item = ({ url, title }) => {
    return (
        <div align="center" style={{ border: "2px solid gray", borderRadius: "16px", padding: "10px", boxShadow: "5px 5px 5px #eee" }}>
            <span>{title}</span><br />
            <img src={url} alt="" width={80} />
        </div>

    )
}

const normalButton = { bgcolor: "#123456", color: "white", fontWeight: "bold", fontSize: "36px", borderRadius: "10px" }

function PaymentForm({open, close}) {
    const navigate = useNavigate();
    const handleBackPage = () => {
        navigate("/sale");
    }
    return (
        <Grid container spacing={2} display="flex" direction="column" sx={{padding: "10px"}}>
            <Grid size={12}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <Item title="Cash" url="images/payment/cash.png" />
                    </Grid>
                    <Grid size={4}>
                        <Item title="Credit Card" url="images/payment/credit-card.png" />
                    </Grid>
                    <Grid size={4}>
                        <Item title="Debit Card" url="images/payment/debit-card.png" />
                    </Grid>
                    <Grid size={4}>
                        <Item title="Gift Card" url="images/payment/gift-card.png" />
                    </Grid>
                    <Grid size={4}>
                        <Item title="Check" url="images/payment/check.png" />
                    </Grid>
                    <Grid size={4}>
                        <Item title="Other" url="images/payment/other.png" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={12}>
                <Grid container spacing={2} display="flex" direction="row">
                    <Grid size={5}>
                        <Paper elevation={3} sx={{ padding: "10px" }}>
                            <Box display="flex" sx={{padding: "10px"}} justifyContent="center">
                                <Typography variant="span" sx={{marginRight: "10px", fontWeight: "bold", color: "#aaa"}}>Total</Typography>
                                <Typography variant="h3" sx={{fontWeight: "bold", textShadow: "3px 4px #eee", color: "#123456"}}>999.00</Typography>
                            </Box>
                            <Box sx={{ margin: "10px" }}>
                                <TextField
                                    id="outlined-controlled"
                                    label="ชำระด้วยเงินสด"
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ margin: "10px" }}>
                                <TextField
                                    id="outlined-controlled"
                                    label="ชำระด้วยบัตรเครดิต"
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ margin: "10px" }}>
                                <TextField
                                    id="outlined-controlled"
                                    label="รวมยอดชำระ"
                                    disabled
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ margin: "10px" }}>
                                <TextField
                                    id="outlined-controlled"
                                    label="เงินทอน"
                                    disabled
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }} textAlign="center">
                                <Button variant="contained" color="warning" startIcon={<PaidIcon />}>CHARGE</Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid size={7}>
                        <table width="100%">
                            <tr>
                                <td><Button variant="contained" sx={normalButton} fullWidth>7</Button></td>
                                <td><Button variant="contained" sx={normalButton} fullWidth>8</Button></td>
                                <td><Button variant="contained" sx={normalButton} fullWidth>9</Button></td>
                                <td><Button variant="contained" sx={{ ...normalButton, bgcolor: "yellow", color: "black" }} fullWidth>+</Button></td>
                            </tr>
                        </table>
                        <table width="100%">
                            <tr>
                                <td><Button variant="contained" sx={normalButton} fullWidth>4</Button></td>
                                <td><Button variant="contained" sx={normalButton} fullWidth>5</Button></td>
                                <td><Button variant="contained" sx={normalButton} fullWidth>6</Button></td>
                                <td><Button variant="contained" sx={{ ...normalButton, bgcolor: "red", color: "black" }} fullWidth>-</Button></td>
                            </tr>
                        </table>
                        <table width="100%">
                            <tr>
                                <td><Button variant="contained" sx={normalButton} fullWidth>1</Button></td>
                                <td><Button variant="contained" sx={normalButton} fullWidth>2</Button></td>
                                <td><Button variant="contained" sx={normalButton} fullWidth>3</Button></td>
                                <td><Button variant="contained" sx={{ ...normalButton, bgcolor: "orange", color: "black"}} fullWidth>x</Button></td>
                            </tr>
                        </table>
                        <table width="100%">
                            <tr>
                                <td><Button variant="contained" sx={normalButton} fullWidth>0</Button></td>
                                <td><Button variant="contained" sx={normalButton} fullWidth>.</Button></td>
                                <td><Button variant="contained" sx={normalButton} fullWidth>=</Button></td>
                                <td><Button variant="contained" sx={{ ...normalButton, bgcolor: "green", color: "black"}} fullWidth>%</Button></td>
                            </tr>
                        </table>
                    </Grid>
                </Grid>
                <Box sx={{marginTop: "30px"}} textAlign="center">
                    <Button variant="contained" sx={{margin: "5px"}} color="primary" startIcon={<ArrowBack />} onClick={handleBackPage}>ย้อนกลับ</Button>
                    <Button variant="contained" sx={{margin: "5px"}} color="error" endIcon={<CancelIcon />}>VOID ORDER</Button>
                    <Button variant="contained" sx={{margin: "5px"}} color="success" onClick={open} endIcon={<ConfirmIcon />}>CONFIRM</Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default PaymentForm;