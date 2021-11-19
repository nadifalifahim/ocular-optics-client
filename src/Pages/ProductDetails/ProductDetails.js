import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./ProductDetails.css";

// Service Details Page
const ProductDetails = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    fetch(`https://ocular-optics.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentProduct(data));
  }, [id]);

  return (
    <div className="service-details-container">
      <div className="service-details-image-container">
        <img
          src={currentProduct.serviceImage}
          alt={currentProduct.serviceName}
        />
        <div>
          <Link to={`/place-order/${id}`}>
            <button className="primary-button">Buy Now</button>
          </Link>
          <Link to="/explore">
            <button className="secondary-button">Back to products</button>
          </Link>
        </div>
      </div>
      <div className="service-details-content">
        <small className="section-heading">SERVICE DETAILS</small>
        <h1 className="section-title">{currentProduct.serviceName}</h1>
        <p className="section-content ">{currentProduct.serviceDescription}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
