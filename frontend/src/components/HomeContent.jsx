import React from "react";
import "../Stylesheet/Homecon.css";
import logo from "../assets/images/logo2.png";

function HomeContent() {
    return (
        <div className="home_content bg-Soft_Grey">
            <div className="row flex flex-row  p-15 ">
                <div className="col-md-6 flex align-items-center justify-content-center">
                    <img
                        className="home_cont_svg"
                        src={logo}
                        alt="logo"
                        width="265"
                        height="190"
                    />
                </div>
                <div className="col-md-6 mt-4 mb-3 homecont_para">
                    <p className="mb-4 ">
                        As interior designers, we transform spaces into
                        captivating environments that reflect your unique style.
                        Our interior designing firm is dedicated to crafting
                        bespoke solutions that harmonize functionality with
                        aesthetic appeal. With a keen eye for detail, our
                        interior design studio brings dreams to life, ensuring
                        every project is a masterpiece.
                    </p>
                    <p className="mb-4">
                        Our interior designing firm boasts a team of seasoned
                        professionals dedicated to transforming your spaces into
                        personalized masterpieces. Elevate your living spaces
                        with our expertise, where every design tells a story and
                        every room becomes a statement. Trust us to redefine
                        your interiors, turning your aspirations into
                        beautifully crafted realities.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;
