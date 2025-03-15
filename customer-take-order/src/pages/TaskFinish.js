import { Grid2, Typography } from "@mui/material"

const TaskFinish = () => {
  return (
    <>
      <Grid2
        container
        direction="column"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "radial-gradient(circle at center, snow, #e8c5e5)"
        }}
      >
        <img src="/images/receipt.png" width={200} alt="" />
        <Typography fontSize={22} fontWeight="bold" sx={{ margin: "5px" }}>
          ^^ รับชำระเงินเรียบร้อยแล้ว ^^
        </Typography>
        <Typography>ขอบคุณที่ใช้บริการค่ะ</Typography>
      </Grid2>
      <div style={{border: "1px solid black"}}></div>
    </>
  )
}

export default TaskFinish
