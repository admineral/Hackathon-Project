import React from 'react';
import Satellite from './Satellite';

interface OrbitProps {
  radius: number;
  gradientId: string;
  satellites: number;
  colors?: string[];
}

interface Position {
  cx: number;
  cy: number;
  angle: number;
}

const Orbit: React.FC<OrbitProps> = ({ radius, gradientId, satellites, colors = [] }) => {
  // Function to generate positions with a minimum angular distance
  const generateSatellitePositions = (orbitRadius: number, totalSatellites: number, minAngularDistance: number): Position[] => {
    const positions: Position[] = [];
    let attempts: number, angle: number, position: Position;

    for (let i = 0; i < totalSatellites; i++) {
      attempts = 0;
      do {
        angle = Math.random() * 2 * Math.PI; // Random angle in radians
        position = { cx: Math.cos(angle) * orbitRadius, cy: Math.sin(angle) * orbitRadius, angle };
        attempts++;
        // If we can't find a spot, break to avoid infinite loop
        if (attempts > 100) {
          console.warn('Too many attempts to place satellites.');
          break;
        }
      } while (positions.some(pos => Math.abs(pos.angle - angle) < minAngularDistance));

      if (attempts <= 100) {
        positions.push(position);
      }
    }

    return positions;
  };

  // Assuming a minimum angular distance based on the number of satellites to avoid overlap
  const minAngularDistance: number = Math.PI / satellites; // Adjust this value as needed

  const positions: Position[] = generateSatellitePositions(radius, colors.length, minAngularDistance);

  return (
    <g>
      <circle
        className="orbit"
        style={{ stroke: `url(#${gradientId})` }}
        r={radius}
      />
      {positions.map((position, index) => (
        <Satellite
          key={index}
          color={colors[index % colors.length]}
          cx={position.cx}
          cy={position.cy}
          animationDelay={0.6 + index * 0.3}
        />
      ))}
    </g>
  );
};

export default Orbit;