import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import userIcon from "../../../Images/User/1.png";
import "./Sidebar.css";

const Sidebar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="sidebar-container">
      <div className="sidebar-container">
        <nav className="sidebar-content">
          <h3>DASHBOARD</h3>
          <div className="sidebar-links-container">
            <NavLink to="/explore">PAY</NavLink>
            <NavLink to="/explore">MY ORDERS</NavLink>
            <NavLink to="/explore">REVIEW</NavLink>
            <NavLink to="/explore">MANAGE ALL ORDERS</NavLink>
            <NavLink to="/explore">ADD A PRODUCT</NavLink>
            <NavLink to="/explore">MAKE ADMIN</NavLink>
            <NavLink to="/explore">MANAGE PRODUCT</NavLink>
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
