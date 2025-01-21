import React, { useCallback, useEffect, useState } from 'react'

import apiClient from '../../httpRequest'
import ShowNotification from "../ui-utils/ShowNotification"

function QrCodeGenerator({ mobileNumber, amount }) {
    const [image, setImage] = useState();
    const [size, setSize] = useState(120)
    const [showNoti, setShowNoti] = useState(false)
    const [notiMessage, setNotiMessage] = useState("")
    const [alertType, setAlertType] = useState("info")
    const handleNotification = (message, type = "error") => {
        setNotiMessage(message)
        setAlertType(type)
        setShowNoti(true)
    }

    const loadQRCodeImage = useCallback(() => {
        apiClient.post(`/api/qr-payment`, { mobileNumber, amount: parseFloat(amount) })
            .then((response) => {
                if (response.data.RespCode === 200) {
                    setImage(response.data.Result)
                }
            })
            .catch(err => {
                handleNotification(err.message)
            })
    }, [mobileNumber, amount])

    useEffect(() => {
        loadQRCodeImage()
    }, [loadQRCodeImage])

    return (
        <div>
            <img src={image} width={size} onClick={() => setSize(s => s + 100)} alt="" />
            <ShowNotification showNoti={showNoti} setShowNoti={setShowNoti} message={notiMessage} alertType={alertType} />
        </div>
    );
}
export default QrCodeGenerator;