import React from "react";
import "./Footer.css";

// Footer Component

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <p>© 2021 OCULAR OPTICS</p>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
