import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";

// import AboutUSComp from '../Components/AboutUSComp';
const CookiesPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-[165vh] h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-64 text-center">
            Cookies Policy
          </h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Alfa Cookies Policy
        </h1>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <li className="font-medium text-2xl">Cookies Policy</li>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            This Cookies Policy explains what cookies are and how we use them.
            For further information on how we use, store and keep your personal
            data secure, see our Privacy Policy.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <li className="font-medium text-2xl">What are Cookies?</li>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            Cookies are small text files that are stored on the browser or hard
            drive of your computer or mobile device when you visit a webpage.
            Cookies work to make your experience browsing the site as smooth as
            possible. They can remember your preferences, so you don’t have to
            repeatedly insert your details, and they can also help the owners of
            the website to analyze how their site is being used.
            <br />
            <br />
            There are different types of cookies. Some cookies come directly
            from the website you are browsing and others come from third parties
            which place cookies on the site. Cookies can be stored for varying
            lengths of time on your browser or device. Session cookies are
            deleted from your computer or device when you close your browser.
            Persistent cookies will remain stored on your computer or device
            until deleted or until they reach their expiry date.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <li className="font-medium text-2xl">How do we use Cookies?</li>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            Session cookies enable us to keep track of you while you are on the
            site and to help you navigate the site better and faster. Persistent
            cookies enable the site to recognize you when you visit and keep
            track of your preferences in relation to your use of the site.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <li className="font-medium text-2xl">Third-Party Cookies</li>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            We use Google Analytics to analyze the use of our website. Google
            Analytics generates statistical and other information about website
            use by means of cookies which are stored on the users’ computers.
            <br />
            <br />
            We may also use other third-party cookies from time to time and for
            more information on these you can contact us at the email below:
            <br />
            <br />
            <p className="font-bold">
            info@alfamrinesa.com
            </p>
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <li className="font-medium text-2xl">Opting Out & Disabling Cookies</li>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            You may disable cookies by changing the cookie preferences settings on your browser. However, if you do, this may affect your enjoyment of the website and it may not work as it should.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <li className="font-medium text-2xl">Changes to this Cookie Policy</li>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            We may update this policy periodically and you are advised check it regularly so as to be aware of the latest version.
          </p>
        </ul>  
      </div>
    </>
  );
};

export default CookiesPolicy;
