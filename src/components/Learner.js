import React from 'react';
import './css/Learner.css';
import { CiCircleCheck } from 'react-icons/ci';
import { IoIosLock } from 'react-icons/io';

const Learner = () => {
  return (
    <div className="learner-card">
      <CiCircleCheck className="check-icon" />
      <div className="learner-image-frame">
        <div className="learner-image"></div>
        <IoIosLock className="lock-icon" />
      </div>
      <div className="learner-text">
        <h3>Intract Certified: Learner NFT</h3>
        <p>Your crypto black-belt certificate</p>
        <button className="claim-button" disabled>Claim</button>
      </div>
    </div>
  );
};

export default Learner;
