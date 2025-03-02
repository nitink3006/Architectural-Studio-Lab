import React from 'react';
import Projectimg from "./Projectimg";
import Projectimg2 from "./Projectimg2";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Projectnavheader from "./Projectnavheader";
import "../Stylesheet/Projectnav.css";
import  { useState } from "react";

function Projectnav() {
    const [showMore, setShowMore] = useState(false);
  return (
    <div>
       
      <Navigation />

      <div className='pt-40 text-center text-5xl'>
        <p>
        <em>
            Our </em>
            <span><strong> Projects</strong></span>
            
        </p>
          
       
        </div>
        <div className='text-center'>
            <p>
            2018 - 2024
            </p>
        </div>
      <Projectnavheader />
      <Projectimg />
      {showMore && <Projectimg2 />}
     
    

{/* 
      <div className='projnav_load_btn flex justify-center mb-20'>
        <button className='border pt-3 pb-3 ps-20 pe-20'>
            Load More
        </button>
      </div> */}
       <div className="projnav_load_btn flex justify-center mb-20">
        <button
          className="border pt-3 pb-3 ps-20 pe-20"
          onClick={() => setShowMore(true)}
        >
          Load More
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Projectnav
