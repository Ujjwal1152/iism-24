import React from 'react';
import Home from './structure/home';
import MyNavbar from './components/navbar';
import Schedule from './structure/schedule';
import Photos from './structure/photos';
import Videos from './structure/videos';
import Brochure from './structure/brochure';
import StarAttractions from './structure/starattractions';
import Results from './structure/results';
import Sponsors from './structure/sponsors';
import Contact from './structure/contactus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoreTeam from './structure/coreteam';
import BasketBall from './structure/basketball';
import VolleyBall from './structure/volleyball';
import Cricket from './structure/cricket';
import Tennis from './structure/tennis';
import TableTennis from './structure/tabletennis';
import Hockey from './structure/hockey';

function App() {
  return (
    <Router>
      {/* <MyNavbar />  */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/basketball-schedule" element = {<BasketBall/>}/>
        <Route path="/volleyball-schedule" element = {<VolleyBall/>}/>
        <Route path="/tennis-schedule" element = {<Tennis/>}/>
        <Route path="/cricket-schedule" element = {<Cricket/>}/>
        <Route path="/hockey-schedule" element = {<Hockey/>}/>
        <Route path="/table-tennis-schedule" element = {<TableTennis/>}/>
        <Route path="/gallery/photos" element={<Photos />} />
        <Route path="/gallery/videos" element={<Videos />} />
        <Route path="/gallery/brochure" element={<Brochure />} />
        <Route path="/star-attractions" element={<StarAttractions />} />
        <Route path="/results" element={<Results />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/coreteam" element={<CoreTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
