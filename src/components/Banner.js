import React from 'react';
import './css/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Intract <span>Academy</span></h2>
        <p><strong>Intract users</strong> have together made more than <strong>$100 million</strong> in web3.</p> 
        <p>Join them and <strong>learn how to earn crypto!</strong></p>
        <button className="cta-button">Get Started →</button>
      </div>
    </div>
  );
};

export default Banner;
