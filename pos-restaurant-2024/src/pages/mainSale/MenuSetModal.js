import React, { useState, useEffect, useCallback } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios'
import { Button, Checkbox, ImageListItemBar, Typography } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import ShowNotification from '../utils/ShowNotification';

const MenuSetModal = ({ product, subMenuSelected, setSubMenuSelected }) => {
    const [optionalList, setOptionalList] = useState([])
    const [checkedState, setCheckedState] = useState()

    const [showNoti, setShowNoti] = useState(false)
    const [notiMessage, setNotiMessage] = useState("")
    const [alertType, setAlertType] = useState("info")
    const handleNotification = (message, type = "error") => {
        setNotiMessage(message)
        setAlertType(type)
        setShowNoti(true)
    }

    // const matches = useMediaQuery('(min-width:600px)');

    const handleOnChange = (position) => {
        console.log('position:', position)
        const updatedCheckedState = optionalList.map((item, index) => {
            if(index === position) {
                return {
                    ...item,
                    checked: !item.checked
                }
            } else {
                return {
                    ...item,
                    checked: item.checked
                }
            }
        })
        setOptionalList(updatedCheckedState)
        setCheckedState(updatedCheckedState)
        setSubMenuSelected(updatedCheckedState)

        console.log('CheckedState Item:', checkedState)
    }
    // const handleOnChange = (position, value) => {
    //     console.log('position:', position, value)
    //     const updatedCheckedState = checkedState.map((item, index) => index === position ? !item : item)
    //     setCheckedState(updatedCheckedState)
    //     setSubMenuSelected(updatedCheckedState)

    //     console.log('CheckedState Item:', checkedState)
    // }

    const loadOptionalList = useCallback(() => {
        axios
            .get(`/api/menu_setup/optional/${product.menu_code}`)
            .then((response) => {
                // console.log("initLoadMenu:", response)
                if (response.data.code === 200) {
                    setOptionalList(response.data.data)
                    setCheckedState(new Array(response.data.data.length).fill(false))
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
                                <Button variant='contained'>เปลี่ยนเมนู</Button> :
                                <Typography color='orange'>ไม่สามารถเปลี่ยนได้</Typography>
                        }
                        actionIcon={
                            <Checkbox
                                id={`subProduct${item.menu_code}`}
                                defaultChecked={item.auto_select === "Y"}
                                checked={optionalList[index].checked ? optionalList[index].checked: item.auto_select === "Y"}
                                checkedIcon={<LibraryAddCheckIcon sx={{ color: "yellow" }} />} sx={{ margin: "5px", color: "white" }}
                                onChange={(e) => handleOnChange(index)}
                            />
                        }
                        actionPosition="left"
                    />
                </ImageListItem>
            ))}
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </ImageList>
    );
}

export default MenuSetModal
