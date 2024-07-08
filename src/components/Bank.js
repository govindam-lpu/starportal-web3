import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import './css/Bank.css';

const Bank = () => {
  return (
    <div className="bank-container">
      <h2>Crypto Dictionary</h2>
      <p>Your one-stop to catch up on all crypto terms</p>
      <div className="bank-card">
        <img src="/bank.svg" alt="Crypto Dictionary" className="bank-image" />
        <div className="bank-content">
          <div className="bank-text">
            <p>Web3 + Degen Glossary</p>
            <span>Your own crypto dictionary</span>
          </div>
          <div className="bank-icon">
            <HiOutlineBookOpen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
