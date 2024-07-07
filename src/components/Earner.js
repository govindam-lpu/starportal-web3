import React from 'react';
import './css/Earner.css';
import { CiCircleCheck } from 'react-icons/ci';
import { IoIosLock } from 'react-icons/io';

const Earner = () => {
  return (
    <div className="learner-card1">
      <CiCircleCheck className="check-icon1" />
      <div className="learner-image-frame1">
        <div className="learner-image1"></div>
        <IoIosLock className="lock-icon1" />
      </div>
      <div className="learner-text1">
        <h3>Intract Certified: Earner NFT</h3>
        <p>Your proof of airdrop expertise</p>
        <button className="claim-button1" disabled>Claim</button>
      </div>
    </div>
  );
};

export default Earner;
