import { IconButton } from "@material-ui/core";
import { ContactMail, Face, Facebook, Room } from "@material-ui/icons";
import React from "react";
import "../Styles/Header.css";
import logo from "../Assets/Images/logo.png";
import googleLogo from "../Assets/Images/googleLogo.png";

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
          <IconButton
            href="https://www.google.com/search?q=goa+dental+studio&oq=goa+&aqs=chrome.0.69i59j69i60l2j69i59j69i60l2j69i59.3382j0j4&sourceid=chrome&ie=UTF-8#"
            target="_blank"
          >
            <img src={googleLogo} alt="" className="header__googleLogo" />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/goadentalstudio"
            target="_blank"
          >
            <Facebook className="header__icon" />
          </IconButton>
          <IconButton>
            <Room className="header__icon" />
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
