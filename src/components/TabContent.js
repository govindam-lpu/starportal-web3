import React from 'react';
import './css/TabContent.css';

const TabContent = ({ content }) => {
  return (
    <div className="tab-content">
      <p>{content}</p>
    </div>
  );
};

export default TabContent;
