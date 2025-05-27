import React,{useEffect} from 'react';
import HeroSection from '../Components/HeroSection';
import AboutUSComp from '../Components/AboutUSComp';
import ContactUs from './ContactUs';
import CeoMessage from '../Components/CeoMessage';
import WhyChooseUs from '../Components/WhyChooseUs';
import AlfaAtGlance from '../Components/AlfaAtGlance';
import OurPresence from '../Components/OurPresence';
import OurClients from '../Components/OurClient';
// import Counter from '../Components/Counter';
// import PortfolioComp from '../Components/PortfolioComp';
// import TestimonialComp from '../Components/TestimonialComp';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="ceomessage">
        <CeoMessage />
      </div>
      
      <div id="whychooseus">
        <WhyChooseUs />
      </div>
      <div id="alfaatglance">
        <AlfaAtGlance />
      </div>
      <div id="ourpresence">
        <OurPresence />
      </div>
      <div id="ourclients">
        <OurClients />
      </div>
      
      {/* <div id="contactus">
        <ContactUs />
      </div> */}
      {/* <ScrollToTopButton /> */}
      {/* <Counter/> */}
      {/* <PortfolioComp/> */}
      {/* <TestimonialComp/> */}
    </>
  );
}

export default Home;
