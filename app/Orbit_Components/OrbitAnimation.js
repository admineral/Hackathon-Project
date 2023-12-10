"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Orbit from './Orbit';

export default function OrbitAnimation({ orbits }) {
  const [hoveredOrbit, setHoveredOrbit] = useState(null);

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
            index={index}
            totalOrbits={orbits.length}
            orbs={[
              { headline: `Orbit ${index + 1} Orb 1`, text: `This is the text for orbit ${index + 1} orb 1.` },
              { headline: `Orbit ${index + 1} Orb 2`, text: `This is the text for orbit ${index + 1} orb 2.` },
              // Add more orbs as needed
            ]}
          />
        ))}
      </div>
    </motion.div>
  );
}