import React from "react";
import "../Stylesheet/Project.css";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";



const projects = [
  {
    src: "https://static.wixstatic.com/media/820b23_18c24bb4900f48938c6ec8b8556e284c~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/108%20Victory%20Valley_Living%20Dining_Cam%2005_2023-07-19.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Demo2",

  },
  {
    src: "https://static.wixstatic.com/media/aaeed6_5c3974716f9041c19e731562db1f783b~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FF_Master%20Bedroom_View%201A.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/a511f3_7c213a437f3a4c5cb78cc4a37f3730b4~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Show%20Home_9.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },






  {
    src: "https://static.wixstatic.com/media/820b23_18c24bb4900f48938c6ec8b8556e284c~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/108%20Victory%20Valley_Living%20Dining_Cam%2005_2023-07-19.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/aaeed6_5c3974716f9041c19e731562db1f783b~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FF_Master%20Bedroom_View%201A.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/a511f3_7c213a437f3a4c5cb78cc4a37f3730b4~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Show%20Home_9.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },









  {
    src: "https://static.wixstatic.com/media/820b23_18c24bb4900f48938c6ec8b8556e284c~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/108%20Victory%20Valley_Living%20Dining_Cam%2005_2023-07-19.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/aaeed6_5c3974716f9041c19e731562db1f783b~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FF_Master%20Bedroom_View%201A.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/a511f3_7c213a437f3a4c5cb78cc4a37f3730b4~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Show%20Home_9.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
  },









  {
    src: "https://static.wixstatic.com/media/820b23_18c24bb4900f48938c6ec8b8556e284c~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/108%20Victory%20Valley_Living%20Dining_Cam%2005_2023-07-19.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/aaeed6_5c3974716f9041c19e731562db1f783b~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FF_Master%20Bedroom_View%201A.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/a511f3_7c213a437f3a4c5cb78cc4a37f3730b4~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Show%20Home_9.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
  },
];

const Projectimg = () => {


  const inspirationRef = useRef(null);


  const isInspirationInView = useInView(inspirationRef, { margin: "-100px" });



  return (
    <div className="proj_home mt-0 pb-15 ">

     

      <div ref={inspirationRef} className="">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 100 }}
          animate={isInspirationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >



          <div className="gallery2">

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


     
    </div>


  );
};

export default Projectimg;
