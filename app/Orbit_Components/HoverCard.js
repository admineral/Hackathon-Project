// HoverCard.js
import React, { useState, useEffect, useRef } from 'react';
import { BiCommentDetail } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function HoverCard({ orb }) {
  const [activeOrb, setActiveOrb] = useState(null);
  const [likes, setLikes] = useState(0); // State to keep track of likes
  const [hasLiked, setHasLiked] = useState(false); // State to keep track of whether the user has liked the orb
  const hoverCardRef = useRef(null); // Ref to the hover card

  const handleClick = (e) => {
    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
      setActiveOrb(orb);
    }
  };

  useEffect(() => {
    const hoverCard = hoverCardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the hover card is not fully visible
        if (!entry.isIntersecting) {
          // Adjust the position of the hover card
          hoverCard.style.transform = `translateX(-100%)`;
        }
      },
      {
        // Define the margins for the root (viewport)
        rootMargin: '0px',
        // Set the visibility threshold to 100%
        threshold: 1.0
      }
    );

    // Start observing the hover card
    observer.observe(hoverCard);

    // Clean up the observer when the component is unmounted
    return () => observer.unobserve(hoverCard);
  }, []);

  const handleLike = () => {
    if (!hasLiked) { // If the user hasn't liked the orb yet
      setLikes(likes + 1); // Increment the number of likes
      setHasLiked(true); // Set hasLiked to true
    }
  };

  return (
    <div 
      ref={hoverCardRef}
      className={`absolute max-w-md p-4 bg-gray-800 rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 text-white`} 
      style={{ zIndex: 1000 }}
      onClick={handleClick}
    >
      {(activeOrb === null || activeOrb === orb) && (
        <>
          <div style={{ width: '224px', height: '150px', position: 'relative' }}>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
              src={orb.image}
              alt={orb.headline}
            />
          </div>
          <h3 className={`font-bold mt-4 ${orb.headline.length > 20 ? 'text-base' : 'text-lg'}`}>{orb.headline}</h3>
          <p className={`mt-2 ${orb.text.length > 50 ? 'text-xs' : 'text-sm'}`}>{orb.text}</p>
          <div className="flex justify-between mt-4">
            <button className="text-gray-400 flex items-center">
              <BiCommentDetail style={{ fontSize: '20px' }} />
              <span className="ml-2">{orb.comments || 10}</span> {/* Fictive number of comments */}
            </button>
            <motion.button 
              className={`border border-gray-400 rounded-lg px-3 py-1 flex items-center ${hasLiked ? 'bg-blue-300 text-black' : 'text-gray-400'}`}
              onClick={handleLike}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                animate={hasLiked ? { x: [0, 15, -15, 0], y: [0, -15, 15, 0], opacity: [1, 0, 0, 1] } : {}}
                transition={{ duration: 1, times: [0, 0.2, 0.8, 1], loop: Infinity }}
              >
                <IoRocketOutline />
              </motion.div>
              <span className="ml-2">{likes}</span>
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}