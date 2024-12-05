import React, { useCallback, useEffect, useState } from 'react'
import apiClient from '../../httpRequest'

function QrCodeGenerator({ mobileNumber, amount }) {
    const [image, setImage] = useState();
    const [size, setSize] = useState(120)

    const loadQRCodeImage = useCallback(() => {
        apiClient.post(`/api/qr-payment`, { mobileNumber, amount: parseFloat(amount) })
            .then((response) => {
                if (response.data.RespCode === 200) {
                    setImage(response.data.Result)
                }
            })
            .catch(err=> {
                alert(err)
            })
    }, [mobileNumber, amount])

    useEffect(() => {
        loadQRCodeImage()
    }, [loadQRCodeImage])

    return (
        <img src={image} width={size} onClick={() => setSize(s => s + 100)} alt="" />
    );
}
export default QrCodeGenerator;