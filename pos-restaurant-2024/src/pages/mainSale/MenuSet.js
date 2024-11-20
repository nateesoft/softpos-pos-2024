import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Add';

export default function MenuSet({ menuName = "ALL Menu SetA (Please select 16qty)" }) {
    return (
        <ImageList sx={{ height: 650 }}>
            <ImageListItem key="Subheader" cols={3}>
                <ListSubheader sx={{backgroundColor: "#123456", color: "white"}}>{menuName}</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 3x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.group}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: '/images/product/drink-04.png',
        title: 'ชามะนาว',
        group: 'Group A'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        group: 'Group A',
    },
    {
        img: '/images/product/drink-01.png',
        title: 'กาแฟโบราณ',
        group: 'Group Test 01',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        group: 'Group Test 01',
    },
    {
        img: '/images/product/drink-02.png',
        title: 'ชาไทยใส่นม',
        group: 'Tester Group Show'
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'น้ำผึ้ง',
        group: 'Group A'
    },
    {
        img: '/images/product/drink-03.png',
        title: 'อเมกาโน่มะพร้าวสด',
        group: 'Group A',
    },
    {
        img: '/images/product/dessert-03.png',
        title: 'สลิ่มไทย',
        group: 'Tester Group Show',
    },
    {
        img: '/images/product/dessert-01.png',
        title: 'กล้วยบวชชี',
        group: 'Group A'
    },
    {
        img: '/images/product/dessert-02.png',
        title: 'คองแคงกะทิสด',
        group: 'Group Test 01',
    },
    {
        img: '/images/product/dessert-01.png',
        title: 'กล้วยบวชชี',
        group: 'Group A',
    },
    {
        img: '/images/product/drink-04.png',
        title: 'ชามะนาว',
        group: 'Group A'
    },
];
