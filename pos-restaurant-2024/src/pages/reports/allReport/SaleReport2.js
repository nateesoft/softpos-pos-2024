import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';

const columns = [
  { id: 'name', label: 'ชื่อสินค้า', minWidth: 170 },
  { id: 'code', label: 'รหัสสินค้า', minWidth: 100 },
  {
    id: 'population',
    label: 'ช่วงเช้า (08.00 - 11.30)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'ช่วงกลางวัน (11.45 - 14.30)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'ช่วงเย็น (16.00 - 22.00)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('อาหารไทย 1', 'P001', 1324171354, 3287263),
  createData('อาหารไทย 2', 'P001', 1403500365, 9596961),
  createData('อาหารไทย 3', 'P001', 60483973, 301340),
  createData('อาหารไทย 4', 'P001', 327167434, 9833520),
  createData('อาหารไทย 5', 'P001', 37602103, 9984670),
  createData('อาหารไทย 6', 'P001', 25475400, 7692024),
  createData('อาหารไทย 7', 'P001', 83019200, 357578),
  createData('อาหารไทย 8', 'P001', 4857000, 70273),
  createData('อาหารไทย 9', 'P001', 126577691, 1972550),
  createData('อาหารไทย 10', 'P001', 126317000, 377973),
  createData('อาหารไทย 11', 'P001', 67022000, 640679),
  createData('อาหารไทย 12', 'P001', 67545757, 242495),
  createData('อาหารไทย 13', 'P001', 146793744, 17098246),
  createData('อาหารไทย 14', 'P001', 200962417, 923768),
  createData('อาหารไทย 15', 'P001', 210147125, 8515767),
];

export default function SaleReport2() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={3} sx={{ width: '100%', padding: "20px", margin: "10px" }}>
      <Box sx={{width: "100%", backgroundColor: "#eee", padding: "20px", borderRadius: "5px"}}>
        <Typography variant='h5'>รายงานการขาย - 2</Typography>
      </Box>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                ข้อมูลสินค้า (DineIn, TakeAway, Delivery)
              </TableCell>
              <TableCell align="center" colSpan={3}>
                รายละเอียดการขาย (Sale Info)
              </TableCell>
            </TableRow>
            <TableRow>
              {columns && columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
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
                    {columns && columns.map((column) => {
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
  );
}
