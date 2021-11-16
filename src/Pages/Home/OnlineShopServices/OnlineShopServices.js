import React from "react";
import "./OnlineShoppingServices.css";

const OnlineShopServices = () => {
  return (
    <div className="online-services-container">
      <div className="online-services-header">
        <h2>ONLINE SHOP SERVICES</h2>
        <h3>Our entire offer is only just one click away</h3>
      </div>
      <div className="online-services-content">
        <div className="services-elements">
          <i className="fas fa-cart-plus"></i>
          <h5>FREE DELIVERY</h5>
          <p>
            Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae
            orci sit
          </p>
        </div>
        <div className="services-elements">
          <i className="fas fa-shield-alt"></i>
          <h5>100% SAFE ONLINE SHOPING</h5>
          <p>
            Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae
            orci sit
          </p>
        </div>
        <div className="services-elements">
          <i className="fas fa-headset"></i>
          <h5>HELPDESK CENTER</h5>
          <p>
            Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae
            orci sit
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineShopServices;
