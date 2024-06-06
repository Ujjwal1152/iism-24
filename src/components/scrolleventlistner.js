import React, { useState, useEffect } from 'react'; 
import MyNavbar from './HomeNav';
import EmotionalLeadCarousel from './animatedcarousel';
import Main from './videoloader';

function Loadpage() {


  return (
    <div>
      <MyNavbar/>
      <Main/>
    </div>
  );
}

export default Loadpage;