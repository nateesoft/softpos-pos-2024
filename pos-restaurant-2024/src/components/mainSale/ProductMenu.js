import React, { forwardRef, useEffect, useState } from "react";
import { Box, Button, Tabs, Tab, Badge, Modal, Typography, TextField, ButtonGroup, Fab, Slide, Dialog } from "@mui/material";
import MenuOptionIcon from '@mui/icons-material/FilterFrames';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuBook from '@mui/icons-material/MenuBook';
import axios from 'axios'
import { useTranslation } from "react-i18next"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import NoFoodIcon from '@mui/icons-material/NoFood';
import useMediaQuery from '@mui/material/useMediaQuery';

import OrderItem from './OrderItem'

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

const fabStyle = {
    position: 'absolute',
    top: 70,
    right: 16,
};

const NotfoundMenu = () => {
    return (
        <Box display="flex" justifyContent="center" sx={{ width: "500px", height: "500px", padding: "10px" }}>
            <Box display="flex" alignItems="center" flexDirection="row">
                <Box display="flex" alignContent="center">
                    <NoFoodIcon sx={{ color: "#bbb", marginRight: "10px" }} />
                    <Typography variant='h5' sx={{ color: "#bbb" }}>ยังไม่มีเมนูอาหาร</Typography>
                </Box>
            </Box>
        </Box>
    )
}

const ProductCard = ({ id, product, openModal, initLoadMenu, initLoadOrder }) => {
    const addOrder = (updateQty) => {
        product.qty = product.qty + updateQty
        axios.patch(`/api/product/${product.id}`, { ...product })
            .then((response) => {
                if (response.data.code === 200) {
                    // add order
                    axios.post(`/api/product_order`,
                        { name: product.name, url: product.url, qty: updateQty, price: product.price, totalAmount: updateQty * product.price })
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
        <Badge id={id + product.id} badgeContent={product.qty} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: 18, height: 25, minWidth: 35, top: 15, right: 18, borderRadius: 1, color: "snow", fontWeight: "bold" } }}>
            <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px", boxShadow: "2px 1px #eee", margin: "5px" }}>
                <Box textAlign="center">
                    <img src={product.url} alt="" width={160} style={{ borderRadius: "10px" }} onClick={openModal} /><br />
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
                            <Button variant="contained" color="success" onClick={() => addOrder(1)} startIcon={<AddIcon />}>Order</Button>
                        </td>
                        <td style={{ cursor: "pointer" }}>
                            <MenuOptionIcon color="primary" fontSize="large" onClick={openModal} />
                        </td>
                    </tr>
                </table>
            </div>
        </Badge>
    )
}

const ProductDetailCard = ({ product, closeModal, initLoadMenu, initLoadOrder }) => {
    const [count, setCount] = useState(product.qty)

    const handleConfirm = () => {
        product.qty = count
        axios.patch(`/api/product/${product.id}`, { ...product })
            .then((response) => {
                console.log(response)
                if (response.data.code === 200) {
                    initLoadMenu()
                    initLoadOrder()
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
                <Button variant="contained" color="error" onClick={closeModal} sx={{ marginRight: "10px" }}>
                    CANCEL
                </Button>
                <Button variant="contained" color="success" onClick={handleConfirm}>
                    CONFIRM
                </Button>
            </div>
        </div>
    )
}

const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const ProductMenu = ({ ProductList, OrderList, initLoadMenu, initLoadOrder }) => {
    const { t } = useTranslation("global")
    const matches = useMediaQuery('(min-width:1024px)');

    const [value, setValue] = useState(0)
    const [open, setOpen] = useState(false)
    const [productInfo, setProductInfo] = useState({})
    const [showMenu, setShowMenu] = useState(false)

    const [ProductA, setProductA] = useState([])
    const [ProductB, setProductB] = useState([])
    const [ProductC, setProductC] = useState([])
    const [ProductD, setProductD] = useState([])
    const [ProductE, setProductE] = useState([])
    const [ProductF, setProductF] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenMenu = (product) => {
        setProductInfo(product)
        setOpen(true)
    }

    useEffect(() => {
        setProductA(ProductList.filter(product => product.group === "A"))
        setProductB(ProductList.filter(product => product.group === "B"))
        setProductC(ProductList.filter(product => product.group === "C"))
        setProductD(ProductList.filter(product => product.group === "D"))
        setProductE(ProductList.filter(product => product.group === "E"))
        setProductF(ProductList.filter(product => product.group === "F"))
    }, [ProductList])

    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', alignContent: "flex-start", marginTop: "8vh" }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider', minWidth: "150px" }}
            >
                <Tab sx={{ border: "2px solid #e59866", borderRadius: "10px", margin: "5px", bgcolor: "orange", color: "white" }} icon={<MenuBook sx={{ color: "white" }} />} label={t("productMenu.allGroup")} />
                <Tab sx={{ border: "2px solid #e59866", borderRadius: "10px", margin: "5px", bgcolor: "orange", color: "white" }} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.breakfast")} />
                <Tab sx={{ border: "2px solid #e59866", borderRadius: "10px", margin: "5px", bgcolor: "orange", color: "white" }} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.appetizer")} />
                <Tab sx={{ border: "2px solid #e59866", borderRadius: "10px", margin: "5px", bgcolor: "orange", color: "white" }} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.chineseFood")} />
                <Tab sx={{ border: "2px solid #e59866", borderRadius: "10px", margin: "5px", bgcolor: "orange", color: "white" }} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.italianFood")} />
                <Tab sx={{ border: "2px solid #e59866", borderRadius: "10px", margin: "5px", bgcolor: "orange", color: "white" }} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.drink")} />
                <Tab sx={{ border: "2px solid #e59866", borderRadius: "10px", margin: "5px", bgcolor: "orange", color: "white" }} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.dessert")} />
            </Tabs>
            <TabPanel value={value} index={0}>
                {ProductList && ProductList.map(product =>
                    <ProductCard
                        id={"all" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder} />
                )}
                {ProductList.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {ProductA && ProductA.map(product =>
                    <ProductCard
                        id={"a" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder} />
                )}
                {ProductA.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {ProductB && ProductB.map(product =>
                    <ProductCard
                        id={"b" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder} />
                )}
                {ProductB.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {ProductC && ProductC.map(product =>
                    <ProductCard
                        id={"c" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder} />
                )}
                {ProductC.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {ProductD && ProductD.map(product =>
                    <ProductCard
                        id={"d" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder} />
                )}
                {ProductD.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={5}>
                {ProductE && ProductE.map(product =>
                    <ProductCard
                        id={"e" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder} />
                )}
                {ProductE.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={6}>
                {ProductF && ProductF.map(product =>
                    <ProductCard
                        id={"f" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadMenu={initLoadMenu}
                        initLoadOrder={initLoadOrder} />
                )}
                {ProductF.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <Modal open={open} onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle, width: 450 }}>
                    <ProductDetailCard product={productInfo} closeModal={() => setOpen(false)} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} />
                </Box>
            </Modal>
            {matches === false &&
                <Fab sx={fabStyle} aria-label='Add' color='success' onClick={() => setShowMenu(true)}>
                    <Badge badgeContent={1} color="warning">
                        <MenuBook />
                    </Badge>
                </Fab>
            }

            <Dialog
                open={showMenu}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setShowMenu(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <OrderItem OrderList={OrderList} initLoadMenu={initLoadMenu} initLoadOrder={initLoadOrder} typePopup={true} />
            </Dialog>
        </Box>
    )
}

export default ProductMenu;