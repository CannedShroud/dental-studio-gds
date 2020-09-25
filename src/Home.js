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
              <Testemonial
                name="Vivienne Green"
                location="Location: London, UK"
                body="I visited Goa Dental Studio last January after a recommendation from a friend. I wanted some crowns, I had 2 teeth that needed crowning and 2 that I wanted done for cosmetic reasons. I had had a quote from my dentist in the Uk; I could have 2 done on the NHS but the other 2 would have to be done privately. Secretly I wanted all my teeth crowned from one side of my smile to the other and after a meeting with Mahi when she gave me some instant quotes, that is exactly what I had done, 17 teeth in total!
                I had one session preparing the teeth and having temporaries fitted. Of course I was not looking forward to this at all but it was nowhere near as bad as I expected. Mahi devoted an entire day to me so I could have a break whenever I needed it (I only had one break), obviously there was some discomfort but I had very little pain, the injections were the worst thing and Mahi gave me a couple and waited until they had set in before moving around my mouth. I went back a few days later to get my new teeth, they were all temporarily fitted so I could check them, there was one i was not happy with, the original tooth was set too far back and hadnt been brought in line quite enough so that went back to the lab and the rest were permanently fitted. I went back 2 days later for a check up and to have the last tooth done.   
                I had this work done in my two week holiday and I was worried it might spoil my holiday having all this dental work done but it didn't at all. I am absolutely thrilled with my new teeth and so very glad I had them done!"
                image="http://goadentalstudio.com/images/vivienne-green.jpg"
                treatment="Whatever dunno"
              />
              <Testemonial
                name="Marianne Hardy"
                location="Location: Bermondsey, UK"
                body="I owe it all to you Dr. Mahi & the fantastic job you have done over the last 3 years, for my perfect smile. As you know when I first came to see you, I was so nervous, my teeth were in a right old state. You put me at ease & worked your magic.
                As you know I've just got married this year & was able to smile & show my teeth at the same time.Thank you so much"
                image="http://goadentalstudio.com/images/marianne-hardy.jpg"
                treatment="PORCELAIN VENEERS"
              />
              <Testemonial
                name="Joseph Seitz"
                location="Location: AUSTRALIA"
                body="I was missing four upper teeth and my other teeth were not in the best condition. In order for local denists to leave me without 'dentures' it would have put me into great debt, therefore in February of this year I decided to take a risk; I went on a great holiday and had my teeth fixed! All up I had ten crowns, over three bridges, a root canal treatment and tooth whitening performed by Dr Mahi Desai. I was able to spend two weeks at the most beautiful beaches in India at Calangute, in Goa, and get my mouth looking and feeling great all well under budget.
The care and attention received from Dr Desai and her staff would put most Australian Dentists to shame. I would highly recommend Goa Dental Studio to anyone interested in having any dental work done, it was a thouroughly enjoyable experience."
                treatment="FULL ARCH REHABILITATION"
                image="http://goadentalstudio.com/images/joseph-seitz.jpg"
              />
              <Testemonial
                name="Burnley Lancs"
                location="Location: England"
                body="I visited the dentist here in Goa, originally just for an estimate for my top teeth.

              But the care, attention and expertise… I was amazed with not to mention the price. I found that I could afford to have them done this year..And I am going home with beautiful white teeth. I cannot emphasize enough how pleased I am and will recommend this dentist to anyone."
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
