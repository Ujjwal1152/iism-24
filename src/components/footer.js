import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
  const handlePlayStoreHover = () => {
    // You can trigger a tooltip or modal here to prompt the user
    // For simplicity, we'll use an alert in this example:
    alert('Download our app from the Play Store!'); 
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="app-download">
          <a href="#" onMouseOver={handlePlayStoreHover}>
            <img src="/path/to/playstore-button.png" alt="Get it on Google Play" />
          </a>
        </div>

        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div className="contact-us">
          <a href="/contact" className="contact-button">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;