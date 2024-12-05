import React, { useCallback, useEffect, useState } from 'react';
import { Box, Checkbox, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import apiClient from '../../httpRequest';
import ShowNotification from '../utils/ShowNotification';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function MenuSet({ product }) {
    const [optionalList, setOptionalList] = useState([])

    const [showNoti, setShowNoti] = useState(false)
    const [notiMessage, setNotiMessage] = useState("")
    const [alertType, setAlertType] = useState("info")
    const handleNotification = (message, type = "error") => {
        setNotiMessage(message)
        setAlertType(type)
        setShowNoti(true)
    }

    const loadOptionalList = useCallback(() => {
        apiClient
            .get(`/api/menu_setup/optional/${product.menu_code}`)
            .then((response) => {
                if (response.data.code === 200) {
                    setOptionalList(response.data.data)
                }
            })
            .catch((error) => {
                handleNotification(error)
            })
    }, [product.menu_code])

    useEffect(() => {
        loadOptionalList()
    }, [loadOptionalList])

    return (
        // <ImageList sx={{ width: 750, height: 450 }}>
        //     <ImageListItem key="Subheader" cols={4} rowHeight={100}>
        //         <ListSubheader sx={{ backgroundColor: "#123456", color: "white" }}>{product.menu_name} ราคา {product.menu_price} (เลือกได้สูงสุด {product.max_count_set} รายการ)</ListSubheader>
        //     </ImageListItem>
        //     {optionalList && optionalList.map((item) => (
        //         <ImageListItem key={item.id}>
        //             <img
        //                 srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        //                 src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
        //                 alt={item.menu_name} loading="lazy" />
        //             <ImageListItemBar
        //                 title={item.menu_name}
        //                 subtitle={<Typography sx={{ fontSize: "12px", color: "yellow" }}>ราคา : {item.free === "N" ? "ไม่พรี" : "ฟรี"}</Typography>}
        //                 actionIcon={<Checkbox {...label} sx={{border: "1px solid white"}} color='warning' defaultChecked={item.auto_select === "Y"} />
        //                 }
        //             />
        //         </ImageListItem>
        //     ))}
        // </ImageList>
        <div style={{ height: "550px", width: "590px", overflow: "auto" }}>
            <Box padding={2}>
                <Typography variant='h5'>
                    {product.menu_name} ราคา {product.menu_price} (เลือกได้สูงสุด {product.max_count_set} รายการ)
                </Typography>
            </Box>
            <Grid container spacing={1} justifyContent="space-around">
                {optionalList && optionalList.map((item) => (
                    <Grid>
                        <img src={item.image_url} height={160} width={120} alt={item.menu_name} loading="lazy" />
                        {/* <Checkbox {...label} sx={{border: "1px solid white"}} color='warning' defaultChecked={item.auto_select === "Y"} /> */}
                    </Grid>
                ))}
            </Grid>
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </div>
    );
}
