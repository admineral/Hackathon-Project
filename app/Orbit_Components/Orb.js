// Orb.js
import { motion } from 'framer-motion';
import React, { useState, useContext } from 'react'; // Import useContext
import HoverCard from './HoverCard';
import ActiveOrbContext from './ActiveOrbContext'; // Import the context

export default function Orb({ animation, orb }) { 
  const [isHovered, setIsHovered] = useState(false);
  const { activeOrb, setActiveOrb } = useContext(ActiveOrbContext); // Consume the context

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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setActiveOrb(orb)} // Set the active orb when clicked
    >
      {activeOrb === orb && <HoverCard headline={orb.headline} text={orb.text} />}
    </motion.div>
  );
}