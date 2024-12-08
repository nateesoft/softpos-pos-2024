import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Modal, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RefundIcon from '@mui/icons-material/ReceiptLong';
import ReceiptIcon from '@mui/icons-material/ReceiptLong';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

import apiClient from '../../../httpRequest';
import SearchMenu from './SearchMenu';
import { POSContext } from '../../../AppContext';
import { ModalConfirm } from '../../../util/AlertPopup';
import ShowNotification from "../../utils/ShowNotification"

const columns = [
  { id: 'action', label: '', minWidth: 150 },
  { id: 'B_Refno', label: 'B_Refno' },
  { id: 'B_PostDate', label: 'B_PostDate', type: "date" },
  { id: 'B_Table', label: 'B_Table' },
  { id: 'B_MacNo', label: 'B_MacNo' },
  { id: 'B_Cashier', label: 'B_Cashier' },
  { id: 'B_NetTotal', label: 'B_NetTotal' },
  { id: 'B_Void', label: 'B_Void' },
  { id: 'B_VoidUser', label: 'B_VoidUser' },
];

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

const RefundBill = () => {
  const navigate = useNavigate();
  const { appData } = useContext(POSContext)
  const { userLogin, posuser, macno } = appData
  const getPosUser = JSON.parse(posuser)

  const [showNoti, setShowNoti] = useState(false)
  const [notiMessage, setNotiMessage] = useState("")
  const [alertType, setAlertType] = useState("info")
  const handleNotification = (message, type = "error") => {
    setNotiMessage(message)
    setAlertType(type)
    setShowNoti(true)
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [billList, setBillList] = useState([])
  const [showConfirm, setShowConfirm] = useState(false)
  const [B_Refno, setBRefno] = useState("")
  const [B_MacNo, setBMacno] = useState("")

  // const [recieptNo, setRecieptNo] = useState("")
  // const [macNo, setMacNo] = useState("")

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const handleShowConfirm = (billNo, B_Refno, B_MacNo) => {
    setBRefno(B_Refno)
    setBMacno(B_MacNo)

    billNo.B_VoidUser = userLogin
    billNo.B_VoidTime = moment().format('HH:mm:ss')

    setShowConfirm(true)
  }

  const handleRefundBill = () => {
    apiClient.post(`/api/billno/refund`, {
      billNo: B_Refno,
      Cashier: userLogin,
      macno: B_MacNo
    })
      .then(response => {
        if(response.status === 200){
          const billNo = response.data.data
          navigate(`/payment/receipt/${billNo}`)
        }else {
          handleNotification("พบข้อผิดพลาดในการยกเลิกบิล!")
        }
      })
      .catch(err => { handleNotification(err.message) })
  }

  const loadBillNo = useCallback(() => {
    apiClient.get('/api/billno')
      .then(response => {
        setBillList(response.data.data)
      })
      .catch(err => { handleNotification(err.message) })
  }, [])

  useEffect(() => {
    loadBillNo()
  }, [loadBillNo])

  return (
    <Box sx={{ ...modalStyle, padding: "20px" }}>
      <SearchMenu setBillList={setBillList} />
      <Grid container spacing={2} sx={{ marginTop: '15px' }}>
        <RefundIcon color="error" />
        <Typography variant='h5' color='error'>
          ยกเลิกบิล (Refund Bill)
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {billList && billList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          let value = row[column.id];
                          if (column.type === 'date') {
                            value = moment(value).format('DD/MM/YYYY')
                          }
                          if (column.id === 'action') {
                            if (row.B_Void === 'V') {
                              return <TableCell>
                                <Typography color='error'>( ยกเลิกรายการ )</Typography>
                              </TableCell>
                            } else {
                              return (
                                <TableCell>
                                  <Button
                                    variant='contained'
                                    color='error'
                                    disabled={'Y' !== getPosUser.Sale2}
                                    onClick={() => handleShowConfirm(row, row.B_Refno, row.B_MacNo)} startIcon={<ReceiptIcon />}>
                                    Refund
                                  </Button>
                                </TableCell>
                              )
                            }
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
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
      </Grid>
      <ModalConfirm
        open={showConfirm}
        setOpen={() => setShowConfirm(false)}
        onSubmit={handleRefundBill}
        header="Refund Bill"
        content="ยืนยันการทำรายการ ?"
      />
      <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
    </Box>
  )
}

export default RefundBill
