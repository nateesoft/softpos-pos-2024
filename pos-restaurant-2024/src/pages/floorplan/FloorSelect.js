import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider, Typography } from '@mui/material';
import VipPeopleIcon from '@mui/icons-material/Hail';
import MeetingIcon from '@mui/icons-material/Groups';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';


const FloorSelect = (props) => {
    const { selectFloor, setSelectFloor, sxStyle={color: "white"}, variant='outlined' } = props
    console.log('FloorSelect:', props)
    const handleChange = (event) => {
        setSelectFloor(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectFloor}
                    variant={variant}
                    sx={sxStyle}
                    onChange={handleChange}
                >
                    <MenuItem value="STAND_ROOM">
                        <Box display="flex" justifyContent="center">
                            <RestaurantIcon sx={{marginRight: "10px"}} /> <Typography variant='p'>Normal Room</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem value="VIP_ROOM">
                        <Box display="flex" justifyContent="center">
                            <VipPeopleIcon sx={{marginRight: "10px"}} /> <Typography variant='p'>VIP Room</Typography>
                        </Box>
                    </MenuItem>
                    <MenuItem value="MEETING_ROOM">
                        <Box display="flex" justifyContent="center">
                            <MeetingIcon sx={{marginRight: "10px"}} /> <Typography variant='p'>Meeting Room</Typography>
                        </Box>
                    </MenuItem>
                    <MenuItem value="DINNING_ROOM">
                        <Box display="flex" justifyContent="center">
                            <DinnerDiningIcon sx={{marginRight: "10px"}} /> <Typography variant='p'>Dinner Room</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem value="WARTER_BAR">
                        <Box display="flex" justifyContent="center">
                            <LocalBarIcon sx={{marginRight: "10px"}} /> <Typography variant='p'>Warter Bar</Typography>
                        </Box>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default FloorSelect
