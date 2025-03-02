import React from 'react';
import Navigation from './Navigation';
import '../Stylesheet/Projectcontent1.css';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBox, FaRegSquare } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Morework from './Morework';
import Footer from './Footer';


// function Projectcontent1() {
const Projectcontent1 = () => {



    const inspirationRef = useRef(null);


    const isInspirationInView = useInView(inspirationRef, { margin: "-100px" });

    return (
        <div>
            <Navigation />
            <h1 className='proj_cont1_head pt-20'>The Japandi Home</h1>
            <div className='proj_cont1_hr mt-3'>
                <hr />
            </div>
            <h4 className='text-center mt-3 pb-10 fw-normal'>
                Pioneer Araya
            </h4>
            <div ref={inspirationRef} className="">
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInspirationInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img src="https://static.wixstatic.com/media/820b23_b8f121003e9e403ba343cf6e38726f5c~mv2.jpg/v1/fill/w_2880,h_1000,fp_0.48_0.68,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC08612%20copy%202.jpg" alt="" />
                </motion.div>
            </div>

            <div className='proj_cont_em_para pt-15 pb-8'>

                <p className=''>
                    <em>
                        This space is more than just a dwelling; it's a space where every element intertwines to create a space that is both aesthetically pleasing and functionally efficient.
                    </em>
                </p>
            </div>

            <div className='flex flex-md-row flex-col justify-content-md-center justify-content-start gap-md-15 gap-2 align-items-center mb-25 proj_cont1_about '>
                <div className='flex flex-row gap-4 '>
                    <div className=' text-gray-400 fs-5'>
                        <FaBox />
                    </div>
                    <div>
                        <p>
                            2024</p>
                    </div>
                  
                </div>
              
                <div className='flex flex-row gap-4 '>
                    <div className=' text-gray-400 fs-4'>
                        <FaRegSquare />
                    </div>
                    <div>
                        <p>
                            3500 sqft</p>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='  text-gray-400 fs-4'>
                        <CiHome />
                    </div>
                    <div>
                        <p>
                            Residential</p>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className=' text-gray-400 fs-4'>
                        <CiLocationOn />
                    </div>
                    <div>
                        <p>
                            Gurugram</p>
                    </div>
                </div>
            </div>

            {/* row1 */}

            <div className="gallery container-fluid  mb-4">


                {/* --------------row1------------ */}
                <div className="gallery_row1 row flex flex-md-row flex-column ">
                    <div className="gallery_row1_img1 col-md-3 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="gallery_row1_img2 col-md-3 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="gallery_row1_img3 col-md-6 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>

            {/* row2 */}
            <div className="gallery container-fluid  mb-4">


                {/* --------------row1------------ */}
                <div className="gallery_row1 row flex flex-md-row flex-column ">
                    <div className="gallery_row1_img1 col-md-3 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="gallery_row1_img2 col-md-3 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="gallery_row1_img3 col-md-6 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>


            {/* row3 */}
            <div className="gallery container-fluid  mb-4">


                {/* --------------row3------------ */}
                <div className="gallery_row1 row flex flex-md-row flex-column ">
                    <div className="gallery_row1_img1 col-md-2 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="gallery_row1_img2 col-md-5 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="gallery_row1_img3 col-md-5 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>



            {/* row4 */}
            <div className="gallery container-fluid  mb-4">


                {/* --------------row4------------ */}
                <div className="gallery_row1 row flex flex-md-row flex-column ">
                    <div className="gallery_row1_img1 col-md-3 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="gallery_row1_img2 col-md-3 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="gallery_row1_img3 col-md-6 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>



            {/* row4 */}
            <div className="gallery container-fluid  mb-30 ">


                {/* --------------row4------------ */}
                <div className="gallery_row1 row flex flex-md-row flex-column ">
                    <div className="gallery_row1_img1 col-md-6 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>

                    </div>
                    <div className="gallery_row1_img2 col-md-3 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                    <div className="gallery_row1_img3 col-md-3 col-12 gallery-item">
                        <div className='gallery-img-wrapper'>
                            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/11/Japandi-dining-room-AD.jpg" alt="Gallery Image 1" />
                        </div>
                    </div>
                </div>




            </div>

            <div className='proj_cont1_hr2 mb-30 '>
            <hr />
        </div>
       

        <Morework />
        <Footer />
        </div>
    )
}

export default Projectcontent1
