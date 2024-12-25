import React, { Component, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Button, Grid2, Paper } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import moment from 'moment'

import apiClient from '../../../httpRequest'
import { POSContext } from '../../../AppContext'
import { useSearchParams } from 'react-router-dom'

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
                    <div align="center">รายงานการขายตามกลุ่มสินค้า</div>
                    <div align="center">(Dept/Group Report)</div>
                    <div style={{ margin: "20px" }}></div>
                    <div>หมายเลขเครื่อง : {filter.macno1} ... {filter.macno2}</div>
                    <div>รหัสพนักงานขาย : {filter.cashier1} ... {filter.cashier2}</div>
                    <div>รหัสกลุ่มสินค้า (Dept/Group) : {filter.groupCode1} ... {filter.groupCode2}</div>
                    <div style={{ margin: "20px" }}></div>
                    <div align="center">{moment().format('DD/MM/YYYY HH:mm:ss')} Cashier: {userLogin} Mac: {macno}</div>
                    <table width="100%">
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            <tr>
                                <td colSpan={4}>รายละเอียด ...</td>
                            </tr>
                            <tr>
                                <td align='right'></td>
                                <td align='right'>EAT IN</td>
                                <td align='right'>TAKE AWAY</td>
                                <td align='right'>DELIVERY</td>
                            </tr>
                        </tbody>
                        <tbody style={{ borderBottom: "1px solid", borderTop: "1px solid", borderStyle: "dashed" }}>
                            {reports && reports.map((item, index) => <tr>
                                <td>{item.data1}</td>
                                <td>{item.data2}</td>
                                <td align='right'>{item.data3}</td>
                                <td align='right'>{item.data4}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </Paper>
            </Grid2>
        )
    }
}

const DepartmentGroupReport = () => {
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
            .post(`/api/report/group-plu-report`, {
                macno1: query.get('macno1'),
                macno2: query.get('macno2'),
                cashier1: query.get('cashier1'),
                cashier2: query.get('cashier2'),
                groupCode1: query.get('group1'),
                groupCode2: query.get('group2')
            })
            .then((response) => {
                console.log(response.data.data)
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
                filter={{
                    macno1: query.get('macno1'),
                    macno2: query.get('macno2'),
                    cashier1: query.get('cashier1'),
                    cashier2: query.get('cashier2'),
                    groupCode1: query.get('group1'),
                    groupCode2: query.get('group2')
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

export default DepartmentGroupReport
