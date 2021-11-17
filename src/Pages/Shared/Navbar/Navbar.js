import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../Hooks/useAuth";
import userIcon from "../../../Images/User/1.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const setUserFirstName = () => {
    if (user.displayName) {
      const userName = user?.displayName;
      const userNameArray = userName.split(" ");
      return userNameArray[0];
    }
  };
  return (
    <div className="nav-container">
      <nav className="nav-content">
        <Link to="/home">
          <div className="logo-container">
            <img src="logo192.png" alt="ocular logo"></img>
            <p>OCULAR</p>
          </div>
        </Link>
        <div className="links-container">
          <NavLink to="/home">HOME</NavLink>
          <NavLink to="/explore">EXPLORE</NavLink>
          {user?.email && (
            <div>
              <NavLink to="/dashboard">DASHBOARD</NavLink>
            </div>
          )}
        </div>

        <div>
          {user?.email ? (
            <div className="logged-in-state ">
              {user.photoURL ? (
                <img src={user.photoURL} alt="User" />
              ) : (
                <img src={userIcon} alt="User" />
              )}
              {user.displayName && <p>Hello, {setUserFirstName()}</p>}
              <button onClick={logOut}>
                <i className="fas fa-sign-out-alt"></i>
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div>
              <div className="links-container">
                <NavLink to="/login">LOGIN</NavLink>
                <NavLink to="/register">REGISTER</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
