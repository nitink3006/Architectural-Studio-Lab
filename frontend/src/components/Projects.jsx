import React from "react";
import "../Stylesheet/Project.css";

const projects = [
  {
    src: "https://static.wixstatic.com/media/820b23_fb3439180db948b8b6e2ce10727307c1~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Living_AA.png",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft | Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_fb3439180db948b8b6e2ce10727307c1~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Living_AA.png",
    title: "Modern Living",
    location: "DLF City",
    category: "Commercial",
    size: "5000 sqft | Mumbai",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_fb3439180db948b8b6e2ce10727307c1~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Living_AA.png",
    title: "Luxury Interiors",
    location: "Palm Greens",
    category: "Hospitality",
    size: "4500 sqft | Bangalore",
  },
];

const Projects = () => {
  return (
    <div className="gallery">
    {projects.map((project, index) => (
      <div key={index} className="gallery-item image-overlay">
        <img src={project.src} alt={`Gallery ${index + 1}`} />
        <div className="overlay-box">
          {/* Title - Stays at the Top */}
          <p className="overlay-title">{project.title}</p>
  
          {/* Content - Holds text lines with separators */}
          <div className="overlay-content">
            <p>{project.location}</p>
            <hr />
            <p>{project.category}</p>
            <hr />
            <p>{project.size}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Projects;
