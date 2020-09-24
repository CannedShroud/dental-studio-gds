import React from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <h1>I am home</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
