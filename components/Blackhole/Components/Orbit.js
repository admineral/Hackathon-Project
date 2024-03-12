import React, { memo } from 'react';
import Orb from './Orb';

const Orbit = memo(({ size, index, totalOrbits, orbs, activeOrbitIndex, activeOrbIndex }) => {
  const calculateOrbitPath = (angle, offset = 0) => ({
    x: Math.cos(angle + offset) * size,
    y: Math.sin(angle + offset) * size
  });

  const offset = (index * 2 * Math.PI) / totalOrbits;
  const segmentSize = 2 * Math.PI / orbs.length; // Size of each segment
  const minDistance = 0.1; // Minimum distance from the edges of the segment

  return (
    <>
      <div
        className="absolute border rounded-full"
        style={{
          width: size * 2,
          height: size * 2,
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`,
          zIndex: 0,
          borderColor: 'rgba(255, 255, 255, 0.15)',
          borderWidth: '1px'
        }}
      />
      {orbs.map((orb, orbIndex) => {
        const segmentStart = orbIndex * segmentSize; // Start of the segment
        const orbOffset = segmentStart + minDistance + Math.random() * (segmentSize - 2 * minDistance); // Random position within the segment

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

        // Determine if this orb's hovercard should be shown based on the activeOrbId
        const showHoverCard = index === activeOrbitIndex && orbIndex === activeOrbIndex;
        return <Orb key={orbIndex} animation={animation} orb={orb} showHoverCard={showHoverCard} />;
      })}
    </>
  );
});
Orbit.displayName = 'Orbit';
export default Orbit;