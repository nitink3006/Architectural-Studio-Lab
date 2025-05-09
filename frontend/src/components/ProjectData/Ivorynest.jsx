import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "../Navigation";
import "../../Stylesheet/Projectcontent1.css";
import { FaBox, FaRegSquare } from "react-icons/fa";
import { CiHome, CiLocationOn } from "react-icons/ci";
import Morework from "../Morework";
import Footer from "../Footer";
import ivo1 from '../../assets/residential/4.The Ivory Nest -Noida- 2800 sq ft/COVER PAGE.jpeg';
import ivo2 from '../../assets/residential/4.The Ivory Nest -Noida- 2800 sq ft/qwe.jpeg';
import ivo3 from '../../assets/residential/4.The Ivory Nest -Noida- 2800 sq ft/r6ty.jpeg';
import ivo4 from '../../assets/residential/4.The Ivory Nest -Noida- 2800 sq ft/sfszfgzsfg.jpeg';
import ivo5 from '../../assets/residential/4.The Ivory Nest -Noida- 2800 sq ft/wed.jpeg';
import ivo6 from '../../assets/residential/4.The Ivory Nest -Noida- 2800 sq ft/weq34r.jpeg';




const galleryLayout = [
    {
        layout: ["col-md-4 col-12",  "col-md-4 col-12",  "col-md-4 col-12"], images: [
            ivo1,ivo2, ivo3
           
            
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12",  "col-md-4 col-12"], images: [
             ivo4, ivo5,ivo6
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
                            <img src={images[i]} alt={`Gallery Image ${i + 1}`} loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const TheUrban = () => {
    return (
        <div className="bg-Soft_Grey proj_data">
            <Navigation />
            <div className="bg-Soft_Grey">
            <h1 className="poppins-regular proj_cont1_head pt-20">The Ivory Nest</h1>
            <div className="mt-3 proj_cont1_hr">
                <hr />
            </div>
           
            <h4 className="text-center lato-regular fw-normal mt-3 pb-10">Noida</h4>
       


            {/* mobile */}
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

export default TheUrban;
