import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const images = [
  'https://antaragni.in/static/media/1.90ba091c43fb7a170157.jpg',
  'https://antaragni.in/static/media/2.3ae68dfa1965e135ab2b.jpg',
  'https://antaragni.in/static/media/3.aabd5b5790e613ad8df8.jpg',
  'https://antaragni.in/static/media/4.0369898e4846b96c9028.jpg',
  'https://antaragni.in/static/media/5.60dfbaaff5c5cf778ef4.jpg',
  'https://antaragni.in/static/media/6.3c2d1bbdf895799b6d3b.jpg',
  'https://antaragni.in/static/media/6.3c2d1bbdf895799b6d3b.jpg',
  'https://antaragni.in/static/media/7.b60ed48da886fdaea69e.jpg',
  'https://antaragni.in/static/media/8.a4f734e9ab11190ff53d.jpg',
  'https://antaragni.in/static/media/9.c0131b407bb768660623.jpg',
  'https://antaragni.in/static/media/10.63bc6c71b2d97fb44088.jpg',
  'https://antaragni.in/static/media/11.ae26972ebbef690c1f94.jpg',
  'https://antaragni.in/static/media/12.e1e9f2688d47d42c2be8.jpg',
  'https://antaragni.in/static/media/13.e1c6e50b2c1be80c7a04.jpg',
  'https://antaragni.in/static/media/14.b443854468effd0f8236.jpg',
  'https://antaragni.in/static/media/15.c39fbd9262fcd0ef4492.jpg'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('next');
  const thumbnailsRef = useRef(null);

  useEffect(() => {
   const firstVisibleIndex = currentIndex > 0 ? currentIndex - 1 : 0;
   const lastVisibleIndex = currentIndex < images.length - 1 ? currentIndex + 1 : images.length - 1;
   thumbnailsRef.current.children[firstVisibleIndex].scrollIntoView({
     block: 'nearest',
     inline: 'start',
   });
 }, [currentIndex]);

  const nextImage = () => {
    if (isAnimating) return;
    setAnimationDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setIsAnimating(false);
    }, 1000);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setAnimationDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 1000);
  };

  const selectImage = (index) => {
    if (isAnimating || index === currentIndex) return;
    setAnimationDirection(index > currentIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="image-slider">
      <p className="imgCount">PAGE {currentIndex + 1} OF 16</p>
      <div className="image-stack">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-container ${index === currentIndex ? 'visible' : ''} ${
              isAnimating ? 'animating' : ''
            } ${animationDirection}`}
            style={{ zIndex: images.length - index, width: '100%' }}
          >
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
          </div>
        ))}
        {currentIndex > 0 && (
          <button className="prev" onClick={prevImage} disabled={isAnimating}>
            <i className="fas fa-arrow-left"></i>
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button className="next" onClick={nextImage} disabled={isAnimating}>
            <i className="fas fa-arrow-right"></i>
          </button>
        )}
      </div>
      <div className="thumbnails-container">
        <div ref={thumbnailsRef} className="thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => selectImage(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
