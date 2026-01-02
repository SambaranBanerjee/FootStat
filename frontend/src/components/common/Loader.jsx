import React from "react";
import "../../styles/Loader.css";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
};

export default Loader;
