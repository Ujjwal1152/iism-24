import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './aboutthegames.css'; // Import your CSS file

function AboutTheGames() {
    return (
        <Container className="about-the-games">
            <Row className="align-items-center">
                <Col md={6}>
                    <div className="games-image">
                        {/* Add your image here */}
                        <Image src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnR8ZW58MHx8MHx8fDA%3D" alt="Inter IIT Sports Meet" fluid />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="games-content">
                        <h2>About the Games</h2>
                        {/* <h2>About the Games</h2> */}
                        <p>The Inter IIT Sports Meet is an eagerly anticipated annual sports tournament of the Indian Institutes of Technology. Established in 1961, it has grown to become the longest-running inter-collegiate meet in India, featuring a wide range of sporting events and promoting a spirit of camaraderie and healthy competition among the participating IITs.</p>
                        <p>The meet is typically organized in December, with the Aquatics events held separately in October. Each year, a different IIT hosts the event, which includes competitions in athletics, team sports, and individual events, culminating in the awarding of the General Championship to the best-performing institution.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutTheGames;
