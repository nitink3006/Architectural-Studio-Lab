import React from "react";
import {
    CiMail,
    CiLinkedin,
    CiInstagram,
    CiFacebook,
    CiLocationOn,
} from "react-icons/ci";
// import { FaWhatsapp } from "react-icons/fa";
import "../Stylesheet/Footer.css";

const Footer = () => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return ( 
        <div className="container-fluid flex flex-col flex-md-row bg-dark justify-between p-20 text-white footer pe-5 ps-5">
            <div className="footer_dt">
                <div className="text-gray-400 text-xs avenir_font footer_design">
                    ©2025 Opus Architectural Lab.<br></br> Website Designed by
                    <a
                        href="https://www.webcrafticx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-decoration-underline text-gray-200 text-sm call">
                            {" "}
                            WebCrafticX{" "}
                        </span>
                    </a>
                </div>
            </div>

            <div className="footer_icon">
                <div className="flex flex-md-row icon_div space-x-4">
                    <a
                        href="mailto:opus.archlab@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CiMail
                            className="text-gray-400 hover:text-white"
                            size={20}
                        />
                    </a>
                    <a
                        // href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CiLinkedin
                            className="text-gray-400 hover:text-white"
                            size={20}
                        />
                    </a>
                    <a
                        // href="https://facebook.com/your-handle"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CiFacebook
                            className="text-gray-400 hover:text-white"
                            size={20}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/opus.archlab?igsh=MXdwNWVzM2w5MzFwaw=="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CiInstagram
                            className="text-gray-400 hover:text-white"
                            size={20}
                        />
                    </a>
                    <CiLocationOn
                        className="text-gray-400 hover:text-white"
                        size={20}
                    />
                </div>

                <div>
                    <div className="text-center text-gray-400 avenir_font pt-5">
                        Call Us -{" "}
                        <span className="call">
                            <a
                                href="tel:+919999803196"
                                className="text-white call"
                            >
                                <u>+91 99998 03196</u>
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Back To Top Button */}
            <div className="footer_back">
                <div
                    className="text-gray-400 cursor-pointer"
                    onClick={scrollToTop}
                >
                    <em className="avenir_font call">Back To Top</em>
                </div>
            </div>
        </div>
    );
};

export default Footer;
