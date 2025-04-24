import React from 'react';
import Navigation from '../Navigation';
import '../../Stylesheet/Projectcontent1.css';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBox, FaRegSquare } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Morework from '../Morework';
import Footer from '../Footer';
import casa1 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/271587301_959431154989136_237295068018475377_n.jpg';
import casa2 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/271628856_515811689631632_7400783504794154935_n.jpg';


import casa3 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/271957191_408176991103924_8820647754944047115_n.jpg';


import casa4 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/a.png';


import casa5 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/cover page.jpg';


import casa6 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/dgf.png';

import casa7 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/drg.png';


import casa8 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/e.png';

import casa9 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/ef.png';

import casa10 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/fdg.png';

import casa11 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/fg.png';
import casa12 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/fghb.png';
import casa13 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/sdf.png';
import casa14 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/sxdgvf.png';

import casa15 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/wes.png';
import casa16 from '../../assets/Casa Kaleido-Gurugram-5700sqft/Casa Kaleido-Gurugram-5700sqft/yf.png';


// function Projectcontent1() {
const Casa = () => {



    const inspirationRef = useRef(null);


    const isInspirationInView = useInView(inspirationRef, { margin: "-100px" });

    return (
        <div>
            <Navigation />
            <h1 className='futura_font proj_cont1_head pt-20'>Casa Kaleido</h1>
            <div className='mt-3 proj_cont1_hr'>
                <hr />
            </div>
            <h4 className='text-center fw-normal mt-3 pb-10'>
            Gurugram
            </h4>
            <div ref={inspirationRef} className="">
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInspirationInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img src={casa16} alt="" className='casa_img' />
                </motion.div>
            </div>

            <div className='pb-8 proj_cont_em_para pt-15'>

                <p className=''>
                    <em>
                        This space is more than just a dwelling; it's a space where every element intertwines to create a space that is both aesthetically pleasing and functionally efficient.
                    </em>
                </p>
            </div>

            <div className='flex flex-col flex-md-row align-items-center justify-content-md-center justify-content-start gap-2 gap-md-15 mb-25 proj_cont1_about'>
                <div className='flex flex-row gap-4'>
                    <div className='text-gray-400 fs-5'>
                        <FaBox />
                    </div>
                    <div>
                        <p>
                            2024</p>
                    </div>
                  
                </div>
              
                <div className='flex flex-row gap-4'>
                    <div className='text-gray-400 fs-4'>
                        <FaRegSquare />
                    </div>
                    <div>
                        <p>
                           4000 sqft</p>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='text-gray-400 fs-4'>
                        <CiHome />
                    </div>
                    <div>
                        <p>
                            Residential</p>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='text-gray-400 fs-4'>
                        <CiLocationOn />
                    </div>
                    <div>
                        <p>
                            Gurugram</p>
                    </div>
                </div>
            </div>

            {/* row1 */}

            <div className="container-fluid gallery mb-4">


                {/* --------------row1------------ */}
                <div className="flex flex-column flex-md-row row gallery_row1">
                    <div className="col-12 col-md-3 gallery_row1_img1 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa1} alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="col-12 col-md-3 gallery_row1_img2 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa2} alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 gallery_row1_img3 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa3} alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>

            {/* row2 */}
            <div className="container-fluid gallery mb-4">


                {/* --------------row1------------ */}
                <div className="flex flex-column flex-md-row row gallery_row1">
                    <div className="col-12 col-md-3 gallery_row1_img1 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa4} alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="col-12 col-md-3 gallery_row1_img2 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa5} alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 gallery_row1_img3 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa6} alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>


            {/* row3 */}
            <div className="container-fluid gallery mb-4">


                {/* --------------row3------------ */}
                <div className="flex flex-column flex-md-row row gallery_row1">
                    <div className="col-12 col-md-2 gallery_row1_img1 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa7} alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="col-12 col-md-5 gallery_row1_img2 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa8} alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 gallery_row1_img3 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa9} alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>



            {/* row4 */}
            <div className="container-fluid gallery mb-4">


                {/* --------------row4------------ */}
                <div className="flex flex-column flex-md-row row gallery_row1">
                    <div className="col-12 col-md-3 gallery_row1_img1 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa10} alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="col-12 col-md-3 gallery_row1_img2 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa11} alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 gallery_row1_img3 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa12} alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>



            {/* row4 */}
            <div className="container-fluid gallery mb-30">


                {/* --------------row4------------ */}
                <div className="flex flex-column flex-md-row row gallery_row1">
                    <div className="col-12 col-md-6 gallery_row1_img1 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa13} alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="col-12 col-md-3 gallery_row1_img2 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa14} alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 gallery_row1_img3 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src={casa15} alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>

            <div className='mb-30 proj_cont1_hr2'>
            <hr />
        </div>
       

        <Morework />
        <Footer />
        </div>
    )
}

export default Casa
