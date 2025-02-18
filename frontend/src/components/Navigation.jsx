
import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../Stylesheet/Nav.css';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <Navbar expand="lg" bg="white" variant="light" fixed="top" className="w-100 shadow-sm d-flex justify-content-between align-items-center px-3">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="fw-bold">Chalk Studio</Navbar.Brand>


        <div className="d-block d-lg-none" onClick={toggleNav}>

          <FaPlus size={24} />
        </div>


        <div className={`d-flex flex-column flex-md-row ${isNavOpen ? "d-block" : "d-none"} d-lg-flex`}>
          <Nav className="d-flex flex-column flex-md-row">
            <Nav.Link href="#" className="mx-2 nav_link">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link></Nav.Link>

            <Nav.Link href="#" className="mx-2 nav_link">
              <Link className="nav-link" to="/about">About</Link></Nav.Link>

            <Nav.Link href="#" className="mx-2 nav_link">
              <Link className="nav-link" to="/projects">Projects</Link></Nav.Link>

            <Nav.Link href="#" className="mx-2 nav_link">
              <Link className="nav-link" to="/careers">Careers</Link></Nav.Link>

            <Nav.Link href="#" className="mx-2 nav_link">
              <Link className="nav-link" to="/gallery">Gallery</Link></Nav.Link>

            <Nav.Link href="#" className="mx-2 nav_link">
              <Link className="nav-link" to="/blogs">Blogs</Link></Nav.Link>

            <Link className="nav-link " to="/blogs"><button className="btn btn-dark text-white ms-8">Enquire Now</button></Link>

          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
