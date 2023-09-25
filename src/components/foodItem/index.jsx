import React from "react";
import CustomButton from "../button";

const FoodItem = () => {
    return <div style={{ display: "flex",flexDirection:'column',padding:'20px', border: '1px solid grey' }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems:'center'
      }}
    >
      <img
        style={{ width: "200px", height: "200px" }}
        src={require("../../assets/product_4.3.png")}
      />
      <p>Chicken Burger</p>
    </div>
    <div style={{display:'flex',justifyContent:'space-between'}}>
      <p style={{color:'red',fontWeight:'bold'}}>$24</p>
      <CustomButton title='Add to cart' type="filled"/>
    </div>
  </div>
}

export default FoodItem