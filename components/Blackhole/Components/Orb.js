import { motion } from 'framer-motion';
import React from 'react';
import HoverCard from './HoverCard';
import './Orb.css'; // Import the CSS file

export default function Orb({ animation, orb }) {
  return (
    <motion.div
      className="orb" // Use the class name for styling
      style={{
        border: `2px solid ${orb.color}`, // Default border style
        color: orb.color, // Set color for currentColor usage in CSS
        width: `${orb.size}px`, 
        height: `${orb.size}px`, 
        top: '50%',
        left: '50%',
        translateX: '-50%',
        translateY: '-50%',
        zIndex: 1,
      }}
      initial={{ x: animation.x[0], y: animation.y[0] }}
      animate={animation}
    >
      <div className="hover-card">
        <HoverCard orb={orb} />
      </div>
    </motion.div>
  );
}