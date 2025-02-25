import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa"; // Import close icon
import { Link } from "react-router-dom";
import "../Stylesheet/try.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false); // Function to close menu

  return (
    <div className="container-fluid">









   
        <Navbar expand="lg" bg="white" variant="light" fixed="top" className="w-100 shadow-sm ">
      <div className="d-flex justify-content-between align-items-center container-fluid" style={{padding:"0rem"}} >
       
        <Navbar.Brand href="#" className=" pe-2 ps-2 fs-4">Opus Architectural Lab</Navbar.Brand>


{/* desktop */}
<div className="d-lg-flex flex-row desktop_nav  d-none ">
<Nav.Link as={Link} to="/" className="nav-link ps-2 pe-2 ">
    Home
  </Nav.Link>
  <Nav.Link as={Link} to="/about" className="nav-link ps-2 pe-2">
    About
  </Nav.Link>
  <Nav.Link as={Link} to="/projects" className="nav-link ps-2 pe-2">
  Projects
  </Nav.Link>
  <Nav.Link as={Link} to="/careers" className="nav-link ps-2 pe-2">
  Careers
  </Nav.Link>
  <Nav.Link as={Link} to="/gallery" className="nav-link ps-2 pe-2">
  Gallery
  </Nav.Link>
  <Nav.Link as={Link} to="/blogs" className="nav-link ps-2 pe-4">
  Blogs
  </Nav.Link>

  <button className="  btn-enq">
       Enquire Now
      </button>
     
</div>







   {/* -----------------------------------mobile view------------------------------ */}

        <div className="d-block d-lg-none px-3" onClick={toggleNav}>
          {isNavOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
        </div>

        {/* Fullscreen  */}
        <div className={`mobile-menu ${isNavOpen ? "open" : ""}`}>

          <div className="close-icon" onClick={closeNav}>
            <FaTimes size={24} />
          </div>


          <Nav className="nav-links">
            <Nav.Link as={Link} to="/" className="nav-link" onClick={closeNav}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link" onClick={closeNav}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link" onClick={closeNav}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/careers" className="nav-link" onClick={closeNav}>Careers</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link" onClick={closeNav}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="nav-link" onClick={closeNav}>Blog</Nav.Link>
          </Nav>


          <Nav.Link as={Link} to="/enquire" className="nav-link" onClick={closeNav}>
            <button className="enquire-btn mt-3">Enquire Now</button>
          </Nav.Link>
        </div>
      </div>
    </Navbar>
    </div>
  
  );
};

export default Navigation;
