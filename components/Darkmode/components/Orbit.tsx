import React from 'react';
import Satellite from './Satellite';

interface OrbitProps {
  radius: number;
  gradientId: string;
  satellites: number;
  colors?: string[];
}

const Orbit: React.FC<OrbitProps> = ({ radius, gradientId, satellites, colors = [] }) => {
  // Function to generate satellite position
  const generateSatellitePosition = (orbitRadius: number) => {
    const angle = Math.random() * 2 * Math.PI; // Random angle in radians
    const cx = Math.cos(angle) * orbitRadius; // Calculate x position
    const cy = Math.sin(angle) * orbitRadius; // Calculate y position
    return { cx, cy };
  };

  return (
    <g>
      <circle
        className="orbit"
        style={{ stroke: `url(#${gradientId})` }}
        r={radius}
      />
      {colors.map((color, index) => {
        const { cx, cy } = generateSatellitePosition(radius);
        return (
          <Satellite
            key={index}
            color={color}
            cx={cx}
            cy={cy}
            animationDelay={0.6 + index * 0.3}
          />
        );
      })}
    </g>
  );
};

export default Orbit;