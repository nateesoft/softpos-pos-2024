import React, { Component, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Button, Grid2, Paper } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import moment from 'moment'
import { useSearchParams } from 'react-router-dom'

import apiClient from '../../../httpRequest'
import { POSContext } from '../../../AppContext'

class ComponentToPrint extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { userLogin, macno, reports, filter } = this.props
        const poshwSetup = this.props.poshwSetup
        let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
        headers = headers.filter(h => h !== "")
        return (
            <Grid2 id='content' container justifyContent="center" sx={{ marginBottom: "100px" }}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    {headers && headers.map((header) => <div>{header}</div>)}
                    <div style={{ marginTop: "30px" }}></div>
                    <div align="center">รายงานการขายรายชั่วโมง</div>
                    <div align="center">(Hourly By Plu Report)</div>
                    <div style={{ margin: "20px" }}></div>
                    <div style={{ margin: "20px" }}></div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td>เวลา</td>
                                <td>รหัสสินค้า</td>
                                <td align='center'>จำนวน</td>
                                <td align='right'>จำนวนเงิน</td>
                            </tr>
                        </tbody>
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            {reports && reports.map(item => (
                                <>
                                    {item.time && <tr>
                                        <td>{item.time}</td>
                                        <td></td>
                                        <td align='right'></td>
                                        <td align='right'></td>
                                    </tr>}
                                    {item.length > 0 && item.map(ii =>
                                        <tr>
                                            <td></td>
                                            <td>{ii.R_PluCode}</td>
                                            <td align='right'>{ii.R_Quan}</td>
                                            <td align='right'>{ii.R_Total}</td>
                                        </tr>
                                    )}
                                </>
                            )
                            )}
                        </tbody>
                    </table>
                </Paper>
            </Grid2>
        )
    }
}

const HourlyPluReport = () => {
    const contentRef = useRef(null);
    const [query] = useSearchParams()

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
            .post(`/api/report/hourly-report`, {
                macno1: query.get('macno1'),
                macno2: query.get('macno2')
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log('response:', response.data.data)
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
                filter={{
                    macno1: query.get('macno1'),
                    macno2: query.get('macno2')
                }}
            />
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={1} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={handlePrinter}>Print</Button>
                </Grid2>
            </Paper>
        </>
    );
}

export default HourlyPluReport
