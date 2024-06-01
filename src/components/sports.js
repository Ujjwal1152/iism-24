import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './participatingiits.css'; // Your CSS file
import Athletics from './images/atheletics.jpg';
import Cricket from './images/cricket.webp';
import Football from './images/football.webp';
import Basketball from './images/basketball.webp';
import Lawn from './images/tennis.jpg';
import Table from './images/tt.jpeg';
import Volleyball from './images/volleyball.jpg';
import Badminton from './images/badminton.jpg';
import Swimming from './images/swimming.jpg';
import waterpolo from './images/waterpolo.jpg';
import Hockey from './images/hockey.jpg';


const Gallery = () => {
  const sports = [
    { id: 1, name: "Cricket", image: Cricket },
    { id: 2, name: "Hockey", image: Hockey },
    { id: 3, name: "Football", image: Football },
    { id: 4, name: "Badminton", image: Badminton },
    { id: 5, name: "Lawn Tennis", image: Lawn },
    { id: 6, name: "Table Tennis", image: Table },
    { id: 7, name: "Basketball", image: Basketball },
    { id: 8, name: "Volleyball", image: Volleyball },
    { id: 9, name: "Swimming", image: Swimming },
    { id: 10, name: "Water Polo", image: waterpolo },
    { id: 11, name: "Athletics", image: Athletics },
  ];

  const itemsPerSlide = 4;
  const slides = [];
  for (let i = 0; i < sports.length; i += itemsPerSlide) {
    slides.push(sports.slice(i, i + itemsPerSlide));
  }

  return (
    <section className="sports-container">
      <Container>
        <h2 className="section-heading text-center mb-4">Sports</h2>

        <Carousel className = "coursel-cards">
          {slides.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <Row className="justify-content-center"> {/* Added gx-2 and gy-2 for reduced spacing */}
                {slide.map((sport) => (
                  <Col key={sport.id} md={3} className="mb-4">
                    <Card className="coursel-card">
                      <Card.Img variant="top" src={sport.image} alt={sport.name} className="card-image" />
                      <Card.Body className="text-center">
                        <Card.Title className="card-title">{sport.name}</Card.Title>
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
