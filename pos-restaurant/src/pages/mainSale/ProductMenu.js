import React, {
  forwardRef,
  useState,
  useCallback,
  useContext,
  useEffect
} from "react"
import {
  Box,
  Tabs,
  Tab,
  Badge,
  Modal,
  Typography,
  Fab,
  Slide,
  Dialog,
  Button,
  Grid2,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material"
import MenuBook from "@mui/icons-material/ShoppingCartOutlined"
import { useTranslation } from "react-i18next"
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu"
import CloseIcon from "@mui/icons-material/Close"
import CloseModalIcon from "@mui/icons-material/Cancel"
import CheckIcon from "@mui/icons-material/AddCircle"
import NoFoodIcon from "@mui/icons-material/NoFood"
import useMediaQuery from "@mui/material/useMediaQuery"

import apiClient from "../../httpRequest"
import OrderItem from "./addOrderItem/OrderItem"
import ProductCard from "./ProductCard"
import ProductDetailCard from "./ProductDetailCard"
import MenuSetModal from "./MenuSetModal"
import { POSContext } from "../../AppContext"
import ManualPriceInput from "./ManualPriceInput"
import { CurrencyContext } from "../../contexts/CurrencyContext"

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
  position: "fixed",
  top: 70,
  right: 16
}

const tabStyle = {
  border: "1px solid black",
  margin: "2px",
  background: "radial-gradient(circle, #123456, #000)",
  color: "white",
  fontSize: "16px",
  "&:hover": {
    background: "radial-gradient(circle, orange, #000)"
  }
}

const NotfoundMenu = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ width: "500px", height: "500px", padding: "10px" }}
    >
      <Box display="flex" alignItems="center" flexDirection="row">
        <Box display="flex" alignContent="center">
          <NoFoodIcon sx={{ color: "#bbb", marginRight: "10px" }} />
          <Typography variant="h5" sx={{ color: "#bbb" }}>
            ยังไม่มีเมนูอาหาร
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  )
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />
})

