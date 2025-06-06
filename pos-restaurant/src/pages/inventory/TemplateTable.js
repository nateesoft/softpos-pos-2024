import React, { useState } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"

const TemplateReport = ({ columnTable, dataTable }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
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
                    key={column.Field}
                    align="center"
                    style={{ minWidth: 100 }}
                  >
                    {column.Field}
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
                      key={row.BPCode}
                    >
                      {columnTable &&
                        columnTable.map((column) => {
                          const value = row[column.Field]
                          return (
                            <TableCell key={column.Field} align="center">
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

export default TemplateReport
