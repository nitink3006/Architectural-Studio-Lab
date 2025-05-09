import React, { useState } from "react";
import Projectimg from "./Projectimg";
import Projectimg2 from "./Projectimg2";
import Projectimg3 from "./Projectimg3";

import Navigation from "./Navigation";
import Footer from "./Footer";
import Projectnavheader from "./Projectnavheader";
import "../Stylesheet/Projectnav.css";

function Projectnav() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="bg-Soft_Grey">
      <Navigation />

{/*       <div className="bg-Soft_Grey text-5xl text-center pt-40">
        <p className="futura_font text_black">
          <em>Our </em>
          <span>
            <strong>Projects</strong>
          </span>
        </p>
      </div> */}

      {/* <div className="bg-Soft_Grey text-center avenir_font_light text_dark_grey">
        <p>2018 - 2024</p>
      </div> */}

      {/* Project Filter Navigation */}
      <div className=" pt-15"></div>
      <Projectnavheader 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Filtered Projects */}
      <Projectimg selectedCategory={selectedCategory} />
      {clickCount >= 1 && <Projectimg2 selectedCategory={selectedCategory} />}
      {clickCount >= 2 && <Projectimg3 selectedCategory={selectedCategory} />}

      {/* Load More Button */}
      <div className="flex justify-center mb-20 projnav_load_btn">
        <button
          className={`text_black border futura_font ps-20 pe-20 pt-3 pb-3 ms-2 me-2 bg-dark text-white proj_load_more_btn ${
            clickCount >= 2 ? "disabled opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setClickCount((prev) => prev + 1)}
          disabled={clickCount >= 2}
        >
          Load More
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Projectnav;
