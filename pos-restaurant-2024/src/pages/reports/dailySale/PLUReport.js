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
        const { userLogin, macno, reports, summary } = this.props
        const poshwSetup = this.props.poshwSetup
        let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
        headers = headers.filter(h => h !== "")
        return (
            <Grid2 id='content' container justifyContent="center" sx={{marginBottom: "100px"}}>
                <Paper elevation={0} sx={{ padding: "5px", marginRight: "22px" }} ref={this.props.innerRef}>
                    {headers && headers.map((header) => <div>{header}</div>)}
                    <div style={{ marginTop: "30px" }}></div>
                    <div align="center">รายงานการขายตามรหัสสินค้า</div>
                    <div align="center">(Plu-Code Report)</div>
                    <div style={{margin: "20px"}}></div>
                    <div>หมายเลขเครื่อง : 001 ... 001</div>
                    <div>รหัสพนักงานขาย : 9999 ... 9999</div>
                    <div>รหัสกลุ่มสินค้า (Dept/Group) : 0000 ... ZZZZ</div>
                    <div>รหัสสินค้า : ..ZZZZ</div>
                    <div style={{margin: "20px"}}></div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                        {reports && reports.map(item => 
                            <tr>
                                <td>{item.GroupName}</td>
                                <td>{item.R_PluCode}</td>
                                <td align='right'>{item.R_Quan}</td>
                                <td align='right'>{item.R_Total}</td>
                            </tr>
                        )}
                        </tbody>
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr style={{height: "50px"}}>
                                <td colSpan={2}>SUM-TOTAL.....</td>
                                <td align='right'>{summary.qty}</td>
                                <td align='right'>{summary.netTotal}</td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>
            </Grid2>
        )
    }
}

const PLUReport = () => {
    const contentRef = useRef(null);
    const { appData } = useContext(POSContext)
    const { macno, userLogin } = appData
    const [reports, setReports] = useState([])
    const [summary, setSummary] = useState({})
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
            .post(`/api/report/plu-report`, {
                groupCode1: "01",
                groupCode2: "99",
                pluCode1: 'aaaa',
                pluCode2: 'zzzz'
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
            />
            <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <Grid2 container spacing={1} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    <Button startIcon={<PrintIcon />} variant='contained' color='primary' onClick={handlePrinter}>Print</Button>
                </Grid2>
            </Paper>
        </>
    );
}

export default PLUReport
