import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright &copy; REZA HAJIPOUR {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;
