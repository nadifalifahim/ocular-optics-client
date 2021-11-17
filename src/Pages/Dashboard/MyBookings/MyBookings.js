import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Bookings from "../../Shared/Bookings/Bookings";
import "./MyBookings.css";

const MyBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const { user } = useAuth();
  const admin = false;

  useEffect(() => {
    fetch("http://localhost:5000/my-orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBookings(data);
      });
  }, []);

  return (
    <div>
      <div className="bookings-body">
        <div className="bookings-container">
          <div>
            <h1>My Bookings</h1>
            <h2>Client: {user.displayName}</h2>
          </div>

          <div>
            {allBookings
              .filter((myItem) => user.email === myItem.email)
              .map((bookings) => (
                <Bookings
                  key={bookings._id}
                  bookingDetails={bookings}
                  admin={admin}
                ></Bookings>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
