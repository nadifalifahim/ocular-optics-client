import React from "react";
import "./Stats.css";
import img1 from "../../../Images/Stats/1.jpg";

const Stats = () => {
  return (
    <div className="statistics-section">
      <div className="statistics-container">
        <img src={img1} alt="background" />
        <div className="statistics-content">
          <h2>
            10<span className="statistics-small">+</span>
          </h2>
          <p>Years of being in the market</p>
        </div>
        <div className="divider"></div>
        <div className="statistics-content">
          <h2>
            2000<span className="statistics-small">+</span>
          </h2>
          <p>Pairs of glasses sold worldwide</p>
        </div>
        <div className="divider"></div>
        <div className="statistics-content">
          <h2>
            90<span className="statistics-small">%</span>
          </h2>
          <p>of our customers are happy</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
