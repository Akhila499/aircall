import React from "react";
import FooterCallIcon from "./FooterCallIcon";
import ContactIcon from "./ContactIcon";
import MenuIcon from "./MenuIcon";
import SettingsIcon from "./SettingsIcon";
import CircleIcon from "./CircleIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="footercall footall">
          <i className="fas fa-phone"></i>
        </div>
      </Link>
      <Link to="/contacts">
        <div className="footall">
          <i className="far fa-user"></i>
        </div>
      </Link>
      <Link to="/">
        <MenuIcon />
      </Link>
      <Link to="/settings">
        <div className="footall">
          <i className="fa-solid fa-gear"></i>
        </div>
      </Link>
      <Link to="/">
        <CircleIcon />
      </Link>
    </div>
  );
};

export default Footer;
