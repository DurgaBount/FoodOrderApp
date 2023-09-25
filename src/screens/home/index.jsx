import React from "react";
import Header from "../../components/header";
import FoodItem from "../../components/foodItem";
import CustomButton from "../../components/button";
import Categories from "../../components/categories";
import CustomFooter from "../../components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f2f2f2",
          paddingBottom: "20px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div style={{ flex: "1",display:'flex',flexDirection:'column' }}>
            <p style={{fontWeight:'bold',fontSize:'25px'}}>Easy way to make an order</p>
            <h1>
              <span style={{ color: "red", fontSize: "40px" }}>Hungry?</span>
              Just wait <br /> food at{" "}
              <span style={{ color: "red" }}> your door</span>
            </h1>
            <p style={{marginTop:'50px',marginBottom:'50px'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              magni delectus tenetur autem, sint veritatis!
            </p>
            <div>
              <div style={{ display: "flex", gap: "50px" }}>
                <CustomButton title="Order now >" type="filled" />
                <CustomButton title="See all foods" type="outlined" />
              </div>

              <div style={{ display: "flex", gap: "50px", marginTop:'50px' }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={require("../../assets/reslogo.png")}
                  />
                  <h style={{ margin: "0" }}>No Shipping Charge</h>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={require("../../assets/reslogo.png")}
                  />
                  <h style={{ margin: "0" }}>100% secure checkout</h>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: "1",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
              }}
              src={require("../../assets/hero.png")}
            />
          </div>
        </div>
        <Categories />
      </div>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          paddingBottom: "20px",
          marginTop: "10px",
          display:'flex',
          textAlign:'center',
          flexDirection:'column'
        }}
      >
        <h1>Popular foods</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: "10px",
            marginRight: "50px",
            marginLeft: "50px",
          }}
        >
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
        </div>
      </div>
      <CustomFooter/>
    </div>
  );
};

export default Home;