const ProductMenu = ({
  tableNo,
  orderType,
  ProductList,
  ProductA,
  ProductB,
  ProductC,
  ProductD,
  ProductE,
  ProductF,
  OrderList,
  OrderEList,
  OrderTList,
  OrderDList,
  initLoadMenu,
  initLoadOrder,
  handleNotification,
  initLoadBalanceProductGroup
}) => {
  console.log("ProductMenu")
  const { t } = useTranslation("global")
  const matches = useMediaQuery("(min-width:1024px)")
  const { appData } = useContext(POSContext)
  const { currency, convertCurrency } = useContext(CurrencyContext)
  const { empCode, macno, userLogin } = appData

  const [qtyOrder, setQtyOrder] = useState(1)
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)
  const [productInfo, setProductInfo] = useState({})
  const [showMenu, setShowMenu] = useState(false)
  const [showMenuSet, setShowMenuSet] = useState(false)
  const [showManualPrice, setShowManualPrice] = useState(false)

  const [menuTabs, setMenuTabs] = useState([])

  const [subMenuSelected, setSubMenuSelected] = useState([])
  const [msgWarning, setMsgWarning] = useState(false)

  const [optionalList, setOptionalList] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleOpenMenu = useCallback((product) => {
    setProductInfo(product)
    setOpen(true)
  }, [])

  const handleShowMenuSet = (product) => {
    setProductInfo(product)
    setMsgWarning(false)
    setShowMenuSet(true)
  }

  const handleShowManualPrice = (product) => {
    setProductInfo(product)
    setShowManualPrice(true)
  }

  const addOrder = async (qty, product) => {
    apiClient
      .post(`/api/balance`, {
        tableNo,
        menuInfo: product,
        etdType: orderType,
        qty,
        macno,
        userLogin,
        empCode
      })
      .then((response) => {
        initLoadMenu()
        initLoadOrder()
        initLoadBalanceProductGroup()
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
        etdType: orderType,
        qty: qtyOrder,
        macno,
        userLogin,
        empCode
      })
      .then(async (response) => {
        initLoadMenu()
        initLoadOrder()
        const R_LinkIndex = response.data.data

        // add sub menu in set
        let allListToAdd = optionalList.filter((item) => item.checked === true)
        if (allListToAdd.length === 0) {
          allListToAdd = optionalList.filter((item) => item.auto_select === "Y")
        }
        await addOrderSubMenuList(tableNo, allListToAdd, R_LinkIndex)

        // total summary display
        initLoadMenu()
        initLoadOrder()

        setShowMenuSet(false)
      })
      .catch((err) => {
        handleNotification(err.message)
      })
  }

  const addOrderSubMenuList = async (tableNo, optionalList, R_LinkIndex) => {
    await apiClient.post(`/api/balance/addList`, {
      listBalance: optionalList,
      tableNo,
      etdType: orderType,
      macno,
      userLogin,
      empCode,
      R_LinkIndex: R_LinkIndex,
      qty: qtyOrder
    })
  }

  const handleConfirmSelectedSubMenu = async (productInfo) => {
    const itemSelected = subMenuSelected.filter((item) => item === true).length
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

  const initLoadMenuTab = useCallback(() => {
    apiClient.get(`/api/menu_tabs`).then((response) => {
      if (response.status === 200) {
        setMenuTabs(response.data.data)
      }
    })
  }, [])

  useEffect(() => {
    initLoadMenuTab()
  }, [])

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignContent: "flex-start",
        marginTop: "8vh"
      }}
    >
      {matches && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderColor: "divider", minWidth: "150px", marginTop: "5px" }}
        >
          <Tab
            sx={tabStyle}
            icon={<MenuBook sx={{ color: "white" }} />}
            label={t("productMenu.allGroup")}
          />
          {menuTabs &&
            menuTabs.map((item) => (
              <Tab
                key={item.tab_name_title}
                sx={tabStyle}
                icon={<RestaurantMenuIcon sx={{ color: "white" }} />}
                label={item.tab_name_title}
              />
            ))}
        </Tabs>
      )}
      <TabPanel value={value} index={0}>
        <Grid2 container justifyContent="flex-start">
          {ProductList.length === 0 && <NotfoundMenu />}
          {ProductList &&
            ProductList.map((product) => (
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
            ))}
        </Grid2>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid2 container justifyContent="flex-start">
          {ProductA.length === 0 && <NotfoundMenu />}
          {ProductA &&
            ProductA.map((product) => (
              <ProductCard
                id={"a" + product.id}
                key={product.id}
                OrderList={OrderList}
                tableNo={tableNo}
                product={product}
                openModal={() => handleOpenMenu(product)}
                initLoadOrder={initLoadOrder}
                initLoadMenu={initLoadMenu}
                setShowMenuSet={() => handleShowMenuSet(product)}
                handleNotification={handleNotification}
              />
            ))}
        </Grid2>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid2 container justifyContent="flex-start">
          {ProductB.length === 0 && <NotfoundMenu />}
          {ProductB &&
            ProductB.map((product) => (
              <ProductCard
                id={"b" + product.id}
                key={product.id}
                OrderList={OrderList}
                tableNo={tableNo}
                product={product}
                openModal={() => handleOpenMenu(product)}
                initLoadOrder={initLoadOrder}
                initLoadMenu={initLoadMenu}
                setShowMenuSet={() => handleShowMenuSet(product)}
                handleNotification={handleNotification}
              />
            ))}
        </Grid2>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid2 container justifyContent="flex-start">
          {ProductC.length === 0 && <NotfoundMenu />}
          {ProductC &&
            ProductC.map((product) => (
              <ProductCard
                id={"c" + product.id}
                key={product.id}
                OrderList={OrderList}
                tableNo={tableNo}
                product={product}
                openModal={() => handleOpenMenu(product)}
                initLoadOrder={initLoadOrder}
                initLoadMenu={initLoadMenu}
                setShowMenuSet={() => handleShowMenuSet(product)}
                handleNotification={handleNotification}
              />
            ))}
        </Grid2>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid2 container justifyContent="flex-start">
          {ProductD.length === 0 && <NotfoundMenu />}
          {ProductD &&
            ProductD.map((product) => (
              <ProductCard
                id={"d" + product.id}
                key={product.id}
                OrderList={OrderList}
                tableNo={tableNo}
                product={product}
                openModal={() => handleOpenMenu(product)}
                initLoadOrder={initLoadOrder}
                initLoadMenu={initLoadMenu}
                setShowMenuSet={() => handleShowMenuSet(product)}
                handleNotification={handleNotification}
              />
            ))}
        </Grid2>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid2 container justifyContent="flex-start">
          {ProductE.length === 0 && <NotfoundMenu />}
          {ProductE &&
            ProductE.map((product) => (
              <ProductCard
                id={"e" + product.id}
                key={product.id}
                OrderList={OrderList}
                tableNo={tableNo}
                product={product}
                openModal={() => handleOpenMenu(product)}
                initLoadOrder={initLoadOrder}
                initLoadMenu={initLoadMenu}
                setShowMenuSet={() => handleShowMenuSet(product)}
                handleNotification={handleNotification}
              />
            ))}
        </Grid2>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Grid2 container justifyContent="flex-start">
          {ProductF.length === 0 && <NotfoundMenu />}
          {ProductF &&
            ProductF.map((product) => (
              <ProductCard
                id={"f" + product.id}
                key={product.id}
                OrderList={OrderList}
                tableNo={tableNo}
                product={product}
                openModal={() => handleOpenMenu(product)}
                initLoadOrder={initLoadOrder}
                initLoadMenu={initLoadMenu}
                setShowMenuSet={() => handleShowMenuSet(product)}
                handleNotification={handleNotification}
              />
            ))}
        </Grid2>
      </TabPanel>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 450 }}>
          <ProductDetailCard
            tableNo={tableNo}
            product={productInfo}
            closeModal={() => setOpen(false)}
            initLoadOrder={initLoadOrder}
            initLoadMenu={initLoadMenu}
            handleNotification={handleNotification}
          />
        </Box>
      </Modal>
      {matches === false && (
        <Fab
          sx={fabStyle}
          aria-label="Add"
          color="primary"
          onClick={() => setShowMenu(true)}
        >
          <Badge badgeContent={OrderList.length} color="warning">
            <MenuBook />
          </Badge>
        </Fab>
      )}

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

      <Modal
        open={showMenuSet}
        onClose={handleCloseMenuSet}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...modalStyle,
            width: "80vw",
            height: "80vh",
            background: "black",
            overflow: "auto"
          }}
        >
          <Grid2
            container
            justifyContent="center"
            direction="column"
            padding={1}
          >
            <Grid2 display="flex" justifyContent="space-between">
              <Typography
                variant="h4"
                color="secondary"
                sx={{ fontWeight: "bold", textShadow: "1px 1px orange" }}
              >
                {productInfo.menu_name}
              </Typography>
              <CloseModalIcon
                fontSize="large"
                color="error"
                onClick={handleCloseMenuSet}
              />
            </Grid2>
            <Typography color="error" variant="h5" sx={{ fontWeight: "bold" }}>
              ( ราคา{" "}
              {new Intl.NumberFormat("th-TH", {
                style: "currency",
                currency
              }).format(convertCurrency(productInfo.menu_price, currency))}{" "}
              )
            </Typography>
            {msgWarning && (
              <Box
                display="flex"
                justifyContent="center"
                sx={{
                  backgroundColor: "gold",
                  padding: "10px",
                  marginTop: "10px"
                }}
              >
                <Typography>!!! ไม่ตรงตามเงื่อนไขในการสั่งอาหาร !!!</Typography>
              </Box>
            )}
          </Grid2>
          <Grid2
            container
            spacing={1}
            padding={1}
            justifyContent="center"
            sx={{ border: "1px solid orange" }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Grid2 container spacing={1} marginRight={5}>
                <Typography sx={{ color: "green", fontWeight: "bold" }}>
                  รายการที่เลือก:{" "}
                  {subMenuSelected.filter((item) => item === true).length}
                </Typography>
                <Typography sx={{ color: "yellow" }}>
                  สั่งขั้นต่ำ: {productInfo.min_count_set}
                </Typography>
                <Typography sx={{ color: "red" }}>
                  สั่งได้ไม่เกิน: {productInfo.max_count_set}
                </Typography>
              </Grid2>
              <Grid2 container spacing={1}>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<CloseIcon />}
                  onClick={handleCloseMenuSet}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<CheckIcon />}
                  onClick={() => handleConfirmSelectedSubMenu(productInfo)}
                >
                  Order
                </Button>
                <FormControl variant="outlined">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={qtyOrder}
                    onChange={(e)=>setQtyOrder(e.target.value)}
                    variant="outlined"
                    sx={{background: "snow", fontWeight: "bold"}}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>
            </Box>
          </Grid2>
          <MenuSetModal
            product={productInfo}
            subMenuSelected={subMenuSelected}
            setSubMenuSelected={setSubMenuSelected}
            optionalList={optionalList}
            setOptionalList={setOptionalList}
          />
        </Box>
      </Modal>

      <Modal
        open={showManualPrice}
        onClose={() => setShowManualPrice(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 400 }}>
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

export default ProductMenu
