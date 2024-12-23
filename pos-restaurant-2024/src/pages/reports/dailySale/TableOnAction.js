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
        const poshwSetup = this.props.poshwSetup

        let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
        headers = headers.filter(h => h !== "")
        return (
            <Grid2 id='content' container justifyContent="center" sx={{marginBottom: "100px"}}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    {headers && headers.map((header) => <div>{header}</div>)}
                    <div style={{ marginTop: "30px" }}></div>
                    <div align="center">รายงานโต๊ะค้าง (ยังไม่ได้ชำระเงิน)</div>
                    <div align="center" style={{margin: "10px"}}>Table Check</div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%" cellPadding={2} cellSpacing={2}>
                        <thead>
                            <tr style={{borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed"}}>
                                <td align='center'>Date</td>
                                <td align='center'>Table</td>
                                <td align='center'>Open-Time</td>
                                <td align='right'>Customer</td>
                                <td align='right'>Amount</td>
                            </tr>
                        </thead>
                        <tbody>
                            {reports && reports.map((row) => (
                                <tr>
                                    <td align='center'>{moment(row.R_Date).format('DD/MM/YYYY')}</td>
                                    <td align='center'>{row.R_Table}</td>
                                    <td align='center'>{row.TCurTime}</td>
                                    <td align='right'>{row.TCustomer}</td>
                                    <td align='right'>{row.R_Total}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr style={{borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed"}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td align='right'>Total</td>
                                <td align='right'>{total}</td>
                            </tr>
                        </tfoot>
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
    const [poshwSetup, setPosHwSetup] = useState({})

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
                poshwSetup={poshwSetup}
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
