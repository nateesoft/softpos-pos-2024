import React, { useContext, useEffect, useState } from "react"
import {
  Button,
  Grid2,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@mui/material"

import apiClient from "../../../httpRequest"
import { POSContext } from "../../../AppContext"

const columns = [
  { id: "Tcode", label: "Table No", minWidth: 50, align: "center" },
  { id: "NetTotal", label: "Net Total", minWidth: 50, align: "center" },
  { id: "action", label: "", minWidth: 100, align: "right" }
]

const ListTable = ({ tableNo, setOpenPin }) => {
  const { appData, setAppData } = useContext(POSContext)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [tableSplit, setTableSplit] = useState([])

  const loadTableListData = () => {
    apiClient
      .get(`/api/tablefile/list/${tableNo}`)
      .then((response) => {
        if (response.status === 200) {
          setTableSplit(response.data.data)
        }
      })
      .catch(() => {
        // handleNotification(err.message)
      })
  }

  const handleClickOpenTable = (tableNo) => {
    setAppData({
      ...appData,
      tableInfo: {
        tableNo: tableNo,
        tableStatus: "available"
      }
    })
    setOpenPin(true)
  };

  useEffect(() => {
    loadTableListData()
  }, [])

  return (
    <>
      <Grid2 container>
        <Grid2>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns &&
                    columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableSplit
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.Tcode}
                      >
                        {columns &&
                          columns.map((column) => {
                            const value = row[column.id]
                            if (column.id === "action") {
                              return (
                                <TableCell>
                                    <Button
                                      variant="contained"
                                      color="success"
                                      onClick={()=>handleClickOpenTable(row.Tcode)}
                                    >
                                      เปิดโต๊ะ
                                    </Button>
                                  </TableCell>
                              )
                            }
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {value}
                              </TableCell>
                            )
                          })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
      </Grid2>
    </>
  )
}

export default ListTable
