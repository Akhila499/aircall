import React from "react";
import { Link } from "react-router-dom";
import HeaderSideIcon from "./HeaderSideIcon";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="noblock">
      <ul>
        <li>
          <NavLink to="/incoming" activeClassName="active">
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            All calls
          </NavLink>
        </li>
        <li>
          <NavLink to="/archived" activeClassName="active">
            <i className="fa-solid fa-sliders"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
