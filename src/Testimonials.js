import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials({ name, location, body, image, treatment }) {
  return (
    <div className="testimonials">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
}

export default Testimonials;
