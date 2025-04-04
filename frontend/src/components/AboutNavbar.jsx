import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo2.png"; // Update the path as needed

const AboutNavbar = () => {
  const location = useLocation(); // Get the current route
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHovered ? "bg-[#D6D6D6]/90" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo (shifted more left) */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Navigation Links (with increased spacing) */}
        <div className="flex space-x-7 text-black text-base futura_font">
          {[  
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/projects-all", label: "Projects" },
            { to: "/gallery", label: "Gallery" },
            { to: "/blogs", label: "Blogs" },
            { to: "/careers", label: "Careers" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-black transition-all ${
                location.pathname === item.to
                  ? "font-bold hover:text-gray-500"
                  : "hover:text-gray-500"
              }`}
              style={{ textDecoration: "none" }} 
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AboutNavbar;
