import React, { useState } from 'react';
import './HomeNav.css';
import interiitLogo from './images/redlogo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { useEffect } from 'react';

const MyNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const primaryHeader = document.querySelector(".custom-navbar");
    const scrollWatcher = document.createElement("div");
  
    scrollWatcher.setAttribute("data-scroll-watcher", "");
    primaryHeader.before(scrollWatcher);
  
    const navObserver = new IntersectionObserver(
        (entries) => {
        primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
        },
        { rootMargin: "300px 0px 0px 0px" }
    );
  
    navObserver.observe(scrollWatcher);
    }, []);

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className= "custom-navbar" >
      <Container>
        <Navbar.Brand as={Link} to="/"> {/* Link to home page */}
          <img src={interiitLogo} alt="InterIIT Logo" height="40" /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
            <NavDropdown title="Gallery" id="gallery-dropdown">
              <NavDropdown.Item as={Link} to="/gallery/photos">Photos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery/videos">Videos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery/brochure">Brochure</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/results">Results</Nav.Link>
            <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link>
            <Nav.Link as={Link} to="/coreteam">Core Team</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav className="social-links"> 
            <Nav.Link href="https://www.instagram.com/interiitsports/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UCtN0CjJ4j7L3VZlZ2vZ5q6g" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;