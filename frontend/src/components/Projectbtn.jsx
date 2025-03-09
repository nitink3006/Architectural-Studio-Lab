import React from 'react';
import "../Stylesheet/Project.css";
// import  { useState } from "react";
// import Projectimg2 from "./Projectimg2";
 
function Projectbtn() {
  //  const [showMore, setShowMore] = useState(false);
  return (
    <div className='mx-auto flex flex-col flex-md-row justify-content-center align-items-center pt-10 '>
       
      <button className='border ps-20 pe-20 pt-3 pb-3 ms-2 me-2 proj_load_more_btn'
       onClick={() => setShowMore(true)} >Load More</button>
      <button className='border ps-16 pe-16 pt-3 pb-3  ms-2 me-2 bg-dark text-white '>View All Projects</button>
    </div>
  )
}

export default Projectbtn
