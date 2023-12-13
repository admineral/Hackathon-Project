// app/page.tsx
"use client"
import React, { useEffect, useState } from 'react';
import Header from './LandingPage_Components/Header';
import OrbitAnimation from './Orbit_Components/OrbitAnimation';
import orbsData from './Orbit_Components/orbsData';
import RoadmapList from './Roadmap/page';
import EditorPicks from './Editor_Picks/page'; 
import TopAuthors from './Top_Autors/page';

export default function Home() {
  const orbits = [55, 110, 180];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <OrbitAnimation orbits={orbits} orbsData={orbsData} />
      </div>
      <EditorPicks />
      <div style={{ display: 'flex', alignSelf: 'flex-start', marginLeft: isMobile ? '0px' : '150px' }}>
        <TopAuthors />
      </div>
      <RoadmapList />
    </>
  );
}