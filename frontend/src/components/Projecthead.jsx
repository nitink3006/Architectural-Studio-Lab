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
      {/* Placeholder to maintain space when header is fixed */}
      <div
        ref={placeholderRef}
        style={{
          height: isFixed ? `${projectHeadRef.current?.offsetHeight}px` : "0px",
        }}
      ></div>

      {/* Project Header Section */}
      <div
        ref={projectHeadRef}
        className={`pb-3 proj_head_sec ${isFixed ? "fixed" : ""}`}
        bg-Soft_Grey
      >
        <div className="d-md-block d-none hr_line">
          <hr />
        </div>

        <div className="flex flex-col flex-md-row justify-between pe-18 proj_head ps-18">
          {/* Left Section - "OUR WORK" */}
          <div className="proj_head_left">
            <h3 className="text_black">OUR WORK</h3>
          </div>

          <div className="d-block d-md-none hr_line">
            <hr />
          </div>

          {/* Right Section - Category Buttons */}
          <div className="flex flex-row proj_head_right">
            <div className="pe-2 proj_head_right_btn1 ps-2 text_dark_grey">
              <button
                className={`text_black btn border ${
                  selectedCategory === "Commercial" ? "active" : ""
                }`}
                text_dark_grey
                onClick={() => setSelectedCategory("Commercial")}
              >
                Commercial
              </button>
            </div>
            <div className="pe-2 proj_head_right_btn2 ps-2">
              <button
                className={`text_black btn border ${
                  selectedCategory === "Hospitality" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("Hospitality")}
              >
                Hospitality
              </button>
            </div>
            <div className="pe-2 proj_head_right_btn3 ps-2">
              <button
                className={`text_black btn border ${
                  selectedCategory === "Residential" ? "active" : ""
                }`}
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
