import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo2.png"; // Update the path as needed
import emailjs from "emailjs-com"; // Import emailjs-com
import { motion } from "framer-motion";

const AboutNavbar = () => {
  const location = useLocation(); // Get the current route
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xehymjr", // Replace with your EmailJS Service ID
        "template_6st5yxj", // Replace with your EmailJS Template ID
        formData,
        "vVFnMt1IokO4gixrt" // Replace with your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setIsOpen(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          budget: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message: " + error.text);
      });
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects-all", label: "Projects" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blogs", label: "Blogs" },
    { to: "/careers", label: "Careers" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHovered || windowWidth < 768 ? "bg-[#D6D6D6]/90" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-6">
        {/* Logo (left side) */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links & Button */}
        <div className="hidden md:flex items-center ml-auto space-x-7 text-black text-base futura_font">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-black transition-all whitespace-nowrap inline-block ${
                location.pathname === item.to
                  ? "font-medium text-gray-700 hover:text-gray-500"
                  : "hover:text-gray-500"
              }`}
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Enquire Now Button */}
          <button
            className="bg-black text-lg text-white px-6 py-3 rounded-md transition-all hover:bg-gray-800"
            onClick={() => setIsOpen(true)}
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-[#D6D6D6] w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 px-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-black text-lg ${
                  location.pathname === item.to
                    ? "font-medium text-gray-700"
                    : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="bg-black text-lg text-white px-6 py-3 rounded-md transition-all hover:bg-gray-800 w-full"
              onClick={() => {
                setIsOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Enquire Now
            </button>
          </div>
        </motion.div>
      )}

      {/* Enquiry Form Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button - Visible on all screen sizes */}
            <button
              className="text-3xl text-gray-400 absolute right-4 top-3 hover:text-gray-600 z-10"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="p-6 pt-12"> {/* Added pt-12 to give space for the close button */}
              {/* Heading */}
              <div className="text-center mb-6">
                <h2 className="text-3xl text-gray-400 font-semibold">
                  Say Hello
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  {
                    name: "firstName",
                    placeholder: "First Name",
                  },
                  {
                    name: "lastName",
                    placeholder: "Last Name",
                  },
                  {
                    name: "email",
                    placeholder: "Email",
                    type: "email",
                  },
                  {
                    name: "phone",
                    placeholder: "Phone",
                    type: "tel",
                  },
                  {
                    name: "location",
                    placeholder: "Location / Area",
                  },
                  {
                    name: "budget",
                    placeholder: "Enter Budget In Lakh",
                    type: "number",
                  },
                ].map(({ name, placeholder, type = "text" }) => (
                  <div key={name} className="border-b border-black">
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={handleChange}
                      className="p-2 text-base w-full outline-none placeholder-black"
                      required
                    />
                  </div>
                ))}

                {/* Message Textarea */}
                <div className="border-b border-black">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-2 text-base w-full outline-none placeholder-black resize-none min-h-[100px]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-black text-lg text-white w-full font-semibold hover:bg-gray-900 mt-4 py-3 transition-colors rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default AboutNavbar;