import React, { useEffect, useState } from "react";
import "./Bookings.css";
import MyBookings from "../../MyBookings/MyBookings";

const Bookings = (props) => {
  const { bookingDetails, admin } = props;
  const [currentBooking, setCurrentBooking] = useState("");
  const [bookingStatus, setBookingStatus] = useState(
    bookingDetails.orderStatus
  );

  useEffect(() => {
    fetch(`http://localhost:5000/services/${bookingDetails.serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentBooking(data);
      });
  }, [bookingDetails.serviceId]);

  const handleBookingDelete = () => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete your booking?"
    );
    if (confirmDelete) {
      fetch(`http://localhost:5000/orders/${bookingDetails._id}`, {
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
    fetch(`http://localhost:5000/orders/${bookingDetails._id}`, {
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
            {currentBooking.serviceName} <small>by {bookingDetails.name}</small>
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

export default Bookings;
