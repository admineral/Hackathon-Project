"use client";
import { motion } from 'framer-motion';
import React from 'react';

export default function OrbitAnimation({ orbits }) {
  const calculateOrbitPath = (angle, size, offset = 0) => ({
    x: Math.cos(angle + offset) * size,
    y: Math.sin(angle + offset) * size
  });

  const orbitAnimations = orbits.map((orbitSize, index) => {
    const offset = (index * 2 * Math.PI) / orbits.length;
    return {
      x: Array.from({ length: 360 / 10 }, (_, i) => calculateOrbitPath((i * 10) * Math.PI / 180, orbitSize, offset).x),
      y: Array.from({ length: 360 / 10 }, (_, i) => calculateOrbitPath((i * 10) * Math.PI / 180, orbitSize, offset).y),
      transition: {
        repeat: Infinity, 
        repeatType: "loop", 
        duration: orbitSize * 0.4, 
        ease: "linear",
        delay: index * 0.5
      }
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <div className="relative w-16 h-16 bg-black rounded-full" style={{ margin: 'auto' }}>
        {orbits.map((size, index) => (
          <div
            key={index}
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
        ))}
        
        {orbitAnimations.map((animation, index) => (
          <motion.div
            key={index}
            className="absolute w-8 h-8 bg-blue-500 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
              zIndex: 1,
            }}
            initial={{ x: animation.x[0], y: animation.y[0] }}
            animate={animation}
            transition={{ delay: 0.5, duration: 1.5 }} // Moved the transition prop here
          />
        ))}
      </div>
    </motion.div>
  );
}