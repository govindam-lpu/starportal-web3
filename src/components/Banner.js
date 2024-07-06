import React from 'react';
import './css/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Intract <span>Academy</span></h2>
        <p>Intract users have together made more than <strong>$100 million</strong> in web3. Join them and <strong>learn how to earn crypto!</strong></p>
        <button className="cta-button">Get Started →</button>
      </div>
    </div>
  );
};

export default Banner;
