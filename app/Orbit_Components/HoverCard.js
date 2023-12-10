// HoverCard.js
import React, { useState, useEffect, useRef } from 'react';
import { FaComment, FaThumbsUp } from 'react-icons/fa'; // Import Font Awesome icons

export default function HoverCard({ orb }) {
  const [activeOrb, setActiveOrb] = useState(null);
  const [likes, setLikes] = useState(0); // State to keep track of likes
  const [hasLiked, setHasLiked] = useState(false); // State to keep track of whether the user has liked the orb
  const hoverCardRef = useRef(null); // Ref to the hover card
  const [isTransitioning, setIsTransitioning] = useState(false); // State to track if the hover card is transitioning

  const handleClick = (e) => {
    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
      setActiveOrb(orb);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // If the hover card is transitioning, don't check its position
      if (isTransitioning) return;

      // Continuously check the position of the hover card and adjust its position if it's outside of the screen
      const hoverCardPosition = hoverCardRef.current.getBoundingClientRect();
      const bufferZone = window.innerWidth * 0.1; // 10% of the screen width
      const middleZoneStart = window.innerWidth * 0.35; // 35% of the screen width
      const middleZoneEnd = window.innerWidth * 0.65; // 65% of the screen width

      // If the hover card is within the middle zone, pause the continuous checking
      if (hoverCardPosition.left > middleZoneStart && hoverCardPosition.right < middleZoneEnd) {
        return;
      }

      if (hoverCardPosition.right > window.innerWidth - bufferZone) {
        hoverCardRef.current.style.transform = `translateX(-100%)`;
        setIsTransitioning(true);
      } else if (hoverCardPosition.left < bufferZone) {
        hoverCardRef.current.style.transform = `translateX(0)`;
        setIsTransitioning(true);
      }
    }, 100); // Check the position every 100ms

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [isTransitioning]);

  // After the transition duration, allow position checking again
  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 20000); // Transition duration
    }
  }, [isTransitioning]);

  const handleLike = () => {
    if (!hasLiked) { // If the user hasn't liked the orb yet
      setLikes(likes + 1); // Increment the number of likes
      setHasLiked(true); // Set hasLiked to true
    }
  };

  return (
    <div 
      ref={hoverCardRef}
      className={`absolute w-64 p-4 bg-white rounded-lg shadow-2xl transform transition-transform duration-2000 ease-in-out hover:scale-105`} 
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