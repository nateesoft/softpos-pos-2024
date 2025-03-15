import { Grid2, Typography } from "@mui/material"

const NotFound = () => {
    return (
        <Grid2 container direction="column" sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "radial-gradient(circle at center, #135, #000)"
        }}>
            <img src="/images/notfound.png" width={200} alt="" />
            <Typography fontSize={22} fontWeight="bold" color="error" sx={{marginBottom: "5px"}}>ไม่พบข้อมูลโต๊ะในระบบ</Typography>
            <Typography sx={{color: 'white'}}>โปรดติดต่อพนักงาน !</Typography>
            <Typography fontSize={12} sx={{color: "#bbb"}}>token expired</Typography>
        </Grid2>
    )
}

export default NotFound
