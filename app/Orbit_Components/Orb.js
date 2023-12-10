// Orb.js
import { motion } from 'framer-motion';
import React, { useState, useContext } from 'react';
import HoverCard from './HoverCard';
import ActiveOrbContext from './ActiveOrbContext';

export default function Orb({ animation, orb }) { 
  const [isHovered, setIsHovered] = useState(false);
  const { activeOrb, setActiveOrb } = useContext(ActiveOrbContext);

  // Function to handle click event
  const handleClick = () => {
    // Check if the device is a touch device
    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
      // If it is a touch device, set the active orb
      setActiveOrb(orb);
    }
  };

  return (
    <motion.div
      className="absolute bg-blue-500 rounded-full" 
      style={{
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
      onClick={handleClick}
    >
      {(isHovered || activeOrb === orb) && <HoverCard headline={orb.headline} text={orb.text} />}
    </motion.div>
  );
}