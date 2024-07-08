import React, { useState } from 'react';
import './css/BasicsOfCrypto.css';
import tasksData from '../tasksData.json';
import { CiCircleCheck } from 'react-icons/ci'; // Import the icon

const BasicsOfCrypto = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`basics-card ${isOpen ? 'open' : ''}`}>
      <div className="card-header" onClick={toggleDropdown}>
        <div className="image-frame">
          <div className="card-image">
            <div className="quests-badge">6 Quests</div>
          </div>
        </div>
        <div className="card-text">
          <h3>Basics of Crypto</h3>
          <p>The safest and easiest place to start your crypto journey!</p>
          {/* <p>---------------------------------------</p> */}
          <div className="dotted-line1"></div>
          <div className="xp-container">
            <div className="xp-icon"></div>
            <span>1490 XPs</span>
          </div>
        </div>
        <div className="dropdown-icon"></div>
      </div>
      {isOpen && (
        <div className="card-dropdown-content">
          <div className="tasks-container">
            {tasksData.map(task => (
              <div className="task-item" key={task.id}>
                <img src={task.image} alt="img" className="task-image" />
                <div className="task-text">
                  <h4>
                    {`#${task.id}: ${task.title}`}
                  </h4>
                  <div className="task-progress">
                    <div className="task-progress-bar" style={{ width: `${task.progress}%` }}></div>
                  </div>
                  <div className="task-meta">
                    <p>{`${task.tasks} Tasks`}</p>
                    <CiCircleCheck className="task-check-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicsOfCrypto;
