import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Restore'
import CloseIcon from '@mui/icons-material/Close'

const columns = [
  { id: 'V', label: 'V', minWidth: 170 },
  { id: 'ETD', label: 'ETD', minWidth: 100 },
  { id: 'PLUCode', label: 'PLU Code', minWidth: 170},
  { id: 'Description', label: 'Description', minWidth: 170 },
  { id: 'Qty', label: 'Qty', minWidth: 170 },
  { id: 'Price', label: 'Price', minWidth: 170 },
  { id: 'Amount', label: 'Amount', minWidth: 170 },
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

export default function RefundBill({setOpen}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [recieptNo, setRecieptNo] = useState("")
  const [macNo, setMacNo] = useState("")

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const handleSearch = () => {
    
  }

  const handleClear = () => {
    setRecieptNo("")
    setMacNo("")
  }

  return (
    <Box sx={{ ...modalStyle, padding: "20px" }}>
      <Box display="flex" justifyContent="center" sx={{marginBottom: "20px"}}>
        <Typography variant='h5'>
          ยกเลิกรายการที่รับชำระเงินแล้ว Refund Bill
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <TextField label="เลขที่ใบเสร็จรับเงิน" value={recieptNo} onChange={e=>setRecieptNo(e.target.value)} />
        <TextField label="Mac No/Cahier" value={macNo} onChange={e=>setMacNo(e.target.value)} />
        <Button variant='contained' endIcon={<SearchIcon />} onClick={handleSearch}>Search</Button>
        <Button variant='contained' color="warning" endIcon={<ClearIcon />} onClick={handleClear}>Clear</Button>
        <Button variant='contained' color="error" endIcon={<CloseIcon />} onClick={()=>setOpen(false)}>Close</Button>
      </Grid>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
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
    </Box>

  );
}
