// app/page.tsx
"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import OrbitAnimation from '../components/Blackhole/Orbit_Component'; 
import RoadmapList from '../components/Roadmap/RoadmapList_Component'; 
import EditorPicks from '../components/Editor_Picks/EditorPicks_Component'; 
import TopAuthors from '../components/Top_Authors/TopAuthors_Component'; 

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
      <div className="flex flex-col justify-start items-start">
        <div className="w-full">
          <EditorPicks />
        </div>
        <div>
          <TopAuthors />
        </div>
      </div>
      <RoadmapList />
    </>
  );
}