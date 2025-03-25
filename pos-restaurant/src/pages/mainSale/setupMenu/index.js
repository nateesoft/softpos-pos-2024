import React, {
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useState
} from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import {
  Grid2} from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { v4 as uuid } from "uuid"

import apiClient from "../../../httpRequest"
import EditableTabs from "./EditableTabs"

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />
})

const MenuSetupPage = ({ open, setOpen }) => {
  console.log("MenuSetupPage")
  const [showError, setShowError] = useState(false)
  const [msgError, setMsgError] = useState("")

  const [tabGroup, setTabGroup] = useState("")
  const [menuTabs, setMenuTabs] = useState([])
  const [tabTitleName, setTabTitleName] = useState("")
  const [productGroup, setProductGroup] = useState("")
  const [menuCode, setMenuCode] = useState("")
  const [menuName, setMenuName] = useState("")
  const [menuPrice, setMenuPrice] = useState(0)
  const [menuNumber, setMenuNumber] = useState("")
  const [minCountSet, setMinCountSet] = useState(0)
  const [maxCountSet, setMaxCountSet] = useState(0)
  const [menuUrl, setMenuUrl] = useState("/images/product/1003.jpg")
  const [menuType, setMenuType] = useState("product")
  const [menuStatus, setMenuStatus] = useState("active")
  const [showListMenu, setShowListMenu] = useState(false)

  const [freePrice, setFreePrice] = useState(false)
  const [manualPrice, setManualPrice] = useState(false)
  const [autoSelect, setAutoSelect] = useState(false)
  const [canChange, setCanChange] = useState(false)

  const [productGroupList, setProductGroupList] = useState([])
  const [productList, setProductList] = useState([])

  // for product item list
  const [productGroup2, setProductGroup2] = useState("")
  const [menuCode2, setMenuCode2] = useState("")
  const [menuName2, setMenuName2] = useState("")
  const [menuPrice2, setMenuPrice2] = useState(0)
  const [freePrice2, setFreePrice2] = useState(true)
  const [menuUrl2, setMenuUrl2] = useState("/images/product/1001.jpg")
  const [productGroupList2, setProductGroupList2] = useState([])
  const [productList2, setProductList2] = useState([])

  // menu list in modal
  const [modalList, setModalList] = useState([])

  const handleConfirm = () => {
    if (!tabTitleName) return
    if (!productGroup) return
    if (!menuCode) return

    apiClient
      .post(`/api/menu_setup`, {
        menu_code: menuCode,
        menu_name: menuName,
        menu_number: menuNumber,
        menu_type: menuType,
        menu_status: menuStatus,
        show_list_menu: showListMenu ? "Y" : "N",
        auto_select: "N",
        can_change: "N",
        free: freePrice ? "Y" : "N",
        menu_price: freePrice === "N" ? menuPrice : 0,
        manual_price: manualPrice ? "Y" : "N",
        ref_menu: "",
        min_count_set: minCountSet || 0,
        max_count_set: maxCountSet || 0,
        percent_discount: 0,
        manual_discount: 0,
        image_url: menuUrl,
        tab_group: tabGroup,
        product_group: productGroup
      })
      .then((response) => {
        if (response.status === 200) {
          // save menu_setup reference
          apiClient
            .post(`/api/menu_setup/list`, modalList)
            .then((response2) => {
              if (response2.status === 200) {
                setOpen(false)
              }
            })
            .catch((err2) => {
              console.log(err2.message)
            })
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleSetTabGroup = (data) => {
    setTabGroup(data)
    setTabTitleName(
      menuTabs.filter((item) => item.tab_key === data)[0].tab_name_title
    )
  }

  const handleClose = () => {
    setOpen(false)
  }

  const initLoadProductGroup = useCallback(() => {
    apiClient
      .get(`/api/pos-groupfile/all`)
      .then((response) => {
        if (response.status === 200) {
          setProductGroupList(response.data.data)
          setProductGroupList2(response.data.data)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const initLoadTabMenu = useCallback(() => {
    apiClient
      .get(`/api/menu_tabs`)
      .then((response) => {
        if (response.status === 200) {
          setMenuTabs(response.data.data)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const handleLoadProduct = (gCode) => {
    setProductGroup(gCode)
    setMenuCode("")
    setMenuNumber("")
    setMenuPrice(0)

    initLoadProductByGroupCode(gCode)
  }

  const handleLoadProduct2 = (gCode) => {
    setProductGroup2(gCode)
    setMenuCode2("")

    initLoadProductByGroupCode2(gCode)
  }

  const initLoadProductByGroupCode = useCallback((groupCode) => {
    apiClient
      .get(`/api/pos-groupfile/product/${groupCode}`)
      .then((response) => {
        if (response.status === 200) {
          setProductList(response.data.data)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const initLoadProductByGroupCode2 = useCallback((groupCode) => {
    apiClient
      .get(`/api/pos-groupfile/product/${groupCode}`)
      .then((response) => {
        if (response.status === 200) {
          setProductList2(response.data.data)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const addMenuItemList = () => {
    const item = {
      id: uuid(),
      product_group: productGroup2,
      menu_code: menuCode2,
      image_url: menuUrl2,
      auto_select: autoSelect ? "Y" : "N",
      can_change: canChange ? "Y" : "N",
      free: freePrice2 ? "Y" : "N",
      menu_name: menuName2,
      menu_price: freePrice2 === "N" ? menuPrice2 : 0,
      menu_number: "",
      menu_type: "optional",
      menu_status: "active",
      show_list_menu: "N",
      ref_menu: menuCode, // main PCode
      min_count_set: 0,
      max_count_set: 0,
      percent_discount: 0,
      manual_discount: 0,
      tab_group: "",
      manual_price: "N"
    }
    setModalList([...modalList, item])

    setProductGroup2("")
    setMenuCode2("")
    setMenuUrl2("")
    setAutoSelect(false)
    setCanChange(false)
  }

  const showDeleteItem = (data) => {
    setModalList((item) => item.filter((i) => i.id !== data[0]))
  }

  const handleUpdateMenuInfo = (PCode) => {
    setMenuCode(PCode)
    setMenuNumber(PCode)
    setMenuName(productList.filter((item) => item.PCode === PCode)[0].PDesc)
    setMenuPrice(productList.filter((item) => item.PCode === PCode)[0].PPrice11)
    setShowListMenu(
      productList.filter((item) => item.PCode === PCode)[0].PSet === "Y"
    )
  }

  const handleUpdateMenuInfo2 = (PCode) => {
    setMenuCode2(PCode)
    setMenuName2(productList2.filter((item) => item.PCode === PCode)[0].PDesc)
    setMenuPrice2(
      productList2.filter((item) => item.PCode === PCode)[0].PPrice11
    )
  }

  useEffect(() => {
    initLoadTabMenu()
    initLoadProductGroup()
  }, [])

  return (
    <Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <MenuBookIcon />
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Menu Setup
            </Typography>
            <Grid2 container spacing={1}>
            <Button
                variant="contained"
                color="error"
                endIcon={<CloseIcon />}
                onClick={handleClose}
              >
                ยกเลิก
              </Button>
              <Button
                variant="outlined"
                color="white"
                startIcon={<SaveIcon />}
                onClick={handleConfirm}
              >
                บันทึกข้อมูล
              </Button>
            </Grid2>
          </Toolbar>
        </AppBar>
        <EditableTabs />
      </Dialog>
    </Fragment>
  )
}

export default MenuSetupPage
