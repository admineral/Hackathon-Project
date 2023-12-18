// app/page.tsx
"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import OrbitAnimation from '../components/Blackhole/Orbit_Component'; 
import RoadmapList from '../components/Roadmap/RoadmapList_Component'; 
import EditorPicks from '../components/Editor_Picks/EditorPicks_Component'; 
import TopAuthors from '../components/Top_Authors/TopAuthors_Component'; 
import MapBox from '../components/Map/Map_Component';

export default function Home() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  
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
        <OrbitAnimation />
      </div>
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-start items-start w-full`}>
        <div className="w-full pl-4 md:flex md:space-x-4">
          <div className="w-full md:w-1/3" style={{ minWidth: '200px' }}>
            <TopAuthors />
          </div>
          <div className="w-full md:w-2/3">
            <EditorPicks />
          </div>
        </div>
      </div>
      <RoadmapList />
      <div style={{ height: '500px', width: '100%' }}> {/* Container with specific height and width */}
        <MapBox />
      </div>
    </>
  );
}