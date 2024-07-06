import React from 'react';
import BasicsOfCrypto from './BasicsOfCrypto';
import Learner from './Learner';
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
    </div>
  );
};

export default Body;
