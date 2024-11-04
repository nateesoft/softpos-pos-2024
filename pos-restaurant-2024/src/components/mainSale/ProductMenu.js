import React from "react";

const ProductCard = ({ name, url, openModal }) => {
    return (
        <div style={{ padding: "15px", border: "2px solid #eee", borderRadius: "10px" }}>
            <img src={url} alt="" style={{ borderRadius: "10px" }} /><br />
            <table width="100%">
                <tr>
                    <td colSpan={2} align="left" style={{ fontWeight: "bold" }}>
                        {name}
                    </td>
                </tr>
                <tr>
                    <td align="left">100B</td>
                    <td align="right">Detail</td>
                </tr>
                <tr>
                    <td align="center" colSpan={2}>
                        <button 
                        style={{ backgroundColor: "#b4f0a5", 
                            padding: "10px", color: "black", 
                            borderRadius: "10px", border: "0px" }} 
                        onClick={openModal}>Add to Dish</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

const groupMenu = {
    padding: "10px",
    backgroundColor: "snow",
    height: "100px",
    borderRadius: "20px",
    width: "150px",
    textAlign: "center",
    marginRight: "20px",
    whiteSpace: "nowrap",
    fontWeight: "bold"
}

function ProductMenu({openModal}) {
    return (
        <div>
            <div style={{overflow: "auto", width: "550px"}}>
                <table width="100%">
                    <tr>
                        <td style={groupMenu}>All Menu</td>
                        <td style={groupMenu}>Breakfast</td>
                        <td style={groupMenu}>Scoups</td>
                        <td style={groupMenu}>Pasta</td>
                        <td style={groupMenu}>Main Course</td>
                        <td style={groupMenu}>Burgers</td>
                        <td style={groupMenu}>Other1</td>
                    </tr>
                </table>
            </div>
            <table>
                <tr>
                    <td>
                        <ProductCard name="Test Product 01" url="images/product/food01.png" openModal={openModal} />
                    </td>
                    <td>
                        <ProductCard name="Test Product 02" url="images/product/food02.png" />
                    </td>
                    <td>
                        <ProductCard name="Test Product 03" url="images/product/food03.png" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ProductCard name="Test Product 04" url="images/product/food04.png" />
                    </td>
                    <td>
                        <ProductCard name="Test Product 05" url="images/product/food05.png" />
                    </td>
                    <td>
                        <ProductCard name="Test Product 06" url="images/product/food01.png" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ProductCard name="Test Product 07" url="images/product/food02.png" />
                    </td>
                    <td>
                        <ProductCard name="Test Product 08" url="images/product/food03.png" />
                    </td>
                    <td>
                        <ProductCard name="Test Product 09" url="images/product/food04.png" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ProductMenu;