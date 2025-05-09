import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "../Navigation";
import "../../Stylesheet/Projectcontent1.css";
import { FaBox, FaRegSquare } from "react-icons/fa";
import { CiHome, CiLocationOn } from "react-icons/ci";
import Morework from "../Morework";
import Footer from "../Footer";

import aes1 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/3e4t.jpeg';
import aes2 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/3q45.jpeg';
import aes3 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/4wert.jpeg';
import aes4 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/5er6d.jpeg';
import aes5 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/34.jpeg';
import aes6 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/34r.jpeg';
import aes7 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/34r5.jpeg';
import aes8 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/56y.jpeg';
import aes9 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/67.jpeg';
import aes10 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/67u.jpeg';
import aes11 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/456y7.jpeg';
import aes12 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/COVER PAGE.jpeg';
import aes13 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/e3d.jpeg';
import aes14 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/e3rwfd.jpeg';
import aes15 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/er.jpeg';
import aes16 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/erygts.jpeg';
import aes17 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/ESFRAZS.jpeg';
import aes18 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/ew.jpeg';
import aes19 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/r567tr.jpeg';
import aes20 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/rtg.jpeg';
import aes21 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/rtyhr.jpeg';
import aes22 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/ry.jpeg';
import aes23 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/rytg.jpeg';
import aes24 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/sef.jpeg';
import aes25 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/t6u.jpeg';
import aes26 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/tyht6yf.jpeg';
import aes27 from '../../assets/residential/5.Aesthetic Echoes-Noida-3900 sq ft/we.jpeg';


const galleryLayout = [
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            aes1, aes2, aes3
           
            
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12","col-md-4 col-12"], images: [
              aes4, aes5, aes6
        ]
    },
   
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12","col-md-4 col-12"], images: [
             aes7, aes8 ,  aes9
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12","col-md-4 col-12"], images: [
           aes10, aes11, aes12
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12","col-md-4 col-12"], images: [
             aes27,  aes13, aes14 
        ]
    },
   
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12","col-md-4 col-12"], images: [
            aes15, aes16, aes17
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12","col-md-4 col-12"], images: [
            aes18, aes19, aes20, 
        ]
    },

 

    {
        layout: ["col-md-4 col-12", "col-md-4 col-12","col-md-4 col-12"], images: [
            aes21 , aes22, aes23
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12","col-md-4 col-12"], images: [
            aes24,  aes25, aes26
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
                            <img src={images[i]} alt={`Gallery Image ${i + 1}`}  loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
// Component for the animated image after Pioneer Araya
// const AnimatedImage = () => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { threshold: 0.2 });
//     const [hasAnimated, setHasAnimated] = useState(false);

//     useEffect(() => {
//         if (isInView && !hasAnimated) {
//             setHasAnimated(true); // Store that animation has already happened
//         }
//     }, [isInView, hasAnimated]);

//     return (
//         <motion.img
//             src={aes12}
//             alt="Japandi Home"
//             className="mb-4 proj_image casa_img"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//         />
//     );
// };
const Casa = () => {
    return (
        <div className="bg-Soft_Grey proj_data">
            <Navigation />
            <div className="bg-Soft_Grey">
          
            <h1 className="poppins-regular proj_cont1_head pt-20">Aesthetic Echoes</h1>
            <div className="mt-3 proj_cont1_hr">
                <hr />
            </div>

            <h4 className="text-center lato-regular fw-normal mt-3 pb-10">Noida</h4>
            {/* <AnimatedImage /> */}
            {/* <div className="pb-8 proj_cont_em_para pt-15">
                <p className="avenir_font">
                    <em>This space is more than just a dwelling; it's a space where every element intertwines to create a space that is both aesthetically pleasing and functionally efficient.</em>
                </p>
            </div> */}


            {/* <div className="d-md-flex d-none flex flex-row align-items-center justify-content-md-center justify-content-start gap-12 mb-25 proj_cont1_about">
                <div className="flex flex-row gap-4">
                    <FaBox className="text-gray-400 fs-5" />
                    <p className="avenir_font">2024</p>
                </div>
                <div className="flex flex-row gap-4">
                    <FaRegSquare className="text-gray-400 fs-4" />
                    <p className="avenir_font">3900 sqft</p>
                </div>
                <div className="flex flex-row gap-4">
                    <CiHome className="text-gray-400 fs-4" />
                    <p className="avenir_font">Residential</p>
                </div>
                <div className="flex flex-row gap-4">
                    <CiLocationOn className="text-gray-400 fs-4" />
                    <p className="avenir_font">Gurugram</p>
                </div>
            </div> */}


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

export default Casa;
