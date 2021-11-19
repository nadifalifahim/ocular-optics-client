import React, { useRef, useState } from "react";
import useAlert from "../../../Hooks/useAlert";
import "./AddNewProduct.css";

const AddNewProduct = () => {
  const productNameRef = useRef();
  const productImageRef = useRef();
  const productPriceRef = useRef();
  const productDescriptionRef = useRef();

  const showSuccessAlert = useAlert("Product added successfully", "success");
  const [showAlert, setShowAlert] = useState(false);
  setTimeout(() => {
    setShowAlert(false);
  }, 1000);

  const handleAddNewProduct = (e) => {
    const productName = productNameRef.current.value;
    const productImage = productImageRef.current.value;
    const productPrice = productPriceRef.current.value;
    const productDescription = productDescriptionRef.current.value;

    const newProduct = {
      serviceName: productName,
      serviceImage: productImage,
      servicePrice: productPrice,
      serviceDescription: productDescription,
    };
    fetch("https://ocular-optics.herokuapp.com/add-new-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .finally(e.target.reset())
      .then(setShowAlert(true));

    e.preventDefault();
  };

  return (
    <div>
      <div className="new-service-container">
        <div>
          <h1 className="section-title">Add a new product</h1>
          <form onSubmit={handleAddNewProduct}>
            <label>
              Product Name
              <input type="text" required ref={productNameRef}></input>
            </label>
            <label>
              Image URL
              <input type="text" ref={productImageRef}></input>
            </label>
            <label>
              Price ($)
              <input type="number" required ref={productPriceRef}></input>
            </label>
            <label>
              Product Description
              <textarea type="text" ref={productDescriptionRef}></textarea>
            </label>
            <button type="submit" className="primary-button">
              Add New Product
            </button>
            {showAlert && (
              <div className="successAlert">{showSuccessAlert}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
