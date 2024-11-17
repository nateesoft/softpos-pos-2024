import React, { forwardRef, useEffect, useState } from "react";
import { Box, Button, Tabs, Tab, Badge, Modal, Typography, TextField, Fab, Slide, Dialog, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuBook from '@mui/icons-material/ShoppingCartOutlined';
import axios from 'axios'
import { useTranslation } from "react-i18next"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import NoFoodIcon from '@mui/icons-material/NoFood';
import CheckIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/CancelRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid2'

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

const tabStyle = { border: "1px solid black", borderRadius: "10px", margin: "2px", bgcolor: "chocolate", color: "white", fontSize: "16px" }

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
    // const addOrder = (updateQty) => {
    //     const payload = {
    //         tableNo: "",
    //         productCode: "",
    //         qty: product.qty + updateQty,
    //         r_etd: "",
    //         empCode: "",
    //         price: 0,
    //         macno: ""
    //     }

    //     axios.post(`/api/balance`, payload)
    //         .then((response) => {
    //             if (response.data.code === 200) {
    //                 initLoadMenu()
    //                 initLoadOrder()
    //             }
    //         })
    // }
    return (
        <Badge id={id} badgeContent={product.qty} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: 18, height: 25, minWidth: 35, top: 15, right: 18, borderRadius: 1, color: "snow", fontWeight: "bold" } }}>
            <div style={{ border: "1px solid #eee", padding: "5px", borderRadius: "8px 8px 0px 0px", boxShadow: "2px 1px #eee", margin: "5px" }}>
                <Box textAlign="center">
                    <img src={product.url} alt="" width={160} style={{ borderRadius: "8px 8px 0px 0px" }} onClick={openModal} /><br />
                </Box>
                <Grid container justifyContent="center" textAlign="center" sx={{ backgroundColor: "#eee", padding: "2px" }}>
                    <Typography variant="p" sx={{ overflow: "auto", width: "130px", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                        {product.name}
                    </Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Typography>ราคา {product.price}</Typography>
                    <Typography>Detail</Typography>
                </Grid>
                <Grid container>
                    <Button fullWidth variant="contained" sx={{ backgroundColor: "#123456", color: "snow", marginTop: "5px" }} onClick={() => addOrder(1)} startIcon={<AddCircleOutline />}>Order</Button>
                </Grid>
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
            <Grid container spacing={2} display="flex" justifyContent="space-evenly">
                <IconButton size="large" sx={{ backgroundColor: "red", color: "white" }} onClick={() => {
                    setCount(Math.max(count - 1, 0));
                }}>
                    <RemoveIcon fontSize="large" />
                </IconButton>
                <TextField variant="outlined" type="number" value={count}
                    onChange={evt => setCount(evt.target.value)}
                    inputProps={{ min: 0, style: { textAlign: "center", fontSize: "20px", width: "100px" } }} />
                <IconButton size="large" sx={{ backgroundColor: "green", color: "white" }} onClick={() => {
                    setCount(count + 1);
                }}>
                    <AddIcon fontSize="large" />
                </IconButton>
            </Grid>
            <div style={{ padding: "10px" }}>
                <div>รายละเอียดเพิ่มเติม</div>
                <div>
                    <TextField fullWidth label="เผ็ดน้อย, เผ็ดกลาง, ไม่เผ็ด..." id="fullWidth" multiline={true} rows={5} />
                </div>
            </div>
            <div align="center">
                <Button variant="contained" color="error" onClick={closeModal} startIcon={<CancelIcon />} sx={{ marginRight: "10px" }}>
                    CANCEL
                </Button>
                <Button variant="contained" color="success" startIcon={<CheckIcon />} onClick={handleConfirm}>
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
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: "flex-start", marginTop: "8vh" }}>
            {matches && <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{ borderColor: 'divider', minWidth: "150px", marginTop: "5px" }}
            >
                <Tab sx={tabStyle} icon={<MenuBook sx={{ color: "white" }} />} label={t("productMenu.allGroup")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.breakfast")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.appetizer")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.chineseFood")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.italianFood")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.drink")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.dessert")} />
            </Tabs>}
            <TabPanel value={value} index={0}>
                <Grid container>
                    {ProductList.length === 0 && <NotfoundMenu />}
                    {ProductList && ProductList.map(product =>
                        <Grid size={3}>
                            <ProductCard
                                id={"all" + product.id}
                                product={product}
                                openModal={() => handleOpenMenu(product)}
                                initLoadMenu={initLoadMenu}
                                initLoadOrder={initLoadOrder} />
                        </Grid>
                    )}
                </Grid>
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
                <Fab sx={fabStyle} aria-label='Add' color='primary' onClick={() => setShowMenu(true)}>
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