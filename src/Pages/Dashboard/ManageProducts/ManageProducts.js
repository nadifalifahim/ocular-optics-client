import React, { useState, useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import ManageProductItems from "./ManageProductItems/ManageProductItems";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { admin } = useAuth();
  useEffect(() => {
    fetch("https://ocular-optics.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="bookings-body">
        <div className="bookings-container">
          <div>
            <h1>Manage Products</h1>
          </div>

          <div>
            {products.map((product) => (
              <ManageProductItems
                key={product._id}
                productDetails={product}
                products={products}
                setProducts={setProducts}
                admin={admin}
              ></ManageProductItems>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
