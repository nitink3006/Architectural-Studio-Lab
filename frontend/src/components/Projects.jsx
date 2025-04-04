import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../Stylesheet/Project.css";
import Projecthead from "./Projecthead";
import Projectimg from "./Projectimg";
import Projectimg2 from "./Projectimg2";
import Projectimg3 from "./Projectimg3";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const inspirationRef = useRef(null);
  const isInspirationInView = useInView(inspirationRef, { margin: "-100px" });

  return (
    <div className=" mt-0 pb-15 proj_home">
      {/* bg-Soft_Grey */}
      <Projecthead
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Projectimg selectedCategory={selectedCategory} />
      {clickCount >= 1 && <Projectimg2 selectedCategory={selectedCategory} />}
      {clickCount >= 2 && <Projectimg3 selectedCategory={selectedCategory} />}
      <div className="flex flex-col flex-md-row align-items-center justify-content-center futura_font gap-5 mx-auto pt-10">
        <button
          className={`border ps-20 pe-20 pt-3 pb-3 ms-2 me-2 proj_load_more_btn bg-dark text-white ${
            clickCount >= 2 ? "disabled opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setClickCount((prev) => prev + 1)}
          disabled={clickCount >= 2}
        >
          Load More
        </button>
        <a href="/projects-all">
          <button className="bg-dark border text-white futura_font me-2 ms-2 pb-3 pe-16 ps-16 pt-3 view_all">
            View All Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
