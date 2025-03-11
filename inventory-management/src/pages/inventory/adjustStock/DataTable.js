import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'no', label: 'No', width: 80 },
  { id: 'pcode', label: 'รหัสสินค้า PLU', width: 100, align: 'center' },
  { id: 'pname', label: 'ชื่อสินค้า / รายการ', width: 350, align: 'left' },
  { id: 'qty', label: 'จำนวนนับได้จริง', width: 100, align: 'right' },
  { id: 'price', label: 'ราคา/หน่วย', width: 200, align: 'right', format: (value) => value.toFixed(2) },
  { id: 'amount', label: 'ผู้บันทึก', width: 200, align: 'right', format: (value) => value.toFixed(2) },
  { id: 'amount', label: 'หมายเหตุ', width: 200, align: 'right', format: (value) => value.toFixed(2) }
];

function createData(no, pcode, pname, stk, qty, unit, price, amount) {
  return { no, pcode, pname, stk, qty, unit, price, amount };
}

const rows = [
  createData(1, '1001', 'India', 'IN', 1, 'จาน', 3287263, 3287263),
  createData(2, '1002', 'China', 'CN', 1, 'จาน', 9596961, 3287263),
  createData(3, '1003', 'Italy', 'IT', 1, 'จาน', 301340, 3287263),
  createData(4, '1004', 'United States', 'TT', 1, 'จาน', 9833520, 3287263),
  createData(5, '1005', 'Canada', 'CA', 1, 'จาน', 9984670, 3287263),
  createData(6, '1006', 'Australia', 'AU', 1, 'จาน', 7692024, 3287263),
  createData(7, '1007', 'Germany', 'DE', 1, 'จาน', 357578, 3287263),
  createData(8, '1008', 'Ireland', 'IE', 1, 'จาน', 70273, 3287263),
  createData(9, '1009', 'Mexico', 'MX', 1, 'จาน', 1972550, 3287263),
  createData(10, '1010', 'Japan', 'JP', 1, 'จาน', 377973, 3287263),
  createData(11, '1011', 'France', 'FR', 1, 'จาน', 640679, 3287263),
  createData(12, '1012', 'United Kingdom', 1, 'จาน', 242495, 3287263),
  createData(13, '1013', 'Russia', 'RU', 1, 'จาน', 17098246, 3287263),
  createData(14, '1014', 'Nigeria', 'NG', 1, 'จาน', 923768, 3287263),
  createData(15, '1015', 'Brazil', 'BR', 1, 'จาน', 8515767, 3287263)
];

const DataTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
        rowsPerPageOptions={[5, 10, 25, 100]}
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

export default DataTable
