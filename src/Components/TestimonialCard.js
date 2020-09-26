import { Avatar } from "@material-ui/core";
import React from "react";
import "../Styles/TestimonialCard.css";

function TestimonialCard({ name, treatment, image, body }) {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard__content">
        <div className="testimonialCard__body">
            <Avatar src={image} className="testimonialCard__avatar"/>
          <p>{body}</p>
        </div>
        <div className="testimonialCard__details">
          <h2>{name} </h2>
          <br />
          <h5>{treatment}</h5>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
