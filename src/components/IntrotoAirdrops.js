import React, { useState } from 'react';
import './css/IntrotoAirdrops.css';
import tasksData from '../tasksData1.json';
import { CiCircleCheck } from 'react-icons/ci'; // Import the icon

const IntrotoAirdrops = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`basics-card1 ${isOpen ? 'open' : ''}`}>
      <div className="card-header1" onClick={toggleDropdown}>
        <div className="image-frame1">
          <div className="card-image1">
            <div className="quests-badge1">4 Quests</div>
          </div>
        </div>
        <div className="card-text1">
          <h3>Introduction to Airdrops</h3>
          <p>Your best bet to make it big in crypto!</p>
          {/* <p>---------------------------------------</p> */}
          <div className="dotted-line1"></div>
          <div className="xp-container1">
            <div className="xp-icon1"></div>
            <span>1040 XPs</span>
          </div>
        </div>
        <div className="dropdown-icon1"></div>
      </div>
      {isOpen && (
        <div className="card-dropdown-content1">
          <div className="tasks-container1">
            {tasksData.map(task => (
              <div className="task-item1" key={task.id}>
                <img src={task.image} alt="img" className="task-image1" />
                <div className="task-text1">
                  <h4>
                    {`#${task.id}: ${task.title}`}
                  </h4>
                  <div className="task-progress1">
                    <div className="task-progress-bar1" style={{ width: `${task.progress}%` }}></div>
                  </div>
                  <div className="task-meta1">
                    <p>{`${task.tasks} Tasks`}</p>
                    <CiCircleCheck className="task-check-icon1" />
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

export default IntrotoAirdrops;
