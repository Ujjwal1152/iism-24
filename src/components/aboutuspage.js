import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import tempbg from './images/moon-4919501_1280.jpg'

function GameCelebration() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Image
        src={tempbg} // Replace with your image URL
        alt="Game Celebration Background"
        fluid
        style={{
          position: 'absolute',
          top: 76,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container>
          <Row className="PageHeading">
            <Col xs={12} md={12}>
              <h1
                style={{
                  paddingTop: '70vh',
                  fontFamily: 'Olympic Sans',
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  color: 'white',
                }}
              >
                Celebrating the Games!
              </h1>
              <p
                style={{
                  fontFamily: 'Arial',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                [12 - 17 December]
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default GameCelebration;