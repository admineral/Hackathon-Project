"use client";
// OrbitAnimation.js
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Orbit from './Orbit';
import ActiveOrbContext from './ActiveOrbContext'; // Import the context

export default function OrbitAnimation({ orbits, orbsData }) {
  const [activeOrb, setActiveOrb] = useState(null); // State to keep track of the active orb

  return (
    <ActiveOrbContext.Provider value={{ activeOrb, setActiveOrb }}> {/* Provide the context */}
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
    </ActiveOrbContext.Provider>
  );
}