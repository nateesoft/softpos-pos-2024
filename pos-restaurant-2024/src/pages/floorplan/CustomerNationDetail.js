import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid2'

const min = 0;
const max = 10;

const CustomerNationDetail = props => {
    const {thaiPeople, europePeople, americaPeople, asiaPeople, 
        setThaiCount, setEuropeCount, setAmericaCount, setAsiaCount} = props
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    รายละเอียดลูกค้าแต่ละสัญชาติ
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <TextField
                                id="outlined-number"
                                label="คนไทย (ท่าน)"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                value={thaiPeople}
                                onChange={(e) => {
                                    var value = parseInt(e.target.value, 10);
                                    if (value > max) value = max;
                                    if (value < min) value = min;
                                    setThaiCount(value);
                                }}
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextField
                                id="outlined-number"
                                label="คนยุโรป (ท่าน)"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                value={europePeople}
                                onChange={(e) => {
                                    var value = parseInt(e.target.value, 10);
                                    if (value > max) value = max;
                                    if (value < min) value = min;
                                    setEuropeCount(value);
                                }}
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextField
                                id="outlined-number"
                                label="คนอเมริกา (ท่าน)"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                value={americaPeople}
                                onChange={(e) => {
                                    var value = parseInt(e.target.value, 10);
                                    if (value > max) value = max;
                                    if (value < min) value = min;
                                    setAmericaCount(value);
                                }}
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextField
                                id="outlined-number"
                                label="คนเอเชีย (ท่าน)"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                value={asiaPeople}
                                onChange={(e) => {
                                    var value = parseInt(e.target.value, 10);
                                    if (value > max) value = max;
                                    if (value < min) value = min;
                                    setAsiaCount(value);
                                }}
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CustomerNationDetail