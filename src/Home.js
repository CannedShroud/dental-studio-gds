import React from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import chair from "./chair2.jpg";
import brandingLogo from "./cannon-dental.png";
import Cards from "./Cards";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <img src={chair} alt="Image" className="home__image" />
        <div className="home__container">
          <div className="home__landing">
            <div className="home__branding">
              <img src={brandingLogo} alt="" />
              {/* <h1>Goa Dental Studio</h1> */}
              <h3>Giving you a smile you're happy to show off</h3>
            </div>
          </div>
            <div className="home__cards">
              <Cards />
            </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
