import React, { useEffect, useState } from 'react'

import apiClient from '../../../httpRequest'
import AppbarSearch from './AppbarSearch'
import TemplateReport from './TemplateTable'

const columnTable = [
    "Tcode", "TLoginDate", "TCurTime",
    "TCustomer", "TItem", "TAmount", "TOnAct", "ChkBill", "PrintChkBill"]
const InventoryReport = () => {
    const [search, setSearch] = useState("")
    const [dataTable, setDataTable] = useState([])

    const loadTableData = () => {
        apiClient.get(`/api/tablefile/tableStatus`)
            .then(response => {
                setDataTable(response.data.data)
            })
            .catch(err => alert(err.message))
    }

    const handleLoad = () => {
        loadTableData()
    }

    useEffect(() => {
        loadTableData()
    }, [])

    return (
        <>
            <AppbarSearch search={search} setSearch={setSearch} handleLoad={handleLoad} />
            <TemplateReport columnTable={columnTable} dataTable={dataTable} />
        </>
    )
}

export default InventoryReport
