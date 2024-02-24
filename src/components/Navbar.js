import React from "react";
import logo from "../assets/logos/logo-orange.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li className="menu">
            <NavLink to="/" className="nav-link">
              Photographie
            </NavLink>
          </li>

          <li>
            <img src={logo} alt="Claire Panizzolo Logo" />
          </li>

          <li className="menu">
            <NavLink to="/" className="nav-link">
              Services & Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
