import { motion } from 'framer-motion';
import React from 'react';
import HoverCard from './HoverCard';

export default function Orbit({ size, index, totalOrbits, headline, text, isHovered, onHoverStart, onHoverEnd }) {
  const calculateOrbitPath = (angle, offset = 0) => ({
    x: Math.cos(angle + offset) * size,
    y: Math.sin(angle + offset) * size
  });

  const offset = (index * 2 * Math.PI) / totalOrbits;
  const animation = {
    x: Array.from({ length: 360 / 10 }, (_, i) => calculateOrbitPath((i * 10) * Math.PI / 180, offset).x),
    y: Array.from({ length: 360 / 10 }, (_, i) => calculateOrbitPath((i * 10) * Math.PI / 180, offset).y),
    transition: {
      repeat: Infinity, 
      repeatType: "loop", 
      duration: size * 0.4, 
      ease: "linear",
      delay: index * 0.5
    }
  };

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
      <motion.div
        className="absolute w-8 h-8 bg-blue-500 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
          zIndex: isHovered ? 1001 : 1,
        }}
        initial={{ x: animation.x[0], y: animation.y[0] }}
        animate={animation}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        {isHovered && <HoverCard headline={headline} text={text} />}
      </motion.div>
    </>
  );
}