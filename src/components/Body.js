import React from 'react';
import BasicsOfCrypto from './BasicsOfCrypto';
import Learner from './Learner';
import IntrotoAirdrops from './IntrotoAirdrops';
import Earner from './Earner';
import Reward from './Reward';
import './css/Body.css';


const Body = () => {
  return (
    <div className="body-container">
      <div className="basics-container">
        <BasicsOfCrypto />
      </div>
      <div className="learner-container">
        <Learner />
      </div>
      <div className="intro-container">
        <IntrotoAirdrops />
      </div>
      <div className="earner-container">
        <Earner />
      </div>
      <div className="reward-container">
        <Reward />
      </div>
    </div>
  );
};

export default Body;
