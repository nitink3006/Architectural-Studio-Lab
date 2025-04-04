import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Stylesheet/Project.css";

const projects = [
  {
    src: "https://static.wixstatic.com/media/820b23_7f3179837f104ca690816660998f87a5~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC08585%20copy%20(3).jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Demo2",
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

  //------------------------------------------ row2-----------------------------------------------
  {
    src: "https://static.wixstatic.com/media/820b23_fb3439180db948b8b6e2ce10727307c1~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Living_AA.png",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/748419_fd9994ead9634ad188c56d1c4fc444e2~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/E_PHX_2822LR.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/76aad7_70bd94d3a60b4c7eb4aa98db1433fa5b~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%C2%A9AG-DSC03040-Edit-Edit-min.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Commercial",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },

  //------------------------------------------ row3-----------------------------------------------
  {
    src: "https://static.wixstatic.com/media/748419_c30fb606858b433ca25092a1c00c0e7e~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChalkDS_Mang_-2-min.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Commercial",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/055c2c_e070114d9c5a49bd9e1de8e8e274fce9~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CS-PortoHome_5_edited_edited.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/76aad7_f647086adfb54b11a8d267054d97a761~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_SND7411.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
  },

  //------------------------------------------ row4-----------------------------------------------
  {
    src: "https://static.wixstatic.com/media/aaeed6_328be93fa6b54a79b22163bf3bd2f276~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%C2%A9AG-CS-DSC00787-HDR%20copy%202%20(1).jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_862ca02c4d884d18adce9c3bcc7e3621~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20Living%20(16-02-2022).png",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Commercial",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/25240c_cee6dd7418e54f75acd64f1f4b1d5a9c~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/01%20(10).jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
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
