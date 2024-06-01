import React from 'react';
import InstagramFeed from 'react-instagram-feed';
import './interiitexclusive.css'; 

function InterIITExclusive() {
  return (
    <section className="inter-iit-exclusive">
      <h2 className="section-heading">IISM'24 Exclusive</h2> 
      <div className="instagram-feed">
        <InstagramFeed
          token="YOUR_INSTAGRAM_ACCESS_TOKEN" 
          counter="4" // Display the last 4 posts
          width="100%" // Adjust width as needed
          resolution="standard_resolution" // Choose image resolution
        />
      </div>
    </section>
  );
}

export default InterIITExclusive;