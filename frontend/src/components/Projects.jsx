import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../Stylesheet/Project.css";
import Projecthead from "./Projecthead";
import Projectimg from "./Projectimg";
import Projectimg2 from "./Projectimg2";
import Projectimg3 from "./Projectimg3";

const Projects = () => {
  const [clickCount, setClickCount] = useState(0);
  const inspirationRef = useRef(null);
  const isInspirationInView = useInView(inspirationRef, { margin: "-100px" });

  return (
    <div className="proj_home mt-0 pb-15">
      <Projecthead />
      <Projectimg />

      {clickCount >= 1 && <Projectimg2 />}
      {clickCount >= 2 && <Projectimg3 />}

      <div className="mx-auto flex flex-col flex-md-row justify-content-center align-items-center pt-10 gap-5">
        <button
          className={`border ps-20 pe-20 pt-3 pb-3 ms-2 me-2 proj_load_more_btn ${clickCount >= 2 ? "disabled opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => setClickCount((prev) => prev + 1)}
          disabled={clickCount >= 2}
        >
          Load More
        </button>
      <a href="/projects-all">
      <button className="border ps-16 pe-16 pt-3 pb-3 ms-2 me-2 bg-dark text-white">
          View All Projects
        </button>
      </a>
       
      </div>
    </div>
  );
};

export default Projects;
