import { IconButton } from "@material-ui/core";
import { ContactMail, Face, Facebook, Room } from "@material-ui/icons";
import React from "react";
import "../Styles/Header.css";
import logo from "../Assets/Images/logo.png";
import googleLogo from "../Assets/Images/googleLogo.png";
import { Link } from "react-router-dom";

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
          <Link to="/services" style={{ textDecoration: "none" }}>
            <div className="header__navitem">
              <h3>TREATMENTS</h3>
            </div>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <div className="header__navitem">
              <h3>ABOUT US</h3>
            </div>
          </Link>
          <Link to="/testimonials" style={{ textDecoration: "none" }}>
            <div className="header__navitem">
              <h3>TESTIMONIALS</h3>
            </div>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <div className="header__navitem">
              <h3>CONTACT US</h3>
            </div>
          </Link>
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
          <a
            href="https://www.google.com/maps/place/Goa+Dental+Studio/@15.5295082,73.7637537,15z/https://www.google.com/maps/place/Goa+Dental+Studio/@15.5295082,73.7637537,15z/data=!4m2!3m1!1s0x0:0x1e866e0e73a2f475?sa=X&ved=2ahUKEwi1g-_VxYfsAhVq8HMBHToSBHEQ_BIwCnoECBoQCA"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <IconButton>
              <Room className="header__icon" />
            </IconButton>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mahidesai@gmail.com&su=GoaDentalStudio&body=BODY"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <IconButton>
              <ContactMail className="header__icon" />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
