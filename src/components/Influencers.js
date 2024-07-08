import React from 'react';
import './css/Influencers.css';

const influencersData = [
  {
    title: 'How to plan your retirement with crypto?',
    image: '/video1.png',
    videoLink: 'https://www.youtube.com/shorts/NkDtaXvzt-I?feature=share',
  },
  {
    title: 'Why are there limited Bitcoin?',
    image: '/video2.png',
    videoLink: 'https://www.youtube.com/shorts/-kmxV_JO7eY?feature=share',
  },
  {
    title: 'How does Uniswap actually work?',
    image: '/video3.png',
    videoLink: 'https://www.youtube.com/shorts/9fyVLvY3P14?feature=share',
  },
  {
    title: 'How to spot crypto projects to invest in?',
    image: '/video4.png',
    videoLink: 'https://www.youtube.com/shorts/kYeFSwvt1sQ?feature=share',
  },
];

const Influencers = () => {
  return (
    <div className="influencers-container">
      <h2>Top Crypto Creators and Projects to Follow</h2>
      <p>Answers to your crypto doubts, straight from the experts</p>
      <div className="cards-container">
        {influencersData.map((influencer, index) => (
          <a key={index} href={influencer.videoLink} target="_blank" rel="noopener noreferrer" className="influencer-card">
            <img src={influencer.image} alt={influencer.title} className="card-image2" />
            <div className="card-title">{influencer.title}</div>
            <div className="play-button">&#9658;</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Influencers;
