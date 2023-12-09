// OrbitAnimation.js
"use client";
import { motion } from 'framer-motion';
import React from 'react';

export default function OrbitAnimation({ orbits }) {
  // Calculate the orbit path using sine and cosine for x and y
  const calculateOrbitPath = (angle, size) => ({
    x: Math.cos(angle) * size,
    y: Math.sin(angle) * size
  });

  // Use Framer Motion's keyframes to animate along each orbit path
  const orbitAnimations = orbits.map(orbitSize => ({
    x: Array.from({ length: 360 / 10 }, (_, i) => calculateOrbitPath((i * 10) * Math.PI / 180, orbitSize).x),
    y: Array.from({ length: 360 / 10 }, (_, i) => calculateOrbitPath((i * 10) * Math.PI / 180, orbitSize).y),
    transition: {
      repeat: Infinity, // Change 'loop' to 'repeat' and set to Infinity for continuous animation
      repeatType: "loop", // Ensure the animation loops smoothly
      duration: orbitSize * 0.4, // Adjust duration based on orbit size
      ease: "linear"
    }
  }));

  return (
    <>
      {/* Visual representation of orbit paths */}
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
      
      {/* Orbiting objects */}
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
          animate={animation}
        />
      ))}
    </>
  );
}