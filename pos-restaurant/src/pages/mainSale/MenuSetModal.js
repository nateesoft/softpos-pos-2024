import React, { useState, useEffect, useCallback, forwardRef, useContext } from "react"
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  Modal,
  Slide,
  Typography
} from "@mui/material"
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck"
import CloseIcon from "@mui/icons-material/Cancel"
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"

import ChangeProductList from "./ChangeProductList"
import apiClient from "../../httpRequest"
import ManualPriceInput from "./ManualPriceInput"
import { useAlert } from "../../contexts/AlertContext"
import { POSContext } from "../../AppContext"

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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

const MenuSetModal = ({
  product,
  subMenuSelected,
  setSubMenuSelected,
  optionalList,
  setOptionalList
}) => {
  const { appData } = useContext(POSContext)
  const { baseName } = appData

  const { handleNotification } = useAlert()

  const [showChangeListMenu, setShowChangeListMenu] = useState(false)
  const [showManualPrice, setShowManualPrice] = useState(false)
  const [productInfo, setProductInfo] = useState({})
  const [currentMenu, setCurrentMenu] = useState("")

  const handleOnChange = (position) => {
    const updatedCheckedState = subMenuSelected.map((item, index) =>
      index === position ? !item : item
    )
    setSubMenuSelected(updatedCheckedState)

    const updatedOrderListSelected = optionalList.map((item, index) => {
      return {
        ...item,
        checked: updatedCheckedState[index]
      }
    })

    setOptionalList(updatedOrderListSelected)
  }

  const updateItemManualPrice = (position, newProduct) => {
    const updatedMenuState = optionalList.map((item, index) => {
      if (item.id === newProduct.id) {
        return { ...newProduct }
      } else {
        return item
      }
    })
    setOptionalList(updatedMenuState)
  }

  const loadOptionalList = useCallback(() => {
    apiClient
      .get(`/api/menu_setup/optional/${product.menu_code}`)
      .then((response) => {
        if (response.status === 200) {
          const dataResponse = response.data.data
          setOptionalList(dataResponse)
          setSubMenuSelected(
            new Array(dataResponse.length)
              .fill(false)
              .map((data, index) => dataResponse[index].auto_select === "Y")
          )
        }
      })
      .catch((error) => {
        handleNotification(error.message)
      })
  }, [
    product.menu_code,
    handleNotification,
    setOptionalList,
    setSubMenuSelected
  ])

  const handleChangeMenuItem = (menuCode) => {
    setShowChangeListMenu(true)
    setCurrentMenu(menuCode)
  }

  const handleOpenMenu = useCallback((product) => {
    setProductInfo(product)
    setShowManualPrice(product.manual_price === "Y")
  }, [])

  useEffect(() => {
    loadOptionalList()
  }, [loadOptionalList])

  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <Grid2 container spacing={1} justifyContent="center">
        {optionalList &&
          optionalList.map((item, index) => (
            <Grid2
              xs="auto"
              padding={1}
              sx={{ background: "black", width: "200px" }}
            >
              <Grid2 container alignItems="center">
                <Checkbox
                  id={`subProduct${item.menu_code}`}
                  checked={subMenuSelected[index]}
                  checkedIcon={<LibraryAddCheckIcon />}
                  sx={{ margin: "5px", color: "white" }}
                  onChange={(e) => handleOnChange(index)}
                />
                {item.can_change === "Y" ? (
                  <Typography color="yellow">* สามารถเปลี่ยนเมนูได้</Typography>
                ) : (
                  <Typography color="orange">ไม่สามารถเปลี่ยนได้</Typography>
                )}
              </Grid2>
              <Grid2
                container
                spacing={2}
                display="flex"
                direction="column"
                justifyContent="flex-start"
              >
                <img
                  src={`/${baseName}/${item.image_url}`}
                  alt={item.menu_name}
                  width={180}
                  height={150}
                  onClick={() => handleOpenMenu(item)}
                />
              </Grid2>
              <Typography style={{ color: "white" }}>
                {item.menu_name}
              </Typography>
              {!subMenuSelected[index] && (
                <Button
                  variant="outlined"
                  color="warning"
                  startIcon={<ChangeCircleIcon />}
                  disabled={item.can_change !== "Y"}
                  onClick={() => handleChangeMenuItem(item.menu_code)}
                >
                  เปลี่ยนเมนู
                </Button>
              )}
            </Grid2>
          ))}
      </Grid2>
      <Dialog
        open={showChangeListMenu}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowChangeListMenu(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          เมนูสินค้าที่สามารถเปลี่ยนได้
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setShowChangeListMenu(false)}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500]
          })}
        >
          <CloseIcon fontSize="large" color="error" />
        </IconButton>
        <DialogContent dividers>
          <ChangeProductList
            optionalList={optionalList}
            setOptionalList={setOptionalList}
            subMenuSelected={subMenuSelected}
            setSubMenuSelected={setSubMenuSelected}
            currentMenu={currentMenu}
            closeDialog={() => setShowChangeListMenu(false)}
          />
        </DialogContent>
      </Dialog>
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
            addOrder={updateItemManualPrice}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default MenuSetModal
