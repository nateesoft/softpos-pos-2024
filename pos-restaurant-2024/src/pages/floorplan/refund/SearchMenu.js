import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Button } from '@mui/material';
import FindInPageIcon from '@mui/icons-material/FindInPage';

import apiClient from '../../../httpRequest';
import CalendarMonth from '@mui/icons-material/CalendarMonth'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '22ch',
            },
        },
    },
}));

const SearchMenu = ({ setMemberMasters }) => {
    const [recieptNo, setRecieptNo] = useState("")
    const [macNo, setMacNo] = useState("")
    const [billDate, setBillDate] = useState("")

    const handleSearchBillno = () => {
        if (!recieptNo && !macNo) {
            return;
        }
        apiClient.post('/api/billno/search', { recieptNo, macNo })
            .then(response => {
                setMemberMasters(response.data.data)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ borderRadius: "15px 15px 0px 0px" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <HowToRegIcon />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="เลขที่ใบเสร็จ…"
                            inputProps={{ 'aria-label': 'search' }} value={recieptNo} onChange={e => setRecieptNo(e.target.value)}
                        />
                    </Search>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Mac No/ Cahier..."
                            inputProps={{ 'aria-label': 'search' }} value={macNo} onChange={e => setMacNo(e.target.value)}
                        />
                    </Search>
                    <Search>
                        <SearchIconWrapper>
                            <CalendarMonth />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Bill Date..."
                            inputProps={{ 'aria-label': 'search' }} value={billDate} onChange={e => setBillDate(e.target.value)}
                        />
                    </Search>
                    <Box margin={1}>
                        <Button
                            variant='contained'
                            sx={{ backgroundColor: "#eee", color: "black" }}
                            startIcon={<FindInPageIcon />}
                            onClick={handleSearchBillno}>ค้นหาข้อมูล</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default SearchMenu
