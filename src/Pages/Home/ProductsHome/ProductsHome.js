import React, { useEffect, useState } from "react";
import "./ProductsHome.css";
import Package from "../../Shared/Package/Package";
import { Link } from "react-router-dom";
import useLoader from "../../../Hooks/useLoader";

const ProductsHome = () => {
  const [productData, setProductData] = useState([]);
  const [runLoader, setRunLoader] = useState(true);
  const loader = useLoader();

  useEffect(() => {
    fetch("https://ocular-optics.herokuapp.com/products")
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
          <small className="section-heading">
            Affordable sunglasses to fit any activity
          </small>
          <h2 className="section-title">
            Shop the greatest selection of designer sunglasses
          </h2>
          <p className="section-content">
            Express yourself and look instantly glamorous with the best
            sunglasses from different world class designers.
          </p>
        </div>
        {/* Loader while loading */}
        {runLoader ? (
          loader
        ) : (
          <div>
            <div className="home-service-container">
              {productData.slice(0, 6).map((service) => (
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

export default ProductsHome;
