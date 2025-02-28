import React, { useCallback, useEffect, useState } from 'react'

import apiClient from '../../httpRequest'
import { useAlert } from '../../contexts/AlertContext';

function QrCodeGenerator({ mobileNumber, amount }) {
    const [image, setImage] = useState();
    const [size, setSize] = useState(120)
    const { handleNotification } = useAlert()

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
    }, [mobileNumber, amount, handleNotification])

    useEffect(() => {
        loadQRCodeImage()
    }, [loadQRCodeImage])

    return (
        <div>
            <img src={image} width={size} onClick={() => setSize(s => s + 100)} alt="" />
        </div>
    );
}
export default QrCodeGenerator;