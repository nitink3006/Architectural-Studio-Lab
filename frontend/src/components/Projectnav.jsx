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
    <div>
      <Navigation />

      <div className="pt-40 text-center text-5xl">
        <p>
          <em>Our </em>
          <span>
            <strong>Projects</strong>
          </span>
        </p>
      </div>

      <div className="text-center">
        <p>2018 - 2024</p>
      </div>

      {/* Project Filter Navigation */}
      <Projectnavheader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Filtered Projects */}
      <Projectimg selectedCategory={selectedCategory} />
      {clickCount >= 1 && <Projectimg2 selectedCategory={selectedCategory} />}
      {clickCount >= 2 && <Projectimg3 selectedCategory={selectedCategory} />}

      {/* Load More Button */}
      <div className="projnav_load_btn flex justify-center mb-20">
        <button
          className={`border ps-20 pe-20 pt-3 pb-3 ms-2 me-2 proj_load_more_btn ${
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
