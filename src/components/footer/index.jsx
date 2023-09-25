import React from "react";

const CustomFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        backgroundColor: "#fce4e2",
        padding:'50px'

      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            style={{ width: "40px", height: "40px", marginBottom: "5px" }}
            src={require("../../assets/reslogo.png")}
          />
          <h style={{ alignSelf: "flex-start", margin: "0" }}>Tasty Treat</h>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
            delectus tenetur autem, sint veritatis!
          </p>
        </div>
      </div>
      <div style={{ flex: 1,  flexDirection: "column" }}>
        <h3 style={{marginTop:"0", marginBottom:"10px"}}>Delivery Time</h3>
        <p style={{ margin: "0" }}>Sunday - Thursday</p>
        <p style={{ margin: "0" }}>10.00 am - 11.00 pm</p>

        <p style={{ marginTop: "30px", marginBottom: "0" }}>
          Friday - Saturday
        </p>
        <p style={{ margin: "0" }}>Offday</p>
      </div>
      <div style={{ flex: 1,  flexDirection: "column" }}>
        <h3 style={{marginTop:"0", marginBottom:"10px"}}>Contact</h3>
        <p style={{ margin: "0" }}>
          Location: Thapovanam nagar - 10230 <br /> Anantapur.
        </p>

        <p>Phone: 1234566789</p>
        <p style={{ margin: "0" }}>Example: example@gmail.com</p>
      </div>
      <div style={{ flex: 1, flexDirection: "column" }}>
        <h3 style={{marginTop:"0", marginBottom:"10px"}}>Newsletter</h3>
        <p style={{ margin: "0" }}>
         Subscribe our newsletter
        </p>

        <p>Phone: 1234566789</p>
        <p style={{ margin: "0" }}>Example: example@gmail.com</p>
      </div>    </div>
  );
};

export default CustomFooter;
