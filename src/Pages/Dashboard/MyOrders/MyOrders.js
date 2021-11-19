import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import "./MyOrders.css";

const MyOrders = () => {
  const [allBookings, setAllBookings] = useState([]);
  const { user } = useAuth();
  const admin = false;

  useEffect(() => {
    fetch(`http://localhost:5000/my-orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBookings(data);
      });
  }, [user.email]);

  return (
    <div>
      <div className="bookings-body">
        <div className="bookings-container">
          <div>
            <h1>My Orders</h1>
            <h2>Client: {user.displayName}</h2>
          </div>

          <div>
            {allBookings.map((item) => (
              <ProductCard
                key={item._id}
                productDetails={item}
                admin={admin}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
