import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaTimes } from "react-icons/fa"; // Import close icon
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import "../Stylesheet/try.css";
import emailjs from "emailjs-com"; // Import emailjs-com
import { motion } from "framer-motion";
import logo from "../assets/images/logo2.png";

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
        className="shadow-sm w-100"
      >
        <div
          className="container-fluid d-flex align-items-center justify-content-between bg_soft_gray_nav"
          style={{ padding: "0rem" }}
        >
          <Navbar.Brand href="#" className="fs-4 fw-normal px-4">
            {/* Opus Architectural Lab */}
            <img src={logo} alt="logo" className="logo_img" />
            {/* <div className="d-flex">
            <img src={logo} alt="logo" className="logo_img" />
            <p> Opus Architectural Lab</p>
            </div> 
            */}
          </Navbar.Brand>

          {/* desktop */}
          <div className="d-lg-flex d-none flex-row desktop_nav">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link ps-3 pe-3 ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link ps-3 pe-3 ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects-all"
              className={`nav-link ps-3 pe-3 ${
                location.pathname === "/projects-all" ? "active" : ""
              }`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/gallery"
              className={`nav-link ps-3 pe-3 ${
                location.pathname === "/gallery" ? "active" : ""
              }`}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blogs"
              className={`nav-link ps-3 pe-3 ${
                location.pathname === "/blogs" ? "active" : ""
              }`}
            >
              Blogs
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/careers"
              className={`nav-link ps-3 pe-3 ${
                location.pathname === "/careers" ? "active" : ""
              }`}
            >
              Careers
            </Nav.Link>
            <button
              className="btn-enq bg-black text-lg text-white px-6 py-3"
              onClick={() => setIsOpen(true)}
            >
              Enquire Now
            </button>

            {isOpen && (
              // Replace the motion.div for the modal overlay with this:
              <motion.div
                className="flex bg-black bg-opacity-50 justify-center fixed inset-0 items-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <motion.div
                  className="flex flex-col bg-white h-auto justify-center p-4 rounded-lg shadow-lg w-full max-w-lg md:p-6 overflow-y-auto relative"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Close Button */}
                  <motion.button
                    className="text-2xl text-gray-400 absolute hover:text-gray-600 right-3 top-3"
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
                    <h2 className="text-3xl text-gray-400 font-semibold">
                      Say Hello
                    </h2>
                  </motion.div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-3 space-y-3">
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
                    ].map(({ name, placeholder, type = "text" }, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                        }}
                        className="border-b border-black hover:border-b-2"
                      >
                        <input
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                          className="p-2 text-base w-full hover:font-bold outline-none placeholder-black"
                          required
                        />
                      </motion.div>
                    ))}

                    {/* Message Textarea */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.2,
                      }}
                      className="border-b border-black hover:border-b-2"
                    >
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-2 text-base w-full hover:font-bold outline-none placeholder-black resize-none"
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
                      className="bg-black text-base text-white w-full font-semibold hover:bg-gray-900 hover:font-bold mt-3 py-2 transition-colors"
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
            {isNavOpen ? <FaTimes size={24} /> : <IoIosMenu size={24} />}
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
              <Nav.Link
                as={Link}
                to="/careers"
                className="nav-link"
                onClick={closeNav}
              >
                Careers
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
                className="flex bg-black bg-opacity-50 justify-center fixed inset-0 items-center px-4 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="flex flex-col bg-white h-[90vh] justify-between p-4 rounded-lg shadow-lg w-full max-w-lg overflow-hidden relative"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Close Button */}
                  <motion.button
                    className="text-2xl text-gray-500 absolute hover:text-black right-3 top-3"
                    onClick={() => setIsMobile(false)}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    ×
                  </motion.button>

                  {/* Heading */}
                  <motion.div
                    className="text-center mb-2 mt-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl text-gray-400 font-semibold">
                      Say Hello
                    </h2>
                  </motion.div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col flex-grow space-y-3"
                  >
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
                    ].map(({ name, placeholder, type = "text" }, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                        }}
                        className="border-b border-black"
                      >
                        <input
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                          className="p-2 text-base w-full outline-none placeholder-black"
                          required
                        />
                      </motion.div>
                    ))}

                    {/* Message Textarea */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.2,
                      }}
                      className="flex-grow border-b border-black"
                    >
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="h-[100px] p-2 text-base w-full outline-none placeholder-black resize-none"
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
                      className="bg-black rounded-md text-lg text-white w-full font-semibold hover:bg-gray-900 mt-3 py-2 transition-colors"
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
