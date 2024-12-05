import React, { useCallback, useEffect, useState } from 'react'

import apiClient from '../../httpRequest'
import AppbarSearch from './AppbarSearch'
import TemplateReport from './TemplateTable'

const InventoryReport = () => {
    const [search, setSearch] = useState("stkfile")
    const [columnTable, setColumnTable] = useState([])
    const [dataTable, setDataTable] = useState([])

    const loadTableColumn = () => {
        apiClient.get(`/api/inventory/column/${search}`)
            .then(response => {
                setColumnTable(response.data.data)
            })
            .catch(err => console.log(err))
    }

    const loadTableData = () => {
        apiClient.get(`/api/inventory/${search}`)
            .then(response => {
                setDataTable(response.data.data)
            })
            .catch(err => console.log(err))
    }

    const handleLoad = () => {
        loadTableColumn()
        loadTableData()
    }

    return (
        <div>
            <AppbarSearch search={search} setSearch={setSearch} handleLoad={handleLoad} />
            <TemplateReport columnTable={columnTable} dataTable={dataTable} />
        </div>
    )
}

export default InventoryReport
