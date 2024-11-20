import React, { useCallback, useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import axios from 'axios'
import { Checkbox, Typography } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function MenuSet({ product }) {
    const [optionalList, setOptionalList] = useState([])
    const loadOptionalList = useCallback(() => {
        axios
            .get(`/api/menu_setup/optional/${product.menu_code}`)
            .then((response) => {
                console.log("initLoadMenu:", response)
                if (response.data.code === 200) {
                    setOptionalList(response.data.data)
                }
            })
            .catch((error) => {
                alert(error)
            })
    }, [product.menu_code])

    useEffect(() => {
        loadOptionalList()
    }, [loadOptionalList])

    return (
        <ImageList sx={{ width: 500 }}>
            <ImageListItem key="Subheader" cols={3} rowHeight={180}>
                <ListSubheader sx={{ backgroundColor: "#123456", color: "white" }}>{product.menu_name} ราคา {product.menu_price} (เลือกได้สูงสุด {product.max_count_set} รายการ)</ListSubheader>
            </ImageListItem>
            {optionalList && optionalList.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                        srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.menu_name} loading="lazy" />
                    <ImageListItemBar
                        title={item.menu_name}
                        subtitle={<Typography sx={{ fontSize: "12px", color: "yellow" }}>ราคา : {item.free === "N" ? "ไม่พรี" : "ฟรี"}</Typography>}
                        actionIcon={<Checkbox {...label} color='warning' defaultChecked={item.auto_select==="Y"} />
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
