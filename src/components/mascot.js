import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import './mascot.css'; 

function MascotSection() {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <Image src="https://previews.123rf.com/images/saripuddin/saripuddin2003/saripuddin200300099/147434849-deer-cartoon-mascot-design-with-modern-illustration-concept-style-for-sport-team.jpg" alt="Mithil Mascot" fluid />
                </Col>
                <Col md={6}>
                    <div className="mascot-description">
                        <h2>Introducing Mithil</h2>
                        <p>Mithil is our proud mascot, inspired by the majestic Barasingha, or swamp deer. The name Mithil is derived from the ancient Ramayana kingdom of Mithila, adding a touch of history and heritage to our representation.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default MascotSection;
