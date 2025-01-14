import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, Divider, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import CloseButton from '@mui/icons-material/Close'
import OpenTableButton from '@mui/icons-material/MobileFriendly';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import moment from 'moment'

import apiClient from '../../httpRequest'
// import CustomerDetail from './CustomerDetail';
import { POSContext } from '../../AppContext';
import CustomerNationDetail from './CustomerNationDetail';

const min = 1;
const max = 10;

const CustomerCheckin = (props) => {
    const { appData, setAppData } = useContext(POSContext)
    const { macno, userLogin } = appData
    const { tableNo, tableStatus } = appData.tableInfo

    const { setOpenPin, empCode } = props
    const navigate = useNavigate();

    const [tableInfo, setTableIno] = useState(null)

    const [custCount, setCustCount] = useState(1)
    const [orderType, setOrderType] = useState('E');

    // additional other customer count
    const [manCount, setManCount] = useState(0)
    const [womanCount, setWomanCount] = useState(0)
    const [kidCount, setKidCount] = useState(0)
    const [oldCount, setOldCount] = useState(0)

    // nation customer
    const [thaiCount, setThaiCount] = useState(0)
    const [europeCount, setEuropeCount] = useState(0)
    const [americaCount, setAmericaCount] = useState(0)
    const [asiaCount, setAsiaCount] = useState(0)

    const [customerName, setCustomerName] = useState("")
    const [memberCode, setMemberCode] = useState("")
    const [reserveNo, setReserveNo] = useState("")
    const [timeCheckIn, setTimeCheckIn] = useState(moment(new Date()).format('DD/MM/YYYY HH:mm:ss'))

    const [showError, setShowError] = useState(false)
    const [showCustomerError, setShowCustomerError] = useState(false)
    const [showCustomerCountError, setShowCustomerCountError] = useState(false)
    const handleChangeOrderType = (event, oType) => {
        setOrderType(oType);
    };

    const handleOpenTable = async () => {
        const checkTableActive = await apiClient.get(`/api/tablefile/${tableNo}`)
        const tableResponse = checkTableActive.data.data
        if (tableResponse != null) {
            if ((thaiCount + europeCount + americaCount + asiaCount) !== custCount) {
                setShowCustomerCountError(true)
                return;
            }
            if (custCount >= 0 && orderType !== "") {
                // call api to update table checkin
                apiClient.post(`/api/table_checkin/${tableNo}`, {
                    empCode,
                    macno,
                    customer_count: custCount,
                    cust_man_count: manCount,
                    cust_woman_count: womanCount,
                    cust_kid_count: kidCount,
                    cust_old_count: oldCount,
                    cust_thai_count: thaiCount,
                    cust_europe_count: europeCount,
                    cust_america_count: americaCount,
                    cust_asia_count: asiaCount,
                    customer_name: customerName,
                    member_code: memberCode,
                    book_no: reserveNo,
                    table_order_type_start: orderType
                })
                    .then(response => {
                        if (response.status === 200) {
                            setShowError(false)
                            setShowCustomerError(false)
                            setShowCustomerCountError(false)
                            setAppData({
                                ...appData, tableInfo: {
                                    ...appData.tableInfo,
                                    customerCount: custCount,
                                    customerName: customerName,
                                    orderType: orderType
                                }
                            })
                            navigate(`/sale/${tableNo}`)
                        } else {
                            setShowCustomerError(true)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        setShowCustomerError(true)
                    })
            } else {
                setShowCustomerError(true)
            }
        } else {
            setShowError(true)
        }
    }

    const handleCancel = () => {
        setOpenPin(false)
        setShowError(false)
        setShowCustomerError(false)
        setShowCustomerCountError(false)

        navigate('/floorplan')
    }

    useEffect(() => {
        apiClient.get(`/api/table_checkin/${tableNo}`)
            .then(response => {
                if (response.status === 200 && response.data.data != null) {
                    const tableInfoData = response.data.data
                    setTableIno(tableInfoData)
                    setCustCount(tableInfoData.customer_count)
                    setManCount(tableInfoData.cust_man_count)
                    setWomanCount(tableInfoData.cust_woman_count)
                    setKidCount(tableInfoData.cust_kid_count)
                    setOldCount(tableInfoData.cust_old_count)
                    setThaiCount(tableInfoData.cust_thai_count)
                    setEuropeCount(tableInfoData.cust_europe_count)
                    setAmericaCount(tableInfoData.cust_america_count)
                    setAsiaCount(tableInfoData.cust_asia_count)
                    setCustomerName(tableInfoData.customer_name)
                    setMemberCode(tableInfoData.member_code)
                    setReserveNo(tableInfoData.book_no)
                    setTimeCheckIn(moment(tableInfoData.datetime_checkin).format('DD/MM/YYYY HH:mm:ss'))
                    setOrderType(tableInfoData.table_order_type_start)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Grid2 textAlign="center" sx={{ background: "pink" }} padding={1} marginBottom="10px">
                <Typography variant='p' sx={{ fontSize: "18px", fontWeight: "bold" }}>เวลาเข้าใช้งาน: {timeCheckIn}</Typography>
            </Grid2>
            <Grid2 textAlign="center">
                <Typography variant='h5' sx={{ fontWeight: "bold", color: "#0030bb", textShadow: "2px 2px #eee" }}>Table: {tableNo}</Typography>
            </Grid2>
            <Divider sx={{ margin: "10px" }} />
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Grid2 container spacing={2}>
                    <TextField
                        id="outlined-number"
                        label="ระบุจำนวนลูกค้า"
                        value={custCount}
                        onChange={(e) => {
                            var value = parseInt(e.target.value, 10);
                            if (value > max) value = max;
                            if (value < min) value = min;
                            setCustCount(value);
                        }}
                        type="number"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            }
                        }}
                    />
                </Grid2>
                {/* <CustomerDetail
                        man={manCount} setMan={setManCount}
                        woman={womanCount} setWoman={setWomanCount}
                        kid={kidCount} setKid={setKidCount}
                        old={oldCount} setOld={setOldCount}
                    /> */}
                <CustomerNationDetail
                    thaiPeople={thaiCount} setThaiCount={setThaiCount}
                    europePeople={europeCount} setEuropeCount={setEuropeCount}
                    americaPeople={americaCount} setAmericaCount={setAmericaCount}
                    asiaPeople={asiaCount} setAsiaCount={setAsiaCount}
                />
            </Box>

            <Grid2 container padding={1}>
                <TextField
                    id="outlined-number"
                    label="ชื่อลูกค้า"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    fullWidth
                />
            </Grid2>
            <Grid2 container padding={1} spacing={1}>
                <TextField
                    id="outlined-number"
                    label="เลขที่สมาชิก"
                    value={memberCode}
                    onChange={e => setMemberCode(e.target.value)}
                />
                <Button variant='contained' startIcon={<PersonSearchIcon />}>ค้นหา</Button>
            </Grid2>
            <Grid2 container padding={1} spacing={1}>
                <TextField
                    id="outlined-number"
                    label="เลขที่จอง"
                    value={reserveNo}
                    onChange={e => setReserveNo(e.target.value)}
                />
                <Button variant='contained' startIcon={<ContentPasteSearchIcon />}>ค้นหา</Button>
            </Grid2>
            <Grid2 container padding={1} spacing={1} alignContent="center" direction="column">
                <Grid2 container>
                    <Typography variant='p'>ประเภทอาหาร</Typography>
                </Grid2>
                <ToggleButtonGroup
                    color="primary"
                    value={orderType}
                    exclusive
                    onChange={handleChangeOrderType}
                    aria-label="Platform"
                    fullWidth
                >
                    <ToggleButton value="E">Dine In</ToggleButton>
                    <ToggleButton value="T">Take Away</ToggleButton>
                    <ToggleButton value="D">Delivery</ToggleButton>
                </ToggleButtonGroup>
            </Grid2>
            {showError && <Alert severity="error" sx={{ width: "100%" }}>สถานะโต๊ะไม่พร้อมใช้งาน</Alert>}
            {showCustomerError && <Alert severity="error" sx={{ width: "100%" }}>ข้อมูลลูกค้าไม่ถูกต้อง</Alert>}
            {showCustomerCountError && <Alert severity="error" sx={{ width: "100%" }}>ข้อมูลจำนวนลูกค้าไม่ตรงกัน !</Alert>}
            <Grid2 textAlign="center" padding={1}>
                <Button variant='contained' sx={{ width: "120px", fontSize: "16px", marginRight: "10px" }} color='error' onClick={handleCancel} startIcon={<CloseButton />}>Cancel</Button>
                <Button variant='contained' sx={{ width: "120px", fontSize: "16px" }} onClick={handleOpenTable} startIcon={<OpenTableButton />}>เปิดโต๊ะ</Button>
            </Grid2>
        </div>
    )
}

export default CustomerCheckin