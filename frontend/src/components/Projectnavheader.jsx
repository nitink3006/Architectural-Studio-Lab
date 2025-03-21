import React, { useEffect, useState, useRef } from "react";
import "../Stylesheet/Project.css";

function Projecthead({ selectedCategory, setSelectedCategory }) {
    const [isFixed, setIsFixed] = useState(false);
    const projectHeadRef = useRef(null);
    const placeholderRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!projectHeadRef.current || !placeholderRef.current) return;

            const rect = projectHeadRef.current.getBoundingClientRect();
            const scrollTop = window.scrollY;

            if (rect.top <= 60 && !isFixed) {
                setIsFixed(true);
            } else if (scrollTop < placeholderRef.current.offsetTop) {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isFixed]);

    return (
        <>
            <div
                ref={placeholderRef}
                style={{ height: isFixed ? `${projectHeadRef.current?.offsetHeight}px` : "0px" }}
            ></div>

            {/* Project Header Section */}
            <div ref={projectHeadRef} className={`pb-2 proj_head_sec ${isFixed ? "fixed" : ""}`}>
                <div className="hr_line">
                    <hr />
                </div>
                <div className="flex flex-row justify-center pe-18 proj_head ps-18">
                    <div className="flex flex-row proj_head_right">
                        <div className="pe-2 proj_head_right_btn1 ps-2">
                            <button
                                className={`futura_font btn border ${selectedCategory === "Commercial" ? "active" : ""}`}
                                onClick={() => setSelectedCategory("Commercial")}
                            >
                                Commercial
                            </button>
                        </div>
                        <div className="pe-2 proj_head_right_btn2 ps-2">
                            <button
                                className={`btn border ${selectedCategory === "Hospitality" ? "active" : ""}`}
                                onClick={() => setSelectedCategory("Hospitality")}
                            >
                                Hospitality
                            </button>
                        </div>
                        <div className="pe-2 proj_head_right_btn3 ps-2">
                            <button
                                className={`btn border ${selectedCategory === "Residential" ? "active" : ""}`}
                                onClick={() => setSelectedCategory("Residential")}
                            >
                                Residential
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projecthead;
