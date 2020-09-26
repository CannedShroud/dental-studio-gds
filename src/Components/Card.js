import React from "react";
import "../Styles/Card.css";

function Card({ headline, title, description, action, button }) {
  return (
    <div className="card">
      <div className="card__headline">
        <h1>{headline}</h1>
      </div>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
      {button}
    </div>
  );
}

export default Card;