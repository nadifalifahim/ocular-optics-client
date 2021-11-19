import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { productDetails } = props;
  const { admin } = useAuth();
  const [currentBooking, setCurrentBooking] = useState("");
  const [bookingStatus, setBookingStatus] = useState(
    productDetails.orderStatus
  );

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productDetails.serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentBooking(data);
      });
  }, [productDetails.serviceId]);

  const handleBookingDelete = () => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete your booking?"
    );
    if (confirmDelete) {
      fetch(`http://localhost:5000/orders/${productDetails._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully!");
            window.location.reload();
          }
        });
    }
  };

  const handleStatusUpdate = () => {
    fetch(`http://localhost:5000/orders/${productDetails._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookingStatus("Approved");
      });
  };

  return (
    <div className="bookings-items-container">
      <div className="bookings-items-content">
        <div className="bookings-paragraph-container">
          <p>
            {currentBooking.serviceName} <small>by {productDetails.name}</small>
          </p>
        </div>
        <div className="bookings-button-container">
          {admin && (
            <button onClick={handleStatusUpdate}>{bookingStatus}</button>
          )}
          <button onClick={handleBookingDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
