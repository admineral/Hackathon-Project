"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Orbit from './Components/Orbit';
import { mapArticlesToOrbs, orbits } from './Components/orbsData'; 
import fetchAndCacheArticles from '../../Data/articlesData'; 

export default function OrbitAnimation() {
  const [orbsData, setOrbsData] = useState([[], [], []]); 

  useEffect(() => {
    const loadAndProcessArticles = async () => {
      try {
        const articles = await fetchAndCacheArticles(); 
        const generatedOrbsData = mapArticlesToOrbs(articles);
        setOrbsData(generatedOrbsData); 
      } catch (error) {
        console.error('Fehler beim Laden und Verarbeiten der Artikel:', error);
      }
    };

    loadAndProcessArticles();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <div className="relative w-10 h-10 bg-black rounded-full" style={{ margin: 'auto' }}>
        {orbits.map((size, index) => (
          <Orbit
            key={index}
            size={size}
            index={index}
            totalOrbits={orbits.length}
            orbs={orbsData[index]} 
          />
        ))}
      </div>
    </motion.div>
  );
}