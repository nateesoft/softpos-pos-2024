import React, { Component, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Button, Grid2, Paper } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import BackIcon from '@mui/icons-material/ReplyAll';
import moment from 'moment'
import { useNavigate, useSearchParams } from 'react-router-dom'

import apiClient from '../../../httpRequest'
import { POSContext } from '../../../AppContext'
import { FONT_FAMILY } from '../../../AppConstants'

const formatCurrency = (amount) => {
    return new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB" }).format(amount);
};

class ComponentToPrint extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { userLogin, macno, reports, summary, filter } = this.props
        const poshwSetup = this.props.poshwSetup
        let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
        headers = headers.filter(h => h !== "")
        return (
            <Grid2 id='content' container 
                justifyContent="center" 
                sx={{ marginBottom: "100px", fontSize: 12, fontFamily: "Angsana New" }}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    {headers && headers.map((header) => <div><font face={FONT_FAMILY} size="4">{header}</font></div>)}
                    <div style={{ marginTop: "30px" }}></div>
                    <div align="center"><font face={FONT_FAMILY} size="4">รายงานการทำรายการ Void</font></div>
                    <div align="center" style={{ marginBottom: "10px" }}><font face={FONT_FAMILY} size="4">(Void Report)</font></div>
                    <div align="center"><font face={FONT_FAMILY} size="4">หมายเลขเครื่อง : {filter.macno1} .. {filter.macno2}</font></div>
                    <div align="center" style={{ marginBottom: "10px" }}><font face={FONT_FAMILY} size="4">รหัสพนักงาน Cashier : {filter.cashier1} .. {filter.cashier2}</font></div>
                    <div align="center"><font face={FONT_FAMILY} size="4">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</font></div>
                    <table width="100%">
                        <thead>
                            <tr style={{ borderTop: "1px solid", borderStyle: "dashed" }}>
                                <td align='center'><font face={FONT_FAMILY} size="4">Mac</font></td>
                                <td align='center'><font face={FONT_FAMILY} size="4">Cashier</font></td>
                                <td align='center'><font face={FONT_FAMILY} size="4">Table</font></td>
                                <td align='center'><font face={FONT_FAMILY} size="4">Time</font></td>
                                <td align='center'><font face={FONT_FAMILY} size="4">User_Void</font></td>
                                <td align='center'><font face={FONT_FAMILY} size="4">T_Void</font></td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td align='center'><font face={FONT_FAMILY} size="4">Ref_No</font></td>
                                <td align='center'><font face={FONT_FAMILY} size="4">Plu-Code</font></td>
                                <td align='right'><font face={FONT_FAMILY} size="4">Qty</font></td>
                                <td align='right'><font face={FONT_FAMILY} size="4">Amount</font></td>
                            </tr>
                        </thead>
                        <tbody>
                            {reports && reports.map(item => <>
                                <tr>
                                    <td align='center'><font face={FONT_FAMILY} size="4">{item.B_MacNo}</font></td>
                                    <td align='center'><font face={FONT_FAMILY} size="4">{item.B_Cashier}</font></td>
                                    <td align='center'><font face={FONT_FAMILY} size="4">{item.B_Table}</font></td>
                                    <td align='center'><font face={FONT_FAMILY} size="4">{item.B_Ontime}</font></td>
                                    <td align='center'><font face={FONT_FAMILY} size="4">{item.B_VoidUser}</font></td>
                                    <td align='center'><font face={FONT_FAMILY} size="4">{item.B_VoidTime}</font></td>
                                </tr>
                                <tr>
                                    <td align='center'><font face={FONT_FAMILY} size="4">{item.B_Refno}</font></td>
                                    <td align='center'><font face={FONT_FAMILY} size="4">{item.R_PluCode}</font></td>
                                    <td align='right'><font face={FONT_FAMILY} size="4">{item.R_Quan}</font></td>
                                    <td align='right'><font face={FONT_FAMILY} size="4">{formatCurrency(item.R_Total)}</font></td>
                                </tr>
                            </>)}
                        </tbody>
                    </table>
                    <table width="100%" cellPadding={5} style={{ borderBottom: "1px solid", borderTop: "1px solid", marginTop: "10px" }}>
                        <tr>
                            <td><font face={FONT_FAMILY} size="4">จำนวน Void</font></td>
                            <td align='rigth'><font face={FONT_FAMILY} size="4">{summary.voidCount}</font></td>
                            <td><font face={FONT_FAMILY} size="4">จำนวนเงิน</font></td>
                            <td align='right'><font face={FONT_FAMILY} size="4">{formatCurrency(summary.voidAmount)}</font></td>
                        </tr>
                    </table>
                </Paper>
            </Grid2>
        )
    }
}

const VoidReport = () => {
    const navigate = useNavigate()
    const contentRef = useRef(null);
    const [query] = useSearchParams()

    const { appData } = useContext(POSContext)
    const { macno, userLogin } = appData
    const [reports, setReports] = useState([])
    const [summary, setSummary] = useState({})
    const [poshwSetup, setPosHwSetup] = useState({})

    const functionToPrint = useReactToPrint({
        contentRef,
        documentTitle: `Printing...`
    })

    const backPage = () => {
        navigate('/reportDaily/overview')
    }

    const handlePrinter = useCallback(() => {
        functionToPrint()
    }, [functionToPrint])

    const loadPosHwSetup = useCallback(() => {
        apiClient
            .get(`/api/poshwsetup/${macno}`)
            .then((response) => {
                if (response.status === 200) {
                    setPosHwSetup(response.data.data)
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    const loadReport = useCallback(() => {
        apiClient
            .post(`/api/report/void-report`, {
                macno1: query.get('macno1'),
                macno2: query.get('macno2'),
                cashier1: query.get('cashier1'),
                cashier2: query.get('cashier2')
            })
            .then((response) => {
                if (response.status === 200) {
                    setReports(response.data.data.data)
                    setSummary(response.data.data.summary)
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    useEffect(() => {
        loadReport()
        loadPosHwSetup()
    }, [])

    return (
        <>
            <ComponentToPrint
                innerRef={contentRef}
                userLogin={userLogin}
                macno={macno}
                reports={reports}
                summary={summary}
                poshwSetup={poshwSetup}
                filter={{
                    macno1: query.get('macno1'),
                    macno2: query.get('macno2'),
                    cashier1: query.get('cashier1'),
                    cashier2: query.get('cashier2')
                }}
            />
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={1} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    <Button startIcon={<BackIcon />} variant='contained' color='error' onClick={backPage}>Back</Button>
                    <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={handlePrinter}>Print</Button>
                </Grid2>
            </Paper>
        </>
    );
}

export default VoidReport
