import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Checkbox, ListItemText, TextField } from '@mui/material';

import ShowNotification from "../utils/ShowNotification"
import apiClient from '../../httpRequest';

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

function getStyles(name, optList, theme) {
    return {
        fontWeight: optList.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

const OptionMenuSelect = ({ productCode, optList, setSpecialText, setOptList }) => {
    const theme = useTheme();
    const [options, setOptions] = useState([])

    const [showNoti, setShowNoti] = useState(false)
    const [notiMessage, setNotiMessage] = useState("")
    const [alertType, setAlertType] = useState("info")
    const handleNotification = (message, type = "error") => {
      setNotiMessage(message)
      setAlertType(type)
      setShowNoti(true)
    }

    const handleChange = (event) => {
        const { target: { value }, } = event;
        setOptList(typeof value === 'string' ? value.split(',') : value);
    };

    const addSpecialMessage = (data) => {
        setSpecialText(data)
    }

    const initLoad = useCallback(() => {
        apiClient
            .get(`/api/optionfile/${productCode}`)
            .then((response) => {
                if (response.data.data) {
                    setOptions(response.data.data)
                }
            })
            .catch((error) => {
                handleNotification(error.message)
            })
    }, [])

    useEffect(() => {
        initLoad()
    }, [initLoad])

    return (
        <FormControl sx={{ margin: "10px", width: "390px" }}>
            <InputLabel id="demo-multiple-chip-label">ข้อความพิเศษ</InputLabel>
            <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={optList}
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
                {options && options.map((opt) => (
                    <MenuItem key={opt.OptionName} value={opt.OptionName} style={getStyles(opt.OptionName, optList, theme)}>
                        <Checkbox checked={optList.includes(opt.OptionName)} />
                        <ListItemText primary={opt.OptionName} />
                    </MenuItem>
                ))}
            </Select>
            <TextField fullWidth label="ระบุข้อความเพิ่มเติม..." onChange={e => addSpecialMessage(e.target.value)} sx={{ marginTop: "10px" }} id="fullWidth" multiline={true} rows={2} />
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </FormControl>
    );
}

export default OptionMenuSelect
