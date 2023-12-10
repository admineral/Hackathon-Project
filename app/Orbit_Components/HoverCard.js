// HoverCard.js
import React, { useState } from 'react';

export default function HoverCard({ orb }) {
  const [activeOrb, setActiveOrb] = useState(null);

  const handleClick = () => {
    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
      setActiveOrb(orb);
    }
  };

  return (
    <div 
      className="absolute w-64 p-4 bg-white rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105" 
      style={{ zIndex: 1000 }}
      onClick={handleClick}
    >
      {(activeOrb === null || activeOrb === orb) && (
        <>
          <h3 className="font-bold text-lg mb-2">{orb.headline}</h3>
          <p className="text-gray-700">{orb.text}</p>
        </>
      )}
    </div>
  );
}