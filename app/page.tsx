// app/page.tsx
"use client"
import React from 'react';
import Header from '../components/layout/Header';
import OrbitAnimation from './Orbit_Components/OrbitAnimation';
import orbsData from './Orbit_Components/orbsData';
import RoadmapList from './Reddit_Posts/page';
import EditorPicks from './Editor_Picks/page'; 
import TopAuthors from './Top_Autors/page';
import useMediaQuery from '../lib/hooks/use-media-query'; // import the hook

export default function Home() {
  const orbits = [55, 110, 180];
  const { isMobile } = useMediaQuery(); // use the hook

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <OrbitAnimation orbits={orbits} orbsData={orbsData} />
      </div>
      <EditorPicks />
      <div style={{ display: 'flex', alignSelf: 'flex-start', marginLeft: isMobile ? '0px' : '100px' }}>
        <TopAuthors />
      </div>
      <RoadmapList />
    </>
  );
}