import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Grid2, IconButton, Menu, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

const LanguageSettings = () => {
    const {i18n} = useTranslation('global')
    const [anchorEl, setAnchorEl] = useState(null);
    const [language, setLanguage] = useState(localStorage.getItem('language')||'en')
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (data) => {
        setAnchorEl(false)
        setLanguage(data)
        i18n.changeLanguage(data)
        localStorage.setItem('language', data)
    };

    useEffect(()=> {
        i18n.changeLanguage(language)
        localStorage.setItem('language', 'en')
    }, [])

    return (
        <>
            <IconButton onClick={handleClick}>
                <LanguageIcon sx={{ color: 'white', marginRight: "5px" }} />
                <Typography sx={{color: "white"}}>{language}</Typography>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=>handleChange('en')}>
                    <Grid2 container justifyContent="center">
                        <img src='/images/en.png' alt="United Kingdom" width={32} height={32} style={{marginRight: "5px"}} />
                        <Typography variant='p'>English</Typography>
                    </Grid2>
                </MenuItem>
                <MenuItem onClick={()=>handleChange('th')}>
                    <Grid2 container justifyContent="center">
                        <img src='/images/th.png' alt="United Kingdom" width={32} height={32} style={{marginRight: "5px"}} />
                        <Typography variant='p'>Thai</Typography>
                    </Grid2>
                </MenuItem>
            </Menu>
        </>

    );
}

export default LanguageSettings
