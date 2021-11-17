import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./ServiceDetails.css";

// Service Details Page
const ServiceDetails = () => {
  const { id } = useParams();
  const [currentService, setCurrentService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentService(data));
  }, [id]);

  return (
    <div className="service-details-container">
      <div className="service-details-image-container">
        <img
          src={currentService.serviceImage}
          alt={currentService.serviceName}
        />
        <div>
          <Link to={`/place-order/${id}`}>
            <button className="primary-button">Book Now</button>
          </Link>
          <HashLink to="/#packages">
            <button className="secondary-button">Back to services</button>
          </HashLink>
        </div>
      </div>
      <div className="service-details-content">
        <small className="section-heading">SERVICE DETAILS</small>
        <h1 className="section-title">{currentService.serviceName}</h1>
        <p className="section-content ">{currentService.serviceDescription}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
