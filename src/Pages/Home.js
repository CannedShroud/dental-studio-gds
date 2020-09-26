import React from "react";
import "../Styles/Home.css";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import Testimonials from "../Components/Testimonials";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <div
          href="https://www.facebook.com/goadentalstudio"
          style={{ display: "block" }}
        >
          <a href="https://ww.facebook.co/goadentalstudio">
            <img
              src="https://raw.githubusercontent.com/CannedShroud/dental-studio/master/src/Assets/Images/dentalChair.jpg"
              alt="Image"
              className="home__image"
            />
          </a>
        </div>
        <div className="home__container">
          <div className="home__landing">
            <div className="home__branding">
              <h1>Goa Dental Studio</h1>
              <h3>Creating smiles for a lifetime</h3>
            </div>
            <div className="home__mobfb">
              <img
                src="https://about.fb.com/wp-content/uploads/2019/11/facebook_wordmark.gif"
                alt=""
                className="home__mobfbImage"
              />
            </div>
            <div className="home__embeds">
              <div className="home__facebook">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgoadentalstudio&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="home__google"></div>
            </div>
          </div>
          <div className="home__cards">
            <Cards />
          </div>
          <div className="home__testimonials">
            <div className="home__testimonialsTitle">
              <h1>Testimonials</h1>
            </div>
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
