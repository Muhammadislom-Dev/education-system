import React from "react";
import { NavbarBox } from "./style";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Auth from "../../pages/Auth/Auth";

function Navbar() {
  return (
    <NavbarBox>
      <div className="container">
        <div className="navbar-list">
          <Link className="navbar-name" to="/">
            graphit school
          </Link>
          <div className="navbar-item">
            <a href="#" className="navbar-link">
              Bosh sahifa
            </a>
            <a href="#" className="navbar-link">
              Xizmatlar
            </a>
            <a href="#" className="navbar-link">
              Kontaktlar
            </a>
            <a href="tel:+998909213711" className="navbar-links">
              +998 90 921 37 11
            </a>
            <Auth />
          </div>
        </div>
      </div>
    </NavbarBox>
  );
}

export default Navbar;
