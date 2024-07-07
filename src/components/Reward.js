import React, { useEffect, useState } from 'react';
import './css/Reward.css';
import { FaRegClock, FaInfoCircle } from 'react-icons/fa';
import { CiCircleCheck } from 'react-icons/ci';
import { RxDiscordLogo } from 'react-icons/rx';

const Reward = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="reward-container">
      <div className="timer-card">
        <div className="timer-card-header">
          <FaRegClock className="clock-icon" />
          <h3>Reward unlocks in</h3>
        </div>
        <div className="dotted-line"></div>
        <div className="timer">
          <div className="time-section">
            <span className="time">{timeLeft.days || '00'}</span>
            <span className="label">Days</span>
          </div>
          <div className="time-section">
            <span className="time">{timeLeft.hours || '00'}</span>
            <span className="label">Hrs</span>
          </div>
          <div className="time-section">
            <span className="time">{timeLeft.minutes || '00'}</span>
            <span className="label">Mins</span>
          </div>
          <div className="time-section">
            <span className="time">{timeLeft.seconds || '00'}</span>
            <span className="label">Sec</span>
          </div>
        </div>
      </div>
      <div className="lucky-draw-card">
        <div className="lucky-draw-image"></div>
        <div className="lucky-draw-details">
          <div className="lucky-draw-header">
            <h3>Exclusive Community</h3>
            <div className="discord-info">
              <div className="discord-icon">
                <RxDiscordLogo />
              </div>
              <span>Earndrop</span>
            </div>
          </div>
          <div className="dotted-line"></div>
          <div className="task-list">
            <p>Complete all Essential quests <CiCircleCheck /></p>
            <p>Complete at least 1 Alpha Hub quest today <CiCircleCheck /></p>
          </div>
          <button className="claim-button">Claim Now</button>
        </div>
      </div>
      <div className="reward-info">
        <div className="reward-info-header">
          <h3>Reward info</h3>
          <FaInfoCircle className="info-icon" />
        </div>
        <p>Free access to paid KOL (crypto earning) communities!</p>
        <p>
          Win access to exclusive earning communities of some of the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.
        </p>
        <p>
          To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!
        </p>
      </div>
    </div>
  );
};

export default Reward;
