import React from 'react';
import Orb from './Orb';

export default function Orbit({ size, index, totalOrbits, orbs }) {
  const calculateOrbitPath = (angle, offset = 0) => ({
    x: Math.cos(angle + offset) * size,
    y: Math.sin(angle + offset) * size
  });

  const offset = (index * 2 * Math.PI) / totalOrbits;
  let lastOrbOffset = 0; // Keep track of the last orb's offset
  const minDistance = 0.5; // Define the minimum distance between orbs here

  return (
    <>
      <div
        className="absolute border border-gray-300 rounded-full"
        style={{
          width: size * 2,
          height: size * 2,
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`,
          zIndex: 0,
        }}
      />
      {orbs.map((orb, orbIndex) => {
        const randomOffset = Math.random() * (2 * Math.PI / orbs.length - minDistance) + minDistance;
        const orbOffset = lastOrbOffset + randomOffset;
        lastOrbOffset = orbOffset; // Update the last orb's offset

        const animation = {
          x: Array.from({ length: 360 / 10 + 1 }, (_, i) => calculateOrbitPath((i * 10) * Math.PI / 180, offset + orbOffset).x),
          y: Array.from({ length: 360 / 10 + 1 }, (_, i) => calculateOrbitPath((i * 10) * Math.PI / 180, offset + orbOffset).y),
          transition: {
            repeat: Infinity, 
            repeatType: "loop", 
            duration: size * 0.4, 
            ease: "linear",
            delay: index * 0.5
          }
        };

        return <Orb key={orbIndex} animation={animation} orb={orb} />;
      })}
    </>
  );
}