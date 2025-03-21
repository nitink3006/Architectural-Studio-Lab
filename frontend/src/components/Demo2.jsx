import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "./Navigation";
import "../Stylesheet/Projectcontent1.css";
import { FaBox, FaRegSquare } from "react-icons/fa";
import { CiHome, CiLocationOn } from "react-icons/ci";
import Morework from "./Morework";
import Footer from "./Footer";

const galleryLayout = [
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg"
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg"
        ]
    },
    {
        layout: ["col-md-2 col-12", "col-md-5 col-12", "col-md-5 col-12"], images: [
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg"
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg"
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-3 col-12", "col-md-3 col-12"], images: [
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg",
            "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg"
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
// Component for the animated image after Pioneer Araya
const AnimatedImage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.2 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true); // Store that animation has already happened
        }
    }, [isInView, hasAnimated]);

    return (
        <motion.img
            src="https://static.wixstatic.com/media/820b23_b8f121003e9e403ba343cf6e38726f5c~mv2.jpg/v1/fill/w_2880,h_1000,fp_0.48_0.68,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC08612%20copy%202.jpg"
            alt="Japandi Home"
            className="mb-4 proj_image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        />
    );
};
const Demo2 = () => {
    return (
        <div className="bg-Soft_Grey">
            <Navigation />
            <div className="bg-Soft_Grey">
            <h1 className="futura_font proj_cont1_head pt-20">The Japandi Home</h1>
            <div className="mt-3 proj_cont1_hr">
                <hr />
            </div>

            <h4 className="text-center avenir_font fw-normal mt-3 pb-10">Pioneer Araya</h4>
            <AnimatedImage />
            <div className="pb-8 proj_cont_em_para pt-15">
                <p className="avenir_font">
                    <em>This space is more than just a dwelling; it's a space where every element intertwines to create a space that is both aesthetically pleasing and functionally efficient.</em>
                </p>
            </div>


            <div className="d-md-flex d-none flex flex-row align-items-center justify-content-md-center justify-content-start gap-12 mb-25 proj_cont1_about">
                <div className="flex flex-row gap-4">
                    <FaBox className="text-gray-400 fs-5" />
                    <p className="avenir_font">2024</p>
                </div>
                <div className="flex flex-row gap-4">
                    <FaRegSquare className="text-gray-400 fs-4" />
                    <p className="avenir_font">3500 sqft</p>
                </div>
                <div className="flex flex-row gap-4">
                    <CiHome className="text-gray-400 fs-4" />
                    <p className="avenir_font">Residential</p>
                </div>
                <div className="flex flex-row gap-4">
                    <CiLocationOn className="text-gray-400 fs-4" />
                    <p className="avenir_font">Gurugram</p>
                </div>
            </div>


            {/* mobile */}
            <div className="d-md-none d-block flex-col justify-content-md-center justify-content-start   align-items-center mb-25 
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
            </div>




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

export default Demo2;
