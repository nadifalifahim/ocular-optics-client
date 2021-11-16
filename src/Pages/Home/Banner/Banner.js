import React from "react";
import "./Banner.css";
import img1 from "../../../Images/Banner/2.jpg";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div id="home">
      <div className="banner-container">
        <img src={img1} alt="banner" />
        <div className="banner-content">
          <h1>Gift yourself with perfection</h1>
          <div className="underline-red"></div>
          <h2>
            Delivering distinctive selection of sunglasses <br /> with knowledge
            and support to satisfy every customer
          </h2>
          <br />
          <HashLink smooth to="#packages">
            <button>
              Shop Now <i className="fas fa-plus-circle"></i>
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
