import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "../Navigation";
import "../../Stylesheet/Projectcontent1.css";
import { FaBox, FaRegSquare } from "react-icons/fa";
import { CiHome, CiLocationOn } from "react-icons/ci";
import Morework from "../Morework";
import Footer from "../Footer";

import urb1 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/2.jpg';
import urb2 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/aa.png';
import urb3 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/AD.jpg';
import urb4 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/awd.jpg';
import urb5 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/b.jpg';
import urb6 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/c.jpg';
import urb7 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/c1.jpg';
import urb8 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/D1.jpg';
import urb9 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/dcd.jpg';
import urb10 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/dcf.jpg';
import urb11 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/dd.jpg';
import urb12 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/ddddd.jpg';
import urb13 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/dgrf.jpg';
import urb14 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/dining areaa.jpg';
import urb15 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/ergt.jpeg';
import urb16 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/ERTGS.jpg';
import urb17 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/final 1.jpg';
import urb18 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/final 12.jpg';
import urb19 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/ftrhy.jpg';
import urb20 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/gg.jpg';
import urb21 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/hh.jpg';
import urb22 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/mandir.jpg';
import urb23 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/master wardrobe view 1.jpg';
import urb24 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/master wardrobe view 2.jpg';
import urb25 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/o1.jpg';
import urb26 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/o2.jpg';
import urb27 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/s.jpg';
import urb28 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/study area final.jpg';
import urb29 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/view 1.jpg';
import urb30 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/view 2.jpg';
import urb31 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/view 3.jpg';
import urb32 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/view1.jpg';
import urb33 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/view12.jpg';
import urb34 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/we.jpg';
import urb35 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/wer.jpg';
import urb36 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/xzsdf.jpg';
import urb37 from '../../assets/residential/2.The Urban Retreat-New Delhi-10,200 sqft/z4.png';




const galleryLayout = [
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            urb1,urb2
           ,urb3
            
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            urb16,urb5,urb6
        ]
    },
    {
        layout: ["col-md-2 col-12", "col-md-5 col-12", "col-md-5 col-12"], images: [
            urb7,urb8,urb9
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            urb10,urb11,urb12
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-3 col-12", "col-md-3 col-12"], images: [
            urb13,urb14,urb15
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            urb16,urb17
           ,urb18
            
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            urb19,urb20,urb21
        ]
    },
    {
        layout: ["col-md-2 col-12", "col-md-5 col-12", "col-md-5 col-12"], images: [
            urb22,urb23,urb24
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            urb25,urb26,urb27
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-3 col-12", "col-md-3 col-12"], images: [
            urb28,urb29,urb30
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            urb31,urb32
           ,urb33
            
        ]
    },
    {
        layout: ["col-md-3 col-12", "col-md-3 col-12", "col-md-6 col-12"], images: [
            urb34,urb35,urb36
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb37,urb4
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

const TheUrban = () => {
    return (
        <div className="bg-Soft_Grey proj_data">
            <Navigation />
            <div className="bg-Soft_Grey">
            <h1 className="futura_font proj_cont1_head pt-20">The Urban Retreat</h1>
            <div className="mt-3 proj_cont1_hr">
                <hr />
            </div>

            <h4 className="text-center avenir_font fw-normal mt-3 pb-10">New Delhi-10</h4>
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
                    <p className="avenir_font">4000 sqft</p>
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

export default TheUrban;
