import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './coreteampage.css';

function CoreTeamPage() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Image
        src= 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?cs=srgb&dl=pexels-fauxels-3184432.jpg&fm=jpg' // Replace with your image URL
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
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h1
                style={{
                  fontFamily: 'Olympic Sans',
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  textAlign: 'center',
                  color: 'white',
                }}
              > Meet The Team
              </h1>
              <p
                style={{
                  fontFamily: 'Arial',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CoreTeamPage;