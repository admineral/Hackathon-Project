"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Orbit from './Components/Orbit';
import { mapArticlesToOrbs, orbits } from './Components/orbsData';
import { fetchAndCacheArticles } from '../../Data/articlesData';

export default function OrbitAnimation() {
  const [orbsData, setOrbsData] = useState([[], [], []]);
  const [isAutomatic, setIsAutomatic] = useState(true);
  const automaticDisplayTimer = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const articles = await fetchAndCacheArticles();
      const mappedOrbs = mapArticlesToOrbs(articles);
      setOrbsData(mappedOrbs);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Setup the automatic display if it's enabled
    if (isAutomatic) {
      const showRandomHoverCard = () => {
        // Logic to show a random hover card
        const orbs = document.querySelectorAll('.orb');
        orbs.forEach(orb => {
          const hoverCard = orb.querySelector('.hover-card');
          if (hoverCard) {
            hoverCard.classList.remove('show');
          }
        });

        if (orbs.length > 0) {
          const randomIndex = Math.floor(Math.random() * orbs.length);
          const selectedOrb = orbs[randomIndex];
          const hoverCard = selectedOrb.querySelector('.hover-card');
          if (hoverCard) {
            hoverCard.classList.add('show');
          }
        }
      };

      showRandomHoverCard();
      const intervalId = setInterval(showRandomHoverCard, 10000);

      return () => clearInterval(intervalId);
    }
  }, [isAutomatic]);

  const toggleAutomaticMode = () => {
    setIsAutomatic(!isAutomatic); // Toggle the automatic mode
  
    // If turning off the automatic mode, also hide any visible hover cards
    if (isAutomatic) {
      const visibleHoverCards = document.querySelectorAll('.hover-card.show');
      visibleHoverCards.forEach(card => {
        card.classList.remove('show');
      });
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }} style={{ position: 'relative', zIndex: 30 }}>
      <div className="relative w-full h-full bg-black rounded-full" style={{ margin: 'auto' }}>
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
      <button onClick={toggleAutomaticMode} className="fixed bottom-5 right-5 z-50 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none rounded-lg px-3 py-1.5 text-xs font-medium leading-tight uppercase shadow-sm transition duration-150 ease-in-out transform hover:scale-105">
  {isAutomatic ? 'Off' : 'On'}
</button>
    </motion.div>
  );
}