import React, { Component, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Button, Grid2, Paper } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import moment from 'moment'

import apiClient from '../../../httpRequest'
import { POSContext } from '../../../AppContext'

class ComponentToPrint extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { userLogin, macno, reports, total } = this.props

        return (
            <Grid2 id='content' container justifyContent="center" sx={{marginBottom: "100px"}}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    <div style={{ marginTop: "20px" }}></div>
                    <div align="center">รายงานการขายตามช่วงเวลา</div>
                    <div align="center">(Hourly Report)</div>
                    <div align="center" style={{ margin: "10px" }}>หมายเลขเครื่อง : 001 .. 001</div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <thead>
                            <tr style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                                <td align='center'>เวลา</td>
                                <td align='right'>จำนวนบิล</td>
                                <td align='right'>จำนวนลูกค้า</td>
                                <td align='right'>จำนวนเงิน</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align='center'>00:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>01:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>02:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>03:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>04:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>05:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>06:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>07:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>08:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>09:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>10:00</td>
                                <td align='right'>9</td>
                                <td align='right'>26</td>
                                <td align='right'>3,178.00</td>
                            </tr>
                            <tr>
                                <td align='center'>11:00</td>
                                <td align='right'>5</td>
                                <td align='right'>11</td>
                                <td align='right'>1,113.00</td>
                            </tr>
                            <tr>
                                <td align='center'>12:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>13:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>14:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>15:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>16:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>17:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>18:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>19:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>20:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>21:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>22:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                            <tr>
                                <td align='center'>23:00</td>
                                <td align='right'>0</td>
                                <td align='right'>0</td>
                                <td align='right'>0.00</td>
                            </tr>
                        </tbody>
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr style={{height: "50px"}}>
                                <td><div style={{marginLeft: "10px"}}>SUM...</div></td>
                                <td align='right'>30</td>
                                <td align='right'>72</td>
                                <td align='right'>28,984.00</td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>
            </Grid2>
        )
    }
}

const TableOnAction = () => {
    const contentRef = useRef(null);
    const { appData } = useContext(POSContext)
    const { macno, userLogin } = appData
    const [reports, setReports] = useState([])
    const [total, setTotal] = useState(0)

    const functionToPrint = useReactToPrint({
        contentRef,
        documentTitle: `Printing...`
    })

    const handlePrinter = useCallback(() => {
        functionToPrint()
    }, [functionToPrint])

    const loadReport = useCallback(() => {
        apiClient
            .get(`/api/report/table-on-action`)
            .then((response) => {
                if (response.status === 200) {
                    setReports(response.data.data.data)
                    setTotal(response.data.data.footer.total)
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    useEffect(() => {
        loadReport()
    }, [loadReport])

    return (
        <>
            <ComponentToPrint
                innerRef={contentRef}
                userLogin={userLogin}
                macno={macno}
                reports={reports}
                total={total}
            />
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={1} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={handlePrinter}>Print</Button>
                </Grid2>
            </Paper>
        </>
    );
}

export default TableOnAction
