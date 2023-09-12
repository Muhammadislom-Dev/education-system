import React from "react";
import PixerIcon from "../../assets/icon/pixer.svg";
import { NavbarBox } from "./style";

function Navbar() {
  return (
    <NavbarBox>
      <div className="container">
        <div className="navbar-list">
          <img src={PixerIcon} alt="PixerIcon" className="navbar-icon" />
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
          </div>
        </div>
      </div>
    </NavbarBox>
  );
}

export default Navbar;
