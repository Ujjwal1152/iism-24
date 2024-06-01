import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './themecomponent.css';

const ThemeComponent = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const paragraph = document.getElementById('theme-paragraph');
      if (paragraph) {
        const rect = paragraph.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setShowParagraph(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className="theme-container">
      <Row className="theme-header">
        <h1 className="animated-heading">
          <span className={`fade-out ${showParagraph ? 'fade' : ''}`}>Theme</span>
          <span className={`fade-in ${showParagraph ? 'fade' : ''}`}>Awe, Conquer, Inspire</span>
          {/* <span className="fade-out">Theme</span>
          <span className="fade-in">Awe, Conquer, Inspire</span> */}
        </h1>
      </Row>
      <Row className={`theme-paragraph ${showParagraph ? 'slide-in' : ''}`} id="theme-paragraph">
        <Col>
          <p>
            Our theme encompasses three powerful words: Awe, Conquer, and Inspire. These words
            represent the journey of an athlete from training to victory and ultimately becoming
            an inspiration for others.
          </p>
        </Col>
        <Col>
          <div className="image-stack mainpage">
            <img src="https://c.ndtvimg.com/2021-07/786m4nk8_mirabai-chanu-afp_625x300_24_July_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="Training" className="stacked-image" />
            <img src="https://images.news18.com/ibnlive/uploads/2021/08/1628344897_neeraj-medal.jpg" alt="Victory" className="stacked-image" />
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt="Inspirational" className="stacked-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThemeComponent;
