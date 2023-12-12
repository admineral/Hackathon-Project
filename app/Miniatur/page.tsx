"use client"


import React, { useState } from 'react';
import { BiCommentDetail } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

function WoodenSkyscraper() {
    const [isRocketClicked, setRocketClicked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);

    const handleRocketClick = () => {
        setRocketClicked(!isRocketClicked);
        setLikes(likes + 1);
    };

    return (
        <div className="bg-gray-800 rounded-lg p-4 max-w-sm mx-auto my-8 overflow-hidden">
            <img
                className="w-full h-full object-cover rounded-t-lg"
                src="/Bild1.png"
                alt="Complex wooden skyscraper structure with multiple balconies, set against a sunset background"
            />
            <div className="text-white mt-4">
                <h2 className="text-xl font-medium">Wolkenkratzer aus Holz</h2>
                <p className="mt-2">Feuerbeständige Wolkenkratzer aus Holzwerkstoffen als ökologischere Alternative zu Betongebäuden.</p>
                <div className="flex justify-between mt-4">
                    <button className="text-gray-400 flex items-center">
                        <BiCommentDetail style={{ fontSize: '20px' }} />
                        <span className="ml-2">{comments}</span>
                    </button>
                    <motion.button 
                        className={`border border-gray-400 rounded-lg px-3 py-1 flex items-center ${isRocketClicked ? 'bg-blue-300 text-black' : 'text-gray-400'}`}
                        onClick={handleRocketClick}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            animate={isRocketClicked ? { x: [0, 15, -15, 0], y: [0, -15, 15, 0], opacity: [1, 0, 0, 1] } : {}}
                            transition={{ duration: 1, times: [0, 0.2, 0.8, 1], loop: Infinity }}
                        >
                            <IoRocketOutline/>
                        </motion.div>
                        <span className="ml-2">{likes}</span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default WoodenSkyscraper;