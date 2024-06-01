import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './participatingiits.css'; // Your CSS file
import patna from './images/patna.png';
import kanpur from './images/kanpur.jpg';
import delhi from './images/delhi.png';
import bombay from './images/bombay.png';
import kharagpur from './images/kharagpur.png';
import madras from './images/madras.png';
import roorkee from './images/roorkee.png';
import guwahati from './images/guwahati.png';
import hyderabad from './images/hyderabad.png';
import gandhinagar from './images/gandhinagar.png';
import jodhpur from './images/jodhpur.png';
import bhubaneshwar from './images/bhubaneswar.jpg';
import indore from './images/indore.png';
import mandi from './images/mandi.png';
import bhu from './images/bhu.png';
import dhanbad from './images/dhanbad.png';
import triupati from './images/triupati.png';
import palakkad from './images/palakkad.jpg';
import bhilai from './images/bhilai.png';
import goa from './images/goa.png';
import jammu from './images/jammu.png';
import dharwad from './images/dharwad.png';
import ropar from './images/ropar.png';

const Gallery = () => {
  const iits = [
    { id: 1, name: "IIT Kanpur", logo: kanpur },
    { id: 2, name: "IIT Delhi", logo: delhi },
    { id: 3, name: "IIT Bombay", logo: bombay },
    { id: 4, name: "IIT Kharagpur", logo: kharagpur },
    { id: 5, name: "IIT Madras", logo: madras },
    { id: 6, name: "IIT Roorkee", logo: roorkee },
    { id: 7, name: "IIT Guwahati", logo: guwahati },
    { id: 8, name: "IIT Hyderabad", logo: hyderabad },
    { id: 9, name: "IIT Gandhinagar", logo: gandhinagar },
    { id: 10, name: "IIT Jodhpur", logo: jodhpur },
    { id: 11, name: "IIT Patna", logo: patna },
    { id: 12, name: "IIT Bhubaneswar", logo: bhubaneshwar },
    { id: 13, name: "IIT Indore", logo: indore },
    { id: 14, name: "IIT Mandi", logo: mandi },
    { id: 15, name: "IIT BHU", logo: bhu },
    { id: 16, name: "IIT Dhanbad", logo: dhanbad },
    { id: 17, name: "IIT Tirupati", logo: triupati },
    { id: 18, name: "IIT Palakkad", logo: palakkad },
    { id: 19, name: "IIT Bhilai", logo: bhilai },
    { id: 20, name: "IIT Goa", logo: goa },
    { id: 21, name: "IIT Jammu", logo: jammu },
    { id: 22, name: "IIT Dharwad", logo: dharwad },
    { id: 23, name: "IIT Ropar", logo: ropar }
  ];

  const itemsPerSlide = 4;
  const slides = [];
  for (let i = 0; i < iits.length; i += itemsPerSlide) {
    slides.push(iits.slice(i, i + itemsPerSlide));
  }

  return (
    <section className="gallery-container">
      <Container>
        <h2 className="section-heading text-center mb-4">Teams</h2>

        <Carousel className = "coursel-cards">
          {slides.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <Row className="justify-content-center"> {/* Added gx-2 and gy-2 for reduced spacing */}
                {slide.map((iit) => (
                  <Col key={iit.id} md={3} className="mb-4">
                    <Card className="coursel-card">
                      <Card.Img variant="top" src={iit.logo} alt={iit.name} className="card-image" />
                      <Card.Body className="text-center">
                        <Card.Title className="card-title">{iit.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Gallery;
