// HoverCard.js
import React, { useState } from 'react';
import { FaComment, FaThumbsUp } from 'react-icons/fa'; // Import Font Awesome icons

export default function HoverCard({ orb }) {
  const [activeOrb, setActiveOrb] = useState(null);
  const [likes, setLikes] = useState(0); // State to keep track of likes
  const [hasLiked, setHasLiked] = useState(false); // State to keep track of whether the user has liked the orb

  const handleClick = () => {
    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
      setActiveOrb(orb);
    }
  };

  const handleLike = () => {
    if (!hasLiked) { // If the user hasn't liked the orb yet
      setLikes(likes + 1); // Increment the number of likes
      setHasLiked(true); // Set hasLiked to true
    }
  };

  return (
    <div 
      className="absolute w-64 p-4 bg-white rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105 hover-card" 
      style={{ zIndex: 1000 }}
      onClick={handleClick}
    >
      {(activeOrb === null || activeOrb === orb) && (
        <>
          <h3 className="font-bold text-lg mb-2">{orb.headline}</h3>
          <p className="text-gray-700">{orb.text}</p>
          <div className="flex justify-end mt-4">
            <div className="flex items-center mr-4">
              <FaComment className="mr-2" />
              <span className="text-gray-500">{orb.comments || 10}</span> {/* Fictive number of comments */}
            </div>
            <div className="flex items-center">
              <FaThumbsUp className="mr-2" onClick={handleLike} />
              <span>{likes}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}