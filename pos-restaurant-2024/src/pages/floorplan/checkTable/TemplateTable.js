import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Moment from 'react-moment';
import { Button } from '@mui/material';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const TemplateReport = ({ columnTable, dataTable }) => {
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handlePayment = (tableNo) => {
        navigate(`/payment/${tableNo}`)
    }

    const handleOpenTable = (tableNo) => {
        navigate(`/sale/${tableNo}`)
    }

    return (
        <Paper sx={{ width: '80vw', overflow: 'auto' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columnTable && columnTable.map((column) => (
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
                        {dataTable && dataTable
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.Tcode}>
                                        {columnTable && columnTable.map((column) => {
                                            let value = row[column]
                                            if (column.includes('Date')) {
                                                value = <Moment format='DD/MM/YYYY'>{value}</Moment>
                                            }
                                            if (typeof value === 'number') {
                                                return <TableCell key={column} align="right">
                                                    {value}
                                                </TableCell>
                                            } else {
                                                if (column === 'Action') {
                                                    if (row["TAmount"] > 0) {
                                                        return (
                                                            <TableCell>
                                                                <Button
                                                                    variant='contained' color='secondary'
                                                                    endIcon={<PointOfSaleIcon />}
                                                                    onClick={() => handlePayment(row.Tcode)}>Bill</Button>
                                                            </TableCell>
                                                        )
                                                    } else {
                                                        return (
                                                            <TableCell>
                                                                <Button
                                                                    variant='contained' color='success'
                                                                    startIcon={<MenuBookIcon />}
                                                                    onClick={() => handleOpenTable(row.Tcode)}>Open</Button>
                                                            </TableCell>
                                                        )
                                                    }
                                                }
                                                return (
                                                    <TableCell key={column} align="center">
                                                        {value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                        {dataTable && dataTable.length === 0 && <TableCell colSpan={columnTable.length} align='center'>ไม่พบข้อมูล</TableCell>}
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
    );
}

export default TemplateReport
