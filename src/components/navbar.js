import React, { useState } from 'react';
import './navbar.css';
import interiitLogo from './images/redlogo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const MyNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className= "custom-navbar" >
      <Container>
        <Navbar.Brand as={Link} to="/"> {/* Make the logo a Link */}
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
            <Nav.Link as={Link} to="/star-attractions">Star Attractions</Nav.Link>
            <Nav.Link as={Link} to="/results">Results</Nav.Link>
            <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link>
            <Nav.Link as={Link} to="/coreteam">Core Team</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav className="social-links"> 
            <Nav.Link href="https://www.instagram.com/interiitsports/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Nav.Link>
            {/* Add other social links similarly */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;