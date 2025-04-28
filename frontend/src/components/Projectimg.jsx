import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Stylesheet/Project.css";
import hos4 from "../assets/home/hospitality/12we3.JPG";
import hos5 from "../assets/home/hospitality/270225120_369220955007362_8042417773141522535_n.jpg";
import hos6 from "../assets/home/hospitality/270294406_407373781087132_3783180291927619870_n.jpg";
import com1 from "../assets/home/commercial/1 - Workstation Area_Revised.jpg";
import com2 from "../assets/home/commercial/01 copy.jpg";
import com3 from "../assets/home/commercial/1.JPG";

import com7 from "../assets/home/commercial/8 - Conference Room.jpg";
import com8 from "../assets/home/commercial/9 - Cabin_Revised.jpg";
import com9 from "../assets/home/commercial/9.JPG";


import rec1 from "../assets/home/recreational/Creche View-01.jpg";
import rec2 from "../assets/home/recreational/Creche View-02.jpg";
import res8 from "../assets/home/residential/Screenshot 2024-11-27 234701.png";

// import res12 from "../assets/home/residential/Screenshot 2024-11-27 235451.png";
import res12 from "../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/COVER PAGE.jpg";
// import res13 from "../assets/home/residential/Screenshot 2024-11-27 235519.png";

import res13 from "../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/COVER PAGE.jpg";
import rec4 from "../assets/home/recreational/Reception View-01.jpg";


const projects = [
  //--------------------------row1----------------------------------------------------
  {
    src: com1,
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Commercial",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Demo2",
  },
  {
    src: com2,
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Commercial",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: com3,
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Commercial",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },
 //------------------------------------------ row12(residential)-----------------------------------------------
{ 
    src: res8,
    title: "Casa Kaleido",
    location: "Gurugram",
    category: "Residential",
    size: "4000 sqft",
    place: " Gurugram",
    link: '../components/ProjectData/Casa'
  },


  { 
    src: res12,
    title: "The Urban Retreat",
    location: "New Delhi-10",
    category: "Residential",
    size: "200 sqft",
    place: "New Delhi-10",
     link: '../components/ProjectData/TheUrban'
  },

  {
    src: res13,
    title: "The Modern Muse",
    location: "New Delhi",
    category: "Residential",
    size: "3900 sqft",
    place: "New Delhi",
     link: '../components/ProjectData/TheModern'
  },
   //------------------------------------------ row7 (hospitality)-----------------------------------------------
        {
          src: hos4,
          title: "The Japandi Home",
          location: "Pioneer Araya",
          category: "Hospitality",
          size: "3500 sqft",
          place: " Gurugram",
        },
        {
          src: hos5,
          title: "The Zephyr Villa",
          location: "Goa Villa",
          category: "Hospitality",
          size: "3000 sqft",
          place: "Siolim , Goa",
        },
        {
          src: hos6,
          title: "Home in the Hills",
          location: "Rishikesh Villa",
          category: "Hospitality",
          size: "5000 sqft",
          place: "Rishikesh",
        },

  //------------------------------------------ row3-----------------------------------------------
  {
    src: com7,
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Commercial",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: com8,
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Commercial",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: com9,
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Commercial",
    size: "5000 sqft",
    place: "Rishikesh",
  },

  


  //------------------------------------------ row5-----------------------------------------------
  
 {
    src: rec1,
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Recreational",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },

  {
    src: rec2,
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Recreational",
    size: "5000 sqft",
    place: "Rishikesh",
  },
  {
      src: rec4,
      title: "Home in the Hills",
      location: "Rishikesh Villa",
      category: "Recreational",
      size: "5000 sqft",
      place: "Rishikesh",
    },
 
  
];

const Projectimg = ({ selectedCategory }) => {
  // Filter projects based on category
  const filteredProjects =
    selectedCategory && selectedCategory !== "All"
      ? projects.filter((project) => project.category === selectedCategory)
      : projects;

  // Group projects into rows of 3
  const groupedProjects = [];
  for (let i = 0; i < filteredProjects.length; i += 3) {
    groupedProjects.push(filteredProjects.slice(i, i + 3));
  }

  // Store row refs
  const rowRefs = useRef([]);
  const [inViewRows, setInViewRows] = useState({});

  useEffect(() => {
    const observers = [];

    rowRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInViewRows((prev) => ({
              ...prev,
              [index]: entry.isIntersecting,
            }));
          },
          { threshold: 0.2 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [groupedProjects]);

  return (
    <div className="mt-2 pb-15 proj_home">
  
      {/* bg-Soft_Grey */}
      {groupedProjects.length === 0 ? (
        <p className="no-results">No projects found in this category.</p>
      ) : (
        groupedProjects.map((row, rowIndex) => {
          return (
            <motion.div
              key={rowIndex}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
              className="gallery2"
              initial={{ opacity: 0, y: 100 }}
              animate={inViewRows[rowIndex] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {row.map((project, index) => (
                <Link
                  to={project.link}
                  key={index}
                  className="gallery-item image-overlay"
                >
                  <div className="gallery-item image-overlay">
                    <img src={project.src} alt={`Gallery ${index + 1}`} />
                    <div className="overlay-box">
                      <p className="futura_font overlay-title">
                        {project.title}
                      </p>
                      <div className="overlay-content">
                      <hr />
                        <p className="avenir_font">{project.category}</p>
                        <hr />
                        <p className="avenir_font">{project.size}</p>
                        <hr />
                        <p className="avenir_font">{project.location}</p>
                       
                      
                        <hr />
                        {/* <p className="avenir_font">{project.place}</p>
                        <hr /> */}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default Projectimg;
