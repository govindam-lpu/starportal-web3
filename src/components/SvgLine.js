import React from 'react';

const SvgLine = ({ startX, startY, endX, endY }) => {
  const controlPointX1 = startX + (endX - startX) / 2;
  const controlPointY1 = startY;
  const controlPointX2 = startX + (endX - startX) / 2;
  const controlPointY2 = endY;

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
      width="100%"
      height="100%"
    >
      <path
        d={`M${startX},${startY} C${controlPointX1},${controlPointY1} ${controlPointX2},${controlPointY2} ${endX},${endY}`}
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
      />
    </svg>
  );
};

export default SvgLine;


// import React from 'react';
// import BasicsOfCrypto from './BasicsOfCrypto';
// import Learner from './Learner';
// import IntrotoAirdrops from './IntrotoAirdrops';
// import Earner from './Earner';
// import Reward from './Reward';
// import './css/Body.css';
// import { BasisCurve } from 'react-svg-curve';


// const Body = () => {
//   return (
//     <div className="body-container">
//       <div className="basics-container">
//         <BasicsOfCrypto />
//       </div>
      
//       <div className="learner-container">
//         <Learner />
//       </div>
//       <div className="intro-container">
//         <IntrotoAirdrops />
//       </div>
//       <div className="earner-container">
//         <Earner />
//       </div>
//       <div className="reward-container">
//         <Reward />
//       </div>
//     </div>
//   );
// };

// export default Body;
