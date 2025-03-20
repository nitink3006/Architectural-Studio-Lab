import React from "react";
import {
    CiMail,
    CiLinkedin,
    CiInstagram,
    CiFacebook,
    CiLocationOn,
} from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import "../Stylesheet/Footer.css";

const Footer = () => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="footer bg-dark text-white container-fluid flex flex-md-row flex-col justify-between p-20 ps-5 pe-5">
            <div className="footer_dt">
                <div className="text-gray-400 text-xs">
                    ©2025 Opus Architectural Lab. Website Designed by
                    <a
                        href="https://www.webcrafticx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-decoration-underline text-sm text-gray-200 call">
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
                    <div className="text-gray-400 text-center pt-5">
                        Call Us -{" "}
                        <span className="call">
                            <a
                                href="tel:+919999803196"
                                className="call text-white"
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
                    <em className="call">Back To Top</em>
                </div>
            </div>
        </div>
    );
};

export default Footer;
