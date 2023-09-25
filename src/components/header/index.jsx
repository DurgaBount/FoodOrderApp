import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "50px",
        paddingRight: "50px",
        position:'sticky',
        top:'0'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "40px", height: "40px", marginBottom: "5px" }}
          src={require("../../assets/reslogo.png")}
        />
        <h style={{ alignSelf: "flex-start", margin: "0" }}>Tasty Treat</h>
      </div>
      <nav>
        <ul style={{ display: "flex" }}>
          <li style={{ listStyle: "none", padding: "10px" }}>
            <a style={{ textDecoration: "none" }} href="#Home">
              Home
            </a>
          </li>
          <li style={{ listStyle: "none", padding: "10px" }}>
            <a style={{ textDecoration: "none" }} href="#Food">
              Food
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <img
          style={{ width: "30px", height: "30px", marginLeft: "20px" }}
          src={require("../../assets/cart.png")}
        />
        <img
          style={{ width: "30px", height: "30px", marginLeft: "20px" }}
          src={require("../../assets/user.png")}
        />
      </div>
    </div>
  );
};

export default Header;
