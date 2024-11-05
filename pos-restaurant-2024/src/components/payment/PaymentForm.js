import React from "react";
import Grid from '@mui/material/Grid2'
import { Box, Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = ({ url, title }) => {
    return (
        <div align="center" style={{ border: "2px solid #eee", borderRadius: "16px", padding: "10px", boxShadow: "5px 5px 5px #eee" }}>
            <span>{title}</span><br />
            <img src={url} alt="" />
        </div>

    )
}

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
                            <Box sx={{ margin: "10px" }}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Amount Paid"
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ margin: "10px" }}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Change Back"
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }} textAlign="center">
                                <Button variant="contained" color="warning">CHARGE</Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid size={7}>
                        <table width="100%">
                            <tr>
                                <td>
                                    <TextField id="outlined-controlled" fullWidth />
                                </td>
                            </tr>
                        </table>
                        <table width="100%">
                            <tr>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>7</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>8</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>9</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "yellow", color: "black", fontWeight: "bold", fontSize: "14px" }}>+</Button></td>
                            </tr>
                        </table>
                        <table width="100%">
                            <tr>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>4</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>5</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>6</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "red", color: "black", fontWeight: "bold", fontSize: "14px" }}>-</Button></td>
                            </tr>
                        </table>
                        <table width="100%">
                            <tr>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>1</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>2</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>3</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "orange", color: "black", fontWeight: "bold", fontSize: "14px" }}>x</Button></td>
                            </tr>
                        </table>
                        <table width="100%">
                            <tr>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>0</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>.</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "#bbb", color: "black", fontWeight: "bold", fontSize: "14px" }}>=</Button></td>
                                <td><Button variant="contained" sx={{ bgcolor: "green", color: "black", fontWeight: "bold", fontSize: "14px" }}>%</Button></td>
                            </tr>
                        </table>
                    </Grid>
                </Grid>
                <Box sx={{marginTop: "30px"}} textAlign="center">
                    <Button variant="contained" sx={{margin: "5px", bgcolor: "blue"}} onClick={handleBackPage}>BACK</Button>
                    <Button variant="contained" sx={{margin: "5px", bgcolor: "gray"}}>VOID ORDER</Button>
                    <Button variant="contained" sx={{margin: "5px", bgcolor: "#13c2ff"}} onClick={open}>CONFIRM</Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default PaymentForm;