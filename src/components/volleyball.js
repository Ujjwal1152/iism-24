import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import tempbg from './images/aboutus2.jpg'

function VolleyBallPage() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Image
        src= 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdd2e359-e91a-4197-b794-db31d288b2c0/daebpym-e9e216df-6a8b-4288-a243-9e57363cbb02.png/v1/fill/w_1024,h_576,q_80,strp/haikyuu___quote__bokuto_kotaro_by_jackelling_daebpym-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvY2RkMmUzNTktZTkxYS00MTk3LWI3OTQtZGIzMWQyODhiMmMwXC9kYWVicHltLWU5ZTIxNmRmLTZhOGItNDI4OC1hMjQzLTllNTczNjNjYmIwMi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MGfaoKraVS_iYWhiLRhdozi6PVXrAoGrZZA83sYwUl8' // Replace with your image URL
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
              >
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

export default VolleyBallPage;