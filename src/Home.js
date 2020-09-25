import React from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import chair from "./chair2.jpg";
import brandingLogo from "./cannon-dental.png";
import Cards from "./Cards";
import Testemonial from "./Testemonial";

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
          <div className="home__testemonials">
            <div className="home__testemonialsTitle">
              <h1>Testemonials</h1>
            </div>
            <div className="home__testemonialCards">
              <Testemonial />
              <Testemonial />
              <Testemonial />
              <Testemonial />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
