import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Sidebar.css";

const Sidebar = () => {
  const { user, logOut, admin } = useAuth();
  let { url } = useRouteMatch();
  return (
    <div className="sidebar-container">
      <div className="sidebar-container">
        <nav className="sidebar-content">
          <h3>DASHBOARD</h3>
          <div className="sidebar-links-container">
            <NavLink to={`${url}/my-orders`}>MY ORDERS</NavLink>
            <Link to={`${url}/pay`}>PAY</Link>
            <NavLink to={`${url}/review`}>REVIEW</NavLink>
            {admin && (
              <div className="sidebar-links-container">
                <NavLink to={`${url}/manage-all-orders`}>
                  MANAGE ALL ORDERS
                </NavLink>
                <NavLink to={`${url}/add-new-product`}>ADD A PRODUCT</NavLink>
                <NavLink to={`${url}/add-new-admin`}>MAKE ADMIN</NavLink>
                <NavLink to={`${url}/manage-products`}>MANAGE PRODUCTS</NavLink>
              </div>
            )}
          </div>

          <div>
            {user?.email ? (
              <div className="sidebar-logged-in-state ">
                <button onClick={logOut}>
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div>
                <div className="sidebar-links-container">
                  <NavLink to="/login">LOGIN</NavLink>
                  <NavLink to="/register">REGISTER</NavLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
