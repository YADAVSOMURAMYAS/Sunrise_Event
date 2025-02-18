import React from "react";
import logo from "../../assets/logo.png"; // Brand Logo
import "./Loder.css"; // Loader Styling

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={logo} alt="Loading..." className="loader-logo" />
        </div>
    );
};

export default Loader;
