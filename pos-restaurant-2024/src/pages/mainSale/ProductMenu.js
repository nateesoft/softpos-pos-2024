import React, { forwardRef, useState, useCallback, useContext } from "react";
import { Box, Tabs, Tab, Badge, Modal, Typography, Fab, Slide, Dialog, Button, Grid2 } from "@mui/material";
import MenuBook from '@mui/icons-material/ShoppingCartOutlined';
import { useTranslation } from "react-i18next"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CloseIcon from '@mui/icons-material/Close';
import CloseModalIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import NoFoodIcon from '@mui/icons-material/NoFood';
import useMediaQuery from '@mui/material/useMediaQuery';

import apiClient from '../../httpRequest'
import OrderItem from './addOrderItem/OrderItem'
import ProductCard from "./ProductCard";
import ProductDetailCard from "./ProductDetailCard";
import MenuSetModal from "./MenuSetModal";
import { POSContext } from "../../AppContext";
import ManualPriceInput from "./ManualPriceInput";

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
    position: 'fixed',
    top: 70,
    right: 16,
};

const tabStyle = { border: "1px solid black", margin: "2px", bgcolor: "chocolate", color: "white", fontSize: "16px" }

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
                <>
                    {children}
                </>
            )}
        </div>
    );
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const ProductMenu = ({
    tableNo,
    ProductList,
    ProductA, ProductB, ProductC, ProductD, ProductE, ProductF,
    OrderList, OrderEList, OrderTList, OrderDList,
    initLoadMenu, initLoadOrder,
    handleNotification
}) => {
    const { t } = useTranslation("global")
    const matches = useMediaQuery('(min-width:1024px)');
    const { appData } = useContext(POSContext)
    const { empCode, macno, userLogin } = appData

    const [value, setValue] = useState(0)
    const [open, setOpen] = useState(false)
    const [productInfo, setProductInfo] = useState({})
    const [showMenu, setShowMenu] = useState(false)
    const [showMenuSet, setShowMenuSet] = useState(false)
    const [showManualPrice, setShowManualPrice] = useState(false)

    const [subMenuSelected, setSubMenuSelected] = useState([])
    const [msgWarning, setMsgWarning] = useState(false)

    const [optionalList, setOptionalList] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenMenu = useCallback((product) => {
        setProductInfo(product)
        setOpen(true)
    }, [])

    const handleShowMenuSet = (product) => {
        setProductInfo(product)
        setMsgWarning(false)
        setShowMenuSet(true)
    }

    const handleShowManualPrice = product => {
        setProductInfo(product)
        setShowManualPrice(true)
    }

    const addOrder = async (qty, product) => {
        apiClient
          .post(`/api/balance`, {
            tableNo, menuInfo: product, qty, macno, userLogin, empCode
          })
          .then((response) => {
            initLoadMenu()
            initLoadOrder()
          })
          .catch((error2) => {
            handleNotification(error2.message)
          })
      }

    const addOrderMain = async (product) => {
        apiClient
            .post(`/api/balance`, {
                tableNo,
                menuInfo: product,
                qty: 1,
                macno,
                userLogin,
                empCode
            })
            .then(async response => {
                initLoadMenu()
                initLoadOrder()
                const R_LinkIndex = response.data.data

                // add sub menu in set
                let allListToAdd = optionalList.filter(item => item.checked === true)
                if (allListToAdd.length === 0) {
                    allListToAdd = optionalList.filter(item => item.auto_select === 'Y')
                }
                await addOrderSubMenuList(tableNo, allListToAdd, R_LinkIndex)

                // total summary display
                initLoadMenu()
                initLoadOrder()

                setShowMenuSet(false)
            })
            .catch(err => {
                handleNotification(err.message)
            })
    }

    const addOrderSubMenuList = async (tableNo, optionalList, R_LinkIndex) => {
        await apiClient.post(`/api/balance/addList`, {
            listBalance: optionalList,
            tableNo,
            macno,
            userLogin,
            empCode,
            R_LinkIndex: R_LinkIndex
        })
    }

    const handleConfirmSelectedSubMenu = async (productInfo) => {
        const itemSelected = subMenuSelected.filter(item => item === true).length
        if (itemSelected < productInfo.min_count_set) {
            setMsgWarning(true)
        } else {
            setMsgWarning(false)

            // add main product
            await addOrderMain(productInfo)
        }
    }

    const handleCloseMenuSet = () => {
        setOptionalList([])
        setSubMenuSelected([])
        setShowMenuSet(false)
        setMsgWarning(false)
    }

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: "flex-start", marginTop: "8vh" }}>
            {matches && 
            <Tabs orientation="vertical" variant="scrollable" value={value} 
                onChange={handleChange}
                sx={{ borderColor: 'divider', minWidth: "150px", marginTop: "5px" }}>
                <Tab sx={tabStyle} icon={<MenuBook sx={{ color: "white" }} />} label={t("productMenu.allGroup")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.breakfast")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.appetizer")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.chineseFood")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.italianFood")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.drink")} />
                <Tab sx={tabStyle} icon={<RestaurantMenuIcon sx={{ color: "white" }} />} label={t("productMenu.dessert")} />
            </Tabs>
            }
            <TabPanel value={value} index={0}>
                <Grid2 container>
                    {ProductList.length === 0 && <NotfoundMenu />}
                    {ProductList && ProductList.map(product =>
                        <Grid2 id={`productList_${product.id}`}>
                            <ProductCard
                                id={"all" + product.id}
                                OrderList={OrderList}
                                tableNo={tableNo}
                                product={product}
                                initLoadOrder={initLoadOrder}
                                initLoadMenu={initLoadMenu}
                                addOrder={addOrder}
                                openModal={() => handleOpenMenu(product)}
                                setShowMenuSet={() => handleShowMenuSet(product)}
                                setShowManualPrice={() => handleShowManualPrice(product)}
                                handleNotification={handleNotification}
                            />
                        </Grid2>
                    )}
                </Grid2>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {ProductA && ProductA.map(product =>
                    <ProductCard
                        id={"a" + product.id}
                        OrderList={OrderList}
                        tableNo={tableNo}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                        setShowMenuSet={() => handleShowMenuSet(product)}
                        handleNotification={handleNotification}
                    />
                )}
                {ProductA.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {ProductB && ProductB.map(product =>
                    <ProductCard
                        id={"b" + product.id}
                        OrderList={OrderList}
                        tableNo={tableNo}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                        setShowMenuSet={() => handleShowMenuSet(product)}
                        handleNotification={handleNotification}
                    />
                )}
                {ProductB.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {ProductC && ProductC.map(product =>
                    <ProductCard
                        id={"c" + product.id}
                        OrderList={OrderList}
                        tableNo={tableNo}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                        setShowMenuSet={() => handleShowMenuSet(product)}
                        handleNotification={handleNotification}
                    />
                )}
                {ProductC.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {ProductD && ProductD.map(product =>
                    <ProductCard
                        id={"d" + product.id}
                        OrderList={OrderList}
                        tableNo={tableNo}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                        setShowMenuSet={() => handleShowMenuSet(product)}
                        handleNotification={handleNotification}
                    />
                )}
                {ProductD.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={5}>
                {ProductE && ProductE.map(product =>
                    <ProductCard
                        id={"e" + product.id}
                        OrderList={OrderList}
                        tableNo={tableNo}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                        setShowMenuSet={() => handleShowMenuSet(product)}
                        handleNotification={handleNotification}
                    />
                )}
                {ProductE.length === 0 && <NotfoundMenu />}
            </TabPanel>
            <TabPanel value={value} index={6}>
                {ProductF && ProductF.map(product =>
                    <ProductCard
                        id={"f" + product.id}
                        OrderList={OrderList}
                        tableNo={tableNo}
                        product={product}
                        openModal={() => handleOpenMenu(product)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                        setShowMenuSet={() => handleShowMenuSet(product)}
                        handleNotification={handleNotification}
                    />
                )}
                {ProductF.length === 0 && <NotfoundMenu />}
            </TabPanel>

            <Modal open={open} onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle, width: 450 }}>
                    <ProductDetailCard
                        tableNo={tableNo}
                        product={productInfo}
                        closeModal={() => setOpen(false)}
                        initLoadOrder={initLoadOrder}
                        initLoadMenu={initLoadMenu}
                        handleNotification={handleNotification} />
                </Box>
            </Modal>
            {matches === false &&
                <Fab sx={fabStyle} aria-label='Add' color='primary' onClick={() => setShowMenu(true)}>
                    <Badge badgeContent={OrderList.length} color="warning">
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
                <OrderItem
                    tableNo={tableNo}
                    OrderList={OrderList}
                    OrderEList={OrderEList}
                    OrderTList={OrderTList}
                    OrderDList={OrderDList}
                    initLoadMenu={initLoadMenu}
                    initLoadOrder={initLoadOrder}
                    typePopup={true}
                    handleNotification={handleNotification}
                />
            </Dialog>

            <Modal open={showMenuSet} onClose={handleCloseMenuSet}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle }}>
                    <Grid2 container justifyContent="center" display="flex" direction="column" padding={2}>
                        <Grid2 display="flex" justifyContent="space-between">
                            <Typography variant="h4" color="secondary" sx={{ fontWeight: "bold", textShadow: "1px 1px orange" }}>{productInfo.menu_name}</Typography>
                            <CloseModalIcon fontSize="large" color="error" onClick={handleCloseMenuSet} />
                        </Grid2>
                        <Typography color="error" variant="h5" sx={{ fontWeight: "bold" }}>( ราคา {productInfo.menu_price} )</Typography>
                        {msgWarning && <Box display="flex" justifyContent="center" sx={{ backgroundColor: "gold", padding: "10px", marginTop: "10px" }}>
                            <Typography>!!! ไม่ตรงตามเงื่อนไขในการสั่งอาหาร !!!</Typography>
                        </Box>}
                    </Grid2>
                    <Grid2 container spacing={2} padding={1} justifyContent="space-between">
                            <Typography sx={{color: "green", fontWeight: "bold"}}>รายการที่เลือก: {subMenuSelected.filter(item => item === true).length}</Typography>
                            <Typography sx={{color: "blue"}}>สั่งขั้นต่ำ: {productInfo.min_count_set}</Typography>
                            <Typography sx={{color: 'red'}}>สั่งได้ไม่เกิน: {productInfo.max_count_set}</Typography>
                        </Grid2>
                    <MenuSetModal
                        product={productInfo}
                        subMenuSelected={subMenuSelected}
                        setSubMenuSelected={setSubMenuSelected}
                        optionalList={optionalList}
                        setOptionalList={setOptionalList}
                    />
                    <Box margin={1} padding={1} display="flex" alignContent="center" justifyContent="space-between" sx={{ padding: "10px", borderRadius: "10px" }}>
                        <Button variant="contained" color="error" startIcon={<CloseIcon />} onClick={handleCloseMenuSet}>Cancel</Button>
                        <Button variant="contained" color="success" startIcon={<CheckIcon />} onClick={() => handleConfirmSelectedSubMenu(productInfo)}>Confirm</Button>
                    </Box>
                </Box>
            </Modal>

            <Modal open={showManualPrice} onClose={()=>setShowManualPrice(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ ...modalStyle }}>
                    <ManualPriceInput 
                        productInfo={productInfo}
                        setShowManualPrice={setShowManualPrice}
                        addOrder={addOrder}
                    />
                </Box>
            </Modal>
        </Box>
    )
}

export default ProductMenu;