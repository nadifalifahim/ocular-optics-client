import React, { useEffect, useState } from "react";
import "./Products.css";
import Loader from "react-loader-spinner";
import Package from "../../Shared/Package/Package";
import { Link } from "react-router-dom";

const Products = () => {
  const [serviceData, setServiceData] = useState([]);
  const [runLoader, setRunLoader] = useState(true);

  useEffect(() => {
    fetch("https://hidden-basin-94639.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        setRunLoader(false);
      });
  }, []);

  return (
    <div>
      <div id="packages" className="home-services-container">
        <div className="home-services-content">
          <small className="section-heading">Choose Your Package</small>
          <h2 className="section-title">
            Select Your Best Package For Your Travel
          </h2>
          <p className="section-content">
            Need help deciding where to go next? Take a look at some of our
            travelers’ recommended vacations.
          </p>
        </div>
        {/* Loader while loading */}
        {runLoader ? (
          <div className="loader">
            <Loader type="Grid" color="#f36201" height={80} width={80} />
          </div>
        ) : (
          <div>
            <div className="home-service-container">
              {serviceData.slice(0, 6).map((service) => (
                <Package key={service._id} service={service}></Package>
              ))}
            </div>
            <div className="home-services-content">
              <Link to="/explore">
                <button className="primary-button">EXPLORE MORE</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
