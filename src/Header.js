import { IconButton } from "@material-ui/core";
import { ContactMail, Face, Facebook, Room } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import logo from "./logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="LOGO" className="header__logo" />
        <div className="header__title">
          <h1>Goa Dental Studio</h1>
        </div>
      </div>
      <div className="header__right">
        <div className="header__nav">
          <div className="header__navitem">
            <h3>ABOUT US</h3>
          </div>
          <div className="header__navitem">
            <h3>TESTIMONIALS</h3>
          </div>
          <div className="header__navitem">
            <h3>CONTACT US</h3>
          </div>
        </div>
        <div className="header__icons">
          <IconButton>
            <Room className="header__icon" />
          </IconButton>
          <IconButton>
            <Facebook className="header__icon" />
          </IconButton>
          <IconButton>
            <ContactMail className="header__icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
