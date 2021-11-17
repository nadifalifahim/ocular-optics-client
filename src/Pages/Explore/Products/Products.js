import React, { useEffect, useState } from "react";
import "./Products.css";
import Package from "../../Shared/Package/Package";
import useLoader from "../../../Hooks/useLoader";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [runLoader, setRunLoader] = useState(true);
  const loader = useLoader();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
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
          loader
        ) : (
          <div>
            <div className="home-service-container">
              {productData.map((service) => (
                <Package key={service._id} service={service}></Package>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
