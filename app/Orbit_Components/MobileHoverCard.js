import React from 'react';
import Image from 'next/image';
import { BiCommentDetail } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function MobileHoverCard({ orb, handleLike, hasLiked, likes }) {
  return (
    <motion.div 
      className="fixed bottom-0 w-full h-[33.33vh] bg-gray-800 p-4 overflow-y-scroll transition-transform duration-500 transform translate-y-full"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
    >
      <div style={{ width: '224px', height: '150px', position: 'relative' }}>
        <Image
          src={orb.image}
          alt={orb.headline}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full rounded-t-lg"
        />
      </div>
      <h3 className={`font-bold mt-4 ${orb.headline.length > 20 ? 'text-base' : 'text-lg'}`}>{orb.headline}</h3>
      <p className={`mt-2 ${orb.text.length > 50 ? 'text-xs' : 'text-sm'}`}>{orb.text}</p>
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
    </motion.div>
  );
}