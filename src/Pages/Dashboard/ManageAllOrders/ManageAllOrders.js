import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const ManageAllOrders = () => {
  const [allBookings, setAllBookings] = useState([]);
  const { admin } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/all-orders")
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
            <h1>All Orders</h1>
            <h2>Displaying orders from all users</h2>
          </div>

          <div>
            {allBookings.map((bookings) => (
              <ProductCard
                key={bookings._id}
                productDetails={bookings}
                admin={admin}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
