import React,{useEffect} from 'react';
import backgroundImage from "../Assets/Images/main-background.jpg"
import ServiceCopm from '../Components/ServiceCopm';
// import ServiceCard from '../Components/ServiceCard';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-24 mb-4">Our Services</h1>
        </div>
      </div>
      <div className='mt-12 mb-20' >
        <ServiceCopm />
      </div>
    </>
  );
}

export default Services;
