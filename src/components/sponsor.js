import React from 'react';
import './sponsor.css';

function SponsorSection() {
  const sponsorData = [
    { title: 'Tourism Partner', imageUrl: '/path/to/tourism-partner-logo.png', altText: 'Tourism Partner Logo' },
    { title: 'Recovery Partner', imageUrl: '/path/to/recovery-partner-logo.png', altText: 'Recovery Partner Logo' },
    { title: 'Wealth Management Partner', imageUrl: '/path/to/wealth-management-partner-logo.png', altText: 'Wealth Management Partner Logo' },
    { title: 'Travel Partner', imageUrl: '/path/to/travel-partner-logo.png', altText: 'Travel Partner Logo' },
    { title: 'E-learning Partner', imageUrl: '/path/to/e-learning-partner-logo.png', altText: 'E-learning Partner Logo' },
    { title: 'Fitness Partner', imageUrl: '/path/to/fitness-partner-logo.png', altText: 'Fitness Partner Logo' },
    // Add more sponsors as needed
  ];

  return (
    <section className="sponsor-section">
      <h2 className="section-heading">Our Sponsors</h2>
      <div className="sponsor-grid">
        {sponsorData.map((sponsor, index) => (
          <div className="sponsor-card" key={index}>
            <img src={sponsor.imageUrl} alt={sponsor.altText} />
            <span className="sponsor-title">{sponsor.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SponsorSection;