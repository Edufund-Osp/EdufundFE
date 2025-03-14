import Header from "../landingPage/Header";
import HowItWorks from "../landingPage/HowItWorks";

import OurImpact from "./OurImpact";
import Testimonials from "../landingPage/Testimonials";
import Footer from "../landingPage/Footer";
import MeetTeam from "./MeetTeam";

function Aboutus() {
  return (
    <div>
      <Header showAuthButtons={false} />
      <HowItWorks showCreateCampaignButton={false} />
      <MeetTeam/>

      <OurImpact/>
      <Testimonials  />
      <Footer/>
    </div>
  );
}

export default Aboutus;
