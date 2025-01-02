import React, { useCallback, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

import apiClient from '../../httpRequest';
import ShowNotification from "../utils/ShowNotification"

const columns = [
    { id: 'CrCode', label: 'CrCode', minWidth: 50 },
    { id: 'CrName', label: 'CrName', minWidth: 100 },
    { id: 'CrGetCardNo', label: 'CrGetCardNo', minWidth: 100 },
    { id: 'CrCharge', label: 'CrCharge', minWidth: 50 },
    { id: 'action', label: '', minWidth: 50 },
];

const CreditFileList = ({ setClose, setCreditInfo }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [creditFiles, setCreditFiles] = useState([])

    const [showNoti, setShowNoti] = useState(false)
    const [notiMessage, setNotiMessage] = useState("")
    const [alertType, setAlertType] = useState("info")
    const handleNotification = (message, type = "error") => {
        setNotiMessage(message)
        setAlertType(type)
        setShowNoti(true)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSelectCredit = (crCode, crCharge) => {
        setCreditInfo({ crCode, crCharge })
        setClose()
    }

    const loadCreditFile = useCallback(() => {
        apiClient.get('/api/creditfile')
            .then(response => {
                setCreditFiles(response.data.data)
            })
            .catch(err => handleNotification(err.message))
    }, [])

    useEffect(() => {
        loadCreditFile()
    }, [loadCreditFile])

    return (
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
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {creditFiles && creditFiles
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.CrCode}>
                                        {columns && columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id === 'action') {
                                                return (
                                                    <TableCell>
                                                        <Button
                                                            variant='contained'
                                                            color='primary'
                                                            onClick={() => handleSelectCredit(row.CrCode, row.CrCharge)}>
                                                            Select
                                                        </Button>
                                                    </TableCell>
                                                )
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
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
                count={creditFiles.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </Paper>
    );
}

export default CreditFileList
