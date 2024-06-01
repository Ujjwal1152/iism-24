import React, { useState, useEffect } from 'react';
import './animatedcarousel.css';

const EmotionalLeadCarousel = () => {
  const words = ['Awe', 'Conquer', 'Inspire', 'IISM\'24'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 3000);
    } 

    const animateWord = () => {
      const word = words[currentIndex];
      let letterIndex = 0;
      const typingInterval = setInterval(() => {
        setCurrentWord(word.substring(0, letterIndex + 1));
        letterIndex++;
        if (letterIndex > word.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentWord('');
          }, 1000);
        }
      }, 200);
    };

    animateWord(); 

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isPaused]);

  const handleNavigationClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePlayPauseClick = () => {
    setIsPaused(!isPaused);
  };

  const backgroundImages = {
    'Awe': 'https://source.unsplash.com/1920x1080/?sports,crowd', 
    'Conquer': 'https://source.unsplash.com/1920x1080/?athlete,victory', 
    'Inspire': 'https://source.unsplash.com/1920x1080/?motivation,sports', 
    'IISM\'24': 'https://source.unsplash.com/1920x1080/?iit,campus' 
  };

  return (
    <div className="EmotionalLead-styles__Carousel-sc-660aa9d6-0 gJccOd">
      <div className="indiana-scroll-container indiana-scroll-container--hide-scrollbars">
        {words.map((word, i) => (
          <div 
            key={i} 
            className={`EmotionalLead-styles__Item-sc-660aa9d6-1 hGSqbp ${currentIndex === i ? 'active' : ''}`} 
            style={{ backgroundImage: `url(${backgroundImages[word]})` }}
          >
            <div className="EmotionalLead-styles__ItemGrid-sc-660aa9d6-2 cRkSVU">
              <div className="EmotionalLeadItem-styles__Wrapper-sc-a04a156c-4 gLLbql">
                <div className="EmotionalLeadItem-styles__Content-sc-a04a156c-3 hEjAnx">
                  <span className="sc-bdnyFh eQelyf EmotionalLeadItem-styles__Title-sc-a04a156c-1 ckJART text--emotional-lead-title">
                    {currentWord}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="EmotionalLead-styles__Navigation-sc-660aa9d6-4 dNqeEb">
        <div className="EmotionalLead-styles__ItemGrid-sc-660aa9d6-2 cRkSVU">
          <div className="Navigation-styles__Navigation-sc-f03d7706-5 cKPcQi">
            {/* Play/Pause Button */}
            {/* <div 
              data-cy="play-pause-button" 
              className="Navigation-styles__StartAndStop-sc-f03d7706-3 bKdqCh" 
              onClick={handlePlayPauseClick}
            >
              {isPaused ? ( 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3.5" y="2" width="2" height="12" rx="1" fill="black" />
                  <rect x="10.5" y="2" width="2" height="12" rx="1" fill="black" />
                </svg>
              ) : ( 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"> 
                  <polygon points="4 2 12 8 4 14" fill="black" /> 
                </svg>
              )}
            </div> */}

            {/* Navigation Dots */}
            {words.map((_, i) => (
              <div 
                key={i} 
                data-cy={`navigation-item-${i}`} 
                className={`Navigation-styles__NavigationItem-sc-f03d7706-4 gcTIqD ${currentIndex === i ? 'active' : ''}`} 
                onClick={() => handleNavigationClick(i)}
              ></div>
            ))}

            <div className="Navigation-styles__CurrentItem-sc-f03d7706-0 dqYRKJ">
              <div className="Navigation-styles__ProgressBar-sc-f03d7706-2 gmqgjq">
                <div 
                  className="Navigation-styles__Progress-sc-f03d7706-1 hMCTCt" 
                  style={{ width: `${(currentIndex + 1) * 20}%` }} // Update progress bar
                ></div>
              </div>
            </div>
          </div>

          {/* Next Item Preview */}
          {/* <div data-cy="next-item" className="Navigation-styles__NextItem-sc-f03d7706-7 idSdvL">
            <span className="sc-bdnyFh brKWaF Navigation-styles__NextItemLabel-sc-f03d7706-6 bKfMLL text--sm-text">
              Next: {words[(currentIndex + 1) % words.length]}
            </span>
            <svg height="13" role="img" viewBox="0 0 15 13" width="15">
              <path d="M0 5.26557H11.8817L7.57006 1.11011L8.7219 0L15 6.05066L8.7219 12.1013L7.57006 10.9912L11.8817 6.83574H0V5.26557Z" fill="#000000"></path>
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EmotionalLeadCarousel;