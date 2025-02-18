import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import '../Stylesheet/Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-dark text-white container-fluid flex flex-row justify-between p-20 ps-5 pe-5">

            <div className="footer_dt">
                <div className="text-gray-400 text-xs">©2025 Chalk Studio Interiors. Website Designed by <a><span className=" text-decoration-underline text-sm text-gray-200">HINT </span></a></div>
            </div>
            <div className="footer_icon">
                <div className="flex flex-column flex-md-row ">
                    <CiMail className=" text-gray-400" size={24}/>
                    <CiLinkedin className=" text-gray-400" size={24}/>
                    <CiInstagram className=" text-gray-400" size={24}/>
                    <CiFacebook className=" text-gray-400" size={24}/>
                    <FaWhatsapp className=" text-gray-400" size={24}/>
                    <CiLocationOn className=" text-gray-400" size={24}/>

                </div>
                <div>
                    <div className="text-gray-400">Call Us- <span>09599197669</span></div>
                </div>

            </div>
            <div className="footer_back">
                <div className="text-gray-400"><em>Back To Top</em></div>
            </div>

        </div>
    );
};

export default Footer;
