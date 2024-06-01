import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './sportscards.css';
import { Link } from 'react-router-dom';
import basketball from './images/basketball.webp'
import cricket from './images/cricket.webp'
import table from './images/tt.jpeg'
import tennis from './images/tennis.jpg'
import volleyball from './images/volleyball.jpg'
import hockey from './images/hockey.jpg'

const sportsData = [
  {
    title: 'Basketball',
    image: basketball,
    fact: 'Basketball was invented by Dr. James Naismith in 1891.',
    link: '/basketball-schedule'
  },
  {
    title: 'Tennis',
    image: tennis,
    fact: 'The oldest tennis tournament in the world is Wimbledon.',
    link: '/tennis-schedule'
  },
  {
    title: 'Table Tennis',
    image: table,
    fact: 'Table Tennis is also known as Ping-Pong.',
    link: '/table-tennis-schedule'
  },
  {
    title: 'Volleyball',
    image: volleyball,
    fact: 'Volleyball was invented in 1895 by William G. Morgan.',
    link: '/volleyball-schedule'
  },
  {
    title: 'Hockey',
    image: hockey,
    fact: 'The first organized indoor hockey game was played in 1875 in Montreal.',
    link: '/hockey-schedule'
  },
  {
    title: 'Cricket',
    image: cricket,
    fact: 'The first cricket match was played in 1646.',
    link: '/cricket-schedule'
  }
];

const SportsSchedule = () => {
  return (
    <Container className="schedule-container">
      <h2 className="text-left">Schedule</h2>
      <Row className='row-sports'>
        {sportsData.slice(0, 3).map((sport, index) => (
          <Col md={4} key={index}>
            <Link to={sport.link} className="sport-link">
            <Card className="sport-card">
              <Card.Img variant="top" src={sport.image} className='sportsimage' />
              <Card.Body>
                <Card.Title>{sport.title}</Card.Title>
                <Card.Text className='text'>{sport.fact}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className='sportsrow'>
        {sportsData.slice(3).map((sport, index) => (
          <Col md={4} key={index}>
            <Link to={sport.link} className="sport-link">
            <Card className="sport-card">
              <Card.Img variant="top" src={sport.image} className='sportsimage'/>
              <Card.Body>
                <Card.Title>{sport.title}</Card.Title>
                <Card.Text className='text'>{sport.fact}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SportsSchedule;
