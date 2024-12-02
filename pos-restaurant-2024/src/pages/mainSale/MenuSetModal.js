import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, ImageListItemBar, Slide, Typography } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CloseIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ChangeProductList from './ChangeProductList'
import ShowNotification from '../utils/ShowNotification';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="top" ref={ref} {...props} />;
});

const MenuSetModal = ({ product, subMenuSelected, setSubMenuSelected, optionalList, setOptionalList }) => {
    const [showNoti, setShowNoti] = useState(false)
    const [showChangeListMenu, setShowChangeListMenu] = useState(false)
    const [notiMessage, setNotiMessage] = useState("")
    const [alertType, setAlertType] = useState("info")
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
        axios
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
                handleNotification(error)
            })
    }, [product.menu_code])

    useEffect(() => {
        loadOptionalList()
    }, [loadOptionalList])

    return (
        <ImageList sx={{ minWidth: 500, maxHeight: 450, padding: "10px" }}>
            {optionalList && optionalList.map((item, index) => (
                <ImageListItem key={item.image_url}>
                    <img
                        srcSet={`${item.image_url}?fit=crop&auto=format&dpr=2 3x`}
                        src={`${item.image_url}?fit=crop&auto=format`}
                        alt={item.menu_name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={item.menu_name}
                        position="bottom"
                        subtitle={
                            item.can_change === 'Y' ?
                                <Button variant='contained' onClick={() => setShowChangeListMenu(true)}>เปลี่ยนเมนู</Button> :
                                <Typography color='orange'>ไม่สามารถเปลี่ยนได้</Typography>
                        }
                        actionIcon={
                            <Checkbox
                                id={`subProduct${item.menu_code}`}
                                checked={subMenuSelected[index]}
                                checkedIcon={<LibraryAddCheckIcon sx={{ color: "yellow" }} />} sx={{ margin: "5px", color: "white" }}
                                onChange={(e) => handleOnChange(index)}
                            />
                        }
                        actionPosition="left"
                    />
                </ImageListItem>
            ))}
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
                    <ChangeProductList />
                </DialogContent>
                <DialogActions>
                    <Button startIcon={<CheckCircleIcon />} color='success' variant='contained' autoFocus onClick={() => setShowChangeListMenu(false)}>
                        CONFIRM
                    </Button>
                </DialogActions>
            </Dialog>
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </ImageList>
    );
}

export default MenuSetModal
