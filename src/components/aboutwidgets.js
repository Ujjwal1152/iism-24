import React from 'react';
import './aboutwidgets.css';
import { Container, Row, Col, Image } from 'react-bootstrap'; // Import the CSS file

const DirectorMessage = () => {
  return (
      <div className="directormessage">
        <div className="directormessage-heading">
          <h1>Director's Message</h1>
        </div>
        <div className='directormessage-body'>
        <div className="directormessage-content">
          <p>Inter-IIT is one the the largest and also the oldest sports inter-college tournment held in India. 
            It is great privilaage that IIT Kanpur is hosting the tournment this year. 
            All the best to all the participants. 
            God bless you all! </p>
        </div>
        <div className="directormessage-image">
          <Image src="https://cdn.webshopapp.com/shops/268192/files/433182622/tommy-shelby.jpg" alt="Director" fluid />
        </div>
      </div>
      </div>

  );
};

export default DirectorMessage;
