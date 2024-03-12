import React from 'react';
import 'styles/Darkmode.css'; // Ensure the path is correct for your project structure
import Orbit from './Orbit';
import GradientDefs from './GradientDefs';
import { orbits } from './orbitsConfig';
import { svgPath } from './svgPathData';


const Card: React.FC = () => {



  return (
    <svg className="card" viewBox="0 50 840 440" aria-hidden="true">
      <GradientDefs />
      <g className="orbits" transform="translate(420, 220)">
        {orbits.map((orbit, index) => (
          <Orbit
            key={index}
            radius={orbit.radius}
            gradientId={orbit.gradientId}
            satellites={orbit.satellites}
            colors={orbit.colors}
          />
        ))}
      </g>
        <g id="center">
          <path
            d={svgPath}
            style={{
              strokeWidth: 5.5625,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              stroke: '#bd1515',
              fill: 'none',
              transform: 'scale(0.2) translate(19.5%, -16%)', 
              transformOrigin: 'center',
              position: 'absolute', 
              top: '50%', 
              left: '60%', 
            }}
          />
        </g>
      </svg>
    );
  };

export default Card;
  
  
