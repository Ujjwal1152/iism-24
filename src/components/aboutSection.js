import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // For navigation
import './AboutSection.css'; 
import sports from './images/sports.jpg'
import history from './images/history.jpg'
import mascot from './images/mascot.jpg'
import theme from './images/theme.jpg'

function AboutSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/about`); // Assuming '/about/:section' route
  };

  const widgetData = [
    { 
      title: 'Sports', 
      image: sports,
    },
    { 
      title: 'Mascot', 
      image: mascot,
    },
    { 
      title: 'Theme', 
      image: theme,
    },
    { 
      title: 'History', 
      image: history,
    },
  ];

  return (
    <section className="about-section">
      <Container>
        <h2 className="section-title text-center">About the Games</h2>

        <Row className="widgets-container">
          {widgetData.map((widget) => (
            <Col md={6} lg={3} className="mb-4" key={widget.title}>
              <Card 
                className="widget-card" // Add a class for styling hover effect
                onClick={() => handleClick()} 
              >
                <Card.Img 
                  variant="top" 
                  src={widget.image} 
                  alt={`${widget.title} Image`} 
                />
                <Card.Body>
                  <Card.Title>{widget.title}</Card.Title>
                  {/* Optional: Add short description here */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection; 