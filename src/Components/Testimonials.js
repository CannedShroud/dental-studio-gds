import React from "react";
import "../Styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div className="testimonials">
      <TestimonialCard
        name="Marianne Hardy"
        treatment="PORCELAIN VENEERS"
        image="http://goadentalstudio.com/images/marianne-hardy.jpg"
        body="I owe it all to you Dr. Mahi & the fantastic job you have done over the last 3 years, for my perfect smile. As you know when I first came to see you, I was so nervous, my teeth were in a right old state. You put me at ease & worked your magic."
      />
      <TestimonialCard
        name="Cherryl Lloyd"
        treatment="FULL ARCH REHABILITATION"
        image="http://goadentalstudio.com/images/cheryl-lloyd.jpg"
        body="I have been worried about my teeth for years and I was told earlier that there was nothing that could be done about them. When I came to see Goa Dental Studio for the first time, I was over the moon when you said you could fix them."
      />
      <TestimonialCard
        name="John Lindsay"
        treatment="FULL MOUTH REHABILITATION"
        image="http://goadentalstudio.com/images/john-lindsey.jpg"
        body="The treatment was amazing. Gave me the smile I have always wanted. Cant believe the difference."
      />
    </div>
  );
}

export default Testimonials;
