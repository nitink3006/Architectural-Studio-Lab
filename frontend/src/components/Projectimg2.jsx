import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Stylesheet/Project.css";
import com4 from "../assets/home/commercial/3.JPG";
import com5 from "../assets/home/commercial/6.JPG";
import com6 from "../assets/home/commercial/7 - Meeting Room.jpg";
//hospitality
import hos1 from "../assets/home/hospitality/03_Changspa.png";
import hos2 from "../assets/home/hospitality/04_Changspa.png";
import hos3 from "../assets/home/hospitality/05_Changspa.png";

import hos7 from "../assets/home/hospitality/hyatt.jpg";
import hos8 from "../assets/home/hospitality/wsefa.JPG";
//residential
// import res1 from "../assets/home/residential/271835779_345557460461187_6619998005896475181_n.jpg";

import res1 from "../assets/residential/4.The Ivory Nest -Noida- 2800 sq ft/COVER PAGE.jpeg";
// import res2 from "../assets/home/residential/Aerial view.jpg";
import res2 from "../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/COVER PAGE.jpeg";
import res3 from "../assets/residential/6.Shades of Still-Greater noida-1200sq ft/COVER PAGE.jpeg";
import res4 from "../assets/residential/7.The Greystone Grove-Lucknow-10,800 sqft/COVER PAGE.jpg";

// import res4 from "../assets/home/residential/IMG20210222181701.jpg";
// import res5 from "../assets/home/residential/IMG20210222181818.jpg";
// import res6 from "../assets/home/residential/IMG20210223145758.jpg";
import rec3 from "../assets/home/recreational/Indoor games view (1).jpg";


const projects = [
    /////////////////////////////////hospitality////////////////
     //------------------------------------------ row1-----------------------------------------------
      {
        src: com4,
        title: "The Japandi Home",
        location: "Pioneer Araya",
        category: "Commercial",
        size: "3500 sqft",
        place: " Gurugram",
        link: "/Projectcontent1",
      },
      {
        src: com5,
        title: "The Zephyr Villa",
        location: "Goa Villa",
        category: "Commercial",
        size: "3000 sqft",
        place: "Siolim , Goa",
        link: "/Projectcontent1",
      },
      {
        src: com6,
        title: "Home in the Hills",
        location: "Rishikesh Villa",
        category: "Commercial",
        size: "5000 sqft",
        place: "Rishikesh",
        link: "/Projectcontent1",
      },
      //------------------------------------------ row2-----------------------------------------------
      {
       src: hos1,
       title: "The Japandi Home",
       location: "Pioneer Araya",
       category: "Hospitality",
       size: "3500 sqft",
       place: " Gurugram",
       link: "/Projectcontent1",
     },
     
     {
       src: hos2,
       title: "The Zephyr Villa",
       location: "Goa Villa",
       category: "Hospitality",
       size: "3000 sqft",
       place: "Siolim , Goa",
       link: "/Projectcontent1",
     },
     {
       src: hos3,
       title: "Home in the Hills",
       location: "Rishikesh Villa",
       category: "Hospitality",
       size: "5000 sqft",
       place: "Rishikesh",
       link: "/Projectcontent1",
     },
     
         //------------------------------------------ row3-----------------------------------------------
      {
       src: hos7,
       title: "The Japandi Home",
       location: "Pioneer Araya",
       category: "Hospitality",
       size: "3500 sqft",
       place: " Gurugram",
       link: "/Projectcontent1",
     },
     {
       src: hos8,
       title: "The Zephyr Villa",
       location: "Goa Villa",
       category: "Hospitality",
       size: "3000 sqft",
       place: "Siolim , Goa",
       link: "/Projectcontent1",
     },
     ////////////////////////////residential////////////////////////////////////////////////////////////////
     {
       src: res1,
       title: "The Ivory Nest",
       location: "Noida",
       category: "Residential",
       size: "2800 sqft",
       place: "Noida",
       link: '../components/ProjectData/Ivorynest',
       
     },
      //------------------------------------------ row9-----------------------------------------------
      {
        
       src: res2,
       title: "Aesthetic Echoes",
       location: "Noida",
       category: "Residential",
       size: "3900 sqft",
       place: "Noida",
       link: '../components/ProjectData/Aesthetic',
     },
     {

       src: res3,
       title: "Shades of Still",
       location: "Greater noida",
       category: "Residential",
       size: "1200 sqft",
       place: "Greater noida",
       link: '../components/ProjectData/Shades',
     },
     
     {
       src: res4,
       title: "The Greystone Grove",
       location: "Lucknow",
       category: "Residential",
       size: "10,800 sqft",
       place: "Lucknow",
       link: '../components/ProjectData/Greystone',
     },
      //------------------------------------------ row10-----------------------------------------------
    //   {
       
    //    src: res5,
    //    title: "Aesthetic Echoes",
    //    location: "Noida",
    //    category: "Residential",
    //    size: "3900 sqft",
    //    place: "Noida",
    //    link: '../components/ProjectData/Aesthetic',
    //  },
    //  {
    //    src: res6,
    //    title: "The Zephyr Villa",
    //    location: "Goa Villa",
    //    category: "Residential",
    //    size: "3000 sqft",
    //    place: "Siolim , Goa",
    //    link: "/Projectcontent1",
    //  },
     {
       src: rec3,
       title: "The Zephyr Villa",
       location: "Goa Villa",
       category: "Recreational",
       size: "3000 sqft",
       place: "Siolim , Goa",
       link: "/Projectcontent1",
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
                        {/* <hr />
                        <p className="avenir_font">{project.category}</p> */}
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
