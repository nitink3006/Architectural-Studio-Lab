import React from "react";
import "../Stylesheet/Project.css";
import Projecthead from "./Projecthead";
import Projectbtn from "./Projectbtn";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Link } from "react-router-dom";
import Projectimg from "./Projectimg";




const Projects = () => {





  return (
    <div className="proj_home mt-0 pb-15 ">

      <Projecthead />

      <Projectimg />

      <Projectbtn />
    </div>


  );
};

export default Projects;
