import React, { useCallback, useContext, useEffect, useState } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import RefundIcon from "@mui/icons-material/ReceiptLong"
import ReceiptIcon from "@mui/icons-material/ReceiptLong"
import moment from "moment"
import { useNavigate } from "react-router-dom"
import ConfirmIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"

import apiClient from "../../../httpRequest"
import SearchMenu from "./SearchMenu"
import { POSContext } from "../../../AppContext"
import { ModalConfirm } from "../../ui-utils/AlertPopup"
import UserAuthen from "../../modal/UserAuthen"
import { useAlert } from "../../../contexts/AlertContext"

const columns = [
  { id: "action", label: "", minWidth: 150 },
  { id: "B_Refno", label: "B_Refno" },
  { id: "B_PostDate", label: "B_PostDate", type: "date" },
  { id: "B_Table", label: "B_Table" },
  { id: "B_MacNo", label: "B_MacNo" },
  { id: "B_Cashier", label: "B_Cashier" },
  { id: "B_NetTotal", label: "B_NetTotal" },
  { id: "B_Void", label: "B_Void" },
  { id: "B_VoidUser", label: "B_VoidUser" }
]

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  border: "1px solid #eee",
  boxShadow: 24
}

const RefundBill = ({ socket }) => {
  console.log("RefundBill")
  const navigate = useNavigate()
  const { appData } = useContext(POSContext)
  const { handleNotification } = useAlert()

  const { userLogin, posuser, macno } = appData
  const PosUser = posuser ? JSON.parse(posuser) : {}

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [billList, setBillList] = useState([])
  const [showConfirm, setShowConfirm] = useState(false)
  const [B_Refno, setBRefno] = useState("")

  const [showAuthen, setShowAuthen] = useState(false)
  const [authenUser, setAuthenUser] = useState(null)
  const [openTableReturn, setOpenTableReturn] = useState(false)
  const [tableNo, setTableNo] = useState("")
  const [billRefNo, setBillRefNo] = useState("")

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const checkAuthenValid = (BillRefNo) => {
    setBRefno(BillRefNo)
    if ("Y" !== PosUser.Sale2 && !authenUser) {
      setShowAuthen(true)
    } else {
      handleShowConfirm()
    }
  }

  const handleShowConfirm = () => {
    setShowConfirm(true)
  }

  const handleRefundBill = () => {
    apiClient
      .post(`/api/billno/refund`, {
        billNo: B_Refno,
        Cashier: authenUser ? authenUser.UserName : userLogin,
        macno: macno
      })
      .then((response) => {
        console.log("response:", response)
        if (response.status === 200) {
          setShowConfirm(false)
          loadBillNo()
        } else {
          handleNotification("พบข้อผิดพลาดในการยกเลิกบิล!")
        }
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }

  const loadBillNo = useCallback(() => {
    apiClient
      .get("/api/billno")
      .then((response) => {
        setBillList(response.data.data)
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }, [])

  const loadBillToBalance = () => {
    if (!tableNo) {
      return
    }
    apiClient
      .post("/api/billno/toBalance", { billRefNo, tableNo })
      .then((response) => {
        if (response.data.status === 2000) {
          navigate(`/sale/${tableNo}`)
        }
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }

  const handleOpenTable = (billNo) => {
    setBillRefNo(billNo)
    setOpenTableReturn(true)
  }

  useEffect(() => {
    loadBillNo()
  }, [loadBillNo])

  return (
    <Box sx={{ ...modalStyle, padding: "20px" }}>
      <SearchMenu setBillList={setBillList} />
      <Grid2 container spacing={2} sx={{ marginTop: "15px" }}>
        <RefundIcon color="error" />
        <Typography variant="h5" color="error">
          ยกเลิกบิล (Refund Bill)
        </Typography>
      </Grid2>
      <Grid2 container spacing={2}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {billList &&
                  billList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            let value = row[column.id]
                            if (column.type === "date") {
                              value = moment(value).format("DD/MM/YYYY")
                            }
                            if (column.id === "action") {
                              if (row.B_Void === "V") {
                                return (
                                  <TableCell>
                                    <Button
                                      variant="outlined"
                                      color="success"
                                      onClick={() =>
                                        handleOpenTable(row.B_Refno)
                                      }
                                    >
                                      ดึงรายการรับชำระใหม่
                                    </Button>
                                  </TableCell>
                                )
                              } else {
                                return (
                                  <TableCell>
                                    <Button
                                      variant="contained"
                                      color="error"
                                      onClick={() =>
                                        checkAuthenValid(row.B_Refno)
                                      }
                                      startIcon={<ReceiptIcon />}
                                    >
                                      Refund
                                    </Button>
                                  </TableCell>
                                )
                              }
                            }
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
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
            count={billList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid2>
      <ModalConfirm
        open={showConfirm}
        setOpen={() => setShowConfirm(false)}
        onSubmit={handleRefundBill}
        header="Refund Bill"
        content="ยืนยันการทำรายการ ?"
      />
      <Modal open={showAuthen}>
        <Box sx={{ ...modalStyle, padding: "10px" }}>
          <UserAuthen
            onClose={() => setShowAuthen(false)}
            setAuthenUser={setAuthenUser}
            handleShowConfirm={handleShowConfirm}
          />
        </Box>
      </Modal>
      <Modal open={openTableReturn} onClose={() => setOpenTableReturn(false)}>
        <Box sx={{ ...modalStyle, padding: "10px", width: "450px" }}>
          <Grid2 container spacing={2} padding={2} direction="column">
            <TextField
              label="เลือกหมายเลขโต๊ะ ที่ต้องการย้ายเข้า"
              value={tableNo}
              onChange={(e) => setTableNo(e.target.value)}
            />
          </Grid2>
          <Box display="flex" justifyContent="center">
            <Grid2 container spacing={2} padding={2}>
              <Button
                variant="contained"
                color="error"
                endIcon={<CancelIcon />}
                onClick={() => setOpenTableReturn(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="info"
                endIcon={<ConfirmIcon />}
                onClick={loadBillToBalance}
              >
                นำเข้าเมนูอาหาร
              </Button>
            </Grid2>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default RefundBill
