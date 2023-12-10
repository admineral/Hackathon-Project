"use client";
// OrbitAnimation.js
import { motion } from 'framer-motion';
import React from 'react';
import Orbit from './Orbit';

export default function OrbitAnimation({ orbits, orbsData, orbSizes }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <div className="relative w-16 h-16 bg-black rounded-full" style={{ margin: 'auto' }}>
        {orbits.map((size, index) => (
          <Orbit
            key={index}
            size={size}
            orbSize={orbSizes[index]} // Pass the orb size to the Orbit component
            index={index}
            totalOrbits={orbits.length}
            orbs={orbsData[index]}
          />
        ))}
      </div>
    </motion.div>
  );
}