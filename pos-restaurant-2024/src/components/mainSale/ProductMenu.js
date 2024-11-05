import React from "react";
import { Box, Button } from "@mui/material";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const ProductCard = ({ name, url, openModal }) => {
    return (
        <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px", boxShadow: "2px 1px #eee" }}>
            <Box textAlign="center">
                <img src={url} alt="" width={180} style={{ borderRadius: "10px" }} /><br />
            </Box>
            <table width="100%">
                <tr>
                    <td colSpan={2} align="center" style={{ fontWeight: "bold" }}>
                        {name}
                    </td>
                </tr>
                <tr>
                    <td align="left">100B</td>
                    <td align="right">Detail</td>
                </tr>
                <tr>
                    <td align="center">
                        <Button variant="contained" color="success">Add Order</Button>
                    </td>
                    <td style={{cursor: "pointer"}}>
                        <AddToPhotosIcon fontSize="large" onClick={openModal} />
                    </td>
                </tr>
            </table>
        </div>
    )
}

const groupMenu = {
    padding: "10px",
    backgroundColor: "snow",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    marginRight: "20px",
    whiteSpace: "nowrap",
    fontWeight: "bold"
}

function ProductMenu({ openModal }) {
    return (
        <div>
            <div style={{ overflow: "auto", width: "500px" }}>
                <table width="100%">
                    <tr>
                        <td style={{ ...groupMenu, backgroundColor: "#eee" }}>เมนูทั้งหมด</td>
                        <td style={groupMenu}>อาหารเช้า</td>
                        <td style={groupMenu}>ของทานเล่น</td>
                        <td style={groupMenu}>อาหารจีน</td>
                        <td style={groupMenu}>อาหารอิตาเลียน</td>
                        <td style={groupMenu}>เครื่องดื่ม</td>
                        <td style={groupMenu}>ของหวาน</td>
                    </tr>
                </table>
            </div>
            <table width="100%">
                <tr>
                    <td>
                        <ProductCard name="ไข่พะโล้หมูสามชั้น" url="images/product/food01.png" openModal={openModal} />
                    </td>
                    <td>
                        <ProductCard name="หมูปลาร้าปั้นก้อน" url="images/product/food02.png" />
                    </td>
                    <td>
                        <ProductCard name="แกงเห็ดเผาะ" url="images/product/food03.png" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ProductCard name="ไก่ย่างสามเกลอ แจ่วมะขามแซ่บ" url="images/product/food04.png" />
                    </td>
                    <td>
                        <ProductCard name="ตำเส้นพวงแคปหมูผักงูเขียว" url="images/product/food05.png" />
                    </td>
                    <td>
                        <ProductCard name="ปลาหมึกต้มมะนาว" url="images/product/food06.png" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ProductCard name="ตำชมพู่มะเหมี่ยวกะปิปลากรอบ" url="images/product/food07.png" />
                    </td>
                    <td>
                        <ProductCard name="หมูย่าง หมูปิ้ง" url="images/product/food08.png" />
                    </td>
                    <td>
                        <ProductCard name="เมี่ยงปลาทอด" url="images/product/food09.png" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ProductMenu;