// HoverCard.js
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/legacy/image";
import { BiCommentDetail } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function HoverCard({ orb }) {
  const [activeOrb, setActiveOrb] = useState(null);
  const [likes, setLikes] = useState(orb.likes);
  const [hasLiked, setHasLiked] = useState(false); 
  const hoverCardRef = useRef(null); 

  const handleImageClick = (e) => {
    e.stopPropagation();
  
    if (orb.link) {
      window.location.href = orb.link;
    }
  };

  useEffect(() => {
    let canSwitch = true; 
  
    const interval = setInterval(() => {
      const hoverCardPosition = hoverCardRef.current.getBoundingClientRect();
      if (window.innerWidth <= 768) { 
        if (canSwitch && hoverCardPosition.right > window.innerWidth) {
          hoverCardRef.current.style.transition = 'transform 3s'; 
          hoverCardRef.current.style.transform = `translateX(-100%)`;
          canSwitch = false; 
          setTimeout(() => {
            canSwitch = true; 
          }, 7000);
        } else if (canSwitch && hoverCardPosition.left < 0) {
          hoverCardRef.current.style.transition = 'transform 3s'; 
          hoverCardRef.current.style.transform = `translateX(0)`;
          canSwitch = false; 
          setTimeout(() => {
            canSwitch = true; 
          }, 8000);
        }
      }
    }, 100); 
  
    return () => clearInterval(interval);
  }, []);

  const handleLike = (e) => {
    e.stopPropagation(); 
    setHasLiked(!hasLiked);
    setLikes(likes + (hasLiked ? -1 : 1));
  };
  

  return (
    <div 
      ref={hoverCardRef}
      className={`absolute max-w-md p-4 bg-gray-800 rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 text-white`} 
      style={{ zIndex: 1000 }}
     
    >
      {(activeOrb === null || activeOrb === orb) && (
        <>
          <div 
            style={{ width: '224px', height: '150px', position: 'relative' }}
            onClick={handleImageClick} 
          >
            <Image
              src={orb.image}
              alt={orb.headline}
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full rounded-t-lg"
              priority
            />
            <h3 className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 ${orb.headline.length > 20 ? 'text-base' : 'text-lg'}`}>{orb.headline}</h3>
          </div>
          {orb.isAd && <p className={`mt-2 ${orb.text.length > 50 ? 'text-xs' : 'text-sm'}`}>{orb.text}</p>}
          {!orb.isAd && (
            <div className="flex justify-between mt-4">
              <button className="text-gray-400 flex items-center">
                <BiCommentDetail style={{ fontSize: '20px' }} />
                <span className="ml-2">{orb.comments}</span> 
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
            )}
        </>
      )}
    </div>
  );
}