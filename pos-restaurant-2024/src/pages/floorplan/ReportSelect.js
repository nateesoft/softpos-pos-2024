import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider, Typography } from '@mui/material';

import AssessmentIcon from '@mui/icons-material/Assessment';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useNavigate } from 'react-router-dom';

const ReportSelect = (props) => {
    const { sxStyle = { color: "white" }, variant = 'outlined' } = props
    const navigate = useNavigate()

    const [value, setValue] = useState("")

    const handleChange = (event) => {
        const data = event.target.value
        if (data === 'saleReport') {
            viewReport("")
        } else if (data === 'saleReport1') {
            viewReport("1")
        }  else if (data === 'saleReport2') {
            viewReport("2")
        } else if (data === 'saleReport3') {
            viewReport("3")
        } else if (data === 'saleReport4') {
            viewReport("4")
        } else if (data === 'saleReport5') {
            viewReport("5")
        }

        setValue("");
    };

    const viewReport = (page) => {
        navigate("/sale-report" + page)
    }

    return (
        <Box sx={{ minWidth: 250, border: "2px solid white" }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    variant={variant}
                    sx={sxStyle}
                    onChange={handleChange}
                >
                    <MenuItem value="saleReport">
                        <Box display="flex" justifyContent="center">
                            <AssessmentIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>ภาพรวมการขาย</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem value="saleReport1">
                        <Box display="flex" justifyContent="center">
                            <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 1</Typography>
                        </Box>
                    </MenuItem>
                    <MenuItem value="saleReport2">
                        <Box display="flex" justifyContent="center">
                            <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 2</Typography>
                        </Box>
                    </MenuItem>
                    <MenuItem value="saleReport3">
                        <Box display="flex" justifyContent="center">
                            <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 3</Typography>
                        </Box>
                    </MenuItem>
                    <MenuItem value="saleReport4">
                        <Box display="flex" justifyContent="center">
                            <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 4</Typography>
                        </Box>
                    </MenuItem>
                    <MenuItem value="saleReport5">
                        <Box display="flex" justifyContent="center">
                            <SummarizeIcon sx={{ marginRight: "10px" }} /> <Typography variant='p'>รายงานการขาย 5</Typography>
                        </Box>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default ReportSelect
