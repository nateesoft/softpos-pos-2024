import React, { forwardRef, Fragment, useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Alert, Checkbox, FormControl, FormControlLabel, Grid2, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import AddItem from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {v4 as uuid} from 'uuid'

import OptionalList from './OptionalList'
import apiClient from '../../../httpRequest';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const MenuSetupPage = ({ open, setOpen }) => {

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

    apiClient.post(`/api/menu_setup`, {
      menu_code: menuCode,
      menu_name: menuName,
      menu_number: menuNumber,
      menu_type: menuType,
      menu_status: menuStatus,
      show_list_menu: showListMenu ? 'Y': 'N',
      auto_select: 'N',
      can_change: 'N',
      free: freePrice ? 'Y': 'N',
      menu_price: freePrice === 'N' ? menuPrice: 0,
      manual_price:  manualPrice ? 'Y': 'N',
      ref_menu: '',
      min_count_set: minCountSet || 0,
      max_count_set: maxCountSet || 0,
      percent_discount: 0,
      manual_discount: 0,
      image_url: menuUrl,
      tab_group: tabGroup,
      product_group: productGroup
    })
      .then(response => {
        if (response.status === 200) {
          // save menu_setup reference
          apiClient.post(`/api/menu_setup/list`, modalList)
          .then(response2 => {
            if(response2.status === 200){
              setOpen(false)
            }
          })
          .catch(err2 => {
            console.log(err2.message)
          })
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const handleSetTabGroup = (data) => {
    setTabGroup(data)
    setTabTitleName(menuTabs.filter(item => item.tab_key === data)[0].tab_name_title)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const initLoadProductGroup = useCallback(() => {
    apiClient.get(`/api/pos-groupfile/all`)
      .then(response => {
        if (response.status === 200) {
          setProductGroupList(response.data.data)
          setProductGroupList2(response.data.data)
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  const initLoadTabMenu = useCallback(() => {
    apiClient.get(`/api/menu_tabs`)
      .then(response => {
        if (response.status === 200) {
          setMenuTabs(response.data.data)
        }
      })
      .catch(err => {
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
    apiClient.get(`/api/pos-groupfile/product/${groupCode}`)
      .then(response => {
        if (response.status === 200) {
          setProductList(response.data.data)
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  const initLoadProductByGroupCode2 = useCallback((groupCode) => {
    apiClient.get(`/api/pos-groupfile/product/${groupCode}`)
      .then(response => {
        if (response.status === 200) {
          setProductList2(response.data.data)
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  const addMenuItemList = () => {
    const item = {
      id: uuid(),
      product_group: productGroup2,
      menu_code: menuCode2,
      image_url: menuUrl2,
      auto_select: autoSelect ? 'Y' : 'N',
      can_change: canChange ? 'Y' : 'N',
      free: freePrice2 ? 'Y': 'N',
      menu_name: menuName2,
      menu_price: freePrice2 === 'N' ? menuPrice2: 0,
      menu_number: '',
      menu_type: 'optional',
      menu_status: 'active',
      show_list_menu: 'N',
      ref_menu: menuCode,// main PCode
      min_count_set: 0,
      max_count_set: 0,
      percent_discount: 0,
      manual_discount: 0,
      tab_group: '',
      manual_price:  'N'
    }
    setModalList([...modalList, item])

    setProductGroup2("")
    setMenuCode2("")
    setMenuUrl2("")
    setAutoSelect(false)
    setCanChange(false)
  }

  const showDeleteItem = (data) => {
    setModalList(item => item.filter(i => i.id !== data[0]))
  }

  const handleUpdateMenuInfo = (PCode) => {
    setMenuCode(PCode)
    setMenuNumber(PCode)
    setMenuName(productList.filter(item => item.PCode === PCode)[0].PDesc)
    setMenuPrice(productList.filter(item => item.PCode === PCode)[0].PPrice11)
    setShowListMenu(productList.filter(item => item.PCode === PCode)[0].PSet === 'Y')
  }

  const handleUpdateMenuInfo2 = (PCode) => {
    setMenuCode2(PCode)
    setMenuName2(productList2.filter(item => item.PCode === PCode)[0].PDesc)
    setMenuPrice2(productList2.filter(item => item.PCode === PCode)[0].PPrice11)
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
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <MenuBookIcon />
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Menu Setup Page
            </Typography>
            <Grid2 container spacing={1}>
              <Button variant='outlined' color='white' startIcon={<SaveIcon />} onClick={handleConfirm}>บันทึกข้อมูล</Button>
              <Button variant='contained' color='error' endIcon={<CloseIcon />} onClick={handleClose}>ยกเลิก</Button>
            </Grid2>
          </Toolbar>
        </AppBar>
        {/* Form main */}
        <Grid2 container spacing={1} padding={1}>
          <Grid2 size={6} spacing={1}>
            <Grid2 container spacing={1} sx={{ border: "1px solid #eee", padding: "20px", background: "#def7ff" }}>
              <FormControl sx={{ width: "150px" }}>
                <InputLabel id="demo-simple-select-label">Tab ชื่อเมนู</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tabGroup}
                  label="Tab ชื่อเมนู"
                  onChange={e => handleSetTabGroup(e.target.value)}
                >
                  {menuTabs && menuTabs.map(item => <MenuItem value={item.tab_key}>{item.tab_key}</MenuItem>)}
                </Select>
              </FormControl>
              <TextField label="ชื่อแท็บสินค้า" value={tabTitleName} onChange={e => setTabTitleName(e.target.value)} sx={{ minWidth: "300px" }} />
              <IconButton size='large'>
                <SaveIcon />
              </IconButton>
              <FormControl sx={{ minWidth: "200px" }}>
                <InputLabel id="demo-simple-select-label">กลุ่มสินค้า</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={productGroup}
                  label="กลุ่มสินค้า"
                  onChange={e => handleLoadProduct(e.target.value)}
                >
                  {productGroupList && productGroupList.map(item => <MenuItem value={item.GroupCode}>{item.GroupName}</MenuItem>)}
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: "250px" }}>
                <InputLabel id="demo-simple-select-label">รายการสินค้าในระบบ</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={menuCode}
                  label="รายการสินค้าในระบบ"
                  onChange={e => handleUpdateMenuInfo(e.target.value)}
                >
                  {productList && productList.map(item => <MenuItem value={item.PCode}>{item.PDesc}</MenuItem>)}
                </Select>
              </FormControl>
              <TextField label="เลขเมนู" value={menuNumber} onChange={e => setMenuNumber(e.target.value)} />
              <TextField type="number" label="ราคาสินค้า/ราคาขาย" value={menuPrice} onChange={e => setMenuPrice(e.target.value)} />
              <FormControl sx={{ minWidth: "250px" }}>
                <InputLabel id="demo-simple-select-label">ประเภทสินค้า</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={menuType}
                  label="ประเภทสินค้า"
                  onChange={e => setMenuType(e.target.value)}
                >
                  <MenuItem value="product">Product</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: "250px" }}>
                <InputLabel id="demo-simple-select-label">สถานะใช้งาน</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={menuStatus}
                  label="สถานะใช้งาน"
                  onChange={e => setMenuStatus(e.target.value)}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="deactive">Deactive</MenuItem>
                </Select>
              </FormControl>
              <TextField label="กำหนดขั้นต่ำใน SET" type='number' value={minCountSet} onChange={e => setMinCountSet(e.target.value)} />
              <TextField label="กำหนดสูงสุดใน SET" type='number' value={maxCountSet} onChange={e => setMaxCountSet(e.target.value)} />
            </Grid2>
          </Grid2>
          <Grid2 size={6} spacing={1} padding={1}>
            <Grid2 container spacing={1}>
              <TextField label='URL ที่อยู่ภาพ' value={menuUrl} onChange={e => setMenuUrl(e.target.value)} fullWidth />
              <img src={menuUrl} width={100} alt="" />
            </Grid2>
          </Grid2>
        </Grid2>

        {/* Form product list */}
        <Grid2 container spacing={1} padding={1}>
          <Grid2 size={12}>
            <FormControlLabel control={<Checkbox value={freePrice} onChange={() => setFreePrice(!freePrice)} />} label="ไม่คิดราคา (Free Price)" />
            <FormControlLabel control={<Checkbox value={manualPrice} onChange={() => setManualPrice(!manualPrice)} />} label="กำหนดราคาเอง (Manual Price)" />
            <FormControlLabel control={<Checkbox value={showListMenu} onChange={() => setShowListMenu(!showListMenu)} />} label="แสดงสินค้าใน SET ให้เลือก" />
          </Grid2>
        </Grid2>
        {showListMenu && <div style={{ border: '1px solid #eee', padding: "20px", margin: "10px", background: "#c8ffb2" }}>
          <Grid2 container spacing={1} padding={1}>
            <FormControl sx={{ minWidth: "228px" }}>
              <InputLabel id="demo-simple-select-label">กลุ่มสินค้าเมนูย่อย</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productGroup2}
                label="กลุ่มสินค้าเมนูย่อย"
                onChange={e => handleLoadProduct2(e.target.value)}
              >
                {productGroupList2 && productGroupList2.map(item => <MenuItem value={item.GroupCode}>{item.GroupName}</MenuItem>)}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "250px" }}>
              <InputLabel id="demo-simple-select-label">เมนูสินค้าย่อย</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menuCode2}
                label="เมนูสินค้าย่อย"
                onChange={e => handleUpdateMenuInfo2(e.target.value)}
              >
                {productList2 && productList2.map(item => <MenuItem value={item.PCode}>{item.PDesc}</MenuItem>)}
              </Select>
            </FormControl>

          </Grid2>
          <Grid2 container spacing={1} padding={1}>
            <Grid2 size={6}>
              <Grid2 container spacing={1}>
                <TextField label='ที่อยู่รูปภาพ เมนูย่อย' value={menuUrl2} onChange={e => setMenuUrl2(e.target.value)} sx={{ minWidth: "350px" }} />
                <img src={menuUrl2} width={100} alt="" />
              </Grid2>
            </Grid2>
            <Grid2 size={6}>
              <FormControlLabel control={<Checkbox value={autoSelect} onChange={() => setAutoSelect(!autoSelect)} />} label="เลือกทันที เมื่อเลือกเมนูหลัก" />
              <FormControlLabel control={<Checkbox value={canChange} onChange={() => setCanChange(!canChange)} />} label="เปลี่ยนเมนูได้" />
              <FormControlLabel control={<Checkbox value={freePrice2} onChange={() => setFreePrice2(!canChange)} />} label="ไม่คิดราคาเพิ่ม" />
              <Button variant='contained' color='success' startIcon={<AddItem />} onClick={addMenuItemList}>เพิ่มรายการ</Button>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={1} padding={1}>
            <OptionalList modalList={modalList} showDeleteItem={showDeleteItem} />
          </Grid2>
        </div>}
        {showError && <Alert severity="error">{msgError}</Alert>}
      </Dialog>
    </Fragment>
  );
}

export default MenuSetupPage
