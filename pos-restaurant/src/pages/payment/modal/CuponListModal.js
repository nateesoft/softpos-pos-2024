import React, { useEffect, useState } from "react"
import {
  Box,
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
import CloseIcon from "@mui/icons-material/Close"
import ConfirmIcon from "@mui/icons-material/CheckCircle"

import apiClient from "../../../httpRequest"

const columns = [
  { id: "CuType", label: "Type", minWidth: 50, align: "center" },
  { id: "CuCode", label: "Code", minWidth: 50, align: "center" },
  { id: "CuName", label: "Description/รายการ", minWidth: 50 },
  { id: "CuDisc", label: "Discount(%)", minWidth: 50 },
  { id: "CuDiscBath", label: "Baht", minWidth: 50 },
  { id: "qty", label: "Qty", minWidth: 100, align: "right" }
]

const CuponListModal = (props) => {
  const { 
    onClose, 
    setSpecialCuponAmt, 
    tableFile,
    setPrCuCode,
    setPrCuDisc,
    setPrCuBath
  } = props

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [cuponList, setCuponList] = useState([])

  // credit info
  const [crCode, setCrCode] = useState("")

  const loadCreditListData = () => {
    apiClient
      .get(`/api/cupon/list`)
      .then((response) => {
        if (response.status === 200) {
          setCuponList(response.data.data)
        }
      })
      .catch(() => {
        // handleNotification(err.message)
      })
  }

  const handleChange = (cuCode, field, value) => {
    setCuponList((prevData) =>
      prevData.map((row) => (row.CuCode === cuCode ? { ...row, [field]: value } : row))
    );
  };

  const handleSave = () => {
    const getCuponSelect = cuponList.filter(item => item.qty>0)
    if (getCuponSelect.length > 0) {
      apiClient
        .post(`/api/cupon/saveList`, { 
          cuponList: getCuponSelect, 
          tableFile,
          cashier: tableFile.Cashier,
          tableNo: tableFile.Tcode,
          macNo: tableFile.MacNo
        })
        .then((response) => {
          if (response.status === 200) {
            const cuponAmount = response.data.data
            setSpecialCuponAmt(cuponAmount.CuAmt)
            setPrCuCode(getCuponSelect[0].CuCode)
            setPrCuDisc(getCuponSelect[0].CuDisc)
            setPrCuBath(getCuponSelect[0].CuDiscBath)

            onClose()
          }
        })
        .catch(() => {
          // handleNotification(err.message)
        })
    }
  }

  useEffect(() => {
    loadCreditListData()
  }, [])

  return (
    <>
      <Grid2 container>
        <Grid2 container spacing={1} padding={1} justifyContent="space-between">
            <TextField
              error
              sx={{ marginRight: "5px" }}
              variant="outlined"
              label="รหัสคูปอง"
              value={crCode}
              onChange={(e) => setCrCode(e.target.value)}
            />
        </Grid2>
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
                {cuponList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.CrCode}
                      >
                        {columns &&
                          columns.map((column) => {
                            const value = row[column.id]
                            if (column.id === "qty") {
                              return (
                                <TableCell>
                                  <IconButton>
                                    <TextField 
                                      value={row.qty} 
                                      onChange={e=>handleChange(row.CuCode, "qty", e.target.value)}
                                      onFocus={(event) => {
                                        event.target.select()
                                      }}
                                      type="number"
                                      inputProps={{ min: 0, style: { textAlign: "right" } }} />
                                  </IconButton>
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
      <Box sx={{ marginTop: "30px" }} textAlign="center">
        <Button
          variant="contained"
          sx={{ margin: "5px" }}
          color="error"
          onClick={onClose}
          startIcon={<CloseIcon />}
        >
          ยกเลิก
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "5px" }}
          onClick={handleSave}
          endIcon={<ConfirmIcon />}
        >
          บันทึกข้อมูล
        </Button>
      </Box>
    </>
  )
}

export default CuponListModal
