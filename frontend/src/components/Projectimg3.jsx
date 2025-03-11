import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Stylesheet/Project.css";

const projects = [
  //-----------------------------------row1------------------------------------------------
  {
    src: "https://static.wixstatic.com/media/25240c_4f66061d8400458eb40081baabb8d94b~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ArtworkWall_Cam_Blackears.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Demo2",
  
  },
  {
    src: "https://static.wixstatic.com/media/820b23_3f7d6a05ae204c89b71a1e36050242d8~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SAYSHA_EXPERIENCE-CENTRE-2024-01-2024-LIVING-CAM-01_POST%20copy.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_c11972fd735d45979e98c9cdbc818674~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC05458%20copy%202.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },
  
  
  
  
  
  //-----------------------------------row2------------------------------------------------
  {
    src: "https://static.wixstatic.com/media/76aad7_c17921c90d184c0b9cb2c1f6af6f437d~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shot%2001.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/055c2c_21d8d5e8f4714f71b84cb15d17954050~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_JAN5628.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Commercial",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_2073210f75804d27a312f1a137cad8dc~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC03266%20copy.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },
  
  
  
  
  
  
  
  
  //-----------------------------------row3------------------------------------------------
  {
    src: "https://static.wixstatic.com/media/76aad7_0ef7a238f31c4197926958df3b222500~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Indri%2011.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/76aad7_8a133f1b654e4ad2bf7c235fa781cb45~mv2.png/v1/fill/w_928,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/shruti_18552_None_a4ea8f13-88d5-42b8-8f82-9864358c221a.png",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Commercial",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/25240c_683d7e5bfe1448219cf0977b7ab4373f~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
  },
  
  
  
  
  
  
  
  
  //--------------------------row4----------------------------------------
  {
    src: "https://static.wixstatic.com/media/76aad7_8fdf35b1fab643d8a5e5d94873386c91~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HYATT-SPA-SHOT-01-2024-05-13%20copy.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/aaeed6_82157e1590ff47169ee5599ae3e3e44e~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/imageonline-co-split-image%20(16)_edited.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/055c2c_7a61bf0b71cd48e4a52d30ebba615e4e~mv2.jpg/v1/fill/w_928,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Phase%203%20Master%20Bedroom%201%20view%2001_edited.jpg",
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
    <div className="proj_home mt-2 pb-15">
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
              ))}
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default Projectimg;
