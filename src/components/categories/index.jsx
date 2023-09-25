import React from "react";

const Categories = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        marginLeft: "50px",
        marginRight: "50px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fce4e2",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flex: "1",
          padding: "20px",
        }}
      >
        <img
          style={{ width: "60px", height: "60px" }}
          src={require("../../assets/category-01.png")}
        />
        <h>Fastfood</h>
      </div>
      <div
        style={{
          backgroundColor: "#fce4e2",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flex: "1",
          padding: "20px",
        }}
      >
        <img
          style={{ width: "60px", height: "60px" }}
          src={require("../../assets/category-02.png")}
        />
        <h>Pizza</h>
      </div>

      <div
        style={{
          backgroundColor: "#fce4e2",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flex: "1",
          padding: "20px",
        }}
      >
        <img
          style={{ width: "60px", height: "60px" }}
          src={require("../../assets/category-03.png")}
        />
        <h>Asian Food</h>
      </div>

      <div
        style={{
          backgroundColor: "#fce4e2",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flex: "1",
          padding: "20px",
        }}
      >
        <img
          style={{ width: "60px", height: "60px" }}
          src={require("../../assets/category-04.png")}
        />
        <h>Raw Meat</h>
      </div>
    </div>
  );
};

export default Categories;
