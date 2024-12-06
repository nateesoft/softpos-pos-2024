import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import { Button, Checkbox, Dialog, DialogContent, DialogTitle, Grid2, IconButton, Slide, Typography } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CloseIcon from '@mui/icons-material/Cancel';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

import ChangeProductList from './ChangeProductList'
import ShowNotification from '../utils/ShowNotification';
import apiClient from '../../httpRequest';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const MenuSetModal = ({ product, subMenuSelected, setSubMenuSelected, optionalList, setOptionalList }) => {
    const [showNoti, setShowNoti] = useState(false)
    const [showChangeListMenu, setShowChangeListMenu] = useState(false)
    const [notiMessage, setNotiMessage] = useState("")
    const [alertType, setAlertType] = useState("info")
    const [currentMenu, setCurrentMenu] = useState("")

    const handleNotification = (message, type = "error") => {
        setNotiMessage(message)
        setAlertType(type)
        setShowNoti(true)
    }

    // const matches = useMediaQuery('(min-width:600px)');

    const handleOnChange = (position) => {
        const updatedCheckedState = subMenuSelected.map((item, index) => index === position ? !item : item)
        setSubMenuSelected(updatedCheckedState)

        const updatedOrderListSelected = optionalList.map((item, index) => {
            return {
                ...item,
                checked: updatedCheckedState[index]
            }
        })

        setOptionalList(updatedOrderListSelected)
    }

    const loadOptionalList = useCallback(() => {
        apiClient
            .get(`/api/menu_setup/optional/${product.menu_code}`)
            .then((response) => {
                if (response.data.code === 200) {
                    setOptionalList(response.data.data)
                    setSubMenuSelected(new Array(response.data.data.length)
                        .fill(false)
                        .map((data, index) => response.data.data[index].auto_select === 'Y'))
                }
            })
            .catch((error) => {
                handleNotification(error.message)
            })
    }, [product.menu_code])

    const handleChangeMenuItem = (menuCode) => {
        setShowChangeListMenu(true)
        setCurrentMenu(menuCode)
    }

    useEffect(() => {
        loadOptionalList()
    }, [loadOptionalList])

    return (
        <div style={{ height: '350px', overflow: 'auto' }}>
            <Grid2 container spacing={1} justifyContent="center">
                {optionalList && optionalList.map((item, index) => (
                    <div style={{ border: "1px solid #eee", padding: "10px", borderRadius: "15px", backgroundColor: "black" }}>
                        <Grid2 container alignItems="center">
                            <Checkbox
                                id={`subProduct${item.menu_code}`}
                                checked={subMenuSelected[index]}
                                disabled={item.can_change !== 'Y'}
                                checkedIcon={<LibraryAddCheckIcon />} sx={{ margin: "5px", color: "white" }}
                                onChange={(e) => handleOnChange(index)}
                            />
                            {item.can_change === 'Y' ?
                                <Typography color='yellow'>* สามารถเปลี่ยนเมนูได้</Typography> :
                                <Typography color='orange'>ไม่สามารถเปลี่ยนได้</Typography>}
                        </Grid2>
                        <Grid2 container spacing={2} display="flex" direction="column" justifyContent="flex-start">
                            <img src={item.image_url} alt={item.menu_name} width={200} height={150} />
                        </Grid2>
                        <Typography style={{ color: "white" }}>{item.menu_name}</Typography>
                        {!subMenuSelected[index] && <Button variant='contained' startIcon={<ChangeCircleIcon />} onClick={() => handleChangeMenuItem(item.menu_code)}>เปลี่ยนเมนู</Button>}
                    </div>
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
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon fontSize='large' color='error' />
                </IconButton>
                <DialogContent dividers>
                    <ChangeProductList optionalList={optionalList} currentMenu={currentMenu} closeDialog={()=>setShowChangeListMenu(false)} />
                </DialogContent>
            </Dialog>
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </div>
    )
}

export default MenuSetModal
