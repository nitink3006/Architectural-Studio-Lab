import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Stylesheet/Project.css";

import res8 from "../assets/home/residential/Screenshot 2024-11-27 234701.png";
import res9 from "../assets/home/residential/Screenshot 2024-11-27 235051.png";
import res10 from "../assets/home/residential/Screenshot 2024-11-27 235227.png";

import res14 from "../assets/home/residential/Street View.jpg";
//recreational
import rec1 from "../assets/home/recreational/Creche View-01.jpg";
import rec2 from "../assets/home/recreational/Creche View-02.jpg";
import res7 from "../assets/home/residential/Residence.jpg";


import com10 from "../assets/home/commercial/11.JPG";
import com11 from "../assets/home/commercial/IMG-20240913-WA0028.jpg";
import com12 from "../assets/home/commercial/IMG-20240913-WA0038.jpg";
import com15 from "../assets/home/commercial/Lobby-C.jpg";

const projects = [
  //------------------------------------------ row4-----------------------------------------------
    {
      src: com10,
      title: "The Japandi Home",
      location: "Pioneer Araya",
      category: "Commercial",
      size: "3500 sqft",
      place: " Gurugram",
    },
    {
      src: com11,
      title: "The Zephyr Villa",
      location: "Goa Villa",
      category: "Commercial",
      size: "3000 sqft",
      place: "Siolim , Goa",
    },
    {
      src: com12,
      title: "Home in the Hills",
      location: "Rishikesh Villa",
      category: "Commercial",
      size: "5000 sqft",
      place: "Rishikesh",
    },
   //------------------------------------------ row11-----------------------------------------------
   {
    src: res8,
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: res9,
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Residential",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },

  {
    src: res10,
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Residential",
    size: "5000 sqft",
    place: "Rishikesh",
  },
  
  //------------------------------------------ row13-----------------------------------------------
  {
    src: res14,
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  /////////////////////////recreatinal////////////////////////////
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
   //------------------------------------------ row14-----------------------------------------------

   {
    src: res7,
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Residential",
    size: "5000 sqft",
    place: "Rishikesh",
  },

  {
    src: com15,
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Commercial",
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
                      <p className="futura_font overlay-title">{project.title}</p>
                      <div className="overlay-content">
                        <hr />
                        <p className="avenir_font">{project.location}</p>
                        <hr />
                        <p className="avenir_font">{project.category}</p>
                        <hr />
                        <p className="avenir_font">{project.size}</p>
                        <hr />
                        <p className="avenir_font">{project.place}</p>
                        <hr />
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
