import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios"

function QrCodeGenerator({ mobileNumber, amount }) {
    const [image, setImage] = useState();

    const loadQRCodeImage = useCallback(() => {
        axios.post(`/api/qr-payment`, {mobileNumber, amount})
            .then((response) => {
                if (response.data.RespCode === 200) {
                    setImage(response.data.Result)
                }
            })
    }, [mobileNumber, amount])

    useEffect(() => {
        loadQRCodeImage()
    }, [loadQRCodeImage])

    return (
        <img src={image} alt="" />
    );
}
export default QrCodeGenerator;