import React, { useState } from "react";
import { Box, Button, Tabs, Tab, Badge, Modal, Typography, TextField, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios'

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "16px",
    border: "1px solid #eee",
    boxShadow: 24
}

const ProductCard = ({ product, openModal, initLoadMenu, initLoadOrder }) => {
    const addOrder = (updateQty) => {
        product.qty = product.qty + updateQty
        axios.patch(`/api/product/${product.id}`, { ...product })
            .then((response) => {
                if (response.data.code === 200) {
                    // add order
                    axios.post(`/api/product_order`,
                        { name: product.name, url: product.url, qty: product.qty, price: product.price, totalAmount: product.qty * product.price })
                        .then((response2) => {
                            if (response2.data.code === 200) {
                                initLoadMenu()
                                initLoadOrder()
                            }
                        })
                }
            })
    }
    return (
        <Badge badgeContent={product.qty} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: 18, height: 25, minWidth: 35, top: 15, right: 18, borderRadius: 1, color: "snow", fontWeight: "bold" } }}>
            <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px", boxShadow: "2px 1px #eee" }}>
                <Box textAlign="center">
                    <img src={product.url} alt="" width={160} style={{ borderRadius: "10px" }} onClick={() => addOrder(1)} /><br />
                </Box>
                <table width="100%">
                    <tr>
                        <td colSpan={2} align="center" style={{ fontWeight: "bold" }}>
                            {product.name}
                        </td>
                    </tr>
                    <tr>
                        <td align="left">ราคา {product.price}</td>
                        <td align="right">Detail</td>
                    </tr>
                    <tr>
                        <td align="center">
                            <Button variant="contained" color="success" onClick={() => addOrder(1)}>+ Order</Button>
                        </td>
                        <td style={{ cursor: "pointer" }}>
                            <AddToPhotosIcon fontSize="large" onClick={openModal} />
                        </td>
                    </tr>
                </table>
            </div>
        </Badge>
    )
}

const ProductDetailCard = ({ product, closeModal, initLoadMenu }) => {
    const [count, setCount] = useState(product.qty)

    const handleConfirm = () => {
        product.qty = count
        axios.patch(`/api/product/${product.id}`, { ...product })
            .then((response) => {
                console.log(response)
                if (response.data.code === 200) {
                    initLoadMenu()
                    closeModal()
                }
            })
    }

    return (
        <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px" }}>
            <div align="center" style={{ padding: "10px" }}>
                <Box sx={{ padding: "10px" }}>
                    <Typography variant="h5">{product.name}</Typography>
                </Box>
                <table width="100%">
                    <tr>
                        <td colSpan={2} align="center">
                            <img src={product.url} width={300} alt="" style={{ borderRadius: "10px", boxShadow: "2px 3px #ccc" }} /><br />
                        </td>
                    </tr>
                </table>
            </div>
            <div align="center" style={{ padding: "10px" }}>
                <table width="100%">
                    <tr>
                        <td align="left"><u>ราคา {product.price} บาท</u></td>
                        <td align="right" style={{ color: "green", fontSize: "12px", fontWeight: "bold" }}>อาหารหลัก*</td>
                    </tr>
                </table>
            </div>
            <Box display="flex" justifyContent="space-between" sx={{ margin: "10px" }}>
                <TextField
                    id="outlined-number"
                    label="จำนวนเอาหาร"
                    type="number"
                    value={count}
                    onChange={evt => setCount(evt.target.value)}
                    sx={{ marginRight: "10px" }}
                    slotProps={{
                        htmlInput: {
                            textAlign: "right"
                        },
                        inputLabel: {
                            shrink: true,
                        }
                    }}
                />
                <ButtonGroup variant="outlined">
                    <Button
                        variant="contained"
                        color="error"
                        aria-label="reduce"
                        onClick={() => {
                            setCount(Math.max(count - 1, 0));
                        }}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        color="success"
                        aria-label="increase"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </Box>
            <div style={{ padding: "10px" }}>
                <div>รายละเอียดเพิ่มเติม</div>
                <div>
                    <TextField fullWidth label="เผ็ดน้อย, เผ็ดกลาง, ไม่เผ็ด..." id="fullWidth" multiline={true} rows={5} />
                </div>
            </div>
            <div align="center">
                <Button variant="contained" color="success" onClick={handleConfirm} sx={{ marginRight: "10px" }}>
                    CONFIRM
                </Button>
                <Button variant="contained" color="error" onClick={closeModal}>
                    CANCEL
                </Button>
            </div>
        </div>
    )
}

function ProductMenu({ ProductList, initLoadMenu, initLoadOrder }) {
    const [value, setValue] = useState(1)
    const [open, setOpen] = useState(false)
    const [productInfo, setProductInfo] = useState({})

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenMenu = (product) => {
        setProductInfo(product)
        setOpen(true)
    }

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="เมนูทั้งหมด" />
                <Tab label="อาหารเช้า" />
                <Tab label="ของทานเล่น" />
                <Tab label="อาหารจีน" />
                <Tab label="อาหารอิตาเลียน" />
                <Tab label="เครื่องดื่ม" />
                <Tab label="ของหวาน" />
            </Tabs>
            <Grid container spacing={2} padding={2}>
                {ProductList && ProductList.map(product =>
                    <Grid size={3}>
                        <ProductCard product={product} openModal={() => handleOpenMenu(product)} productList={ProductList} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} />
                    </Grid>
                )}
            </Grid>
            <Modal open={open} onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle, width: 450 }}>
                    <ProductDetailCard product={productInfo} closeModal={() => setOpen(false)} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} />
                </Box>
            </Modal>
        </div>
    )
}

export default ProductMenu;