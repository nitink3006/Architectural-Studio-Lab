import React from 'react';
import "../Stylesheet/Project.css";
// import  { useState } from "react";
// import Projectimg2 from "./Projectimg2";
 
function Projectbtn() {
  //  const [showMore, setShowMore] = useState(false);
  return (
    <div className='flex flex-col flex-md-row align-items-center justify-content-center mx-auto pt-10'>
       
      <button className='bg-dark border text-white me-2 ms-2 pb-3 pe-20 proj_load_more_btn ps-20 pt-3'
       onClick={() => setShowMore(true)} >Load More</button>
      <button className='bg-dark border text-white me-2 ms-2 pb-3 pe-16 ps-16 pt-3'>View All Projects</button>
    </div>
  )
}

export default Projectbtn
