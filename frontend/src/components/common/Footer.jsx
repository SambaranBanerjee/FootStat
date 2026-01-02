import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>⚽ FootStat</h3>
          <p>
            Empowering football talent through transparency, performance,
            and opportunity.
          </p>
        </div>

        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/players">Players</a>
          <a href="/organizations">Organizations</a>
          <a href="/contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FootStat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
