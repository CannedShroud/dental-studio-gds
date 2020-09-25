import React from "react";
import "./Testemonial.css";
import client from "./client.jpg";

function Testemonial() {
  return (
    <div className="testemonial">
      <div className="testemonial__container">
        <div className="testemonial__title">
          <h1>Marianne Hardy</h1>
          <h3>(Location: Bermondsey, UK)</h3>
        </div>
        <div className="testemonial__body">
          <p>
            I owe it all to you Dr. Mahi & the fantastic job you have done over
            the last 3 years, for my perfect smile. As you know when I first
            came to see you, I was so nervous, my teeth were in a right old
            state. You put me at ease & worked your magic. As you know I've just
            got married this year & was able to smile & show my teeth at the
            same time.Thank you so much
          </p>
          <img src={client} alt="client" className="testemonial__image" />
        </div>
        <div className="testemonial__treat">
          <h2>Treatment Done: PORCELAIN VENEERS</h2>
        </div>
      </div>
    </div>
  );
}

export default Testemonial;
