import React, { useState } from 'react'
import { Box, Button, Divider, Grid2, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const ManualPriceInput = ({ productInfo, setShowManualPrice, addOrder }) => {
    const [menuName, setMenuName] = useState(productInfo.menu_name)
    const [newPrice, setNewPrice] = useState(productInfo.menu_price)

    const handleNewPrice = (data) => {
        const price = parseFloat(data)
        if (price < 0) {
            setNewPrice(0)
            return
        }
        if (price > 99999999999) {
            setNewPrice(0)
            return
        }
        setNewPrice(price)
    }

    const handleChangeName = (data) => {
        if (data.length > 200) {
            setMenuName(productInfo.menu_name)
            return;
        }
        setMenuName(data)
    }

    const handleConfirm = (product) => {
        const newProduct = {
            ...product,

        }
        newProduct.menu_price = newPrice
        newProduct.menu_name = menuName
        addOrder(1, newProduct)
        setShowManualPrice(false)
    }

    return (
        <>
            <Grid2 spacing={2} padding={2} container justifyContent="center" 
                sx={{ backgroundColor: "purple", color: "white", borderRadius: "15px 15px 0px 0px" }}>
                <Typography variant='h6'>แก้ไขราคาสินค้า</Typography>
            </Grid2>
            <Box sx={{ padding: "5px", margin: "5px" }}>
                <Grid2 container spacing={1} padding={2} justifyContent="space-between">
                    <TextField label="รหัสสินค้า" disabled value={productInfo.menu_code} />
                    <TextField label="ราคาขาย" disabled value={productInfo.menu_price} />
                    <TextField label="ชื่อสินค้า" value={menuName} onChange={(e) => handleChangeName(e.target.value)} fullWidth />
                    <TextField label="กำหนดราคาใหม่" type='number' value={newPrice} onChange={(e) => handleNewPrice(e.target.value)} />
                </Grid2>
            </Box>
            <Divider />
            <Box margin={1} padding={1} display="flex" alignContent="center" justifyContent="space-between">
                <Button variant="contained" color="error" startIcon={<CloseIcon />} onClick={() => setShowManualPrice(false)}>Cancel</Button>
                <Button variant="contained" color="success" startIcon={<CheckIcon />} onClick={() => handleConfirm(productInfo)}>Add Order</Button>
            </Box>
        </>
    )
}

export default ManualPriceInput
