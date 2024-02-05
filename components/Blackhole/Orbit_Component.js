"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Orbit from './Components/Orbit';
import { mapArticlesToOrbs, orbits } from './Components/orbsData';
import { fetchAndCacheArticles } from '../../Data/articlesData';


export default function OrbitAnimation() {
  const [orbsData, setOrbsData] = React.useState([[], [], []]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const articles = await fetchAndCacheArticles(); 
        const mappedOrbs = mapArticlesToOrbs(articles);
        setOrbsData(mappedOrbs);
      } catch (error) {
        console.error('Error loading and processing articles:', error);
      }
    }

    fetchData();
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