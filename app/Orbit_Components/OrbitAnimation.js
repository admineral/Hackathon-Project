"use client";
// OrbitAnimation.js
import { motion } from 'framer-motion';
import React from 'react';
import Orbit from './Orbit';

export default function OrbitAnimation({ orbits, orbsData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <div className="relative w-10 h-10 bg-black rounded-full" style={{ margin: 'auto' }}>
        {orbits.map((size, index) => (
          <Orbit
            key={index}
            size={size}
            index={index}
            totalOrbits={orbits.length}
            orbs={orbsData[index]}
          />
        ))}
      </div>
    </motion.div>
  );
}