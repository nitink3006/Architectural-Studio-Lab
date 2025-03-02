import React from "react";
import "../Stylesheet/Project.css";
import Projecthead from "./Projecthead";
import Projectbtn from "./Projectbtn";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Link } from "react-router-dom";
import Projectimg from "./Projectimg";




const Projects = () => {

import { motion,  useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";



const projects = [
  {
    src: "https://static.wixstatic.com/media/820b23_7f3179837f104ca690816660998f87a5~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC08585%20copy%20(3).jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Projectcontent1",

  },
  {
    src: "https://static.wixstatic.com/media/820b23_aa3ad3e8319e40338fe5be92d1357647~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20YJP-CS-20.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_54b09147c2604fef86e847a052c098c9~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-01%20at%2011_04_24%20AM.png",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },






  {
    src: "https://static.wixstatic.com/media/820b23_7f3179837f104ca690816660998f87a5~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC08585%20copy%20(3).jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_aa3ad3e8319e40338fe5be92d1357647~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20YJP-CS-20.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_54b09147c2604fef86e847a052c098c9~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-01%20at%2011_04_24%20AM.png",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },









  {
    src: "https://static.wixstatic.com/media/820b23_7f3179837f104ca690816660998f87a5~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC08585%20copy%20(3).jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_aa3ad3e8319e40338fe5be92d1357647~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20YJP-CS-20.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_54b09147c2604fef86e847a052c098c9~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-01%20at%2011_04_24%20AM.png",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
  },






  return (
    <div className="proj_home mt-0 pb-15 ">

      <Projecthead />

      <Projectimg />

      <Projectbtn />
    </div>


  {
    src: "https://static.wixstatic.com/media/820b23_7f3179837f104ca690816660998f87a5~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC08585%20copy%20(3).jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_aa3ad3e8319e40338fe5be92d1357647~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20YJP-CS-20.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_54b09147c2604fef86e847a052c098c9~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-01%20at%2011_04_24%20AM.png",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
  },
]; 

const Projects = () => {


  const inspirationRef = useRef(null);

 
  const isInspirationInView = useInView(inspirationRef, { margin: "-100px" });



  return (
    <div className="proj_home mt-0 pb-15 ">

      <Projecthead  />

      <div ref={inspirationRef} className="">
      <motion.div
          className=""
          initial={{ opacity: 0, y: 100 }}
          animate={isInspirationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >



      <div className="gallery">

        {projects.map((project, index) => (

<>
      <Link 
          to={project.link} 
          key={index} 
          className="gallery-item image-overlay">
          <div key={index} className="gallery-item image-overlay">
            <img src={project.src} alt={`Gallery ${index + 1}`} />
            <div className="overlay-box">

              <p className="overlay-title">{project.title}</p>


              <div className="overlay-content">
                <hr />
                <p>{project.location}</p>
                <hr />
                <p>{project.category}</p>
                <hr />
                <p>{project.size}</p>
                <hr />
                <p>{project.place}</p>
                <hr />
              </div>
            </div>
          </div>
      </Link>
</>

        
        ))}
      </div>


      </motion.div>
</div>


      <Projectbtn />
    </div>

  );
};

export default Projects;
