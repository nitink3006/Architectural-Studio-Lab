import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "../Navigation";
import "../../Stylesheet/Projectcontent1.css";
// import { FaBox, FaRegSquare } from "react-icons/fa";
// import { CiHome, CiLocationOn } from "react-icons/ci";
import Morework from "../Morework";
import Footer from "../Footer";
import gre1 from '../../assets/residential/7.The Greystone Grove-Lucknow-10,800 sqft/adaq.jpg';
import gre2 from '../../assets/residential/7.The Greystone Grove-Lucknow-10,800 sqft/asd.jpg';
import gre3 from '../../assets/residential/7.The Greystone Grove-Lucknow-10,800 sqft/COVER PAGE.jpg';
import gre4 from '../../assets/residential/7.The Greystone Grove-Lucknow-10,800 sqft/img_1_1634024393845.jpg';
import gre5 from '../../assets/residential/7.The Greystone Grove-Lucknow-10,800 sqft/img_2_1634024401293.jpg';
import gre6 from '../../assets/residential/7.The Greystone Grove-Lucknow-10,800 sqft/sfd.jpg';





const galleryLayout = [
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            gre1,gre2
           ,gre3
            
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            gre4,gre5,gre6
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

const Greystone = () => {
    return (
        <div className="bg-Soft_Grey proj_data">
            <Navigation />
            <div className="bg-Soft_Grey">
            <h1 className="futura_font proj_cont1_head pt-20">The Greystone Grove</h1>
            <div className="mt-3 proj_cont1_hr">
                <hr />
            </div>

            <h4 className="text-center avenir_font fw-normal mt-3 pb-10">Lucknow</h4>
           






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

export default Greystone;
