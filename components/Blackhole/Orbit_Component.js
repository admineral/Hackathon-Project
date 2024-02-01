"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Orbit from './Components/Orbit';
import { mapArticlesToOrbs, orbits } from './Components/orbsData'; // Importieren Sie nur die Funktion und die Orbitgrößen
import fetchAndCacheArticles from '../../Data/articlesData'; // Pfad anpassen

export default function OrbitAnimation() {
  const [orbsData, setOrbsData] = useState([[], [], []]); // Initialer Zustand für orbsData

  useEffect(() => {
    const loadAndProcessArticles = async () => {
      try {
        const articles = await fetchAndCacheArticles(); // Laden der Artikel
        const generatedOrbsData = mapArticlesToOrbs(articles); // Generieren von orbsData basierend auf den Artikeln
        setOrbsData(generatedOrbsData); // Aktualisieren des Zustands mit den generierten Daten
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
            orbs={orbsData[index]} // Verwenden Sie den aktualisierten Zustand von orbsData
          />
        ))}
      </div>
    </motion.div>
  );
}