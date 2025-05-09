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

        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb1,urb2, urb3
           
            
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
          urb5,urb6 , urb16
        ]
    },
   
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb7,urb8, urb9
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb10, urb11,urb12
        ]
    },
    
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb13,urb14, urb15
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb16, urb17

        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb1,urb2
           
            
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb3, urb16
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb5,urb6
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb7,urb8
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb9, urb10
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
           urb11,urb12
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb13,urb14
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb15,  urb16
            
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
          urb17

           ,urb18
            
        ]
    },

    
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb19,urb20, urb21
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb22,urb23,urb24
        ]
    },
   
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb25,urb26, urb27
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb28, urb29,urb30
        ]
    },
  
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb31,urb32, urb33
           
            
        ]
    },
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12", "col-md-4 col-12"], images: [
            urb34,urb35,urb36
        ]
    },
   
    {
        layout: ["col-md-4 col-12", "col-md-4 col-12"], images: [

    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb19,urb20
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb21 , urb22
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
           urb23,urb24
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb25,urb26
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb27, urb28
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
           urb29,urb30
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb31,urb32
           
            
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb33, urb34
        ]
    },
    {
        layout: ["col-md-6 col-12", "col-md-6 col-12"], images: [
            urb35,urb36
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
            <h1 className="poppins-regular proj_cont1_head pt-20">The Urban Retreat</h1>
            <div className="mt-3 proj_cont1_hr">
                <hr />
            </div>

            <h4 className="text-center lato-regular fw-normal mt-3 pb-10">New Delhi</h4>
  



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
