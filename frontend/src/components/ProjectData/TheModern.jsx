import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "../Navigation";
import "../../Stylesheet/Projectcontent1.css";
import { FaBox, FaRegSquare } from "react-icons/fa";
import { CiHome, CiLocationOn } from "react-icons/ci";
import Morework from "../Morework";
import Footer from "../Footer";

import mod1 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/34r.jpg';
import mod2 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/a.jpg';
import mod3 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/b.jpg';
import mod4 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/bbb.jpg';
import mod5 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/bedroom 2.2.jpg';
import mod6 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/bedroom 2.jpg';
import mod7 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/bedroom1.jpg';
import mod8 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/dfwarf3333.png';
import mod9 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/hfdhdfhd.jpg';
import mod10 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/hy.jpg';
import mod11 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/n.jpg';
import mod12 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/ryh.jpg';
import mod13 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/STUDY ROOM.jpg';
import mod14 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/STUDY, POOJA  ROOM.jpeg';
import mod15 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/vfdgdgsd.jpg';
import mod16 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/washing area.jpg';
import mod17 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/we.jpg';
import mod18 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/z (1).jpg';
import mod19 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/z (2).jpg';
import mod20 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/z (3).jpg';
import mod21 from '../../assets/residential/3.The Modern Muses-New Delhi- 3900 sq ft/z (4).jpg';





const galleryLayout = [
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            mod1,mod2
           ,mod3
            
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            mod4,mod5,mod6
        ]
    },
    {
        layout: ["col-md-2 col-12", "col-md-5 col-12", "col-md-5 col-12"], images: [
            mod7,mod8,mod9
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            mod10,mod11,mod12
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-3 col-12", "col-md-3 col-12"], images: [
            mod13,mod14,mod15
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            mod16,mod17
           ,mod18
            
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            mod19,mod20,mod21
        ]
    },
   

];

const GalleryRow = ({ index, layout, images }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.2 });
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > prevScrollY;

            if (isScrollingDown && isInView) {
                setShouldAnimate(true);
            } else if (!isScrollingDown) {
                setShouldAnimate(false);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isInView, prevScrollY]);

    return (
        <motion.div
            ref={ref}
            className="container-fluid gallery mb-4"
            initial={{ opacity: 1, y: 40 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        >
            <div className="row gallery_row">
                {layout.map((colClass, i) => (
                    <div key={i} className={`${colClass} gallery-item`}>
                        <div className="gallery-img-wrapper">
                            <img src={images[i]} alt={`Gallery Image ${i + 1}`}  />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const TheModern = () => {
    return (
        <div className="bg-Soft_Grey proj_data">
            <Navigation />
            <div className="bg-Soft_Grey">
            <h1 className="futura_font proj_cont1_head pt-20">The Modern Muse</h1>
            <div className="mt-3 proj_cont1_hr">
                <hr />
            </div>

            <h4 className="text-center avenir_font fw-normal mt-3 pb-10">New Delhi</h4>
          
            {/* <div className="d-md-none d-block flex-col justify-content-md-center justify-content-start   align-items-center mb-25 
            w-90 mx-auto">
                <div className="flex flex-row gap-4">
                    <FaBox className="text-gray-400 fs-5" size={19}/>
                    <p className="avenir_font mb-0">2024</p>
                </div>
                <hr></hr>
                <div className="flex flex-row gap-4">
                    <FaRegSquare className="text-gray-400 fs-4" />
                    <p className="avenir_font mb-0">3500 sqft</p>
                </div>
                <hr></hr>
                <div className="flex flex-row gap-4">
                    <CiHome className="text-gray-400 fs-4" />
                    <p className="avenir_font mb-0">Residential</p>
                </div>
                <hr></hr>
                <div className="flex flex-row gap-4">
                    <CiLocationOn className="text-gray-400 fs-4" />
                    <p className="avenir_font mb-0">Gurugram</p>
                </div>
                <hr></hr>
            </div> */}




            {galleryLayout.map((row, index) => (
                <GalleryRow key={index} index={index} layout={row.layout} images={row.images} />
            ))}

            <div className="mb-30 mt-40 proj_cont1_hr2">
                <hr />
            </div>




            </div>
           


            <Morework />
            <Footer />
        </div>
    );
};
 
export default TheModern;
