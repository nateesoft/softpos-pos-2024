import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Checkbox, ListItemText, TextField } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const options = [
    'เผ็ดมาก',
    'เผ็ดกลาง',
    'เผ็ดน้อย',
    'ไม่เผ็ด',
    'ไม่ใส่ผัก',
    'หวานน้อย',
    'หวานมาก',
    'ไม่ใส่ชูรส',
    'ไม่ใส่น้ำปลา'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

const OptionMenuSelect = () => {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const { target: { value }, } = event;
        setPersonName(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <FormControl sx={{ margin: "10px", width: "390px" }}>
            <InputLabel id="demo-multiple-chip-label">ข้อความพิเศษ</InputLabel>
            <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="ข้อความพิเศษ" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip variant='outlined' key={value} label={value} />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {options.map((name) => (
                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                        <Checkbox checked={personName.includes(name)} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
            <TextField fullWidth label="ระบุข้อความเพิ่มเติม..." sx={{ marginTop: "10px" }} id="fullWidth" multiline={true} rows={2} />
        </FormControl>
    );
}

export default OptionMenuSelect