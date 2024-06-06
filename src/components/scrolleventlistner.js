import React, { useState, useEffect } from 'react'; 
import MyNavbar from './navbar';
import EmotionalLeadCarousel from './animatedcarousel';
import Main from './videoloader';

function Loadpage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInitialHide, setIsInitialHide] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust threshold if needed 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set isInitialHide to false after the first render
  useEffect(() => {
    setIsInitialHide(false);
  }, []); // Empty dependency array


  return (
    <div className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}> 
      <MyNavbar/>
      <Main/>
    </div>
  );
}

export default Loadpage;