"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Orbit from './Orbit';

export default function OrbitAnimation({ orbits }) {
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
                headline={`Orbit ${index + 1}`}
                text={`This is the text for orbit ${index + 1}.`}
              />
            ))}
          </div>
        </motion.div>
      );
}