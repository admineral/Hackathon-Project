// Orb.js

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import HoverCard from './HoverCard';

export default function Orb({ animation, orb }) { 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute rounded-full" 
      style={{
        backgroundColor: orb.color, 
        width: `${orb.size}px`, 
        height: `${orb.size}px`, 
        top: '50%',
        left: '50%',
        translateX: '-50%',
        translateY: '-50%',
        zIndex: isHovered ? 1001 : 1,
      }}
      initial={{ x: animation.x[0], y: animation.y[0] }}
      animate={animation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <HoverCard orb={orb} />} {/* Pass the orb as a prop */}
    </motion.div>
  );
}