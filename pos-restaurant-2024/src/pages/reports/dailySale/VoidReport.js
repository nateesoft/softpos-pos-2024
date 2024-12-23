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
        const { userLogin, macno, reports } = this.props
        const poshwSetup = this.props.poshwSetup
        let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
        headers = headers.filter(h => h !== "")
        return (
            <Grid2 id='content' container justifyContent="center" sx={{ marginBottom: "100px" }}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    {headers && headers.map((header) => <div>{header}</div>)}
                    <div style={{ marginTop: "30px" }}></div>
                    <div align="center">รายงานการทำรายการ Void</div>
                    <div align="center" style={{ marginBottom: "10px" }}>(Void Report)</div>
                    <div align="center">หมายเลขเครื่อง : 001 .. 001</div>
                    <div align="center" style={{ marginBottom: "10px" }}>รหัสพนักงาน Cashier : 9999 .. 9999</div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <thead>
                            <tr style={{ borderTop: "1px solid", borderStyle: "dashed" }}>
                                <td align='center'>Mac</td>
                                <td align='center'>Cashier</td>
                                <td align='center'>Table</td>
                                <td align='center'>Time</td>
                                <td align='center'>User_Void</td>
                                <td align='center'>T_Void</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid", borderStyle: "dashed" }}>
                                <td align='center'>Ref_No</td>
                                <td align='center'>Plu-Code</td>
                                <td align='right'>Qty</td>
                                <td align='right'>Amount</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align='center'>001</td>
                                <td align='center'>9999</td>
                                <td align='center'>T1</td>
                                <td align='center'>10:30:04</td>
                                <td align='center'>9999</td>
                                <td align='center'>10:30:30</td>
                            </tr>
                            <tr>
                                <td align='center'>0000128</td>
                                <td align='center'>1010</td>
                                <td align='right'>1</td>
                                <td align='right'>0.00</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td align='center'>001</td>
                                <td align='center'>9999</td>
                                <td align='center'>T1</td>
                                <td align='center'>10:30:04</td>
                                <td align='center'>9999</td>
                                <td align='center'>10:30:30</td>
                            </tr>
                            <tr>
                                <td align='center'>0000128</td>
                                <td align='center'>1010</td>
                                <td align='right'>1</td>
                                <td align='right'>0.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" cellPadding={5} style={{ borderBottom: "1px solid", borderTop: "1px solid", marginTop: "10px" }}>
                        <tr>
                            <td>จำนวน Void</td>
                            <td align='rigth'>0</td>
                            <td>จำนวนเงิน</td>
                            <td align='right'>0.00</td>
                        </tr>
                    </table>
                </Paper>
            </Grid2>
        )
    }
}

const VoidReport = () => {
    const contentRef = useRef(null);
    const { appData } = useContext(POSContext)
    const { macno, userLogin } = appData
    const [reports, setReports] = useState([])
    const [poshwSetup, setPosHwSetup] = useState({})

    const functionToPrint = useReactToPrint({
        contentRef,
        documentTitle: `Printing...`
    })

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
            .post(`/api/report/void-report`)
            .then((response) => {
                if (response.status === 200) {
                    setReports(response.data.data)
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
                poshwSetup={poshwSetup}
            />
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={1} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={handlePrinter}>Print</Button>
                </Grid2>
            </Paper>
        </>
    );
}

export default VoidReport
