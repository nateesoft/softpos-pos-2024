import React, { useEffect, useState } from "react"

import apiClient from "../../../../httpRequest"
import Search from "./Search"
import DataTable from "./DataTable"

const columnTable = [
  { name: "Macno", align: "center", label: "หมายเลขเครื่อง" },
  { name: "R_Table", align: "center", label: "เบอร์โต๊ะ" },
  { name: "R_Date", align: "center", label: "วันที่ทำรายการ" },
  { name: "R_Total", align: "right", label: "ราคารวมสินค้า" },
  { name: "R_Void", align: "center", label: "สถานะยกเลิก (V)" },
  { name: "TCurTime", align: "center", label: "ทำรายการล่าสุด" },
  { name: "TCustomer", align: "right", label: "จำนวนลูกค้า" }
]

const TableOnAction = () => {
  const [search, setSearch] = useState("")
  const [dataTable, setDataTable] = useState([])

  const loadTableData = () => {
    apiClient
      .get(`/api/report/table-on-action/list`)
      .then((response) => {
        setDataTable(response.data.data)
      })
      .catch((err) => alert(err.message))
  }

  const handleLoad = () => {
    loadTableData()
  }

  useEffect(() => {
    loadTableData()
  }, [])

  return (
    <>
      <Search search={search} setSearch={setSearch} handleLoad={handleLoad} />
      <DataTable columnTable={columnTable} dataTable={dataTable} />
    </>
  )
}

export default TableOnAction
