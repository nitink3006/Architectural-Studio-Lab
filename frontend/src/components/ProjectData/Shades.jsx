import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "../Navigation";
import "../../Stylesheet/Projectcontent1.css";
import { FaBox, FaRegSquare } from "react-icons/fa";
import { CiHome, CiLocationOn } from "react-icons/ci";
import Morework from "../Morework";
import Footer from "../Footer";
import sha1 from '../../assets/residential/6.Shades of Still-Greater noida-1200sq ft/1w2s.jpeg';
import sha2 from '../../assets/residential/6.Shades of Still-Greater noida-1200sq ft/awsd.jpeg';
import sha3 from '../../assets/residential/6.Shades of Still-Greater noida-1200sq ft/COVER PAGE.jpeg';
import sha4 from '../../assets/residential/6.Shades of Still-Greater noida-1200sq ft/sefzsf.jpeg';
import sha5 from '../../assets/residential/6.Shades of Still-Greater noida-1200sq ft/wesrfwzs.jpeg';





const galleryLayout = [
    {
        layout: ["col-md-4 col-12",  "col-md-4 col-12",  "col-md-4 col-12"], images: [
            sha1,sha2, sha3
           
            
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12"], images: [
            sha4,sha5
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

const Shades = () => {
    return (
        <div className="bg-Soft_Grey proj_data">
            <Navigation />
            <div className="bg-Soft_Grey">
            <h1 className="poppins-regular proj_cont1_head pt-20">Shades of Still</h1>
            <div className="mt-3 proj_cont1_hr">
                <hr />
            </div>
          
            <h4 className="text-center lato-regular fw-normal mt-3 pb-10">Greater noida</h4>
         




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

export default Shades;
