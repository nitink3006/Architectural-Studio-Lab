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
            className="gallery container-fluid mb-4"
            initial={{ opacity: 1, y: 40 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        >
            <div className="gallery_row row">
                {layout.map((colClass, i) => (
                    <div key={i} className={`${colClass} gallery-item`}>
                        <div className="gallery-img-wrapper ">
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
            className="proj_image mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        />
    );
};
const Demo2 = () => {
    return (
        <div>
            <Navigation />
            <h1 className="proj_cont1_head pt-20">The Japandi Home</h1>
            <div className="proj_cont1_hr mt-3">
                <hr />
            </div>

            <h4 className="text-center mt-3 pb-10 fw-normal">Pioneer Araya</h4>
            <AnimatedImage />
            <div className="proj_cont_em_para pt-15 pb-8">
                <p>
                    <em>This space is more than just a dwelling; it's a space where every element intertwines to create a space that is both aesthetically pleasing and functionally efficient.</em>
                </p>
            </div>


            <div className="flex flex-row d-none d-md-flex  justify-content-md-center justify-content-start  gap-12 align-items-center mb-25 proj_cont1_about">
                <div className="flex flex-row gap-4">
                    <FaBox className="text-gray-400 fs-5" />
                    <p>2024</p>
                </div>
                <div className="flex flex-row gap-4">
                    <FaRegSquare className="text-gray-400 fs-4" />
                    <p>3500 sqft</p>
                </div>
                <div className="flex flex-row gap-4">
                    <CiHome className="text-gray-400 fs-4" />
                    <p>Residential</p>
                </div>
                <div className="flex flex-row gap-4">
                    <CiLocationOn className="text-gray-400 fs-4" />
                    <p>Gurugram</p>
                </div>
            </div>


            {/* mobile */}
            <div className="d-md-none d-block flex-col justify-content-md-center justify-content-start   align-items-center mb-25 
            w-90 mx-auto">
                <div className="flex flex-row gap-4">
                    <FaBox className="text-gray-400 fs-5" size={19}/>
                    <p className="mb-0">2024</p>
                </div>
                <hr></hr>
                <div className="flex flex-row gap-4">
                    <FaRegSquare className="text-gray-400 fs-4" />
                    <p className="mb-0">3500 sqft</p>
                </div>
                <hr></hr>
                <div className="flex flex-row gap-4">
                    <CiHome className="text-gray-400 fs-4" />
                    <p className="mb-0">Residential</p>
                </div>
                <hr></hr>
                <div className="flex flex-row gap-4">
                    <CiLocationOn className="text-gray-400 fs-4" />
                    <p className="mb-0">Gurugram</p>
                </div>
                <hr></hr>
            </div>




            {galleryLayout.map((row, index) => (
                <GalleryRow key={index} index={index} layout={row.layout} images={row.images} />
            ))}

            <div className="proj_cont1_hr2 mb-30 mt-40">
                <hr />
            </div>



            <Morework />
            <Footer />
        </div>
    );
};

export default Demo2;
