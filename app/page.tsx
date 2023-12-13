// app/page.tsx
"use client"
import Header from './LandingPage_Components/Header';
import OrbitAnimation from './Orbit_Components/OrbitAnimation';
import orbsData from './Orbit_Components/orbsData';
import RoadmapList from './Roadmap/page';
import EditorPicks from './Editor_Picks/page'; 
import TopAuthors from './Top_Autors/page';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const orbits = [55, 110, 180];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
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