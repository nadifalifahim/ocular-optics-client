import React from "react";

const ManageProductItems = (props) => {
  const { productDetails, setProducts, products } = props;

  const handleBookingDelete = () => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete your booking?"
    );
    if (confirmDelete) {
      fetch(
        `https://ocular-optics.herokuapp.com/products/${productDetails._id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            setProducts(
              products.filter((item) => item._id !== productDetails._id)
            );
          }
        })
        .then(alert("Deleted Successfully!"));
    }
  };

  return (
    <div className="bookings-items-container">
      <div className="bookings-items-content">
        <div className="bookings-paragraph-container">
          <p>{productDetails.serviceName}</p>
        </div>
        <div className="bookings-button-container">
          <button onClick={handleBookingDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageProductItems;
