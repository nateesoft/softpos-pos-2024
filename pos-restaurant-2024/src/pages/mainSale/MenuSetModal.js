import React, { useState, useEffect, useCallback } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios'
import { Box, Button, Checkbox, ImageListItemBar, Typography } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

const MenuSetModal = ({ product }) => {
    const [optionalList, setOptionalList] = useState([])
    const [select, setSelect] = useState([])

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

    const handleChange = () => {
        console.log(select)
    }

    useEffect(() => {
        loadOptionalList()
    }, [loadOptionalList])

    return (
        <ImageList sx={{ minWidth: 500, maxHeight: 450, padding: "10px" }}>
            {optionalList && optionalList.map((item, index) => (
                <ImageListItem key={item.image_url}>
                    <img
                        srcSet={`${item.image_url}?fit=crop&auto=format&dpr=2 3x`}
                        src={`${item.image_url}?fit=crop&auto=format`}
                        alt={item.menu_name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={item.menu_name}
                        position="bottom"
                        subtitle={
                            item.can_change==='Y' ? 
                            <Button variant='contained'>เปลี่ยนรายการ</Button>: 
                            <Typography color='orange'>ไม่สามารถเปลี่ยนได้</Typography>
                        }
                        actionIcon={
                            <Checkbox defaultChecked={item.auto_select === "Y"} checkedIcon={<LibraryAddCheckIcon sx={{ color: "yellow" }} />} sx={{ margin: "5px", color: "white" }} />
                        }
                        actionPosition="left"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

export default MenuSetModal
