import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {  FaTimes } from "react-icons/fa"; // Import close icon
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import "../Stylesheet/try.css";
import emailjs from "emailjs-com"; // Import emailjs-com
import { motion } from "framer-motion";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false); // Function to close menu
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    message: "",
  });

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

  return (
    <div className="container-fluid">
      <Navbar
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
        className="w-100 shadow-sm "
      >
        <div
          className="d-flex justify-content-between align-items-center container-fluid"
          style={{ padding: "0rem" }}
        >
          <Navbar.Brand href="#" className=" pe-2 ps-5 fs-4 fw-normal" >
            Opus Architectural Lab
          </Navbar.Brand>

          {/* desktop */}
          <div className="d-lg-flex flex-row desktop_nav  d-none ">
            <Nav.Link as={Link} to="/" className="nav-link ps-3 pe-3"  >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link ps-3 pe-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects-all" className="nav-link ps-3 pe-3">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/careers" className="nav-link ps-3 pe-3">
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link ps-3 pe-3">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="nav-link ps-3 pe-4">
              Blogs
            </Nav.Link>

            <button
              className="btn-enq bg-black text-white px-6 py-3 text-lg"
              onClick={() => setIsOpen(true)}
            >
              Enquire Now
            </button>

            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white w-full max-w-lg h-auto p-4 md:p-6 relative shadow-lg flex flex-col justify-center overflow-y-auto rounded-lg"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Close Button */}
                  <motion.button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    ×
                  </motion.button>

                  {/* Heading */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-semibold text-gray-400">
                      Say Hello
                    </h2>
                  </motion.div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3 mt-3">
                    {[
                      { name: "firstName", placeholder: "First Name" },
                      { name: "lastName", placeholder: "Last Name" },
                      { name: "email", placeholder: "Email", type: "email" },
                      { name: "phone", placeholder: "Phone", type: "tel" },
                      { name: "location", placeholder: "Location / Area" },
                      {
                        name: "budget",
                        placeholder: "Enter Budget In Lakh",
                        type: "number",
                      },
                    ].map(({ name, placeholder, type = "text" }, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="border-b border-black hover:border-b-2"
                      >
                        <input
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                          className="w-full p-2 text-base outline-none placeholder-black hover:font-bold"
                          required
                        />
                      </motion.div>
                    ))}

                    {/* Message Textarea */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="border-b border-black hover:border-b-2"
                    >
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 text-base outline-none resize-none placeholder-black hover:font-bold"
                        rows="2"
                      ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full bg-black text-white py-2 text-base font-semibold mt-3 hover:bg-gray-900 hover:font-bold transition-colors"
                    >
                      Submit
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* -----------------------------------mobile view------------------------------ */}

          <div className="d-block d-lg-none px-3" onClick={toggleNav}>
            {isNavOpen ? <FaTimes size={24} /> : <IoIosMenu  size={24} />}
          </div>

          {/* Fullscreen  */}
          <div className={`mobile-menu ${isNavOpen ? "open" : ""}`}>
            <div className="close-icon" onClick={closeNav}>
              <FaTimes size={24} />
            </div>

            <Nav className="nav-links">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                onClick={closeNav}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="nav-link"
                onClick={closeNav}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                className="nav-link"
                onClick={closeNav}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/careers"
                className="nav-link"
                onClick={closeNav}
              >
                Careers
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/gallery"
                className="nav-link"
                onClick={closeNav}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blogs"
                className="nav-link"
                onClick={closeNav}
              >
                Blog
              </Nav.Link>
            </Nav>

            <Nav.Link className="nav-link">
              <button
                className="enquire-btn mt-3"
                onClick={() => setIsMobile(true)} // Modal Open
              >
                Enquire Now
              </button>
            </Nav.Link>

            {isMobile && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white w-full max-w-lg h-[90vh] p-4 relative shadow-lg flex flex-col justify-between overflow-hidden rounded-lg"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Close Button */}
                  <motion.button
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
                    onClick={() => setIsMobile(false)}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    ×
                  </motion.button>

                  {/* Heading */}
                  <motion.div
                    className="mt-6 mb-2 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-semibold text-gray-400">
                      Say Hello
                    </h2>
                  </motion.div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 flex flex-col flex-grow"
                  >
                    {[
                      { name: "firstName", placeholder: "First Name" },
                      { name: "lastName", placeholder: "Last Name" },
                      { name: "email", placeholder: "Email", type: "email" },
                      { name: "phone", placeholder: "Phone", type: "tel" },
                      { name: "location", placeholder: "Location / Area" },
                      {
                        name: "budget",
                        placeholder: "Enter Budget In Lakh",
                        type: "number",
                      },
                    ].map(({ name, placeholder, type = "text" }, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="border-b border-black"
                      >
                        <input
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                          className="w-full p-2 text-base outline-none placeholder-black"
                          required
                        />
                      </motion.div>
                    ))}

                    {/* Message Textarea */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="border-b border-black flex-grow"
                    >
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 text-base outline-none resize-none placeholder-black h-[100px]"
                        rows="1"
                      ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full bg-black text-white py-2 text-lg font-semibold mt-3 rounded-md hover:bg-gray-900 transition-colors"
                    >
                      Submit
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
