import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "../Stylesheet/Project.css";

const projects = [
  //------------------------------------------ row1-----------------------------------------------
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
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },








//------------------------------------------ row3-----------------------------------------------
  {
    src: "https://static.wixstatic.com/media/748419_c30fb606858b433ca25092a1c00c0e7e~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChalkDS_Mang_-2-min.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
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
    category: "Hospitality",
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

const Projectimg = () => {
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    groupedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <div className="proj_home mt-2 pb-15">
      {groupedProjects.map((row, rowIndex) => {
        const rowRef = useRef(null);
        const isRowInView = useInView(rowRef, { margin: "-100px" });
 
        return (
          <motion.div
            key={rowIndex}
            ref={rowRef}
            className="gallery2 "
            initial={{ opacity: 0, y: 100 }}
            animate={isRowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" , delay: 0.2 }}
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
      })}
    </div>
  );
};

export default Projectimg;
