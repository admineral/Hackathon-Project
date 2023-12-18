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
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex w-full pl-4"> {/* Added left padding to the parent div */}
          <div className="w-1/3" style={{ minWidth: '200px' }}> {/* Set a minimum width for TopAuthors */}
            <TopAuthors />
          </div>
          <div className="flex-grow" style={{ maxWidth: 'calc(100% - 450px)' }}> {/* Allow EditorPicks to grow but not beyond the remaining space */}
            <EditorPicks />
          </div>
        </div>
      </div>
      <RoadmapList />
    </>
  );
}