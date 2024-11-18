import React, { forwardRef, useState, useCallback } from "react";
import { Box, Tabs, Tab, Badge, Modal, Typography, Fab, Slide, Dialog } from "@mui/material";
import MenuBook from '@mui/icons-material/ShoppingCartOutlined';
import { useTranslation } from "react-i18next"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import NoFoodIcon from '@mui/icons-material/NoFood';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid2'

import OrderItem from './OrderItem'
import ProductCard from "./ProductCard";
import ProductDetailCard from "./ProductDetailCard";

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

const ProductMenu = ({ ProductList, ProductA, ProductB, ProductC, ProductD, ProductE, ProductF, OrderList, initLoadMenu, initLoadOrder }) => {
    const { t } = useTranslation("global")
    const matches = useMediaQuery('(min-width:1024px)');

    const [value, setValue] = useState(0)
    const [open, setOpen] = useState(false)
    const [productInfo, setProductInfo] = useState({})
    const [showMenu, setShowMenu] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenMenu = useCallback((product) => {
        setProductInfo(product)
        setOpen(true)
    }, [])

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
                                initLoadOrder={initLoadOrder}
                                initLoadMenu={initLoadMenu}
                            />
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
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                    />
                )}
                {ProductA.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {ProductB && ProductB.map(product =>
                    <ProductCard
                        id={"b" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                    />
                )}
                {ProductB.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {ProductC && ProductC.map(product =>
                    <ProductCard
                        id={"c" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                    />
                )}
                {ProductC.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {ProductD && ProductD.map(product =>
                    <ProductCard
                        id={"d" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                    />
                )}
                {ProductD.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={5}>
                {ProductE && ProductE.map(product =>
                    <ProductCard
                        id={"e" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                    />
                )}
                {ProductE.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={6}>
                {ProductF && ProductF.map(product =>
                    <ProductCard
                        id={"f" + product.id}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                    />
                )}
                {ProductF.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <Modal open={open} onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle, width: 450 }}>
                    <ProductDetailCard product={productInfo} closeModal={() => setOpen(false)} initLoadOrder={initLoadOrder} initLoadMenu={initLoadMenu} />
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
                <OrderItem OrderList={OrderList} initLoadOrder={initLoadOrder} typePopup={true} />
            </Dialog>
        </Box>
    )
}

export default ProductMenu;