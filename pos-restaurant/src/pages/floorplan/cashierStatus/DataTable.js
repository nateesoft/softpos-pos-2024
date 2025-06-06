import React, { useState } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import Moment from "react-moment"
import { Button } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"

import apiClient from "../../../httpRequest"

const DataTable = ({ columnTable, dataTable, initLoad }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleLogout = (username) => {
    apiClient
      .post(`/api/employ/forceLogout`, { username })
      .then((response) => {
        if (response.status === 200) {
          initLoad()
        }
      })
      .catch((err) => alert(err.message))
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columnTable &&
                columnTable.map((column) => (
                  <TableCell
                    key={column}
                    align="center"
                    style={{ minWidth: 100 }}
                  >
                    {column}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable &&
              dataTable
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.Tcode}
                    >
                      {columnTable &&
                        columnTable.map((column) => {
                          let value = row[column]
                          if (column.includes("Date")) {
                            value = <Moment format="DD/MM/YYYY">{value}</Moment>
                          }
                          if (typeof value === "number") {
                            return (
                              <TableCell key={column} align="right">
                                {value}
                              </TableCell>
                            )
                          } else {
                            if (column === "Action") {
                              return (
                                <TableCell>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    endIcon={<LogoutIcon />}
                                    onClick={() => handleLogout(row.Username)}
                                  >
                                    Logout
                                  </Button>
                                </TableCell>
                              )
                            }
                            return (
                              <TableCell key={column} align="center">
                                {value}
                              </TableCell>
                            )
                          }
                        })}
                    </TableRow>
                  )
                })}
            {dataTable && dataTable.length === 0 && (
              <TableCell colSpan={columnTable.length} align="center">
                ไม่พบข้อมูล
              </TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50, 100]}
        component="div"
        count={dataTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default DataTable
