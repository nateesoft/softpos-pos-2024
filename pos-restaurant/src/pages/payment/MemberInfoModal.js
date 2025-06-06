import React, { useCallback, useEffect, useState } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import { Button } from "@mui/material"
import SelectIcon from "@mui/icons-material/CheckCircle"

import apiClient from "../../httpRequest"
import SearchAppBar from "./member/SearchMember"
import { useAlert } from "../../contexts/AlertContext"

const columns = [
  { id: "action", label: "", minWidth: 50 },
  { id: "Member_Code", label: "Member_Code", minWidth: 50 },
  { id: "Member_NameThai", label: "Member_NameThai", minWidth: 100 },
  { id: "Member_NameEng", label: "Member_NameEng", minWidth: 50 },
  { id: "Member_Brithday", label: "Member_Brithday", minWidth: 50 },
  { id: "Member_Mobile", label: "Member_Mobile", minWidth: 50 },
  { id: "Member_TotalPurchase", label: "Member_TotalPurchase", minWidth: 50 },
  { id: "Member_TotalScore", label: "Member_TotalScore", minWidth: 50 }
]

const MemberInfoModal = ({ tableNo, setClose, setMemberInfo }) => {
  const { handleNotification } = useAlert()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [memmasters, setMemberMasters] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleSelectMember = (data) => {
    // update table member
    apiClient
      .patch(`/api/tablefile/updateMember/${tableNo}`, data)
      .then((response) => {
        setMemberInfo(data)
        setClose()
      })
      .catch((err) => handleNotification(err.message))
  }

  const loadMemmaster = useCallback(() => {
    apiClient
      .get("/api/crm/member")
      .then((response) => {
        setMemberMasters(response.data.data)
      })
      .catch((err) => handleNotification(err.message))
  }, [handleNotification])

  useEffect(() => {
    loadMemmaster()
  }, [loadMemmaster])

  return (
    <>
      <SearchAppBar setMemberMasters={setMemberMasters} />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns && columns.map((column) => (
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
              {memmasters && memmasters
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.CrCode}
                    >
                      {columns && columns.map((column) => {
                          const value = row[column.id]
                          if (column.id === "action") {
                            return (
                              <TableCell>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleSelectMember(row)}
                                  endIcon={<SelectIcon />}
                                >
                                  เลือก
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={memmasters.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default MemberInfoModal
