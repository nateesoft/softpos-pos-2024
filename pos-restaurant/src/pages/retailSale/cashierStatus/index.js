import React, { useEffect, useState } from "react"

import apiClient from "../../../httpRequest"
import DataTable from "./DataTable"

const columnTable = ["Username", "MacNo", "OnACT", "Action"]

const CashierStatus = ({ onClose }) => {
  const [dataTable, setDataTable] = useState([])

  const loadTableData = () => {
    apiClient
      .get(`/api/employ/status`)
      .then((response) => {
        setDataTable(response.data.data)
      })
      .catch((err) => alert(err.message))
  }

  useEffect(() => {
    loadTableData()
  }, [])

  return (
    <DataTable
      columnTable={columnTable}
      dataTable={dataTable}
      initLoad={loadTableData}
    />
  )
}

export default CashierStatus
