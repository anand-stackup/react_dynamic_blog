import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-btn">
        <button className="prev-btn" disabled>Previous</button>
        <button className="nxt-btn">
          Next<i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
    </div>
  );
};

export default Footer;
