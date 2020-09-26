import React from "react";
import "./Testimonials.css";
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
      <TestimonialCard
        name="John Burke and Russel Gray"
        image="http://goadentalstudio.com/images/russel-gray-and-john-burke.jpg"
        body="Goa is a truly wonderful place to holiday. To combine extensive dental work at the same time is amazing. After some research we discovered the wonderful GOA DENTAL STUDIO.

      Having a fear of dentists, we both agree that the attention to detail from the first consultation to the end result is outstanding and totally pain free.
      
      Both my friend and I had 20 porcelain crowns made and fitted over four visits and any work done is at your pace and at a FRACTION OF THE COST in the UK.
      
      If you are considering any dental work we both highly recommend this true professional. WE simply cannot praise Dr Mahi enough.
      
      If you need reassurance of what can only be described as a remarkable experience which you can arrange from the UK, you can get in touch with us. We live in Warrington and have added our phone no: 01925 852877."
      />
    </div>
  );
}

export default Testimonials;
