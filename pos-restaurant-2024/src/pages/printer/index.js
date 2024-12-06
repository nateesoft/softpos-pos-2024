import React, { Component, useRef } from 'react'
import { Box, Button, Divider, Grid2, Paper, Typography } from '@mui/material'
import Moment from 'react-moment'
import { useReactToPrint } from 'react-to-print'

const NumFormat = data => {
    return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

class ComponentToPrint extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Paper elevation={0} sx={{ padding: "5px" }} ref={this.props.innerRef}>
                    <div align="center" style={{ fontSize: "18px", fontWeight: "bold" }}>*** ใบเสร็จรับเงิน ***</div>
                    <Paper elevation={0} sx={{ padding: "10px" }}>
                        <div align="center">Table: T2</div>
                    </Paper>
                    <div align="center">
                        <img src="/images/payment/com_logo.jpg" width={128} alt="" />
                    </div>
                    <Paper elevation={0} sx={{ padding: "10px" }}>
                        <div>Receipt No: 000001</div>
                        <div>Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} /></div>
                        <div>Customer: 2</div>
                        <div>Cashier: 1001 Employ: 1001 Mac:001</div>
                    </Paper>
                    <Divider />
                    <Paper elevation={0} sx={{ padding: "10px" }}>
                        <table width="100%">
                            <tr>
                                <th align="left"></th>
                                <th align="left">Description</th>
                                <th align="left"></th>
                                <th align="right">Amount</th>
                            </tr>
                        </table>
                    </Paper>
                    <Divider />
                    <Paper elevation={0} sx={{ padding: "10px" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Sub-TOTAL....(Item 1)</Typography>
                            <Typography>{NumFormat(999)}</Typography>
                        </Box>
                        <Box padding={2}>
                            <Box display="flex" justifyContent="space-between">
                                <Typography>อาหาร (Food)</Typography>
                                <Typography>{NumFormat(999)}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Typography>เครื่องดื่ม (Drink)</Typography>
                                <Typography>{NumFormat(0)}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Typography>สินค้าอื่นๆ (Other)</Typography>
                                <Typography>{NumFormat(0)}</Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <Box display="flex" justifyContent="space-between">
                            <Typography>ค่าบริการ 10%</Typography>
                            <Typography>{NumFormat(200)}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>มูลค่าสินค้า/บริการ.....</Typography>
                            <Typography>{NumFormat(888)}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Vat 7%</Typography>
                            <Typography>389</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Net Total</Typography>
                            <Typography>{NumFormat(1020)}</Typography>
                        </Box>
                        <Divider />
                        <Box display="flex" justifyContent="space-between">
                            <Typography>เงินทอน</Typography>
                            <Typography sx={{ fontSize: "22px" }}>{0}</Typography>
                        </Box>
                    </Paper>
                    <Divider sx={{ marginTop: "10px" }} />
                    <div>
                        Welcome to Thailand
                    </div>
                </Paper>
            </div>
        )
    }
}

const PrintDemo = () => {
    const contentRef = useRef(null);
    const handlePrint1 = useReactToPrint({ contentRef });
    const handlePrint2 = useReactToPrint({
        contentRef,
        onAfterPrint: () => {
            console.log('onAfterPrint')
        },
        onPrintError: (err) => {
            console.log('error=>', err)
        }
    })

    return (
        <div>
            <ComponentToPrint innerRef={contentRef} />
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={2} justifyContent="center" padding={3}>
                    <Button variant='contained' color='primary' onClick={handlePrint1}>Print1</Button>
                    <Button variant='contained' color='secondary' onClick={handlePrint2}>Print2</Button>
                </Grid2>
            </Paper>
        </div>

    );
}

export default PrintDemo
