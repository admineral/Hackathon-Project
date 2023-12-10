import { motion } from 'framer-motion';
import React, { useState } from 'react';
import HoverCard from './HoverCard';

const ORB_SIZE = '5'; // Define orb size here

export default function Orb({ animation, orb }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute w-${ORB_SIZE} h-${ORB_SIZE} bg-blue-500 rounded-full`}
      style={{
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
      onClick={() => setIsHovered(!isHovered)} // Toggle isHovered state on click
    >
      {isHovered && <HoverCard headline={orb.headline} text={orb.text} />}
    </motion.div>
  );
}