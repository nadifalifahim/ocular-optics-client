import React from "react";
import "./Package.css";
import { Link } from "react-router-dom";

const Package = (props) => {
  let { _id, serviceName, serviceImage, servicePrice, serviceDescription } =
    props.service;
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={serviceImage} alt={serviceName}></img>
      </div>
      <h2>{serviceName.toUpperCase()}</h2>
      <h2>PRICE: ${servicePrice}</h2>
      <p>{serviceDescription.slice(0, 150)} . . .</p>
      <Link to={`/place-order/${_id}`}>
        <button className="package-button-book">
          Buy Now <i className="fas fa-chevron-right"></i>
        </button>
      </Link>
      <Link to={`/products/${_id}`}>
        <button className="package-button-details">More details </button>
      </Link>
    </div>
  );
};

export default Package;
