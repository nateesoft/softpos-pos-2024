import React, { useCallback, useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RefundIcon from '@mui/icons-material/ReceiptLong';
import axios from 'axios';
import ReceiptIcon from '@mui/icons-material/ReceiptLong';
import moment from 'moment'

import SearchMenu from './SearchMenu';
import { POSContext } from '../../../AppContext';

const columns = [
  { id: 'action', label: '' },
  { id: 'B_Refno', label: 'B_Refno' },
  { id: 'B_PostDate', label: 'B_PostDate', type: "date" },
  { id: 'B_Table', label: 'B_Table' },
  { id: 'B_MacNo', label: 'B_MacNo' },
  { id: 'B_Cashier', label: 'B_Cashier' },
  { id: 'B_NetTotal', label: 'B_NetTotal' },
  { id: 'B_Void', label: 'B_Void' },
  { id: 'B_VoidUser', label: 'B_VoidUser' },
];

function createData(V, ETD, PLUCode, Description, Qty, Price, Amount) {
  return { V, ETD, PLUCode, Description, Qty, Price, Amount };
}

const rows = [
  createData('', 'E', 'India', 1, 'IN', 1324171354, 3287263),
  createData('', 'E', 'China', 1, 'CN', 1403500365, 9596961),
  createData('', 'E', 'Italy', 1, 'IT', 60483973, 301340),
  createData('', 'E', 'United States', 1, 'US', 327167434, 9833520),
  createData('', 'E', 'Canada', 1, 'CA', 37602103, 9984670),
  createData('', 'E', 'Australia', 1, 'AU', 25475400, 7692024),
  createData('', 'E', 'Germany', 1, 'DE', 83019200, 357578),
  createData('', 'E', 'Ireland', 1, 'IE', 4857000, 70273),
  createData('', 'E', 'Mexico', 1, 'MX', 126577691, 1972550),
  createData('', 'E', 'Japan', 1, 'JP', 126317000, 377973),
  createData('', 'E', 'France', 1, 'FR', 67022000, 640679),
  createData('', 'E', 'United Kingdom', 1, 'GB', 67545757, 242495),
  createData('', 'E', 'Russia', 1, 'RU', 146793744, 17098246),
  createData('', 'E', 'Nigeria', 1, 'NG', 200962417, 923768),
  createData('', 'E', 'Brazil', 1, 'BR', 210147125, 8515767),
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

const RefundBill = ({ setOpen }) => {
  const { appData } = useContext(POSContext)
  const { userLogin } = appData

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [billList, setBillList] = useState([])

  const [recieptNo, setRecieptNo] = useState("")
  const [macNo, setMacNo] = useState("")

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const handleRefundBill = (billNoData) => {
    axios.post(`/api/billno/refund`, {
      billNo: billNoData.B_Refno,
      Cashier: userLogin
    })
      .then(response => {
        setOpen(false)
      })
      .catch(err => console.log(err))
  }

  const loadBIllNo = useCallback(() => {
    axios.get('/api/billno')
      .then(response => {
        setBillList(response.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    loadBIllNo()
  }, [loadBIllNo])

  return (
    <Box sx={{ ...modalStyle, padding: "20px" }}>
      <SearchMenu setBillList={setBillList} />
      <Grid container spacing={2} sx={{ marginTop: '15px' }}>
        <RefundIcon color="error" />
        <Typography variant='h5' color='error'>
          ยกเลิกรายการบิลที่รับชำระเงินแล้ว (Refund Bill)
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
                                    onClick={() => handleRefundBill(row)} startIcon={<ReceiptIcon />}>
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
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Box>
  );
}

export default RefundBill
