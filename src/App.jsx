import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from "./Components/Navbar.jsx";
import Home from "./Views/Home.jsx";
import AboutUs from './Views/AboutUs.jsx';
import Services from './Views/Services';
import Portfolio from './Views/Portfolio';
import ContactUs from './Views/ContactUs';
import GetStarted from './Views/GetStarted.jsx';
import GroupOverview from './Views/GroupOverview.jsx';
import Footer from "./Components/Footer.jsx";
import ReadMore from "./Views/ReadMore.jsx";
import Sustainability from './Views/Sustainability.jsx';
import OurValues from './Views/OurValues.jsx';
import Strategy from './Views/Strategy.jsx';
import Leadership from './Views/Leadership.jsx';
import Facility from './Views/Facility.jsx';
import Capability from './Views/Capability.jsx';
import Accreditation from './Views/Accreditation.jsx';
import MarineOffshoreDivision from './Views/MarineOffshoreDivision.jsx';
import ConstructionDivision from './Views/ConstructionDivision.jsx';
import FabricationDivision from './Views/FabricationDivision.jsx';
import TradingDivision from './Views/TradingDivision.jsx';
import ICTDivision from './Views/ICTDivision.jsx';
import FacilityManagement from './Views/FacilityManagement.jsx';
import Joinery from './Views/Joinery.jsx';
import EnvironmentalResponsability from './Views/EnvironmentalResponsability.jsx';
import HSEPolicy from './Views/HSEPolicy.jsx';
import QualityAssurancePolicy from './Views/QualityAssurancePolicy.jsx';
import EthicsCompliance from './Views/EthicsCompliance.jsx';
import NewsSection from './Views/NewsSection.jsx';
import DownloadCenter from './Views/DownloadCenter.jsx';
import CommercialInquiries from './Views/CommercialInquiries.jsx';
import CareersInquiries from './Views/CareersInquiries.jsx';
import Supplier from './Views/Supplier.jsx';
import WhistleBlowing from './Views/WhistleBlowing.jsx';
import PrivacyPolicy from './Views/PrivacyPolicy.jsx';
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';
import CookiesPolicy from './Views/CookiesPolicy.jsx';
import TermsAndConditions from './Views/TermsAndConditions.jsx';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <ScrollToTopButton/>
          <Routes>
            {/* Who We are */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/core-values" element={<OurValues />} />
            <Route exact path="/our-strategy" element={<Strategy />} />
            <Route exact path="/meet-our-leadership" element={<Leadership />} />
            <Route exact path="/our-facilities" element={<Facility />} />
            <Route exact path="/our-capabilities" element={<Capability/>} />
            <Route exact path="/accreditations" element={<Accreditation/>} />
            {/* Divisions Pages */}
            <Route exact path="/marine-and-offshore-division" element={<MarineOffshoreDivision/>} />
            <Route exact path="/construction-division" element={<ConstructionDivision/>} />
            <Route exact path="/fabrication-and-machining-division" element={<FabricationDivision/>} />
            <Route exact path="/trading-division" element={<TradingDivision/>} />
            <Route exact path="/ict-division" element={<ICTDivision/>} />
            <Route exact path="/facility-management-division" element={<FacilityManagement/>} />
            <Route exact path="/joinery-division" element={<Joinery/>} />
            {/* Sustainability */}
            <Route exact path="/environmental-responsibility" element={<EnvironmentalResponsability />} />
            <Route exact path="/health-safety-and-environmental-policy" element={<HSEPolicy />} />
            <Route exact path="/quality-assurance-policy" element={<QualityAssurancePolicy />} />
            <Route exact path="/ethics-and-compliance" element={<EthicsCompliance />} />
            {/* Media Center */}
            <Route exact path="/news" element={<NewsSection/>} />
            <Route exact path="/download-center" element={<DownloadCenter/>} />
            {/* Contact us */}
            <Route exact path="/commercial-inquiries" element={<CommercialInquiries />} />
            <Route exact path="/Careers" element={<CareersInquiries />} />
            <Route exact path="/become-a-supplier" element={<Supplier />} />
            <Route exact path="/Whistleblowing" element={<WhistleBlowing />} />
            {/* privacy policy */}
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/cookies-policy" element={<CookiesPolicy />} />
            <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />

            <Route exact path="/sustainability" element={<Sustainability />} />
            <Route exact path="/groupoverview" element={<GroupOverview />} />
            <Route exact path="/readmoreaboutcompany" element={<AboutUs />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/getstarted" element={<GetStarted />} />
            {/* <Route exact path="/readmore/:id" element={<ReadMore/>}/> */}
            <Route exact path="/:serviceName" element={<ReadMore />} />

          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
