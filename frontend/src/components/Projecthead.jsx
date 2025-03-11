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
      >
        <div className="hr_line d-md-block d-none">
          <hr />
        </div>

        <div className="proj_head flex flex-md-row flex-col justify-between ps-18 pe-18">
          {/* Left Section - "OUR WORK" */}
          <div className="proj_head_left">
            <h3>OUR WORK</h3>
          </div>

          <div className="hr_line d-md-none d-block">
            <hr />
          </div>

          {/* Right Section - Category Buttons */}
          <div className="proj_head_right flex flex-row">
            <div className="proj_head_right_btn1 pe-2 ps-2">
              <button
                className={`btn border ${selectedCategory === "Commercial" ? "active" : ""}`}
                onClick={() => setSelectedCategory("Commercial")}
              >
                Commercial
              </button>
            </div>
            <div className="proj_head_right_btn2 pe-2 ps-2">
              <button
                className={`btn border ${selectedCategory === "Hospitality" ? "active" : ""}`}
                onClick={() => setSelectedCategory("Hospitality")}
              >
                Hospitality
              </button>
            </div>
            <div className="proj_head_right_btn3 pe-2 ps-2">
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
