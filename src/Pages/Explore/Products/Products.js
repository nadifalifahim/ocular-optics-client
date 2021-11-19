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
              {productData.map((product) => (
                <Package key={product._id} service={product}></Package>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
