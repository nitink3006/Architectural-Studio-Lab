import React from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import FullScreenVideo from "./FullScreenVideo";
import HomeContent from "./HomeContent";
import Testimonials from "./Testimonials";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className=" bg-gray-100">

   
    <Navigation />
   <FullScreenVideo />
    <HomeContent />
    <Projects />
    <Testimonials />
    <Footer />
    
  

    </div>
  );
};

export default Home;
