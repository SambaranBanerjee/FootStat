import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="logo">FootStat</div>

      <div className="nav-links">
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="highlight">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/players">View Players</Link>
            <Link to="/organizations">View Organizations</Link>
            <Link to="/about">About Us</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
