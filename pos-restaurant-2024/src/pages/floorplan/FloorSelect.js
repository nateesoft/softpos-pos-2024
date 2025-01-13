import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Divider, IconButton, Menu, Typography } from '@mui/material';
import VipPeopleIcon from '@mui/icons-material/Hail';
import MeetingIcon from '@mui/icons-material/Groups';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';

const FloorSelect = ({ setSelectFloor }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSelect = (data) => {
        setSelectFloor(data)
        setAnchorEl(null);
    }

    return (
        <>
            <IconButton onClick={handleClick}>
                <ViewCompactIcon fontSize='large' sx={{color: 'white'}} />
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
                <MenuItem onClick={() => handleSelect('STAND_ROOM')}>
                    <Box display="flex" justifyContent="center">
                        <RestaurantIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>Normal Room</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleSelect('VIP_ROOM')}>
                    <Box display="flex" justifyContent="center">
                        <VipPeopleIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>VIP Room</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleSelect('MEETING_ROOM')}>
                    <Box display="flex" justifyContent="center">
                        <MeetingIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>Meeting Room</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleSelect('DINNING_ROOM')}>
                    <Box display="flex" justifyContent="center">
                        <DinnerDiningIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>Dinner Room</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleSelect('WARTER_BAR')}>
                    <Box display="flex" justifyContent="center">
                        <LocalBarIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>Warter Bar</Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </>
    );
}

export default FloorSelect
