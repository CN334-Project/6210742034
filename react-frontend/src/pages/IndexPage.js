import React from "react";
import "../styles/IndexStyle.scss";
import travel_01 from "../assets/travel-01.jpg";

const IndexPage = () => {
  return (
    <div className="IndexContent">
      {/* <img className="index-image" src={require("../assets/bg3.jpg")}></img> */}
      <div className="index-title">
        <div className="index-text">
          <h1>Hello, I'm </h1>
          <h2 className="text-gradient">Chanantaphon Chanuksri</h2>
        </div>
        <div className="index-text">
          <h2 style={{justifyContent:'center'}}>I'm a </h2>
          <h2>Software Enginner Student</h2>
        </div>
        <button className="btn-index btn-gradient-border"><a href="#About" className="text-white">View My Portfolio</a></button>
      </div>
    </div>
  );
};

export default IndexPage;
