import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './coreteamcontent.css'
import head from './images/head1.png'

const TeamMembersGrid = () => {
  const members = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'success',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'success',
    },
  ];

  const marketings = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'warning',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'info',
    },
  ];

  const hospitalitys = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'info',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'success',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'success',
    },
  ];

  const designs = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'warning',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'info',
    },
  ];

  const finances = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'success',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'info',
    },
  ];

  const mandps = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'success',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'info',
    },
  ];

  const showms = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'success',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'info',
    },
  ];

  const prs = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'success',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'info',
    },
  ];

  const webandapps = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'success',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'info',
    },
  ];

  const ocs = [
    {
      name: 'Mike Cannon-Brookes',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: head,
      bgColor: 'warning',
    },
    {
      name: 'Scott Farquhar',
      title: 'CO-FOUNDER & CO-CEO',
      imageSrc: 'path/to/scott-farquhar.jpg',
      bgColor: 'success',
    },
    {
      name: 'Anu Bharadwaj',
      title: 'PRESIDENT',
      imageSrc: 'path/to/anu-bharadwaj.jpg',
      bgColor: 'info',
    },
  ];



  return (
    <Container>
      <Row>
        <h1 className='leadership-team'>Core Team IISM'24</h1>
      </Row>
      <Row>
        <h1 className='events-head'>Head Events</h1>
      </Row>
      <Row className="justify-content-center-2">
        {members.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='marketing-head'>Head Marketing</h1>
      </Row>
      <Row className="justify-content-center-2">
        {marketings.map((marketing, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${marketing.bgColor} position-relative`}>
              <Image
                src={marketing.imageSrc}
                alt={marketing.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{marketing.name}</h3>
                <p className="imagedescription">{marketing.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='hospitality-head'>Head Hospitality</h1>
      </Row>
      <Row className="justify-content-center-2">
        {hospitalitys.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='events-head'>Head Media ANd Publicity</h1>
      </Row>
      <Row className="justify-content-center-2">
        {mandps.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='events-head'>Head Show Management</h1>
      </Row>
      <Row className="justify-content-center-2">
        {showms.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='events-head'>Head Design And Creatives</h1>
      </Row>
      <Row className="justify-content-center-2">
        {designs.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='events-head'>Head Finance</h1>
      </Row>
      <Row className="justify-content-center-2">
        {finances.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='events-head'>Head Public Relations</h1>
      </Row>
      <Row className="justify-content-center-2">
        {prs.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='events-head'>Head Web And App</h1>
      </Row>
      <Row className="justify-content-center-2">
        {webandapps.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className='events-head'>Overall Coordinators</h1>
      </Row>
      <Row className="justify-content-center-2">
        {ocs.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 position-relative">
            <div className={`p-4 rounded text-center bg-${member.bgColor} position-relative`}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                roundedCircle
                fluid
                className="position-absolute top-0 start-50 translate-middle mt-n5 border border-white border-3"
              />
              <div className="mt-5">
                <h3 className="imagename">{member.name}</h3>
                <p className="imagedescription">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamMembersGrid;